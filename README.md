
# Briefly

**Understand more. Read less.**

Briefly is a webpage-reading assistant that helps people understand long webpages without reading every word. It extracts readable content, generates an AI-powered overview, organizes page headings into navigable sections, and surfaces useful links.

The goal is simple: help people understand the big picture first, then dive deeper into the parts that matter.

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [How It Works](#how-it-works)
- [Project Structure](#project-structure)
- [Technology Stack](#technology-stack)
- [Getting Started](#getting-started)
- [Environment Variables](#environment-variables)
- [API Reference](#api-reference)
- [Development](#development)
- [Security](#security)
- [Roadmap](#roadmap)
- [Contributing](#contributing)
- [License](#license)

## Overview

Reading long webpages can be time-consuming, especially when you only need to understand the main ideas or find a specific section.

Briefly makes this easier by transforming a webpage into a more approachable reading experience.

Instead of replacing the original content, Briefly gives readers a quick overview and helps them navigate directly to the information they need.

## Features

- **AI-powered overview:** Understand the main ideas of a webpage through a concise summary.
- **Content extraction:** Extract readable text and remove common navigation elements and page clutter.
- **Section navigation:** Browse extracted headings and navigate to their matching locations on the original webpage.
- **Section search:** Find relevant headings without manually scanning the entire page.
- **Key links:** Collect useful links from the webpage in one place.
- **Extracted article:** Expand the extracted text when more detail is needed.
- **Loading feedback:** Follow the reading, summarizing, and organizing stages.
- **Error handling:** Display helpful messages when extraction or summarization fails.

## How It Works

1. The user opens Briefly on a webpage.
2. The extension accesses the active tab and extracts its HTML.
3. The document is parsed to identify readable text, headings, and useful links.
4. Common page elements, such as navigation and scripts, are removed from the extracted document.
5. The extracted title and text are sent to the backend summarization API.
6. The backend generates an overview using the configured AI service.
7. Briefly displays the overview, navigable sections, key links, and extracted text.

### Architecture

```text
Webpage
   |
   v
Chrome Extension
   |
   v
Content Extraction
   |
   +----> Page Sections
   |
   +----> Key Links
   |
   +----> Extracted Text
   |
   v
Backend API
   |
   v
AI Summarization
   |
   v
Briefly Results Interface
```

## Project Structure

Briefly uses a monorepo to organize the browser extension, backend, and marketing website.

```text
briefly/
├── apps/
│   ├── extension/
│   ├── server/
│   └── website/
├── package.json
├── package-lock.json
└── README.md
```

### Browser Extension

Location: `apps/extension/`

The extension handles webpage extraction, section navigation, API communication, and the user interface.

```text
apps/extension/
└── src/
    ├── components/
    │   ├── Header.tsx
    │   ├── Intro/
    │   │   └── Intro.tsx
    │   ├── Loading/
    │   │   ├── LoadingState/
    │   │   │   └── LoadingState.tsx
    │   │   └── LoadingSteps/
    │   │       └── LoadingSteps.tsx
    │   ├── Results/
    │   │   ├── Results.tsx
    │   │   ├── Overview/
    │   │   │   └── Overview.tsx
    │   │   ├── SectionList/
    │   │   │   └── SectionList.tsx
    │   │   ├── KeyLinks/
    │   │   │   └── KeyLinks.tsx
    │   │   └── ExtractedArticle/
    │   │       └── ExtractedArticle.tsx
    │   ├── ErrorState/
    │   │   └── ErrorState.tsx
    │   └── Icon/
    │       └── Icon.tsx
    ├── hooks/
    │   └── usePageReader.ts
    ├── types/
    │   └── pageReader.ts
    ├── App.tsx
    └── App.css
```

### File Responsibilities

| File | Responsibility |
|---|---|
| `src/App.tsx` | Connects application state and UI components. |
| `src/App.css` | Styles the extension interface. |
| `src/components/Header.tsx` | Displays branding and the refresh action. |
| `src/components/Intro/Intro.tsx` | Displays the welcome screen and read-page action. |
| `src/components/Loading/LoadingState/LoadingState.tsx` | Displays processing messages and loading feedback. |
| `src/components/Loading/LoadingSteps/LoadingSteps.tsx` | Displays progress through the reading stages. |
| `src/components/Results/Results.tsx` | Composes the results interface. |
| `src/components/Results/Overview/Overview.tsx` | Displays the AI-generated overview. |
| `src/components/Results/SectionList/SectionList.tsx` | Displays searchable headings and section-navigation controls. |
| `src/components/Results/KeyLinks/KeyLinks.tsx` | Displays useful links extracted from the webpage. |
| `src/components/Results/ExtractedArticle/ExtractedArticle.tsx` | Displays the expandable extracted text. |
| `src/components/ErrorState/ErrorState.tsx` | Displays full-screen errors and retry actions. |
| `src/components/Icon/Icon.tsx` | Provides reusable SVG icons. |
| `src/hooks/usePageReader.ts` | Manages reading state, browser APIs, content extraction, section navigation, and API requests. |
| `src/types/pageReader.ts` | Defines shared TypeScript types and data contracts for the page reader. |

### Backend

Location: `apps/server/`

The backend receives summarization requests and communicates with the configured AI service.

Its responsibilities include:

- Validating incoming requests.
- Processing webpage content.
- Calling the AI provider.
- Handling provider errors and timeouts.
- Returning consistent API responses.
- Keeping AI-provider credentials on the server.

### Marketing Website

Location: `apps/website/`

The website introduces Briefly, explains its benefits, and directs users to the extension's installation or access page.

The website and extension are separate applications and may be built and deployed independently.

## Technology Stack

The current extension implementation uses:

- **React** for the user interface.
- **TypeScript** for type safety.
- **Chrome Extension APIs** for browser-tab access and script execution.
- **DOM APIs** for parsing and extracting webpage content.
- **Fetch API** for backend communication.
- **CSS** for interface styling.
- **An AI summarization service** accessed through the backend.

The backend and marketing website have their own application configurations and dependencies.

## Getting Started

### Prerequisites

- Node.js compatible with the repository dependencies.
- npm.
- Google Chrome or a compatible Chromium-based browser.
- Access to the configured AI provider, if required.

### 1. Clone the Repository

```bash
git clone <YOUR_REPOSITORY_URL>
cd briefly
```

Replace `<YOUR_REPOSITORY_URL>` with your repository URL.

### 2. Install Dependencies

Run this command from the monorepo root:

```bash
npm install
```

### 3. Configure the Backend

Set up the environment variables required by the backend. See the environment-variable section below.

Never commit real API keys or credentials.

### 4. Start the Backend

If `apps/server/package.json` defines a `dev` script, run:

```bash
npm run dev --workspace=apps/server
```

The exact command depends on the scripts configured in that workspace.

### 5. Start the Extension

Run the extension development script:

```bash
npm run dev --workspace=apps/extension
```

To build the extension:

```bash
npm run build --workspace=apps/extension
```

These commands require corresponding scripts in the extension's `package.json`.

### 6. Start the Website

To develop the marketing website:

```bash
npm run dev --workspace=apps/website
```

This requires a `dev` script in the website workspace.

### 7. Load the Extension in Chrome

1. Build the extension.
2. Open `chrome://extensions`.
3. Enable Developer mode.
4. Select **Load unpacked**.
5. Choose the generated extension directory containing `manifest.json`.
6. Open a regular webpage.
7. Open Briefly and select **Read this page**.

The generated directory depends on the extension's build configuration.

## Environment Variables

During development, the extension sends summarization requests to:

```text
http://localhost:3000/api/summarize
```

This assumes the backend is running on port `3000`.

A possible backend environment configuration is:

```dotenv
PORT=3000
AI_API_KEY=your_development_api_key
```

These variable names are examples. Use the names expected by the actual backend implementation.

For production:

- Replace the localhost API URL with the deployed HTTPS endpoint.
- Keep AI-provider credentials on the server.
- Use environment variables for secrets.
- Keep `.env` files out of version control.
- Provide an `.env.example` file with placeholders when useful.

## API Reference

### Generate a Summary

**Endpoint:** `POST /api/summarize`

**Request body:**

```json
{
  "title": "Example webpage",
  "content": "The extracted webpage content..."
}
```

**Expected successful response:**

```json
{
  "summary": "A concise overview of the webpage..."
}
```

**Example error response:**

```json
{
  "error": "Unable to generate the summary."
}
```

The extension expects a non-empty `summary` string in a successful response. For unsuccessful HTTP responses, it uses the returned error message when available.

The backend should validate the input, enforce reasonable request-size limits, and handle AI-provider errors.

## Development

Keep responsibilities separated when making changes.

| Task | File |
|---|---|
| Update the welcome screen | `src/components/Intro/Intro.tsx` |
| Update the header | `src/components/Header.tsx` |
| Update loading messages | `src/components/Loading/LoadingState/LoadingState.tsx` |
| Update progress steps | `src/components/Loading/LoadingSteps/LoadingSteps.tsx` |
| Change overview presentation | `src/components/Results/Overview/Overview.tsx` |
| Change section search | `src/components/Results/SectionList/SectionList.tsx` |
| Change link presentation | `src/components/Results/KeyLinks/KeyLinks.tsx` |
| Change extracted-text presentation | `src/components/Results/ExtractedArticle/ExtractedArticle.tsx` |
| Change icons | `src/components/Icon/Icon.tsx` |
| Change error presentation | `src/components/ErrorState/ErrorState.tsx` |
| Change extraction or navigation logic | `src/hooks/usePageReader.ts` |
| Change shared types | `src/types/pageReader.ts` |
| Change screen composition | `src/App.tsx` |
| Change extension styling | `src/App.css` |

Before submitting changes, test the relevant user flows, including successful summarization, API failures, section navigation, search, and extracted-text expansion.

## Security

Webpage content is untrusted input and may contain sensitive information.

- Never expose AI-provider API keys in frontend or extension code.
- Validate requests on the backend.
- Apply request-size limits and suitable timeouts.
- Use HTTPS in production.
- Request only the Chrome extension permissions that are necessary.
- Restrict cross-origin requests to authorized origins.
- Avoid unnecessarily logging webpage content or sensitive data.
- Treat webpage text as untrusted input when sending it to an AI model.
- Do not treat instructions embedded in webpage content as trusted system instructions.
- Explain relevant data handling to users when webpage content is sent to an external AI service.

## Roadmap

Potential areas for improvement include:

- Improving extraction across different webpage layouts.
- Improving summary quality and consistency.
- Supporting longer webpages more reliably.
- Improving navigation on dynamically rendered pages.
- Adding better request cancellation and retry handling.
- Deploying the backend and publishing the extension.
- Improving onboarding and user documentation.

This roadmap describes potential improvements, not features that are necessarily implemented today.

## Contributing

Contributions, bug reports, and suggestions are welcome.

When contributing:

1. Describe the problem your change addresses.
2. Keep changes focused and easy to review.
3. Follow the existing TypeScript and component conventions.
4. Test the affected functionality.
5. Never commit credentials or sensitive user data.

For larger changes, discuss the proposed approach before implementation.

## License

No license has been specified yet. Until a license is added, do not assume the project is available for unrestricted reuse or redistribution.
