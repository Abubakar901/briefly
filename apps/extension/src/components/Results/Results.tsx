
import Icon from "@/components/Icon/Icon";
import Overview from "@/components/Results/Overview/Overview";
import SectionList from "@/components/Results/SectionList/SectionList";
import KeyLinks from "@/components/Results/KeyLinks/KeyLinks";
import ExtractedArticle from "@/components/Results/ExtractedArticle/ExtractedArticle";
import type { PageContent, PageSection } from "@/types/pageReader";

interface ResultsProps {
  page: PageContent;
  summary: string;
  error: string;
  query: string;
  filteredSections: PageSection[];
  articleExpanded: boolean;
  onQueryChange: (query: string) => void;
  onArticleToggle: () => void;
  onRefresh: () => void;
  onSectionClick: (section: PageSection) => void;
}

export default function Results({
  page,
  summary,
  error,
  query,
  filteredSections,
  articleExpanded,
  onQueryChange,
  onArticleToggle,
  onRefresh,
  onSectionClick,
}: ResultsProps) {
  return (
    <section className="results">
      <div className="result-heading">
        <div className="result-title-wrap">
          <p className="eyebrow">YOUR QUICK OVERVIEW</p>
          <h1>{page.title}</h1>
        </div>

        <button
          className="icon-button"
          type="button"
          onClick={onRefresh}
          aria-label="Refresh overview"
          title="Refresh overview"
        >
          <Icon name="refresh" />
        </button>
      </div>

      <Overview summary={summary} />

      {error && (
        <div className="inline-error" role="alert">
          <Icon name="alert" />
          <div>
            <p>{error}</p>
            <button type="button" onClick={onRefresh}>
              Try again
            </button>
          </div>
        </div>
      )}

      <SectionList
        sections={filteredSections}
        totalSections={page.sections.length}
        query={query}
        onQueryChange={onQueryChange}
        onSectionClick={onSectionClick}
      />

      <KeyLinks links={page.links} />

      <ExtractedArticle
        text={page.text}
        expanded={articleExpanded}
        onToggle={onArticleToggle}
      />
    </section>
  );
}
