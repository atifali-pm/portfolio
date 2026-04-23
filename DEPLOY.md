# Deploying to Cloudflare Pages

Two deploy options. Pick one.

## Option A: GitHub → Cloudflare Pages (recommended, auto-deploys on push)

### 1. Push the site to GitHub

```bash
cd /home/atif/projects/portfolio/website

# init repo
git init
git add .
git commit -m "Initial portfolio site"

# create a new GitHub repo and push
gh repo create atifali-portfolio --private --source=. --remote=origin --push
```

### 2. Connect to Cloudflare Pages

1. Go to https://dash.cloudflare.com → Workers & Pages → Create → Pages → Connect to Git
2. Authorize Cloudflare to read your GitHub account (first time only)
3. Pick the `atifali-portfolio` repo
4. Configure the build:
   - Project name: `atifali` (this becomes `atifali.pages.dev`)
   - Production branch: `main`
   - Framework preset: `Astro`
   - Build command: `npm run build`
   - Build output directory: `dist`
   - Root directory: leave blank
   - Environment variables → Add: `NODE_VERSION` = `22`
5. Click Save and Deploy

First build takes 2 to 3 minutes. Every `git push` to `main` auto-deploys after.

Live URL: https://atifali.pages.dev

## Option B: Direct upload via wrangler CLI (no GitHub needed)

```bash
cd /home/atif/projects/portfolio/website

npm install -g wrangler
wrangler login                # opens browser for Cloudflare auth
npm run build
wrangler pages deploy dist --project-name=atifali
```

First deploy creates the project. Subsequent deploys just push the new `dist/` build.

## Local development

```bash
cd /home/atif/projects/portfolio/website
npm run dev       # http://localhost:4321
npm run build     # production build into dist/
npm run preview   # preview the production build locally
```

## Editing content

All project case studies live in a single file: `src/data/projects.ts`. Add or update entries there and rebuild. The routes, cards, and case study pages all read from that one source.

- Add a new project: append to the `projects` array. A new case study page auto-generates at `/projects/<slug>`.
- Feature a project on the home page: set `featured: true` on the project.
- Update stack, tagline, goals, flows, or learnings: edit the relevant fields.

Other pages to edit:

- Home: `src/pages/index.astro`
- Projects index: `src/pages/projects/index.astro`
- About: `src/pages/about.astro`
- Contact: `src/pages/contact.astro`
- Nav links: `src/components/Nav.astro`
- Footer content: `src/components/Footer.astro`
- Global styles and tokens: `src/styles/global.css`
