# Do It All Junk Removal

Website for Do It All Junk Removal (Ryan & Jacob). You point. We haul.

## Structure

```
doitall-junk-removal/
  site/         # Vite + React site (deployable)
  resources/    # Brand guide and original logo
```

## Update contact info

Phone, email, service area and social links all live in [`site/src/business.js`](site/src/business.js). Edit that one file and push.

## Develop

```bash
cd site
npm install
npm run dev
```

## Deploy

Pushing to `main` builds and deploys to GitHub Pages via `.github/workflows/deploy.yml`.

### Custom domain

1. Buy the domain and point DNS at GitHub Pages (A records to GitHub's Pages IPs, or a CNAME for `www`).
2. Add a `site/public/CNAME` file containing the domain (e.g. `www.doitalljunk.com`).
3. Set the domain in the repo's Settings > Pages and enable HTTPS.

The workflow picks up the new base path automatically.

## Brand

See [`resources/Brand_Guide.md`](resources/Brand_Guide.md).
