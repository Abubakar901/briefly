
import Icon from "@/components/Icon/Icon";

interface ExtractedArticleProps {
  text: string;
  expanded: boolean;
  onToggle: () => void;
}

export default function ExtractedArticle({
  text,
  expanded,
  onToggle,
}: Readonly<ExtractedArticleProps>) {
  return (
    <section className="article-text">
      <button
        className="article-toggle"
        type="button"
        onClick={onToggle}
        aria-expanded={expanded}
      >
        <span className="article-toggle-label">
          <Icon name="document" />
          View extracted article text
        </span>

        <Icon
          name="chevron"
          className={expanded ? "chevron-icon is-expanded" : "chevron-icon"}
        />
      </button>

      {expanded && <div className="article-body">{text}</div>}
    </section>
  );
}
