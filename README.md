# Qudus Adebola Lawal — holding page

This repo is the public portfolio site for Qudus Adebola Lawal, currently reduced to a single static holding page (name, one-line summary, short intro, and links to GitHub, Peer AI, LinkedIn and email) while the full portfolio with case studies is rebuilt separately. It is one `index.html` and one `styles.css` with no framework and no JavaScript. Vite is the only dependency and is used purely as the build tool, so the existing Netlify pipeline (`npm run build` → publish `dist/`) keeps working unchanged. The previous React + Vite + Tailwind site is preserved on the `legacy-portfolio` branch.

## Run it

```bash
npm install
npm run dev       # local dev server with live reload
npm run build     # writes the deployable site to dist/
npm run preview   # serves dist/ locally to check the production build
```
