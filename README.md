# OIC Certification Academy 2026

An offline-first, static Progressive Web App for studying Oracle Integration 3 concepts for the 1Z0-1042-26 topic outline. It is designed for GitHub Pages and has no runtime CDN or API dependency.

## What is included

- Six exam categories with the supplied 14/20/32/10/12/12 weighting.
- 300 provisional practice prompts generated from 60 concept records: exactly 50 per category, split 10 fundamentals, 15 application, 15 scenario, and 10 expert. These are **not 300 individually reviewed questions** or official Oracle exam questions; replacing and reviewing them one by one remains open.
- 40 bilingual grouped chapters with source-section references, completion and resume tracking, text highlighting, fragment notes, and personal flashcards. These are study guides, not yet exhaustive textbook chapters for every exam objective.
- Eleven guided OIC labs, expanded architecture and troubleshooting cases, glossary, and flashcards.
- Quick 10-question rounds with difficulty and review filters, a configurable-timer 50-question simulator with autosave/resume and category reporting, spaced-review scheduling, and a local dashboard.
- IndexedDB-backed progress with a browser-storage fallback, JSON backup/restore, and local-only question-set import.
- A manifest and service worker for offline use after the first successful load.

## Copyright and source handling

The repository deliberately excludes the supplied Udemy PDFs, 2024 notes, Oracle documentation, and all OCR output. The public practice prompts are provisional learning material with source-section pointers to *Oracle Cloud Using Integrations in Oracle Integration 3*, G36915-54, October 2026. Their correctness and references still need individual editorial verification. They do not reproduce Oracle documentation or represent an official Oracle certification question bank.

Use **Settings → Import private question set** to keep question material you are authorized to use in your own browser. The app never uploads an imported file. A private JSON collection should contain a `questions` array; each question needs at least `id`, `categoryId`, `question`, `options`, `correct`, `source`, and `verification`. Unverified OCR questions with no confirmed answer can be imported into the review queue but are excluded from scored sessions.

## Run locally

This is a buildless static app. From the repository root, serve it with any local static server, for example:

```powershell
python -m http.server 8080
```

Then open `http://localhost:8080`. A web server is required for service-worker testing; opening `index.html` directly will not test PWA caching.

## Validate data

```powershell
npm test
```

The test verifies category weights, prompt counts and metadata, the 10/15/15/10 composition, exam distribution, multiple-answer scoring, Quick selection, and spaced-review scheduling. A passing test does not constitute an editorial review of the questions.

## Publish with GitHub Pages

Deploy from the `main` branch and `/(root)` in **Settings → Pages**. Open the Pages URL once while online so the service worker can cache the application. On iPhone Safari, choose **Share → Add to Home Screen**. Keep an exported progress backup before clearing browser data or changing devices.

An offline browser-cache smoke test and narrow mobile viewport check have been performed. Installation and airplane-mode behavior on a **physical iPhone running Safari** remain to be tested.

## Verification limits

Product features and certification objectives can change. The app labels its public bank as generated practice and does not claim a passing score or product feature is an official exam objective unless independently verified. Check current Oracle documentation and the official exam page before using it as final certification guidance.
