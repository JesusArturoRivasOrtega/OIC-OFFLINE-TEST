# OIC Certification Academy 2026

An offline-first, static Progressive Web App for studying Oracle Integration 3 concepts for the 1Z0-1042-26 topic outline. It is designed for GitHub Pages and has no runtime CDN or API dependency.

## What is included

- Six exam categories with the supplied 14/20/32/10/12/12 weighting.
- 300 public, original, generated-for-practice questions: exactly 50 per category, split 10 fundamentals, 15 application, 15 scenario, and 10 expert. They are not official Oracle exam questions.
- Bilingual learning cards that preserve Oracle technical names in English, glossary tooltips, comparisons, flashcards, architecture scenarios, and troubleshooting exercises.
- Quick 10-question rounds, a fixed-distribution 50-question simulator, local statistics, bookmarks, notes, favorites, and a weakness-focused session builder.
- IndexedDB-backed progress with a browser-storage fallback, JSON backup/restore, and local-only question-set import.
- A manifest and service worker for offline use after the first successful load.

## Copyright and source handling

The repository deliberately excludes the supplied Udemy PDFs, 2024 notes, and Oracle documentation. The public question bank is newly authored for practice and cites the relevant chapter/section of *Oracle Cloud Using Integrations in Oracle Integration 3*, G36915-54, October 2026. It does not reproduce Oracle documentation or represent an official Oracle certification question bank.

Use **Settings → Import private question set** to keep question material you are authorized to use in your own browser. The app never uploads an imported file. A private JSON collection should contain a `questions` array; each question needs at least `id`, `categoryId`, `question`, `options`, `correct`, `source`, and `verification`.

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

The test verifies category weights, 50 unique questions in every category, 300 total public questions, required metadata, the 10/15/15/10 composition, and the 50-question exam distribution.

## Publish with GitHub Pages

1. Push this repository to the `main` branch.
2. In GitHub, open **Settings → Pages**.
3. Select **Deploy from a branch**, choose `main`, and set the folder to `/(root)`.
4. Save, then open the Pages URL once while online. The service worker will cache the core application for later offline use.
5. On iPhone Safari, open the Pages URL, choose **Share → Add to Home Screen**, and keep an exported progress backup before clearing browser data or changing devices.

## Verification limits

Product features and certification objectives can change. The app labels its public bank as generated practice and does not claim a passing score or product feature is an official exam objective unless independently verified. Check current Oracle documentation and the official exam page before using it as final certification guidance.
