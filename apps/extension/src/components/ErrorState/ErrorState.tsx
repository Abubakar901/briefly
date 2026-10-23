
import Icon from "@/components/Icon/Icon";

interface ErrorStateProps {
  error: string;
  onRetry: () => void;
}

export default function ErrorState({ error, onRetry }: Readonly<ErrorStateProps>) {
  return (
    <section className="error-state" role="alert">
      <div className="error-icon">
        <Icon name="alert" />
      </div>

      <p className="eyebrow error-eyebrow">SOMETHING WENT WRONG</p>
      <h1>We couldn’t read this page.</h1>
      <p className="error-description">{error}</p>

      <button
        className="read-button secondary-button"
        type="button"
        onClick={onRetry}
      >
        Try again
      </button>
    </section>
  );
}
