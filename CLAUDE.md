# takher.ca — personal site, project guide for Claude

Aman Takher's personal/resume website. Single-page marketing-style site with an "Apple Liquid Glass" look (frosted panels over an animated pastel-blob wallpaper).

- **Repo:** GitHub `astakher/takher.ca-`, branch `main`.
- **Live:** `https://takher.ca` (Netlify, auto-deploys on push).
- **Stack:** React 19 + Vite (plain JS/JSX, **not** TypeScript) + `framer-motion`. No router, no backend.

## Commands

```powershell
npm install
npm run dev       # vite dev server (usually :5173)
npm run build     # vite build -> dist/
npm run preview   # serve the build
```
No test suite. Verify changes by running `npm run dev` and eyeballing (framer-motion animations, responsive breakpoints).

## Structure

- `src/main.jsx` → `src/App.jsx` composes fixed `.wallpaper` (blurred blobs) + `.canvas` sheet containing `Nav` and `main` sections, plus the `Intro` overlay.
- `src/components/` — one component per section: `Nav`, `Hero`, `LogoMarquee`, `Stats`, `Capabilities`, `TriageBot`, `Experience`, `Skills`, `Certifications`, `Contact`, `Footer`, plus `Intro` (load animation) and `Reveal` (scroll-in wrapper).
- **`src/content/site.json`** — nearly all copy/content is data-driven from here. Edit content here, not in JSX. (Nav's link list is a small exception — see below.)
- **`src/index.css`** — the ENTIRE design system lives in one file: `:root` design tokens (colors, `--grad`, glass tokens, radii, `--ease`), all component styles, animations, and the `@media (prefers-reduced-motion)` block.

## Design system (in `src/index.css` `:root`)

Single light theme ("liquid glass"), no dark mode. Font: **Inter** (loaded in `index.html`). Key tokens: `--page:#e8f1f8`, `--text:#10161d`/`--text-2:#4f5f6e`, `--accent:#1f7ae0` (hover `#2b87ee`), `--grad` blue→cyan, glass fills `rgba(255,255,255,.42/.58)` + `--glass-blur: blur(24px) saturate(180%)` + `--glass-shadow`; radii 36/28/20/16 + `999px` pills; easing `cubic-bezier(0.22,1,0.36,1)`. Match these when adding UI.

Animation: `framer-motion` with `<MotionConfig reducedMotion="user">`; scroll reveals via `components/Reveal.jsx` (`whileInView`, staggered `delay`); signature easing `[0.22,1,0.36,1]`.

## Nav

`src/components/Nav.jsx`: a fixed floating glass pill. Section links are a module-level `LINKS` array of `[label, '#anchor']` (internal scroll). The logo/title comes from `site.nav.title`. CTAs are `.nav-cta` (dark pill = Contact) and `.nav-cta-alt` (light-accent pill). External links use `target="_blank" rel="noopener noreferrer"` (see `Contact.jsx`), except the PDF Editor link which is same-tab.

## Contact form

`src/components/Contact.jsx` posts to **formsubmit.co** (no backend). LinkedIn URL comes from `site.json`.

## Deploy & the /pdf integration

`netlify.toml`: build `npm run build`, publish `dist`, plus security headers. It also **proxies the Vibe PDF app**: `/pdf` and `/pdf/*` → `https://vibe-pdf.netlify.app/pdf/...` (status 200), so the editor is served at `takher.ca/pdf`. The nav has a "PDF Editor" pill (`site.nav.pdfEditorUrl = "/pdf"`, rendered only when set). **Do NOT add a `/pdf → /pdf/` 301** — it fights Netlify's trailing-slash canonicalization and causes an infinite redirect loop. Push to `main` → Netlify auto-deploys.

## Conventions

- Content edits → `src/content/site.json`. Style edits → `src/index.css` (reuse the `:root` tokens). Match the glass recipe + easing for anything new.
- Keep it plain JSX (no TypeScript), no new heavy deps without reason (bundle stays lean).
- Verify visually with `npm run dev`; respect the reduced-motion media query.
- Descriptive single-purpose commits.
