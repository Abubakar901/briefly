
import { Readability } from "@mozilla/readability";

const article = new Readability(document.cloneNode(true) as Document).parse();

const result = {
  title: article?.title || document.title,
  text: article?.textContent?.trim() || "",
  sections: Array.from(document.querySelectorAll("h1, h2, h3")).map(
    (heading) => ({
      title: heading.textContent?.trim() || "",
      level: Number(heading.tagName.substring(1)),
    }),
  ),
};

chrome.runtime.sendMessage({
  type: "PAGE_CONTENT",
  payload: result,
});
