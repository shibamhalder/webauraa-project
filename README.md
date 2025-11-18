# WebAuraa

A Vite + React + TypeScript single-page site with Tailwind CSS and shadcn/ui components. It features animated sections, smooth scrolling, and a modern UI.

## Tech Stack
- React 18, TypeScript, Vite 5
- Tailwind CSS, shadcn/ui
- Framer Motion
- React Router DOM
- TanStack Query

## Prerequisites
- Node.js 18+ and npm

## Setup
- Install dependencies: `npm install`
- Start development server: `npm run dev`
- Open: `http://localhost:8080/`

## Scripts
- `npm run dev` — start the dev server
- `npm run build` — build for production
- `npm run preview` — preview the production build
- `npm run lint` — run ESLint

## Environment Variables
Create a `.env` file in the project root and define any required variables (placeholders shown below). Do not commit secrets.

```
VITE_SUPABASE_URL="https://xxxxx.supabase.co"
VITE_SUPABASE_PUBLISHABLE_KEY="<public-anon-key>"
VITE_SUPABASE_PROJECT_ID="<project-id>"
```

`.gitignore` excludes `.env*` and `env.txt`.

## Development Notes
- The app uses section-based navigation via anchor links (e.g., `#contact`, `#portfolio`). Routing is set up with `BrowserRouter` for the home page and a simple 404.
- Vite dev server runs on port `8080` (configured in `vite.config.ts`).

## Build and Preview
- Build: `npm run build`
- Preview: `npm run preview` then open the printed URL (default `http://localhost:4173`).

## Deploy
- Static hosting (Vercel, Netlify, GitHub Pages) works well.
- Because the app uses `BrowserRouter`, configure SPA fallback to `index.html` on your host.

## Project Structure
- `src/components` — UI components and sections
- `src/pages` — route-level components
- `src/index.css` — Tailwind styles
- `index.html` — HTML entry
- `vite.config.ts` — Vite configuration (aliases, port)

## Linting
- Run `npm run lint` and address reported issues.

## License
- Proprietary. All rights reserved.
