# Nishant Sharma — personal portfolio

A Vite + React 18 + TypeScript portfolio populated from Nishant's resume, with editable data, two themes, project case studies, an interactive agent workflow, and responsive layouts.

## Run locally

Requires Node.js 20.19+ or 22+ and npm.

```sh
npm install
npm run dev
```

Open the URL printed by Vite (normally http://localhost:5173). To check a production build:

```sh
npm run build
npm run preview
```

The build output is `dist`. A pnpm lockfile is also included for reproducible `pnpm install` installations. The workspace configuration permits the required esbuild compiler script.

### Exact dependencies

```sh
npm install react@18.3.1 react-dom@18.3.1 framer-motion@11.18.2 gsap@3.12.7 lenis@1.1.20 three@0.172.0 @react-three/fiber@8.17.14 @react-three/drei@9.121.4 react-type-animation@3.2.0 lucide-react@0.468.0 @emailjs/browser@4.4.1 react-helmet-async@2.0.5
npm install -D prettier@3.5.3 vite@6.1.0 @vitejs/plugin-react@4.3.4 typescript@5.7.3 @types/react@18.3.18 @types/react-dom@18.3.5 @types/three@0.172.0 tailwindcss@3.4.17 postcss@8.5.3 autoprefixer@10.4.20
```

## HOW TO UPDATE CONTENT

Edit `src/data/portfolio.ts` for profile information, projects, skills, experience, education, achievements, workflow steps, sample articles, and recommendations. Section order, visibility, navigation, metadata and headings are in `src/data/siteConfig.ts`. Interface labels and supporting copy are in `src/data/copy.ts`. Interface labels and supporting copy are in `src/data/copy.ts`. Interface labels and supporting copy are in `src/data/copy.ts`. Interface labels and supporting copy are in `src/data/copy.ts`. Interface labels and supporting copy are in `src/data/copy.ts`. Interface labels and supporting copy are in `src/data/copy.ts`. Interface labels and supporting copy are in `src/data/copy.ts`. Interface labels and supporting copy are in `src/data/copy.ts`. Interface labels and supporting copy are in `src/data/copy.ts`. Shared interfaces live in `src/types/index.ts`.

### Add a project

Append an object to `projects`. Remove an object to remove its card. The detail dialog is generated automatically.

```ts
{
  id: 'document-assistant',
  title: 'Document Assistant',
  category: 'LLM',
  summary: 'Ask questions across a collection of documents.',
  tags: ['Python', 'FastAPI', 'RAG'],
  metric: 'Add your verified project result',
  image: '/images/document-assistant.webp',
  github: 'https://github.com/your-account/document-assistant',
  live: 'https://your-demo.vercel.app',
  problem: 'Describe the user problem.',
  approach: 'Describe the implementation.',
  architecture: ['Upload', 'Retrieval', 'Generation', 'Citations'],
  results: 'Describe measured outcomes and their test conditions.',
  accent: 'violet'
}
```

Omit `live` if no demo exists. The filter category must match an entry in `siteConfig.projectFilters`. Empty categories have a deliberate empty state.

### Add a skill

Append a name to any group's `skills` array, or add a group:

```ts
{ name: 'ML / DL', skills: ['PyTorch', 'scikit-learn'] }
```

Only add skills that accurately represent your experience.

### Add experience

```ts
{
  company: 'Company name',
  role: 'Machine Learning Engineer',
  period: 'JAN 2027 — PRESENT',
  location: 'City, Country',
  achievements: ['Describe an outcome with a verified metric.'],
  tags: ['Python', 'FastAPI']
}
```

### Colors and fonts

Change CSS tokens in `src/styles/theme.css`. `:root` is light mode and `:root.dark` is dark mode. `--accent`, `--cyan`, `--bg`, `--surface`, `--text`, and `--muted` control the palette. The font tokens are `--heading`, `--body`, and `--mono`; update the Google Fonts link in `index.html` if using different families.

### Photo and resume

The supplied portrait is stored at `public/images/nishant-sharma.jpeg` and appears in the About section. To replace it, add your image to `public/images/` and update `profile.image`, `profile.imageAlt`, and `profile.portraitCaption` in `src/data/portfolio.ts`. Photo framing is handled in CSS; the original photo is preserved. Replace `public/resume.pdf` with the updated resume; all resume buttons use `profile.resume`.

### Reorder or hide sections

Reorder the `siteConfig.sections` array. Set flags independently:

```ts
siteConfig.enabled.blog = true;
siteConfig.enabled.testimonials = false;
```

Blog and testimonials are implemented but disabled by default because no real entries were supplied. Their sample content is labeled and marked with TODO comments. Replace it before enabling these sections publicly.

### Set up the contact form

1. Create an EmailJS service and email template.
2. Set your destination email inside EmailJS. Use template variables `{{from_name}}`, `{{reply_to}}`, and `{{message}}`. Set Reply-To to `{{reply_to}}`.
3. Copy `.env.example` to `.env.local` and fill in all three `VITE_EMAILJS_*` values.
4. Restrict the EmailJS public key to your deployed origin and localhost during development; configure account spam controls.
5. Restart Vite after editing environment variables.
6. Send a real test message and confirm delivery in your inbox.

VITE-prefixed values are public client configuration; never put private API secrets in them. Without configuration the form displays an honest setup message and offers a direct mailto link. It never claims a message was sent without a successful EmailJS response.

## Deploy to Vercel

1. Push the project to your GitHub repository.
2. Import it into Vercel and choose the Vite preset.
3. Set build command `npm run build` (or `pnpm run build`) and output directory `dist`.
4. Add the three EmailJS environment variables.
5. Change the canonical domain in `src/data/siteConfig.ts`, `public/robots.txt`, and `public/sitemap.xml` to your actual deployment URL.
6. Deploy and verify resume download, project links, and email delivery.

`vercel.json` rewrites extensionless routes to the app, which displays a 404 screen for unknown paths. This is a client-side 404 page; Vercel's SPA rewrite returns HTTP 200.

## Implementation notes

- Framer Motion handles layout transitions and dialogs. GSAP handles scroll reveals and the timeline. Lenis is synchronized with ScrollTrigger and cleaned up on unmount.
- The Three.js scene and project dialog use lazy imports. Small screens, low core counts and reduced-motion preferences use a CSS illustration. WebGL failure falls back gracefully.
- Theme selection initializes before React to avoid a flash and is saved locally.
- Native dialogs provide keyboard focus containment and Escape dismissal. All form fields have visible labels.
- The Agentic Lab showcase replaces the personal repository feed. Edit `src/data/agenticLab.ts` to update its mission, MarketScout spotlight, focus areas, and links. It needs no API token or live repository request.
- Local SVG project illustrations represent the projects; they are not product screenshots.
- Lighthouse 90+ is a target, not a measured score. Run a production Lighthouse audit on the deployed domain. The lazy Three.js bundle is approximately 274 KB gzip.
- The original resume is included as a download. Review its content before publishing.

## Customization cheat sheet

| Change                           | Location                                     |
| -------------------------------- | -------------------------------------------- |
| Name, bio, contact, social links | `src/data/portfolio.ts` → `profile`          |
| Project cards and detail dialogs | `src/data/portfolio.ts` → `projects`         |
| Skills and marquee               | `src/data/portfolio.ts` → `skills`           |
| Section order, flags, headings   | `src/data/siteConfig.ts`                     |
| Colors and font tokens           | `src/styles/theme.css`                       |
| Profile image                    | `profile.image` and `public/images/`         |
| Resume                           | `public/resume.pdf`                          |
| EmailJS                          | `.env.local` or Vercel environment settings  |
| Canonical domain                 | `siteConfig.ts`, `robots.txt`, `sitemap.xml` |

The source files in this repository are the complete codebase. `CODEBASE.md` is a generated, copyable listing of all text source and configuration files; binary images and the resume remain in `public/`.
