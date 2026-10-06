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

Live at https://doitalljunk.com. The apex A records point at GitHub's Pages IPs, and the domain is set in the repo's Settings > Pages (`site/public/CNAME` mirrors it). For `www` to work too, add a DNS CNAME `www` -> `jerbri.github.io`; GitHub redirects it to the apex.

The workflow picks up the base path automatically.

## Brand

See [`resources/Brand_Guide.md`](resources/Brand_Guide.md).
