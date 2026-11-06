# D-Post Inter · Next.js (v6)

Next.js 15 (App Router) port of the D-Post Inter white-label prototype, THP copy v6 (6 Nov 2026).
ระบบตัวอย่าง · ข้อมูลจำลอง: a demo by FastShip (CloudCommerce), not an official Thailand Post system.

## Run

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # static export to out/ (deploy to Vercel or any static host)
```

## Structure

| File | What it is |
| --- | --- |
| `app/layout.tsx` | `<html lang="th">`, fonts (Kanit, Sarabun, Bai Jamjuree, IBM Plex Mono), metadata |
| `app/page.tsx` | Renders `app/markup.html` and loads `/dpost-app.js` after hydration |
| `app/markup.html` | All screens' markup (user, counter, Back-office, Dashboard) |
| `app/globals.css` | All styles, light + dark tokens |
| `public/dpost-app.js` | The prototype runtime (vanilla JS, mock data, rates, flows) |

This is a wrapper port: the UI still runs on the original vanilla JS, so every journey works exactly as in the HTML version.
To move a screen to React, cut its markup out of `markup.html` into a component and move its logic out of `dpost-app.js`.

## Regenerate after a new HTML round

```bash
node ../handoff/build-scripts/to-nextjs.js ../dpost-inter-poc-thp.html .
```

The generator rewrites `app/`, `public/` and the config files. It does not touch `node_modules/`.
