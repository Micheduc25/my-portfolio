# Ndjock Michel Junior — Portfolio (v2)

A complete rebuild of [micheduc25.vercel.app](https://micheduc25.vercel.app) — a bold,
brutalist / terminal-inspired portfolio for a senior full-stack engineer and educator.
No templates, no AI-website clichés: monospace system UI, a live status line, a ledger
grid, color-inverting hover states, and oversized display type.

## Stack

- **Next.js 14** (App Router) + **React 18** + **TypeScript**
- **next/font** — JetBrains Mono (system/UI) + Space Grotesk (display)
- Hand-written CSS (no UI framework), one signal-orange accent on near-black

## Run locally

```bash
npm install
npm run dev      # http://localhost:3000
```

## Build

```bash
npm run build
npm start
```

## Deploy (Vercel)

Push to GitHub and import the repo at vercel.com, or:

```bash
npx vercel        # preview
npx vercel --prod # production
```

No environment variables required.

## Structure

```
app/
  layout.tsx        fonts, metadata (OG/Twitter cards), <html> shell
  page.tsx          page assembly + static sections (whoami, stack, teaching, contact)
  globals.css       full design system
components/
  StatusLine.tsx    live WAT clock + current-section tracker (client)
  Hero.tsx          name "decode" animation (client)
  Work.tsx          filterable project records — web / mobile (client)
  Effects.tsx       scroll reveals + keyboard nav (press 1–5) (client)
lib/
  projects.ts       single source of truth for the work grid
public/
  images/           project screenshots, client logos, favicon
  assets/resume.pdf
```

## Editing content

- **Projects** — edit `lib/projects.ts`. Add an object, drop a screenshot in
  `public/images`, done.
- **Stack / teaching / bio** — edit the arrays and JSX in `app/page.tsx`.
- **Identity / clock location** — `components/StatusLine.tsx`.
- **Colors / type / spacing** — CSS variables at the top of `app/globals.css`.

## Accessibility & performance

- Respects `prefers-reduced-motion` (caret, ticker, decode, reveals all stop).
- Semantic landmarks, descriptive alt text, keyboard navigable.
- Near-zero client JS; images lazy-loaded.

## Notes

- `preview.html` at the project root is a single-file static mirror of the design —
  double-click to view the look without installing anything.
- Replace `public/assets/resume.pdf` with your latest résumé before shipping.
