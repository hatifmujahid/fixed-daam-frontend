# FixedDaam — Pay Now, Buy Later

Frontend for **FixedDaam**: hedge against rising prices by paying today and collecting later. Users lock in current prices and get a QR code for retrieval; merchants add inventory and set prices.

## Tech stack

- **React** (Vite), **React Router**
- **Tailwind CSS v4** — path alias `@/`
- **Zustand** — auth state
- **React Hook Form + Zod** — forms
- **Sonner** — toasts
- **Framer Motion** — landing animations
- **Axios** — API client

## Scripts

```bash
npm install
npm run dev      # dev server
npm run build    # production build
npm run preview  # preview production build
npm run lint     # ESLint
```

## Env

Copy `.env.example` to `.env` and set:

- `VITE_API_BASE_URL` — backend API base URL (optional for local UI-only).

## Routes

- `/` — Landing (how it works, for merchants, CTA)
- `/auth` — Sign in / Sign up (tabs)
- `/dashboard` — Protected; purchases & merchant inventory (placeholders)
- `/404` — Not found

## Theme

Pure black, dark orange (`#ea580c`), and white. See `src/index.css` and `src/lib/styles.js`.

## Standards

See `FRONTEND_STANDARDS.md` for structure, naming, components, and SETL-style conventions.
