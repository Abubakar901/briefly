    
import Icon from "@/components/Icon/Icon";

import type { LoadingStage, LoadingStep } from "@/types/pageReader";

const loadingSteps: LoadingStep[] = [
  { id: "reading", label: "Reading the page" },
  { id: "summarizing", label: "Preparing your overview" },
  { id: "organizing", label: "Organizing the page" },
];

interface LoadingStepsProps {
  stage: LoadingStage;
}

export default function LoadingSteps({ stage }: Readonly<LoadingStepsProps>) {
  const current = loadingSteps.findIndex((step) => step.id === stage);

  return (
    <div className="loading-steps">
      {loadingSteps.map((step, index) => {
        const complete = index < current;
        const active = step.id === stage;

        return (
          <div
            className={`loading-step${active ? " is-active" : ""}${complete ? " is-complete" : ""}`}
            key={step.id}
          >
            <span className="step-indicator">
              {complete ? (
                <Icon name="check" />
              ) : active ? (
                <Icon name="spinner" className="spinner-icon" />
              ) : (
                index + 1
              )}
            </span>
            <span>{step.label}</span>
          </div>
        );
      })}
    </div>
  );
}
