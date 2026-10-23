
import Icon from "@/components/Icon/Icon";

interface IntroProps {
  onRead: () => void;
  loading?: boolean;
}

export default function Intro({ onRead, loading = false }: Readonly<IntroProps>) {
  return (
    <section className="intro">
      <div className="intro-icon">
        <Icon name="book" />
      </div>

      <p className="eyebrow">YOUR READING ASSISTANT</p>
      <h1>Get the big picture.</h1>

      <p className="description">
        Understand any webpage without reading every word. Briefly finds the
        signal, then gets out of your way.
      </p>

      <button
        className="read-button"
        type="button"
        onClick={onRead}
        disabled={loading}
      >
        <Icon name="sparkle" />
        Read this page
      </button>

      <p className="intro-note">
        A quick overview, organized sections, and useful links.
      </p>
    </section>
  );
}
