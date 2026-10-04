# ScopeCheck

A private, browser-only workspace that turns a freelance project brief into a scope of work. Built by Chidera Emmanuel Okpala.

## Features

- Editable project brief with deliverables, acceptance criteria, exclusions, responsibilities and handover.
- Eight transparent completeness checks and context-specific questions.
- Live scope preview, Markdown download, clipboard copy and a print layout.
- Device-local draft saving with a visible warning when storage is unavailable.
- Responsive layout, keyboard controls and reduced-motion support.
- No account, backend, API keys, analytics or external dependencies.

## Run locally

Use Python 3 from the repository root:

```sh
python3 -m http.server 8080
```

Open http://localhost:8080. ES modules require an HTTP server; opening index.html directly is not supported. Node.js is needed only for the optional checks:

```sh
npm test
npm run check
```

## How checks work

The clarity score counts eight non-empty fields. It does not evaluate quality, calculate a price, infer legal terms or use AI. Questions identify missing fields. A complete brief adds reminders to agree on approval, payment and changes.

## Privacy

Drafts are saved in localStorage on the current device and browser. Shared-device users should clear the brief when finished. No brief is transmitted to a server. Download a Markdown copy for a portable backup. There is no cloud synchronisation.

## Project structure

`index.html` contains the accessible workspace, `styles.css` handles responsive and print layouts, `engine.js` contains the assessment/export logic, and `app.js` connects the interface and local storage. Tests are in `tests/`.

## Publication

This repository contains the source project. No hosting deployment or GitHub Pages configuration is included.

## Limitations

This is a discussion draft, not a contract generator. Clipboard access depends on browser permissions and a secure context. Dates and budget are supplied by the user; no pricing or scheduling calculation is performed.
