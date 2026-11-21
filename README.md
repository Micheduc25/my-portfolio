# NdjockCodes — Company Site

The [micheduc25.vercel.app](https://micheduc25.vercel.app) site for **NdjockCodes**, an AI &
software studio: AI-driven solutions, AI training, web & mobile development and AI consulting.
A bold, brutalist / terminal-inspired design.
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
  page.tsx          page assembly + static sections (services, capabilities, training, contact)
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
```

## Editing content

- **Projects** — edit `lib/projects.ts`. Add an object, drop a screenshot in
  `public/images`, done.
- **Services / capabilities / training** — edit the `SERVICES` and `STACK` arrays and JSX in `app/page.tsx`.
- **Identity / clock location** — `components/StatusLine.tsx`.
- **Colors / type / spacing** — CSS variables at the top of `app/globals.css`.

## Accessibility & performance

- Respects `prefers-reduced-motion` (caret, ticker, decode, reveals all stop).
- Semantic landmarks, descriptive alt text, keyboard navigable.
- Near-zero client JS; images lazy-loaded.

## Notes

- `preview.html` at the project root is a static mirror of the old personal-portfolio design;
  it does not reflect the company site.
- `public/images/me.jpg` and `public/assets/resume.pdf` are no longer referenced by the site.
