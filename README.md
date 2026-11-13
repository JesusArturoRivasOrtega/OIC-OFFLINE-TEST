# OIC Certification Academy 2026

An offline-first, static Progressive Web App for studying Oracle Integration 3 concepts for the 1Z0-1042-26 topic outline. It is designed for GitHub Pages and has no runtime CDN or API dependency.

## What is included

- Six exam categories with the supplied 14/20/32/10/12/12 weighting.
- 300 practice prompts: 18 are original, scenario-specific editorial replacements (15 have item-level answer and reference checks); 282 still use variations of 60 concept records. Exactly 50 appear per category, split 10 fundamentals, 15 application, 15 scenario, and 10 expert. These are **not 300 individually reviewed questions** or official Oracle exam questions.
- 40 bilingual grouped chapters with distinct technical walkthroughs and source-section references, completion and resume tracking, text highlighting, fragment notes, and personal flashcards. They still require deeper coverage and objective-by-objective editorial review.
- Eleven guided OIC labs prepared for validation in a real tenancy; expanded architecture and troubleshooting cases, glossary, and flashcards. The labs have **not** been executed in an OIC instance.
- Quick 10-question rounds with difficulty and review filters, a configurable-timer 50-question simulator with autosave/resume and category reporting, spaced-review scheduling, and a local dashboard.
- IndexedDB-backed progress with a browser-storage fallback, JSON backup/restore, and local-only question-set import.
- A manifest and service worker for offline use after the first successful load.
- Immediate practice feedback explains both the accepted answer and why each distractor is wrong; assessment and exam sessions show the same detail after submission. Six original replacements include Spanish options and rationales. Unreviewed answers and references remain provisional until item-level editorial review.

## Copyright and source handling

The repository deliberately excludes the supplied Udemy PDFs, 2024 notes, Oracle documentation, and all OCR output. Most public practice prompts are provisional learning material with source-section pointers to *Oracle Cloud Using Integrations in Oracle Integration 3*, G36915-54, October 2026. Fifteen original items have an item-level answer and reference check; the remaining 285 do not. The questions do not reproduce Oracle documentation or represent an official Oracle certification question bank.

Private extracts are kept outside the repository: 272 OCR candidate questions from the supplied PDFs and 66 candidate study questions from the 2024 notes. Proposed answers from notes are **not verified** and no private question is used for scored public practice.

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
