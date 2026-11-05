# D-Post Inter White-label (Next.js)

White-label POC made by FastShip (CloudCommerce) to pitch to Thailand Post. It is **not** an official ปณท system: prices, branches and tracking numbers are all sample data. Keep the disclaimer banner at the top of the page.

This is the single-file HTML prototype moved to Next.js 16 (App Router). It looks and behaves exactly like the original. All journeys, the user / back-office / dashboard / counter modes, and the Thai address picker work the same.

## Run locally

```bash
npm install
npm run dev        # http://localhost:3000
npm run build && npm start   # production check
```

Requires Node 20.9 or newer.

## Deploy on Vercel

**From Git (recommended):** push this folder to a GitHub repo, then in Vercel choose **Add New → Project → Import** that repo. The framework is detected as Next.js automatically, and no environment variables are needed.

**From the CLI:**

```bash
npm i -g vercel
vercel          # preview deployment
vercel --prod   # production
```

The site sends `noindex` (meta tag and `X-Robots-Tag` header), so search engines won't list it. If you want a login wall for client demos, turn on **Vercel Authentication** or **Password Protection** under Project → Settings → Deployment Protection.

## Project layout

| Path | What it is |
| --- | --- |
| `app/layout.tsx` | `<html lang="th">`, metadata, viewport, and the fonts (Sarabun, Kanit, IBM Plex Mono, self-hosted through `@fontsource`, so there are no calls to Google) |
| `app/page.tsx` | Static page. It renders `legacy/markup.html` on the server at build time |
| `app/globals.css` | All of the prototype's CSS (three style blocks merged, unchanged) |
| `components/LegacyBoot.tsx` | Client component that starts `legacy/app.js` once, after the page has hydrated |
| `legacy/markup.html` | The prototype's `<body>` markup |
| `legacy/app.js` | The prototype's script, unchanged. It builds every journey screen and includes the Thai postcode data (`TH_ZIPS`) and the rate table (`TC88`) |
| `public/thp-mark.png` | Logo, pulled out of the base64 data URI in the CSS |

## Editing

- **Text or layout of the static shell** (header, landing cards, modals): edit `legacy/markup.html`.
- **Styles:** edit `app/globals.css`.
- **Journey screens and logic:** edit `legacy/app.js`. Screens are built as HTML strings, just as in the prototype.

## Next steps to make it production-grade

1. Move `TH_ZIPS` and `TC88` out of `app.js` into JSON loaded on demand. They make up most of the ~1 MB script.
2. Rebuild journeys as React components one at a time, starting with the parcel flow. Each one can replace its section of `app.js` without touching the others.
3. Swap the sample data for real APIs (rates, tracking, payment) through Next.js route handlers.
