
import Icon from "@/components/Icon/Icon";
import LoadingSteps from "@/components/Loading/LoadingSteps/LoadingSteps";

import type { LoadingStage } from "@/types/pageReader";

interface LoadingStateProps {
  stage: LoadingStage;
}

export default function LoadingState({ stage }: Readonly<LoadingStateProps>) {
  const messages: Record<LoadingStage, { title: string; description: string }> = {
    reading: {
      title: "Let's get the gist.",
      description: "Briefly is finding the main content on this page.",
    },
    summarizing: {
      title: "Finding the signal.",
      description: "The AI is preparing a concise overview.",
    },
    organizing: {
      title: "Putting it together.",
      description: "Your overview is ready. Finishing up.",
    },
  };

  const message = messages[stage];

  return (
    <section className="loading-state" aria-live="polite">
      <div className="loading-icon">
        <Icon name="spinner" className="spinner-icon" />
      </div>

      <p className="eyebrow">MAKING SENSE OF THIS PAGE</p>
      <h1>{message.title}</h1>
      <p className="loading-description">{message.description}</p>

      <LoadingSteps stage={stage} />

      <p className="loading-footnote">
        This usually takes a few seconds.
      </p>
    </section>
  );
}
