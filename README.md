# ivan.gal

Personal site of Iván Barcia, written in Galician. Static [Astro](https://astro.build)
build, served from [Cloudflare Workers Static Assets](https://developers.cloudflare.com/workers/static-assets/).

Live at **[ivan.gal](https://ivan.gal)**.

## Stack

Astro 7 · Tailwind CSS 4 · Biome (lint) · Prettier (format) · Node 24 · pnpm 12

## Getting started

```bash
pnpm install
pnpm dev
```

The dev server runs on <http://localhost:4321>.

Node and pnpm are both pinned: `.nvmrc` selects Node 24 (`fnm use`), and the
`packageManager` field in `package.json` makes pnpm switch itself to the exact
version this repo expects.

## Commands

| Command               | What it does                                       |
| :-------------------- | :------------------------------------------------- |
| `pnpm install`        | Install dependencies                               |
| `pnpm dev`            | Dev server on `localhost:4321`                     |
| `pnpm dev:host`       | Same, exposed on the local network                 |
| `pnpm build`          | Production build into `./dist/`                    |
| `pnpm preview`        | Serve the build with Astro's preview server        |
| `pnpm preview:worker` | Serve the build on the real Workers runtime        |
| `pnpm check`          | Types, lint and formatting — read-only, used in CI |
| `pnpm format`         | Apply lint fixes and formatting                    |
| `pnpm run deploy`     | Check, build and deploy to Cloudflare Workers      |

> `pnpm deploy` is a reserved pnpm command. Always use `pnpm run deploy`.

## Content

Posts live in `content/`, outside `src/`, as Markdown loaded through Astro
content collections. The schemas are in [`src/content.config.ts`](src/content.config.ts).

| Collection | Directory          | Route         |
| :--------- | :----------------- | :------------ |
| `articles` | `content/articles` | `/artigos`    |
| `photos`   | `content/photos`   | `/fotografia` |

Each entry is a directory holding an `index.md` plus its images, so a post and
its assets stay together. Front matter requires `title`, `description` and
`pubDate`; `updatedDate`, `cover` and `draft` are optional. Entries with
`draft: true` are excluded from listings and from the RSS feed.

## Deployment

Builds run locally and the output is uploaded straight to Cloudflare — there is
no CI pipeline and no Git-connected build.

Authenticate once:

```bash
pnpm dlx wrangler login
```

Then deploy with `pnpm run deploy`. The Worker is named `ivan-gal`; the custom
domain is attached in the Cloudflare dashboard under
**Workers & Pages → ivan-gal → Settings → Domains & Routes**.

## Conventions

- Dependencies are pinned to exact versions. `saveExact` in
  `pnpm-workspace.yaml` keeps `pnpm add` from writing `^` ranges.
- `minimumReleaseAge` blocks packages published less than 24 hours ago, as a
  guard against compromised releases.
- Only `esbuild`, `sharp` and `workerd` may run install scripts (`allowBuilds`).
- Prettier formats every file type, including Astro templates. Biome only lints
  — its formatter is off so the two never disagree.
