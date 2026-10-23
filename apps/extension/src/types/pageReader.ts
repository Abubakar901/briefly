
export type LoadingStage = "reading" | "summarizing" | "organizing";

export interface KeyLink {
  title: string;
  url: string;
}

export interface PageSection {
  title: string;
  level: number;
  id: string;
  tagName: string;
  occurrence: number;
}

export interface PageContent {
  title: string;
  text: string;
  sections: PageSection[];
  links: KeyLink[];
}

export interface SummaryResponse {
  summary?: string;
  error?: string;
}

export interface LoadingStep {
  id: LoadingStage;
  label: string;
}
