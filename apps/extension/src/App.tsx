
import "./App.css";

import Header from "@/components/Header/Header";
import Intro from "@/components/Intro/Intro";
import LoadingState from "@/components/Loading/LoadingState/LoadingState";
import ErrorState from "@/components/ErrorState/ErrorState";
import Results from "@/components/Results/Results";

import { usePageReader } from "@/hooks/usePageReader";

function App() {
  const reader = usePageReader();

  return (
    <main className="briefly">
      <Header
        hasPage={Boolean(reader.page)}
        loading={reader.loading}
        onRefresh={reader.readCurrentPage}
      />

      {!reader.page && !reader.loading && !reader.error && (
        <Intro onRead={reader.readCurrentPage} />
      )}

      {reader.loading && <LoadingState stage={reader.stage} />}

      {reader.error && !reader.loading && !reader.page && (
        <ErrorState
          error={reader.error}
          onRetry={reader.readCurrentPage}
        />
      )}

      {reader.page && !reader.loading && (
        <Results
          page={reader.page}
          summary={reader.summary}
          error={reader.error}
          query={reader.query}
          filteredSections={reader.filteredSections}
          articleExpanded={reader.articleExpanded}
          onQueryChange={reader.setQuery}
          onArticleToggle={() =>
            reader.setArticleExpanded((expanded) => !expanded)
          }
          onRefresh={reader.readCurrentPage}
          onSectionClick={reader.scrollToSection}
        />
      )}
    </main>
  );
}

export default App;
