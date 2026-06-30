# coldwa.st - Coldwast Programming & Dev Guides

Static Astro site on an acquired expired domain (previously a Haskell blog). Goal: recover existing editorial backlink equity by recreating the exact deep-URLs at HTTP 200 with original, on-topic, updated content - then monetize a dev/programming audience.

## Legacy URLs recreated (HTTP 200, on-topic, original)
- `/e/blog/2013-08-20-Cabal-sandbox.html` - Cabal sandboxes (largest backlink cluster)
- `/e/blog/2017-09-09-Cabal-2-0.html` - Cabal 2.0 / nix-style builds
- `/e/blog/2011-08-22-GSoC-Final.html` - parallelising cabal-install
- `/e/rss.xml` - valid RSS feed (crawled by planet.haskell.org)
- `/e/` - guides index · `/` - homepage · `/about.html` - editorial policy

Other archived legacy paths (Cabal-1-18, Cabal-1-24, GSocIntroduction, tags, cv.pdf, non-`/e/` `/blog/*`) → 301 to the nearest on-topic page (see `vercel.json`).

## Rules (enforced)
- ANTI-PBN: zero links to any other network site. Ever.
- Honesty: no invented claims, no impersonation; original content only (Wayback used as topic reference, never copied).
- 1 unique live image per article (local SVG heroes in `public/img/`).

## Stack & build
- Astro static, `build.format: 'file'` so legacy `.html` paths are emitted literally.
- Build on ext4 (NOT /mnt/c): `cp -r` to `/tmp`, `npm install`, `npm run build`.
- Deploy: Vercel (auto-build from GitHub). See `vercel.json` for redirects/headers.

## Monetization
See `AFFILIATES.md` - programs to apply for once live.
