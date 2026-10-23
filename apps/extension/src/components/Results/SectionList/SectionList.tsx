
import Icon from "@/components/Icon/Icon";

import type { PageSection } from "@/types/pageReader";

interface SectionListProps {
  sections: PageSection[];
  totalSections: number;
  query: string;
  onQueryChange: (query: string) => void;
  onSectionClick: (section: PageSection) => void;
}

export default function SectionList({
  sections,
  totalSections,
  query,
  onQueryChange,
  onSectionClick,
}: Readonly<SectionListProps>   ) {
  if (totalSections === 0) return null;

  return (
    <section className="content-section">
      <div className="section-heading">
        <h2>On this page</h2>
        <span>
          {sections.length} {sections.length === 1 ? "section" : "sections"}
        </span>
      </div>

      <label className="search-field">
        <Icon name="search" />
        <input
          type="search"
          value={query}
          onChange={(event) => onQueryChange(event.target.value)}
          placeholder="Find something in this page..."
          aria-label="Search page sections"
        />

        {query && (
          <button
            type="button"
            className="clear-search"
            onClick={() => onQueryChange("")}
            aria-label="Clear search"
          >
            <Icon name="close" />
          </button>
        )}
      </label>

      <div className="section-list">
        {sections.map((section, index) => (
          <button
            className={`section-item level-${section.level}`}
            key={`${section.tagName}-${section.title}-${section.occurrence}-${index}`}
            type="button"
            onClick={() => onSectionClick(section)}
            title={`Scroll to ${section.title}`}
          >
            <span className="section-marker">#</span>
            <span>{section.title}</span>
          </button>
        ))}

        {sections.length === 0 && (
          <p className="empty-search">No matching sections found.</p>
        )}
      </div>
    </section>
  );
}
