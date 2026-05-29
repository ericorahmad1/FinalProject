# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

A single-page personal portfolio (Hacktiv8 × DevC final project) built with **Astro 6** + **Tailwind CSS v4**, output as a fully static site and deployed to **GitHub Pages**. Originally a multi-page Bootstrap 4/jQuery site; rebuilt from scratch.

## Commands

- `npm install` — install deps
- `npm run dev` — dev server at `http://localhost:4321/FinalProject/`
- `npm run build` — static build into `dist/`
- `npm run preview` — serve the built `dist/` locally

There is no test suite or linter. Verify changes by building and checking the page in a browser (responsive, dark mode, scrollspy, form).

## Architecture

- **Single page**: `src/pages/index.astro` composes section components in order: `Hero` → `About` → `Portfolio` → `ContactForm`, wrapped by `BaseLayout` with `Navbar` + `Footer`. Navigation is in-page anchors (`#home`, `#about`, `#portfolio`, `#contact`); section ids must stay in sync with `Navbar.astro`'s links and its scrollspy `IntersectionObserver`.
- **Components** live in `src/components/`; the page shell + `<head>` (SEO/OG/favicon) is `src/layouts/BaseLayout.astro`.
- **Content is data-driven**: portfolio cards and social links come from `src/data/projects.ts` — edit that file, not the components, to change projects/socials. Cards use Tailwind gradient placeholders (no real screenshots yet).
- **Styling**: Tailwind v4 via `@tailwindcss/vite` (configured in `astro.config.mjs`, not a `tailwind.config`). Design tokens + the brand color scale + the `dark` custom-variant live in `src/styles/global.css`. Use the `brand-*` utility classes for accent color.
- **Images**: source images go in `src/assets/` and are rendered through `astro:assets` `<Image>` (auto WebP/AVIF, sizing). Only put files that must ship as-is (favicon, og-image) in `public/`.

## Critical conventions

- **GitHub Pages base path**: `astro.config.mjs` sets `site` + `base: '/FinalProject'`. The site is served from the `/FinalProject/` subpath, so any reference to a `public/` asset must be prefixed with `import.meta.env.BASE_URL` (see `BaseLayout.astro`). In-page anchors and `astro:assets` imports handle the base automatically. If the repo is renamed, update `base`.
- **CSP is auto-generated**: `security.csp` in `astro.config.mjs` makes Astro emit a `<meta http-equiv="content-security-policy">` and hash every script/style it renders. Consequences:
  - Do **not** add a manual CSP meta tag.
  - Inline `style="..."` attributes are blocked (no `'unsafe-inline'`) — use utility classes instead.
  - Any new external origin (script, image host, fetch/XHR target) must be added to the matching directive (`connect-src`, `img-src`, …) or it will be blocked. The contact form's `fetch` to Formspree is why `connect-src`/`form-action` include `https://formspree.io`.
- **Dark mode**: class-based (`.dark` on `<html>`). An inline script in `BaseLayout.astro` sets the theme before paint (reads `localStorage.theme`, falls back to `prefers-color-scheme`); `Navbar.astro`'s toggle writes back to `localStorage`. Keep both in sync.
- **Client JS**: put interactive logic in component `<script>` blocks (bundled by Astro, hashed for CSP). Avoid `is:inline` unless it must run before paint.

## Known content gaps (placeholders to replace)

- `src/data/projects.ts` has sample projects + social URLs — replace with real ones.
- `ContactForm.astro` posts to `https://formspree.io/f/YOUR_FORM_ID` — replace with a real Formspree **form ID** (never a raw email address).
- `public/og-image.svg` is an SVG placeholder; most social scrapers want a 1200×630 PNG/JPG.
