# Autonomous Collection

> Intelligent units for modern environments.

A refined Astro storefront for browsing a curated collection of autonomous robots. The site presents each unit with editorial product photography, concise specifications, pricing, and a dedicated detail page.

## What is inside

- Responsive product grid for the full robot collection
- Light and dark mode styling with a warm orange accent
- Product detail pages at `/robot/[id]`
- Astro content collections for strongly validated product data
- Smooth page transitions powered by Astro
- Optimized responsive images through `astro:assets`

## Tech stack

- [Astro](https://astro.build/)
- [Tailwind CSS v4](https://tailwindcss.com/)
- Astro Content Collections
- `astro:assets` and Sharp for image optimization

## Project structure

```text
/
├── public/                 # Static files and favicon
├── src/
│   ├── assets/images/      # Robot product photography
│   ├── components/
│   │   └── Products.astro  # Collection grid and product cards
│   ├── content/
│   │   └── robots/         # Product entries in Markdown
│   ├── layouts/
│   │   └── BaseLayout.astro
│   ├── pages/
│   │   ├── index.astro     # Collection landing page
│   │   └── robot/[id].astro
│   └── styles/
│       └── global.css
├── astro.config.mjs
└── package.json
```

## Getting started

Requires Node.js and npm.

```bash
npm install
npm run dev
```

The development server is available at [http://localhost:4321](http://localhost:4321).

## Commands

| Command | Description |
| :--- | :--- |
| `npm install` | Install dependencies |
| `npm run dev` | Start the local development server |
| `npm run build` | Build the production site in `dist/` |
| `npm run preview` | Preview the production build locally |
| `npm run astro -- ...` | Run an Astro CLI command |

## Adding a robot

Create a Markdown file in `src/content/robots/` with the following frontmatter:

```yaml
---
title: "New Autonomous Unit"
subtitle: "Specialized Automation"
price: "$999.00"
image: "@assets/images/new-unit.jpg"
draft: false
---
```

Add the corresponding image under `src/assets/images/`, then write the product description below the frontmatter. The content schema validates each entry at build time.
