# Repository Guidelines

## Project Structure & Module Organization
- App router Next.js project (TypeScript).
- Source code: `src/`
  - `src/app/` routes, layouts, API routes
  - `src/components/` UI components
  - `src/hooks/` React hooks
  - `src/lib/` utilities and `supabase/` client/server helpers
  - `src/config/`, `src/data/` configuration and content
- Static assets: `public/`
- Config: `next.config.ts`, `tsconfig.json`, `tailwind.config.ts`, `eslint.config.mjs`

## Build, Test, and Development Commands
- `npm ci` — clean install using `package-lock.json`
- `npm run dev` — start Next.js dev server (Turbopack)
- `npm run build` — production build
- `npm start` — run the production server
- `npm run lint` — ESLint (Next.js core-web-vitals rules)
- Optional: `npm run email` — start React Email preview if developing emails

## Coding Style & Naming Conventions
- Language: TypeScript (strict). Indentation: 2 spaces; semicolons on; double quotes in TS/TSX.
- Files: kebab-case (e.g., `scramble-hover.tsx`); hooks start with `use-`.
- Exports: React components in PascalCase; hooks in camelCase.
- Imports use alias `@/*` (see `tsconfig.json`).
- Styling: prefer Tailwind CSS utilities; use CSS modules only when necessary.
- Linting: configured via `eslint.config.mjs` (`next/core-web-vitals`, `next/typescript`). Fix issues before pushing.

## Testing Guidelines
- No test framework is configured yet. If adding tests:
  - Unit: Jest/Vitest in `src/__tests__/` with `*.test.ts(x)`
  - E2E: Playwright; keep tests under `e2e/`
  - Aim for critical-path coverage (forms, API routes). Add scripts `test`/`test:e2e` accordingly.

## Commit & Pull Request Guidelines
- Use Conventional Commits: `feat`, `fix`, `chore`, `style`, etc. Example: `feat(waitlist): add Supabase insert`
- Keep subjects imperative and <= 72 chars; include scope when helpful.
- PRs must include:
  - Clear description and rationale; link issues if applicable
  - Screenshots or recordings for UI changes
  - Notes on env vars/migrations (see README for Supabase and `.env.local`)

## Security & Configuration Tips
- Never commit secrets. Use `.env.local` for `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY`.
- Treat `NEXT_PUBLIC_*` as public; do not put private keys in client code.
- Enable and maintain Supabase RLS as shown in README.
