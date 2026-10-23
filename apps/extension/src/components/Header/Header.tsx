
import Icon from "@/components/Icon/Icon";

interface HeaderProps {
  hasPage: boolean;
  loading: boolean;
  onRefresh: () => void;
}

export default function Header({
  hasPage,
  loading,
  onRefresh,
}: Readonly<HeaderProps>) {
  return (
    <header className="header">
      <div className="brand">
        <span className="brand-icon">B</span>
        <span className="brand-copy">
          <span className="brand-name">briefly</span>
          <span className="tagline">Understand more. Read less.</span>
        </span>
      </div>

      {hasPage && (
        <button
          className="icon-button"
          type="button"
          onClick={onRefresh}
          disabled={loading}
          aria-label="Read this page again"
          title="Read this page again"
        >
          <Icon name="refresh" />
        </button>
      )}
    </header>
  );
}
