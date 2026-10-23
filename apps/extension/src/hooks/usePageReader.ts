
import { useMemo, useState } from "react";
import type {
  KeyLink,
  LoadingStage,
  PageContent,
  PageSection,
  SummaryResponse,
} from "../types/pageReader";

export function usePageReader() {
  const [page, setPage] = useState<PageContent | null>(null);
  const [summary, setSummary] = useState("");
  const [loading, setLoading] = useState(false);
  const [pageTabId, setPageTabId] = useState<number | null>(null);
  const [stage, setStage] = useState<LoadingStage>("reading");
  const [error, setError] = useState("");
  const [query, setQuery] = useState("");
  const [articleExpanded, setArticleExpanded] = useState(false);

  const filteredSections = useMemo(() => {
    const term = query.trim().toLowerCase();

    if (!term) return page?.sections ?? [];

    return (page?.sections ?? []).filter((section) =>
      section.title.toLowerCase().includes(term),
    );
  }, [page, query]);

  async function scrollToSection(section: PageSection) {
    if (pageTabId === null) return;

    try {
      await chrome.scripting.executeScript({
        target: { tabId: pageTabId },
        func: ({ id, tagName, title, occurrence }) => {
          const normalize = (value: string | null | undefined) =>
            (value ?? "").replace(/\s+/g, " ").trim().toLowerCase();

          let target: Element | null = id
            ? document.getElementById(id)
            : null;

          if (
            !target ||
            !/^H[1-4]$/.test(target.tagName) ||
            normalize(target.textContent) !== normalize(title)
          ) {
            const matches = Array.from(
              document.querySelectorAll("h1, h2, h3, h4"),
            ).filter(
              (heading) =>
                heading.tagName.toLowerCase() === tagName &&
                normalize(heading.textContent) === normalize(title),
            );

            target = matches[occurrence] ?? null;
          }

          if (!target) throw new Error("Section not found");

          const element = target as HTMLElement;
          const top =
            element.getBoundingClientRect().top + window.scrollY - 80;

          window.scrollTo({
            top: Math.max(0, top - 40),
            behavior: "smooth",
          });

          const previousOutline = element.style.outline;
          const previousOffset = element.style.outlineOffset;

          element.style.outline = "2px solid #8b5cf6";
          element.style.outlineOffset = "4px";

          window.setTimeout(() => {
            element.style.outline = previousOutline;
            element.style.outlineOffset = previousOffset;
          }, 1800);
        },
        args: [{
          id: section.id,
          tagName: section.tagName,
          title: section.title,
          occurrence: section.occurrence,
        }],
      });
    } catch {
      setError(
        "Couldn't navigate to that section. Try reading the page again.",
      );
    }
  }

  async function readCurrentPage() {
    setLoading(true);
    setStage("reading");
    setError("");
    setQuery("");
    setArticleExpanded(false);
    setSummary("");

    try {
      const [tab] = await chrome.tabs.query({
        active: true,
        lastFocusedWindow: true,
      });

      if (tab?.id === undefined || !tab.url?.startsWith("http")) {
        throw new Error("Open a regular webpage first.");
      }

      const results = await chrome.scripting.executeScript({
        target: { tabId: tab.id },
        func: () => ({
          html: document.documentElement.outerHTML,
          title: document.title,
          url: window.location.href,
        }),
      });

      const source = results[0]?.result;

      if (!source?.html) {
        throw new Error("Could not access this webpage.");
      }

      const doc = new DOMParser().parseFromString(source.html, "text/html");
      const normalizeText = (value: string | null | undefined) =>
        (value ?? "").replace(/\s+/g, " ").trim();

      const normalizeUrl = (href: string, baseUrl: string) => {
        const url = new URL(href, baseUrl);

        if (!["http:", "https:"].includes(url.protocol)) return null;

        for (const key of [...url.searchParams.keys()]) {
          if (
            key.startsWith("utm_") ||
            ["gclid", "fbclid", "mc_cid", "mc_eid"].includes(key)
          ) {
            url.searchParams.delete(key);
          }
        }

        url.hash = "";
        return url;
      };

      // Collect links before removing navigation and other page chrome.
      const linkMap = new Map<string, KeyLink>();
      const ignoredLabels = new Set([
        "skip to main content",
        "skip to content",
        "skip to search",
        "menu",
        "close",
        "back to top",
      ]);
      const currentUrl = new URL(source.url);
      currentUrl.hash = "";

      doc.querySelectorAll<HTMLAnchorElement>("a[href]").forEach((anchor) => {
        if (
          anchor.closest(
            'nav, header, footer, [role="navigation"], [role="menu"], [role="banner"], [role="contentinfo"]',
          ) ||
          anchor.closest('[hidden], [inert], [aria-hidden="true"]')
        ) {
          return;
        }

        const title = normalizeText(anchor.innerText || anchor.textContent);
        const href = anchor.getAttribute("href");

        if (
          !title ||
          title.length < 3 ||
          ignoredLabels.has(title.toLowerCase()) ||
          !href ||
          href.startsWith("#")
        ) {
          return;
        }

        try {
          const url = normalizeUrl(href, source.url);
          if (!url || url.href === currentUrl.href) return;

          const existing = linkMap.get(url.href);
          if (!existing || title.length > existing.title.length) {
            linkMap.set(url.href, { title, url: url.href });
          }
        } catch {
          // Ignore malformed links.
        }
      });

      // Remove page chrome and elements that are not useful article content.
      doc.querySelectorAll([
        "nav", "header", "footer", "aside",
        '[role="navigation"]', '[role="menu"]',
        '[role="banner"]', '[role="contentinfo"]',
        "script", "style", "noscript", "template", "iframe",
        "form", "button", "input", "select", "textarea",
        "svg", "canvas", "dialog",
        "[hidden]", "[inert]", '[aria-hidden="true"]',
        '[role="広告"]', ".advertisement", ".advertising",
        ".cookie-banner", ".newsletter-signup",
      ].join(",")).forEach((element) => element.remove());

      doc.querySelectorAll<HTMLElement>("*").forEach((element) => {
        const style = element.getAttribute("style") || "";

        if (
          /display\s*:\s*none/i.test(style) ||
          /visibility\s*:\s*hidden/i.test(style) ||
          /content-visibility\s*:\s*hidden/i.test(style)
        ) {
          element.remove();
        }
      });

      // Preserve anchor text without keeping the link wrappers.
      doc.querySelectorAll("a").forEach((anchor) => {
        anchor.replaceWith(...Array.from(anchor.childNodes));
      });

      const textBlocks: string[] = [];
      const seenBlocks = new Set<string>();
      const sections: PageSection[] = [];
      const headingOccurrences = new Map<string, number>();

      const contentSelectors = [
        "h1", "h2", "h3", "h4",
        "p", "li", "pre", "blockquote", "td", "th",
      ].join(",");

      const isTableOfContents = (element: Element) =>
        Boolean(element.closest([
          "nav",
          '[role="navigation"]',
          '[aria-label*="table of contents" i]',
          '[aria-label*="on this page" i]',
          "#toc",
          "#table-of-contents",
          ".table-of-contents",
          ".toc",
        ].join(",")));

      doc.body.querySelectorAll<HTMLElement>(contentSelectors).forEach(
        (element) => {
          const text = normalizeText(element.textContent);
          if (!text) return;

          const isHeading = /^H[1-4]$/.test(element.tagName);

          if (isHeading) {
            const tagName = element.tagName.toLowerCase();
            const occurrenceKey = `${tagName}:${text.toLowerCase()}`;
            const occurrence = headingOccurrences.get(occurrenceKey) ?? 0;

            headingOccurrences.set(occurrenceKey, occurrence + 1);

            sections.push({
              title: text,
              level: Number(element.tagName.substring(1)),
              id: element.id,
              tagName,
              occurrence,
            });
          }

          if (isTableOfContents(element)) return;

          if (/^(skip to (main )?content|skip to search|back to top)$/i.test(text)) {
            return;
          }

          const key = text.toLowerCase();
          if (seenBlocks.has(key)) return;

          seenBlocks.add(key);
          textBlocks.push(text);
        },
      );

      const content: PageContent = {
        title: source.title || doc.title || "Untitled page",
        text: textBlocks.join("\n\n"),
        sections,
        links: Array.from(linkMap.values()).slice(0, 10),
      };

      if (!content.text.trim()) {
        throw new Error("No readable text was found on this page.");
      }

      setPageTabId(tab.id);
      setPage(content);
      setStage("summarizing");

      let response: Response;

      try {
        response = await fetch("http://localhost:3000/api/summarize", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            title: content.title,
            content: content.text,
          }),
        });
      } catch {
        throw new Error(
          "Could not connect to Briefly. Check that the server is running.",
        );
      }

      let data: SummaryResponse;

      try {
        data = (await response.json()) as SummaryResponse;
      } catch {
        throw new Error("Briefly received an invalid response from the server.");
      }

      if (!response.ok) {
        throw new Error(
          data.error || `Summary request failed (${response.status}).`,
        );
      }

      if (typeof data.summary !== "string" || !data.summary.trim()) {
        throw new Error("The AI returned an empty overview. Please try again.");
      }

      setStage("organizing");
      setSummary(data.summary.trim());
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Something went wrong while reading this page.",
      );
    } finally {
      setLoading(false);
    }
  }

  return {
    page,
    summary,
    loading,
    pageTabId,
    stage,
    error,
    query,
    articleExpanded,
    filteredSections,
    setQuery,
    setArticleExpanded,
    readCurrentPage,
    scrollToSection,
  };
}
