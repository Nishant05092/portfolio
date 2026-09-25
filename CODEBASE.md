# Complete portfolio source

Run `npm install` and `npm run dev`. Production output: `npm run build` to `dist`.

Keep the included binary assets in `public/`.

## C:/Users/320314137/OneDrive - Philips/Desktop/Potfolio/.env.example

```text
VITE_EMAILJS_SERVICE_ID=
VITE_EMAILJS_TEMPLATE_ID=
VITE_EMAILJS_PUBLIC_KEY=
# Set your final canonical URL in src/data/siteConfig.ts and public/sitemap.xml
```

## C:/Users/320314137/OneDrive - Philips/Desktop/Potfolio/.gitignore

```text
node_modules
dist
.env
.env.local
*.tsbuildinfo
tmp
```

## C:/Users/320314137/OneDrive - Philips/Desktop/Potfolio/index.html

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="theme-color" content="#0a0a0f" />
    <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
    <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap"
      rel="stylesheet"
    />
    <script>
      try {
        const t = localStorage.getItem("theme");
        document.documentElement.classList.toggle(
          "dark",
          t ? t === "dark" : matchMedia("(prefers-color-scheme: dark)").matches,
        );
      } catch (e) {
        document.documentElement.classList.toggle(
          "dark",
          matchMedia("(prefers-color-scheme: dark)").matches,
        );
      }
    </script>
    <title>Nishant Sharma — AI Engineer</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
```

## C:/Users/320314137/OneDrive - Philips/Desktop/Potfolio/package.json

```json
{
  "name": "nishant-portfolio",
  "private": true,
  "version": "1.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite --host 0.0.0.0",
    "build": "tsc -b && vite build",
    "preview": "vite preview --host 0.0.0.0",
    "format": "prettier --write src index.html *.json *.js *.ts README.md"
  },
  "dependencies": {
    "@emailjs/browser": "4.4.1",
    "@react-three/drei": "9.121.4",
    "@react-three/fiber": "8.17.14",
    "framer-motion": "11.18.2",
    "gsap": "3.12.7",
    "lenis": "1.1.20",
    "lucide-react": "0.468.0",
    "react": "18.3.1",
    "react-dom": "18.3.1",
    "react-helmet-async": "2.0.5",
    "react-type-animation": "3.2.0",
    "three": "0.172.0"
  },
  "devDependencies": {
    "@types/react": "18.3.18",
    "@types/react-dom": "18.3.5",
    "@types/three": "0.172.0",
    "@vitejs/plugin-react": "4.3.4",
    "autoprefixer": "10.4.20",
    "postcss": "8.5.3",
    "tailwindcss": "3.4.17",
    "typescript": "5.7.3",
    "vite": "6.1.0",
    "prettier": "3.5.3"
  }
}
```

## C:/Users/320314137/OneDrive - Philips/Desktop/Potfolio/pnpm-workspace.yaml

```yaml
allowBuilds:
  esbuild: true
```

## C:/Users/320314137/OneDrive - Philips/Desktop/Potfolio/postcss.config.js

```js
export default { plugins: { tailwindcss: {}, autoprefixer: {} } };
```

## C:/Users/320314137/OneDrive - Philips/Desktop/Potfolio/public/favicon.svg

```xml
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><rect width="64" height="64" rx="14" fill="#111117"/><text x="10" y="43" font-size="34" font-family="sans-serif" font-weight="bold" fill="#b09af2">ns.</text></svg>
```

## C:/Users/320314137/OneDrive - Philips/Desktop/Potfolio/public/images/agents.svg

```xml
<svg xmlns="http://www.w3.org/2000/svg" width="800" height="460" viewBox="0 0 800 460"><defs><radialGradient id="g"><stop stop-color="#8554d1" stop-opacity=".22"/><stop offset="1" stop-color="#101019"/></radialGradient><pattern id="grid" width="30" height="30" patternUnits="userSpaceOnUse"><path d="M30 0H0V30" fill="none" stroke="#ffffff" stroke-opacity=".035"/></pattern></defs><rect width="800" height="460" fill="#101019"/><rect width="800" height="460" fill="url(#g)"/><rect width="800" height="460" fill="url(#grid)"/><path d="M400 230L580.0 230.0" stroke="#b699fa" stroke-opacity=".35"/><rect x="552.0" y="207.0" width="56" height="46" rx="10" fill="#211b34" stroke="#aa87e3" stroke-opacity=".7"/><circle cx="580.0" cy="230.0" r="6" fill="#bca1ef"/><path d="M400 230L527.2792206135786 336.06601717798213" stroke="#b699fa" stroke-opacity=".35"/><rect x="499.27922061357856" y="313.06601717798213" width="56" height="46" rx="10" fill="#211b34" stroke="#aa87e3" stroke-opacity=".7"/><circle cx="527.2792206135786" cy="336.06601717798213" r="6" fill="#bca1ef"/><path d="M400 230L400.0 380.0" stroke="#b699fa" stroke-opacity=".35"/><rect x="372.0" y="357.0" width="56" height="46" rx="10" fill="#211b34" stroke="#aa87e3" stroke-opacity=".7"/><circle cx="400.0" cy="380.0" r="6" fill="#bca1ef"/><path d="M400 230L272.72077938642144 336.06601717798213" stroke="#b699fa" stroke-opacity=".35"/><rect x="244.72077938642144" y="313.06601717798213" width="56" height="46" rx="10" fill="#211b34" stroke="#aa87e3" stroke-opacity=".7"/><circle cx="272.72077938642144" cy="336.06601717798213" r="6" fill="#bca1ef"/><path d="M400 230L220.0 230.00000000000003" stroke="#b699fa" stroke-opacity=".35"/><rect x="192.0" y="207.00000000000003" width="56" height="46" rx="10" fill="#211b34" stroke="#aa87e3" stroke-opacity=".7"/><circle cx="220.0" cy="230.00000000000003" r="6" fill="#bca1ef"/><path d="M400 230L272.72077938642144 123.93398282201788" stroke="#b699fa" stroke-opacity=".35"/><rect x="244.72077938642144" y="100.93398282201788" width="56" height="46" rx="10" fill="#211b34" stroke="#aa87e3" stroke-opacity=".7"/><circle cx="272.72077938642144" cy="123.93398282201788" r="6" fill="#bca1ef"/><path d="M400 230L399.99999999999994 80.0" stroke="#b699fa" stroke-opacity=".35"/><rect x="371.99999999999994" y="57.0" width="56" height="46" rx="10" fill="#211b34" stroke="#aa87e3" stroke-opacity=".7"/><circle cx="399.99999999999994" cy="80.0" r="6" fill="#bca1ef"/><path d="M400 230L527.2792206135786 123.93398282201785" stroke="#b699fa" stroke-opacity=".35"/><rect x="499.27922061357856" y="100.93398282201785" width="56" height="46" rx="10" fill="#211b34" stroke="#aa87e3" stroke-opacity=".7"/><circle cx="527.2792206135786" cy="123.93398282201785" r="6" fill="#bca1ef"/><circle cx="400" cy="230" r="57" fill="#302148" stroke="#b69be8"/><text x="400" y="226" text-anchor="middle" fill="#e9ddff" font-size="13" font-family="monospace">AGENT</text><text x="400" y="247" text-anchor="middle" fill="#baa1da" font-size="10" font-family="monospace">ORCHESTRATOR</text></svg>
```

## C:/Users/320314137/OneDrive - Philips/Desktop/Potfolio/public/images/resume.svg

```xml
<svg xmlns="http://www.w3.org/2000/svg" width="800" height="460" viewBox="0 0 800 460"><defs><radialGradient id="g"><stop stop-color="#4b8c73" stop-opacity=".22"/><stop offset="1" stop-color="#101019"/></radialGradient><pattern id="grid" width="30" height="30" patternUnits="userSpaceOnUse"><path d="M30 0H0V30" fill="none" stroke="#ffffff" stroke-opacity=".035"/></pattern></defs><rect width="800" height="460" fill="#101019"/><rect width="800" height="460" fill="url(#g)"/><rect width="800" height="460" fill="url(#grid)"/><rect x="195" y="77" width="245" height="310" rx="12" fill="#182327" stroke="#6b9b8d" stroke-opacity=".6"/><circle cx="246" cy="125" r="17" fill="#416257"/><path d="M281 115H400M281 132H361M227 170H405M227 186H387M227 221H360M227 238H405M227 255H388M227 290H405M227 307H377M227 324H393" stroke="#688c80" stroke-width="5" stroke-linecap="round"/><rect x="380" y="160" width="238" height="180" rx="13" fill="#142522" stroke="#87baa4"/><text x="410" y="195" fill="#a1cbb8" font-family="monospace" font-size="11">SCHEMA VALIDATED</text><text x="410" y="260" fill="#c0edd6" font-family="sans-serif" font-size="52">99<tspan font-size="28">%</tspan></text><path d="M410 292H581" stroke="#294e40" stroke-width="7" stroke-linecap="round"/><path d="M410 292H576" stroke="#83b99d" stroke-width="7" stroke-linecap="round"/></svg>
```

## C:/Users/320314137/OneDrive - Philips/Desktop/Potfolio/public/images/travel.svg

```xml
<svg xmlns="http://www.w3.org/2000/svg" width="800" height="460" viewBox="0 0 800 460"><defs><radialGradient id="g"><stop stop-color="#428f95" stop-opacity=".22"/><stop offset="1" stop-color="#101019"/></radialGradient><pattern id="grid" width="30" height="30" patternUnits="userSpaceOnUse"><path d="M30 0H0V30" fill="none" stroke="#ffffff" stroke-opacity=".035"/></pattern></defs><rect width="800" height="460" fill="#101019"/><rect width="800" height="460" fill="url(#g)"/><rect width="800" height="460" fill="url(#grid)"/><path d="M0 370L140 180L270 310L430 120L650 330L800 220V460H0Z" fill="#192d38"/><path d="M110 440L310 200L490 380L660 160L800 340V460H0Z" fill="#25434c"/><path d="M340 215L430 120L522 220L454 183L422 208L402 180Z" fill="#80b5bd"/><path d="M135 310Q265 95 440 290T700 200" stroke="#8ddad4" stroke-width="2" stroke-dasharray="6 8" fill="none"/><circle cx="135" cy="310" r="7" fill="#91e0d1"/><circle cx="700" cy="200" r="7" fill="#91e0d1"/><rect x="250" y="320" width="300" height="64" rx="12" fill="#101c27" stroke="#80bfc0" stroke-opacity=".5"/><text x="280" y="348" fill="#c4eeee" font-size="13" font-family="monospace">YOUR NEXT ADVENTURE</text><text x="280" y="370" fill="#8bb4b6" font-size="11" font-family="monospace">Curated by AI. Made for you.</text></svg>
```

## C:/Users/320314137/OneDrive - Philips/Desktop/Potfolio/public/robots.txt

```text
User-agent: *
Allow: /
Sitemap:
```

## C:/Users/320314137/OneDrive - Philips/Desktop/Potfolio/public/sitemap.xml

```text
<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"><url><loc>https://nishant-portfolio.vercel.app/</loc></url></urlset>
```

## C:/Users/320314137/OneDrive - Philips/Desktop/Potfolio/src/App.tsx

```tsx
import { AgenticLabShowcase } from "./components/sections/AgenticLabShowcase";
import { copy } from "./data/copy";
import { useLayoutEffect, type ComponentType } from "react";
import { Helmet } from "react-helmet-async";
import { MotionConfig } from "framer-motion";
import { Navbar, Footer, Preloader, Cursor } from "./components/layout/Layout";
import {
  Hero,
  About,
  Projects,
  AgenticShowcase,
  Skills,
  Experience,
} from "./components/sections/CoreSections";
import {
  Education,
  Certifications,
  Blog,
  Testimonials,
  Contact,
} from "./components/sections/MoreSections";
import { siteConfig } from "./data/siteConfig";
import { profile } from "./data/portfolio";
import { useReducedMotion } from "./hooks/useMediaQuery";
import { useLenis } from "./hooks/useLenis";
import { gsap, ScrollTrigger } from "./lib/gsap";
import type { SectionId } from "./types";
const sections: Record<SectionId, ComponentType> = {
  hero: Hero,
  about: About,
  projects: Projects,
  agentic: AgenticShowcase,
  skills: Skills,
  experience: Experience,
  education: Education,
  certifications: Certifications,
  blog: Blog,
  github: AgenticLabShowcase,
  testimonials: Testimonials,
  contact: Contact,
};
export default function App() {
  const reduced = useReducedMotion();
  useLenis(reduced);
  const notFound = location.pathname !== "/";
  useLayoutEffect(() => {
    if (reduced || notFound) return;
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>(".section-heading").forEach((el) =>
        gsap.from(el, {
          y: 28,
          opacity: 0,
          duration: 0.7,
          scrollTrigger: { trigger: el, start: "top 92%", once: true },
        }),
      );
      if (document.querySelector(".timeline"))
        gsap.from(".timeline-fill", {
          scaleY: 0,
          transformOrigin: "top",
          scrollTrigger: {
            trigger: ".timeline",
            start: "top 85%",
            end: "bottom 65%",
            scrub: true,
          },
        });
      if (document.querySelector(".hero-visual"))
        gsap.to(".hero-visual", {
          y: 45,
          scrollTrigger: {
            trigger: ".hero",
            start: "top top",
            end: "bottom top",
            scrub: 1,
          },
        });
    });
    const timer = setTimeout(() => ScrollTrigger.refresh(), 800);
    return () => {
      clearTimeout(timer);
      ctx.revert();
    };
  }, [reduced, notFound]);
  return (
    <MotionConfig reducedMotion="user">
      <Helmet>
        <title>{notFound ? "Page not found" : siteConfig.title}</title>
        <meta name="description" content={siteConfig.description} />
        <link rel="canonical" href={siteConfig.url} />
        <meta property="og:title" content={siteConfig.title} />
        <meta property="og:description" content={siteConfig.description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={siteConfig.url} />
        <meta
          property="og:image"
          content={`${siteConfig.url}/images/social-card.png`}
        />
        <meta name="twitter:card" content="summary_large_image" />
        {notFound && <meta name="robots" content="noindex" />}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: profile.name,
            jobTitle: "Software Engineer",
            url: siteConfig.url,
            sameAs: profile.socials.map((s) => s.url),
          })}
        </script>
      </Helmet>
      <a className="skip-link" href="#main">
        {copy.skipToContent}
      </a>
      <Preloader />
      <Navbar />
      <main id="main">
        {notFound ? (
          <div className="not-found container">
            <p className="eyebrow">{copy.label404UnchartedTerritory}</p>
            <h1>
              {copy.thisPageTook}
              <br />
              {copy.aDifferentPath}
            </h1>
            <a className="button primary" href="/">
              {copy.backToHome}
            </a>
          </div>
        ) : (
          siteConfig.sections
            .filter((id) => siteConfig.enabled[id])
            .map((id) => {
              const Section = sections[id];
              return <Section key={id} />;
            })
        )}
      </main>
      <Footer />
      <Cursor />
    </MotionConfig>
  );
}
```

## C:/Users/320314137/OneDrive - Philips/Desktop/Potfolio/src/components/layout/Layout.tsx

```tsx
import { copy } from "../../data/copy";
import {
  ArrowUpRight,
  ArrowDown,
  Download,
  Github,
  Linkedin,
  Code2,
  Sun,
  Moon,
  Menu,
  X,
  ArrowUp,
} from "lucide-react";
import { useEffect, useState } from "react";
import { AnimatePresence, motion, useScroll, useSpring } from "framer-motion";
import { profile } from "../../data/portfolio";
import { siteConfig } from "../../data/siteConfig";
import { useTheme } from "../../hooks/useTheme";
import { useScrollSpy } from "../../hooks/useScrollSpy";
export function Socials() {
  return (
    <div className="socials">
      {profile.socials.map((s, i) => (
        <a
          key={s.name}
          href={s.url}
          target="_blank"
          rel="noreferrer"
          aria-label={s.name}
        >
          {i === 0 ? (
            <Github size={18} />
          ) : i === 1 ? (
            <Linkedin size={18} />
          ) : (
            <Code2 size={18} />
          )}
        </a>
      ))}
    </div>
  );
}
export function Navbar() {
  const { dark, toggle } = useTheme();
  const [open, setOpen] = useState(false);
  const active = useScrollSpy();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
  useEffect(() => {
    const close = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, []);
  return (
    <>
      <motion.div className="scroll-progress" style={{ scaleX }} />
      <header className="navbar">
        <a href="/#hero" className="brand" aria-label={copy.nishantSharmaHome}>
          {profile.initials}
          <span>.</span>
          <i>/</i>
        </a>
        <nav aria-label={copy.mainNavigation}>
          {siteConfig.navigation
            .filter((n) => siteConfig.enabled[n.id])
            .map((n) => (
              <a
                key={n.id}
                href={`/#${n.id}`}
                className={active === n.id ? "active" : ""}
              >
                {n.label}
              </a>
            ))}
        </nav>
        <div className="nav-actions">
          <button
            className="icon-button"
            onClick={toggle}
            aria-label={`Switch to ${dark ? "light" : "dark"} theme`}
          >
            <AnimatePresence mode="wait">
              <motion.span
                key={String(dark)}
                initial={{ rotate: -60, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 60, opacity: 0 }}
              >
                {dark ? <Sun size={18} /> : <Moon size={18} />}
              </motion.span>
            </AnimatePresence>
          </button>
          <a className="button small nav-resume" href={profile.resume} download>
            {copy.resume}
            <Download size={14} />
          </a>
          <button
            className="icon-button menu-button"
            aria-label={copy.toggleNavigation}
            aria-expanded={open}
            onClick={() => setOpen(!open)}
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </header>
      <AnimatePresence>
        {open && (
          <motion.nav
            className="mobile-nav"
            aria-label={copy.mobileNavigation}
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
          >
            {siteConfig.navigation
              .filter((n) => siteConfig.enabled[n.id])
              .map((n) => (
                <a onClick={() => setOpen(false)} key={n.id} href={`/#${n.id}`}>
                  {n.label}
                  <ArrowUpRight size={18} />
                </a>
              ))}
            <a href={profile.resume} download>
              {copy.downloadResume}
              <Download size={18} />
            </a>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
}
export function Footer() {
  return (
    <footer className="container">
      <a className="brand" href="#hero">
        {profile.initials}
        <span>.</span>
      </a>
      <p>
        © {new Date().getFullYear()} {profile.name}
        <small>{siteConfig.footer}</small>
      </p>
      <Socials />
      <a className="icon-button" href="#hero" aria-label={copy.backToTop}>
        <ArrowUp size={18} />
      </a>
    </footer>
  );
}
export function Preloader() {
  const [loading, set] = useState(true);
  useEffect(() => {
    const t = setTimeout(() => set(false), 650);
    return () => clearTimeout(t);
  }, []);
  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          className="preloader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          aria-hidden="true"
        >
          <span className="brand">
            {profile.initials}
            <span>.</span>
          </span>
          <div />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
export function Cursor() {
  useEffect(() => {
    if (
      !matchMedia("(pointer:fine)").matches ||
      matchMedia("(prefers-reduced-motion:reduce)").matches
    )
      return;
    const el = document.getElementById("cursor");
    const move = (e: PointerEvent) => {
      if (el) {
        el.style.transform = `translate(${e.clientX}px,${e.clientY}px)`;
        el.style.opacity = "1";
      }
    };
    window.addEventListener("pointermove", move);
    return () => window.removeEventListener("pointermove", move);
  }, []);
  return <div id="cursor" aria-hidden="true" />;
}
export { ArrowDown };
```

## C:/Users/320314137/OneDrive - Philips/Desktop/Potfolio/src/components/sections/AgenticLabShowcase.tsx

```tsx
import {
  ArrowUpRight,
  ArrowRight,
  Github,
  Network,
  BookOpen,
  Workflow,
  ScanEye,
  FlaskConical,
  Users,
  Search,
  ChartNoAxesCombined,
  FileText,
} from "lucide-react";
import { agenticLab as lab } from "../../data/agenticLab";
import { Heading, Tags } from "../ui/Primitives";

const focusIcons = {
  agents: Network,
  knowledge: BookOpen,
  automation: Workflow,
  vision: ScanEye,
};
const researchIcons = [Search, ChartNoAxesCombined, FileText];

export function AgenticLabShowcase() {
  return (
    <section id="github" className="section container">
      <Heading id="github" description={lab.introduction} />
      <div className="lab-showcase">
        <div className="lab-banner">
          <div className="lab-identity">
            <span className="lab-symbol" aria-hidden="true">
              <FlaskConical size={24} />
            </span>
            <div>
              <h3>{lab.name}</h3>
              <a href={lab.url} target="_blank" rel="noreferrer">
                {lab.handle}
                <ArrowUpRight size={12} />
              </a>
            </div>
          </div>
          <span className="lab-category">{lab.category}</span>
        </div>
        <div className="lab-main">
          <div className="lab-intro">
            <p className="eyebrow">{lab.philosophy}</p>
            <h3>{lab.headline}</h3>
            <p className="lab-description">{lab.description}</p>
            <a
              className="button primary"
              href={lab.url}
              target="_blank"
              rel="noreferrer"
            >
              <Github size={16} />
              {lab.githubLabel}
              <ArrowUpRight size={16} />
            </a>
          </div>
          <article className="lab-project">
            <div className="lab-project-heading">
              <p className="eyebrow">{lab.project.label}</p>
              <span aria-hidden="true">01 / LAB</span>
            </div>
            <div className="lab-project-name">
              <span className="lab-project-icon" aria-hidden="true">
                <Search size={24} />
              </span>
              <div>
                <h3>{lab.project.name}</h3>
                <p>{lab.project.category}</p>
              </div>
            </div>
            <p className="lab-project-description">{lab.project.description}</p>
            <div className="lab-flow">
              <p>{lab.project.workflowLabel}</p>
              <ol>
                {lab.project.steps.map((step, i) => {
                  const Icon = researchIcons[i % researchIcons.length];
                  return (
                    <li key={step.title}>
                      <span className="lab-step-icon" aria-hidden="true">
                        <Icon size={18} />
                      </span>
                      <strong>{step.title}</strong>
                      <span>{step.description}</span>
                      {i < lab.project.steps.length - 1 && (
                        <ArrowRight
                          className="lab-flow-arrow"
                          size={13}
                          aria-hidden="true"
                        />
                      )}
                    </li>
                  );
                })}
              </ol>
            </div>
            <Tags items={lab.project.tags} />
          </article>
        </div>
        <div className="lab-focus">
          <p className="eyebrow">{lab.focusLabel}</p>
          <div className="lab-focus-grid">
            {lab.focus.map((item) => {
              const Icon = focusIcons[item.icon];
              return (
                <article key={item.title}>
                  <Icon size={20} aria-hidden="true" />
                  <h4>{item.title}</h4>
                  <p>{item.description}</p>
                </article>
              );
            })}
          </div>
        </div>
        <div className="lab-toolkit">
          <span>{lab.technologyLabel}</span>
          <Tags items={lab.technologies} />
        </div>
        <div className="lab-collaboration">
          <span className="lab-community-icon" aria-hidden="true">
            <Users size={23} />
          </span>
          <div>
            <h3>{lab.collaboration.title}</h3>
            <p>{lab.collaboration.description}</p>
          </div>
          <a href={lab.url} target="_blank" rel="noreferrer">
            {lab.collaboration.linkLabel}
            <ArrowUpRight size={17} />
          </a>
        </div>
      </div>
    </section>
  );
}
```

## C:/Users/320314137/OneDrive - Philips/Desktop/Potfolio/src/components/sections/CoreSections.tsx

```tsx
import { agenticLab } from "../../data/agenticLab";
import { copy } from "../../data/copy";
import {
  Component,
  lazy,
  Suspense,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";
import {
  ArrowUpRight,
  ArrowRight,
  ArrowDown,
  Download,
  Network,
  Braces,
  Sparkles,
  Terminal,
  Check,
  ChevronRight,
  Command,
  FlaskConical,
} from "lucide-react";
import { TypeAnimation } from "react-type-animation";
import {
  motion,
  AnimatePresence,
  useInView,
  useReducedMotion as useMotionPreference,
} from "framer-motion";
import {
  profile,
  heroBadges,
  stats,
  services,
  projects,
  skills,
  experience,
  workflow,
} from "../../data/portfolio";
import { siteConfig } from "../../data/siteConfig";
import { useMediaQuery, useReducedMotion } from "../../hooks/useMediaQuery";
import { Card, Heading, Magnetic, Tags } from "../ui/Primitives";
import { Socials } from "../layout/Layout";
import type { Project } from "../../types";
const NeuralScene = lazy(() => import("../three/NeuralScene"));
const ProjectModal = lazy(() => import("../ui/ProjectModal"));
class SceneBoundary extends Component<
  {
    children: ReactNode;
  },
  {
    failed: boolean;
  }
> {
  state = { failed: false };
  static getDerivedStateFromError() {
    return { failed: true };
  }
  render() {
    return this.state.failed ? null : this.props.children;
  }
}
function AmbientCanvas() {
  const ref = useRef<HTMLCanvasElement>(null);
  const reduced = useReducedMotion();
  useEffect(() => {
    const canvas = ref.current;
    if (!canvas || reduced) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    let frame = 0;
    let tick = 0;
    const draw = () => {
      tick++;
      const w = (canvas.width = canvas.clientWidth);
      const h = (canvas.height = canvas.clientHeight);
      ctx.clearRect(0, 0, w, h);
      for (let i = 0; i < 30; i++) {
        const x = (i * 137.5) % w;
        const y = (i * 83.3 + tick * 0.07) % h;
        ctx.fillStyle = `rgba(150,125,230,${0.15 + (i % 3) * 0.07})`;
        ctx.fillRect(x, y, 1.5, 1.5);
      }
      frame = requestAnimationFrame(draw);
    };
    frame = requestAnimationFrame(draw);
    return () => cancelAnimationFrame(frame);
  }, [reduced]);
  return <canvas className="ambient-canvas" ref={ref} aria-hidden="true" />;
}
export function Hero() {
  const desktop = useMediaQuery("(min-width: 900px)");
  const reduced = useReducedMotion();
  const cores = navigator.hardwareConcurrency || 4;
  return (
    <section id="hero" className="hero container">
      <AmbientCanvas />
      <div className="hero-copy">
        <div className="availability">
          <span />
          {profile.availability}
          <ArrowUpRight size={13} />
        </div>
        <p className="eyebrow hero-eyebrow">
          {copy.helloWorldIM}
          {profile.firstName.toUpperCase()}.
        </p>
        <h1>
          {profile.headline.map((line, i) => (
            <motion.span
              key={line}
              className={i === 1 ? "gradient-text" : ""}
              initial={reduced ? false : { opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.14, duration: 0.8 }}
            >
              {line}
            </motion.span>
          ))}
        </h1>
        <div className="role">
          <span>{copy.gt}</span>
          {reduced ? (
            <span>{profile.roles[0]}</span>
          ) : (
            <TypeAnimation
              sequence={profile.roles.flatMap((role) => [role, 2200])}
              wrapper="span"
              speed={45}
              repeat={Infinity}
            />
          )}
        </div>
        <p className="hero-description">{profile.tagline}</p>
        <div className="button-row">
          <Magnetic>
            <a className="button primary" href="#projects">
              {copy.exploreMyWork}
              <ArrowUpRight size={17} />
            </a>
          </Magnetic>
          <a className="button" href="#contact">
            {copy.letSTalk}
            <ArrowRight size={17} />
          </a>
        </div>
        <div className="hero-social">
          <Socials />
          <span className="divider" />
          <a href={profile.resume} download>
            {copy.downloadCv}
            <Download size={13} />
          </a>
        </div>
        <a
          className="hero-lab-reference"
          href={
            siteConfig.enabled.github && siteConfig.sections.includes("github")
              ? "#github"
              : agenticLab.url
          }
        >
          <span className="hero-lab-icon" aria-hidden="true">
            <FlaskConical size={17} />
          </span>
          <span>
            <strong>{agenticLab.heroReference.label}</strong>
            <span>{agenticLab.heroReference.description}</span>
          </span>
          <ArrowUpRight size={16} aria-hidden="true" />
        </a>
      </div>
      <div
        className="hero-visual"
        aria-label={copy.illustrationOfAConnectedNeuralNetwork}
      >
        <div className="orb-halo" />
        <div className="orb-ring ring-one" />
        <div className="orb-ring ring-two" />
        <div className="static-orb" />
        {desktop && !reduced && cores >= 4 && (
          <SceneBoundary>
            <Suspense fallback={null}>
              <div className="scene">
                <NeuralScene />
              </div>
            </Suspense>
          </SceneBoundary>
        )}
        <span className="orb-coordinate">{copy.sys01NeuralNetwork}</span>
        {heroBadges.map((badge, i) => (
          <div key={badge} className={`floating-badge badge-${i}`}>
            <span>
              {i === 0 ? (
                <Network size={16} />
              ) : i === 1 ? (
                <Braces size={16} />
              ) : (
                <Sparkles size={16} />
              )}
            </span>
            {badge}
          </div>
        ))}
        <div className="system-status">
          <span />
          <span>{copy.alwaysLearningAlwaysBuilding}</span>
        </div>
        <div className="orb-caption">
          {copy.humanCuriosityArtificialIntelligence}
        </div>
      </div>
      <div className="hero-bottom">
        <a href="#about">
          <span className="scroll-mouse" />
          {copy.scrollToExplore}
          <ArrowDown size={13} />
        </a>
        <span>
          <i />
          {copy.basedIn}
          {profile.location.toUpperCase()}
        </span>
      </div>
    </section>
  );
}
function Counter({
  value,
  suffix,
  prefix = "",
}: {
  value: number;
  suffix: string;
  prefix?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const visible = useInView(ref, { once: true });
  const reduced = useMotionPreference();
  const [n, set] = useState(value);
  useEffect(() => {
    if (!visible || reduced) return;
    let frame = 0;
    let start = 0;
    const loop = (time: number) => {
      if (!start) start = time;
      const progress = Math.min((time - start) / 1100, 1);
      set(Math.round(value * (1 - Math.pow(1 - progress, 3))));
      if (progress < 1) frame = requestAnimationFrame(loop);
    };
    frame = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(frame);
  }, [visible, value, reduced]);
  return (
    <span ref={ref}>
      {prefix}
      {n}
      {suffix}
    </span>
  );
}
export function About() {
  return (
    <section id="about" className="section container">
      <Heading id="about" />
      <div className="about-layout">
        <div className="about-copy">
          <div className="profile-line">
            <div className="avatar-ring">
              <img
                src={profile.image}
                alt={profile.imageAlt}
                width="64"
                height="64"
                loading="lazy"
              />
            </div>
            <div>
              <strong>{profile.name}</strong>
              <span>{copy.engineerBuilderPerpetualLearner}</span>
            </div>
          </div>
          <p>{profile.bio}</p>
          <p>{profile.bioSecondary}</p>
          <div className="focus-note">
            <span /> {profile.focus}
          </div>
        </div>
        <div className="service-list">
          {services.map((s, i) => (
            <Card key={s.title}>
              <span className="service-icon">
                {i === 0 ? <Network /> : i === 1 ? <Sparkles /> : <Braces />}
              </span>
              <div>
                <h3>{s.title}</h3>
                <p>{s.description}</p>
              </div>
              <ArrowUpRight size={17} />
            </Card>
          ))}
        </div>
      </div>
      <div className="stats">
        {stats.map((s) => (
          <div key={s.label}>
            <strong>
              <Counter value={s.value} suffix={s.suffix} prefix={s.prefix} />
            </strong>
            <span>{s.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
export function Projects() {
  const [filter, setFilter] = useState("All");
  const [selected, setSelected] = useState<Project | null>(null);
  const filtered = projects.filter(
    (p) => filter === "All" || p.category === filter,
  );
  return (
    <section id="projects" className="section container">
      <Heading id="projects" description={copy.aFewThingsIVeTakenFrom} />
      <div className="project-toolbar">
        <div className="filters" aria-label={copy.filterProjects}>
          {siteConfig.projectFilters.map((f) => (
            <button
              key={f}
              aria-pressed={filter === f}
              onClick={() => setFilter(f)}
              className={filter === f ? "selected" : ""}
            >
              {f}
              {f === "All" && (
                <span>{projects.length.toString().padStart(2, "0")}</span>
              )}
            </button>
          ))}
        </div>
        <span className="mono muted">
          {copy.selected}
          {filtered.length.toString().padStart(2, "0")}
        </span>
      </div>
      <motion.div layout className="project-grid">
        <AnimatePresence mode="popLayout">
          {filtered.map((p, i) => (
            <motion.article
              layout
              key={p.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.3 }}
              className={`project-card ${p.accent}`}
            >
              <button
                className="project-image"
                onClick={() => setSelected(p)}
                aria-label={`Read ${p.title} case study`}
              >
                <img
                  src={p.image}
                  width="800"
                  height="460"
                  loading="lazy"
                  alt={`${p.title} system illustration`}
                />
                <span className="project-number">
                  0{projects.indexOf(p) + 1}
                </span>
                <span className="project-open">
                  <ArrowUpRight size={20} />
                </span>
              </button>
              <div className="project-body">
                <p className="eyebrow">{p.category}</p>
                <button
                  className="project-title"
                  onClick={() => setSelected(p)}
                >
                  <h3>{p.title}</h3>
                  <ArrowUpRight size={18} />
                </button>
                <p>{p.summary}</p>
                <Tags items={p.tags} />
                <div className="project-bottom">
                  <span>
                    <span className="mini-dot" />
                    {p.metric}
                  </span>
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`${p.title} source code`}
                  >
                    <Braces size={18} />
                  </a>
                  {p.live && (
                    <a
                      href={p.live}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`${p.title} live demo`}
                    >
                      <ArrowUpRight size={18} />
                    </a>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </AnimatePresence>
      </motion.div>
      {!filtered.length && (
        <div className="empty-state">
          <Network />
          <h3>{copy.moreExperimentsOnTheHorizon}</h3>
          <p>
            {copy.noPublished}
            {filter}
            {copy.projectsYetExploreTheOtherCategories}
          </p>
          <button className="button" onClick={() => setFilter("All")}>
            {copy.viewAllProjects}
            <ArrowRight size={16} />
          </button>
        </div>
      )}
      <AnimatePresence>
        {selected && (
          <Suspense
            fallback={
              <div className="loading-notice" role="status">
                {copy.openingCaseStudy}
              </div>
            }
          >
            <ProjectModal
              project={selected}
              onClose={() => setSelected(null)}
            />
          </Suspense>
        )}
      </AnimatePresence>
    </section>
  );
}
export function AgenticShowcase() {
  const [active, set] = useState(0);
  const [running, setRunning] = useState(false);
  useEffect(() => {
    if (!running) return;
    const timer = setTimeout(() => {
      if (active === workflow.length - 1) setRunning(false);
      else set(active + 1);
    }, 1200);
    return () => clearTimeout(timer);
  }, [running, active]);
  return (
    <section id="agentic" className="section container">
      <Heading
        id="agentic"
        description={copy.intelligenceGetsInterestingWhenSystemsCanPlan}
      />
      <div className="agent-panel">
        <div className="agent-top">
          <span>
            <Network size={16} />
            {copy.theAgentWorkbench}
          </span>
          <span className="live-label">
            <i />
            {copy.interactiveDemo}
          </span>
        </div>
        <div className="workflow">
          {workflow.map((s, i) => (
            <div className="workflow-wrap" key={s.name}>
              <button
                className={`workflow-node ${active === i ? "is-active" : ""} ${i < active ? "is-done" : ""}`}
                onClick={() => {
                  setRunning(false);
                  set(i);
                }}
                aria-pressed={active === i}
              >
                <span className="node-index">
                  {i < active ? (
                    <Check size={18} />
                  ) : (
                    ["01", "02", "03", "04", "05"][i]
                  )}
                </span>
                <strong>{s.name}</strong>
              </button>
              {i < workflow.length - 1 && (
                <ChevronRight className="workflow-arrow" size={16} />
              )}
            </div>
          ))}
        </div>
        <div className="agent-detail">
          <div>
            <p className="eyebrow">
              {String(active + 1).padStart(2, "0")} /{" "}
              {workflow[active].name.toUpperCase()}
            </p>
            <h3>{workflow[active].description}</h3>
            <p>{copy.aSimplifiedIllustrationOfAnAgentWorkflow}</p>
            <button
              className="button small"
              disabled={running}
              onClick={() => {
                set(0);
                setRunning(true);
              }}
            >
              {running ? "Running simulation…" : "Run the workflow"}
              <ArrowRight size={15} />
            </button>
          </div>
          <div className="terminal">
            <div>
              <span className="terminal-dots">
                <i />
                <i />
                <i />
              </span>
              <span>{copy.agentRuntimePy}</span>
              <Terminal size={13} />
            </div>
            <code>
              <span className="muted">{copy.simulatedExecutionLog}</span>
              <br />
              <span className="terminal-purple">$</span>
              {copy.agentRunQuery}
              <br />
              {workflow.slice(0, active + 1).map((s, i) => (
                <span className="log-line" key={s.name}>
                  <span className="terminal-green">✓</span> [
                  {s.name.toLowerCase()}] {s.output}
                  <br />
                </span>
              ))}
              <span className="terminal-caret">▌</span>
            </code>
          </div>
        </div>
      </div>
    </section>
  );
}
export function Skills() {
  const marquee = skills.flatMap((g) => g.skills).slice(0, 12);
  return (
    <section id="skills" className="section container">
      <Heading
        id="skills"
        description={copy.aPracticalToolkitForTakingAnIdea}
      />
      <div className="skills-grid">
        {skills.map((group, i) => (
          <Card key={group.name}>
            <div className="skill-heading">
              <Command size={17} />
              <h3>{group.name}</h3>
              <span>0{i + 1}</span>
            </div>
            <Tags items={group.skills} />
          </Card>
        ))}
      </div>
      <div className="marquee" aria-label={copy.technologyStack}>
        <div>
          {[...marquee, ...marquee].map((s, i) => (
            <span key={i} aria-hidden={i >= marquee.length}>
              {s}
              <i>✳</i>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
export function Experience() {
  return (
    <section id="experience" className="section container">
      <Heading id="experience" />
      <div className="timeline">
        <div className="timeline-track">
          <div className="timeline-fill" />
        </div>
        {experience.map((e) => (
          <div className="experience-row" key={e.company + e.period}>
            <div className="experience-date">
              <span className="timeline-dot" />
              <p className="mono">{e.period}</p>
              <span>{e.location}</span>
            </div>
            <Card>
              <div className="experience-title">
                <div>
                  <h3>{e.company}</h3>
                  <p>{e.role}</p>
                </div>
                <span className="company-mark">{e.company.toUpperCase()}</span>
              </div>
              <ul>
                {e.achievements.map((a) => (
                  <li key={a}>{a}</li>
                ))}
              </ul>
              <Tags items={e.tags} />
            </Card>
          </div>
        ))}
      </div>
    </section>
  );
}
```

## C:/Users/320314137/OneDrive - Philips/Desktop/Potfolio/src/components/sections/MoreSections.tsx

```tsx
import { copy } from "../../data/copy";
import { useState, type FormEvent } from "react";
import {
  ArrowUpRight,
  MapPin,
  Phone,
  GraduationCap,
  Award,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import emailjs from "@emailjs/browser";
import {
  profile,
  education,
  credentials,
  articles,
  testimonials,
} from "../../data/portfolio";
import { Card, Heading } from "../ui/Primitives";
import { Socials } from "../layout/Layout";
export function Education() {
  return (
    <section id="education" className="section container">
      <Heading id="education" />
      {education.map((e) => (
        <Card key={`${e.institution}-${e.period}`} className="education-card">
          <GraduationCap size={30} />
          <div>
            <p className="eyebrow">{e.period}</p>
            <h3>{e.institution}</h3>
            <p>{e.degree}</p>
          </div>
          <span className="score">{e.score}</span>
        </Card>
      ))}
    </section>
  );
}
export function Certifications() {
  return (
    <section id="certifications" className="section container">
      <Heading id="certifications" />
      <div className="three-grid">
        {credentials.map((c) => (
          <Card key={c.title}>
            <Award className="accent" size={25} />
            <p className="eyebrow">{c.issuer}</p>
            <h3>{c.title}</h3>
            <p>{c.detail}</p>
            {c.url && (
              <a
                className="text-link"
                href={c.url}
                target="_blank"
                rel="noreferrer"
              >
                {copy.viewProfile}
                <ArrowUpRight size={16} />
              </a>
            )}
          </Card>
        ))}
      </div>
    </section>
  );
}
export function Blog() {
  return (
    <section id="blog" className="section container">
      <Heading id="blog" />
      <div className="three-grid">
        {articles.map((a) => (
          <Card key={a.title}>
            <p className="eyebrow">{a.category}</p>
            <h3>{a.title}</h3>
            <p>
              {a.date}
              {a.sample ? " · Sample content" : ""}
            </p>
            <a
              className="text-link"
              href={a.url}
              target="_blank"
              rel="noreferrer"
            >
              {copy.explore}
              <ArrowUpRight size={16} />
            </a>
          </Card>
        ))}
      </div>
    </section>
  );
}
export function Testimonials() {
  const [index, set] = useState(0);
  const t = testimonials[index];
  return (
    <section id="testimonials" className="section container">
      <Heading id="testimonials" />
      <Card>
        <blockquote>“{t.quote}”</blockquote>
        {t.name && <h3>{t.name}</h3>}
        <p>{t.role}</p>
        <div className="button-row">
          <button
            className="icon-button"
            aria-label={copy.previousRecommendation}
            onClick={() =>
              set((index - 1 + testimonials.length) % testimonials.length)
            }
          >
            <ChevronLeft />
          </button>
          <button
            className="icon-button"
            aria-label={copy.nextRecommendation}
            onClick={() => set((index + 1) % testimonials.length)}
          >
            <ChevronRight />
          </button>
        </div>
      </Card>
    </section>
  );
}
export function Contact() {
  const [status, set] = useState("");
  const [sending, setSending] = useState(false);
  const configured = Boolean(
    import.meta.env.VITE_EMAILJS_SERVICE_ID &&
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID &&
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
  );
  async function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    if (!form.reportValidity()) return;
    if (!configured) {
      set(
        "Email delivery is not configured yet. Please use the email link to get in touch.",
      );
      return;
    }
    setSending(true);
    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form,
        { publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY },
      );
      set("Message sent. Thanks for reaching out!");
      form.reset();
    } catch {
      set(
        "Your message could not be sent. Please try again or email me directly.",
      );
    } finally {
      setSending(false);
    }
  }
  return (
    <section id="contact" className="section container">
      <div className="contact-panel">
        <div>
          <p className="eyebrow">{copy.label11SayHello}</p>
          <h2>
            {copy.letSBuild}
            <br />
            {copy.something}
            <span className="gradient-text">{copy.meaningful}</span>
          </h2>
          <p>{copy.haveAnInterestingProblemAnOpportunityOr}</p>
          <a className="contact-email" href={`mailto:${profile.email}`}>
            {profile.email}
            <ArrowUpRight size={22} />
          </a>
          <div className="contact-details">
            <span>
              <MapPin size={15} />
              {profile.location}
            </span>
            <a href={`tel:${profile.phone.replace(/\s/g, "")}`}>
              <Phone size={15} />
              {profile.phone}
            </a>
          </div>
          <Socials />
        </div>
        <form onSubmit={submit}>
          <div className="form-row">
            <label>
              {copy.yourName}
              <input
                name="from_name"
                autoComplete="name"
                required
                minLength={2}
                maxLength={100}
                placeholder={copy.alexMorgan}
              />
            </label>
            <label>
              {copy.emailAddress}
              <input
                name="reply_to"
                type="email"
                autoComplete="email"
                required
                maxLength={254}
                placeholder={copy.alexCompanyCom}
              />
            </label>
          </div>
          <label>
            {copy.whatSOnYourMind}
            <textarea
              name="message"
              rows={5}
              required
              minLength={10}
              maxLength={5000}
              placeholder={copy.tellMeALittleAboutYourIdea}
            />
          </label>
          <button className="button primary" disabled={sending} type="submit">
            {sending ? "Sending…" : "Send a message"}
            <ArrowUpRight size={17} />
          </button>
          <p className="form-note">
            {configured
              ? "Delivered with EmailJS."
              : "Email delivery setup is pending. You can email me directly."}
          </p>
          {status && (
            <div className="toast" role="status">
              {status}
              <button
                type="button"
                onClick={() => set("")}
                aria-label={copy.dismissNotification}
              >
                ×
              </button>
            </div>
          )}
        </form>
      </div>
    </section>
  );
}
```

## C:/Users/320314137/OneDrive - Philips/Desktop/Potfolio/src/components/three/NeuralScene.tsx

```tsx
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import { useMemo, useRef } from "react";
import type { Group } from "three";
function Network() {
  const ref = useRef<Group>(null);
  const { positions, edges } = useMemo(() => {
    const points: [number, number, number][] = [];
    for (let i = 0; i < 180; i++) {
      const y = 1 - (i / 179) * 2;
      const r = Math.sqrt(1 - y * y);
      const a = i * 2.399963;
      points.push([Math.cos(a) * r * 2, y * 2, Math.sin(a) * r * 2]);
    }
    const lines: number[] = [];
    points.forEach((p, i) =>
      points.slice(i + 1).forEach((q) => {
        if (Math.hypot(p[0] - q[0], p[1] - q[1], p[2] - q[2]) < 0.57)
          lines.push(...p, ...q);
      }),
    );
    return {
      positions: new Float32Array(points.flat()),
      edges: new Float32Array(lines),
    };
  }, []);
  useFrame((_, dt) => {
    if (ref.current) ref.current.rotation.y += dt * 0.055;
  });
  return (
    <group ref={ref} rotation={[0.2, 0, -0.18]}>
      <Points positions={positions} stride={3}>
        <PointMaterial
          transparent
          color="#baa2ff"
          size={0.035}
          sizeAttenuation
          depthWrite={false}
        />
      </Points>
      <lineSegments>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[edges, 3]} />
        </bufferGeometry>
        <lineBasicMaterial color="#9875dc" transparent opacity={0.24} />
      </lineSegments>
    </group>
  );
}
export default function NeuralScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 5.8], fov: 48 }}
      dpr={[1, 1.5]}
      gl={{ alpha: true, antialias: false, powerPreference: "low-power" }}
    >
      <Network />
    </Canvas>
  );
}
```

## C:/Users/320314137/OneDrive - Philips/Desktop/Potfolio/src/components/ui/Primitives.tsx

```tsx
import { useRef, type ReactNode } from "react";
import { motion } from "framer-motion";
import { siteConfig } from "../../data/siteConfig";
import type { SectionId } from "../../types";
export function Heading({
  id,
  description,
}: {
  id: SectionId;
  description?: string;
}) {
  return (
    <div className="section-heading">
      <div>
        <p className="eyebrow">{siteConfig.eyebrows[id]}</p>
        <h2>{siteConfig.labels[id]}</h2>
      </div>
      {description && <p className="section-description">{description}</p>}
    </div>
  );
}
export function Card({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  return (
    <motion.div
      ref={ref}
      className={`glass-card ${className}`}
      onPointerMove={(e) => {
        const r = e.currentTarget.getBoundingClientRect();
        e.currentTarget.style.setProperty(
          "--mouse-x",
          `${e.clientX - r.left}px`,
        );
        e.currentTarget.style.setProperty(
          "--mouse-y",
          `${e.clientY - r.top}px`,
        );
      }}
    >
      {children}
    </motion.div>
  );
}
export function Tags({ items }: { items: string[] }) {
  return (
    <div className="tags">
      {items.map((t) => (
        <span key={t}>{t}</span>
      ))}
    </div>
  );
}
export function Magnetic({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLSpanElement>(null);
  return (
    <span
      className="magnetic"
      ref={ref}
      onPointerMove={(e) => {
        if (
          !matchMedia("(pointer:fine)").matches ||
          matchMedia("(prefers-reduced-motion:reduce)").matches
        )
          return;
        const r = e.currentTarget.getBoundingClientRect();
        if (ref.current)
          ref.current.style.transform = `translate(${(e.clientX - r.left - r.width / 2) * 0.1}px,${(e.clientY - r.top - r.height / 2) * 0.1}px)`;
      }}
      onPointerLeave={() => {
        if (ref.current) ref.current.style.transform = "translate(0,0)";
      }}
    >
      {children}
    </span>
  );
}
```

## C:/Users/320314137/OneDrive - Philips/Desktop/Potfolio/src/components/ui/ProjectModal.tsx

```tsx
import { copy } from "../../data/copy";
import { useEffect, useRef } from "react";
import { X, ArrowUpRight, Github } from "lucide-react";
import { motion } from "framer-motion";
import type { Project } from "../../types";
import { Tags } from "./Primitives";
export default function ProjectModal({
  project,
  onClose,
}: {
  project: Project;
  onClose: () => void;
}) {
  const ref = useRef<HTMLDialogElement>(null);
  useEffect(() => {
    const dialog = ref.current;
    const previous = document.activeElement as HTMLElement;
    dialog?.showModal();
    const old = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      dialog?.close();
      document.body.style.overflow = old;
      previous?.focus();
    };
  }, []);
  return (
    <dialog
      ref={ref}
      className="project-modal"
      data-lenis-prevent
      onCancel={(e) => {
        e.preventDefault();
        onClose();
      }}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      aria-labelledby="project-title"
    >
      <motion.article
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <button
          autoFocus
          className="icon-button modal-close"
          onClick={onClose}
          aria-label={copy.closeProjectDetails}
        >
          <X />
        </button>
        <img src={project.image} alt="" width="800" height="460" />
        <div className="modal-content">
          <p className="eyebrow">
            {project.category}
            {copy.caseStudy}
          </p>
          <h2 id="project-title">{project.title}</h2>
          <Tags items={project.tags} />
          {[
            ["The problem", project.problem],
            ["The approach", project.approach],
            ["The outcome", project.results],
          ].map(([title, text]) => (
            <div className="case-block" key={title}>
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
          ))}
          <h3>{copy.architecture}</h3>
          <ol className="architecture">
            {project.architecture.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ol>
          <div className="button-row">
            <a
              className="button primary"
              href={project.github}
              target="_blank"
              rel="noreferrer"
            >
              <Github size={16} />
              {copy.viewSource}
            </a>
            {project.live && (
              <a
                className="button"
                href={project.live}
                target="_blank"
                rel="noreferrer"
              >
                {copy.liveProject}
                <ArrowUpRight size={16} />
              </a>
            )}
          </div>
        </div>
      </motion.article>
    </dialog>
  );
}
```

## C:/Users/320314137/OneDrive - Philips/Desktop/Potfolio/src/data/agenticLab.ts

```ts
import type { LabShowcase } from "../types";

// Source: the supplied Agentic Lab README. The GitHub handle differs from the display name.
export const agenticLab: LabShowcase = {
  heroReference: {
    label: "Explore Agentic Lab",
    description: "A community building practical AI.",
  },
  name: "Agentic Lab",
  handle: "@Agenticlabs2",
  url: "https://github.com/Agenticlabs2",
  category: "COLLABORATIVE AI ENGINEERING",
  introduction:
    "A shared space for turning emerging AI ideas into useful, real-world applications.",
  headline: "Real problems. Shared curiosity. Practical AI.",
  description:
    "Agentic Lab brings together engineers, researchers, and builders to develop intelligent systems — combining research, experimentation, and software engineering.",
  philosophy: "Think. Build. Automate. Evolve.",
  githubLabel: "Explore the lab on GitHub",
  focusLabel: "WHAT WE EXPLORE",
  focus: [
    {
      title: "Agents that collaborate",
      description:
        "AI agents, multi-agent systems, tool calling, and coordinated workflows.",
      icon: "agents",
    },
    {
      title: "Knowledge that connects",
      description:
        "LLM applications, RAG, enterprise knowledge assistants, and grounded answers.",
      icon: "knowledge",
    },
    {
      title: "Workflows that deliver",
      description:
        "Intelligent automation, document processing, and full-stack AI applications.",
      icon: "automation",
    },
    {
      title: "Models with a purpose",
      description:
        "Computer vision, machine learning, data science, and AI-powered analytics.",
      icon: "vision",
    },
  ],
  technologyLabel: "THE LAB TOOLKIT",
  technologies: [
    "Python",
    "PyTorch",
    "LangGraph",
    "LangChain",
    "Hugging Face",
    "FAISS",
    "FastAPI",
    "React",
    "Docker",
  ],
  project: {
    label: "PROJECT SPOTLIGHT",
    name: "MarketScout",
    category: "MULTI-AGENT MARKET RESEARCH",
    description:
      "Specialized AI agents collaborate to gather information, analyze findings, and generate market research reports. A practical exploration of what agentic systems can do together.",
    workflowLabel: "RESEARCH FLOW / CONCEPT OVERVIEW",
    steps: [
      { title: "Gather", description: "Collect information" },
      { title: "Analyze", description: "Connect the findings" },
      { title: "Report", description: "Bring insights together" },
    ],
    tags: ["Multi-agent systems", "LLMs", "Market research"],
  },
  collaboration: {
    title: "Good ideas get better together.",
    description:
      "A space for AI engineers, developers, researchers, designers, and curious builders to experiment, contribute, and learn by building.",
    linkLabel: "Connect with Agentic Lab",
  },
};
```

## C:/Users/320314137/OneDrive - Philips/Desktop/Potfolio/src/data/copy.ts

```ts
// Editable interface labels and supporting copy. Profile and project content live in portfolio.ts.
export const copy = {
  nishantSharmaHome: "Nishant Sharma home",
  mainNavigation: "Main navigation",
  resume: "Resume ",
  toggleNavigation: "Toggle navigation",
  mobileNavigation: "Mobile navigation",
  downloadResume: "Download resume",
  backToTop: "Back to top",
  helloWorldIM: "HELLO, WORLD. I’M ",
  gt: ">_",
  exploreMyWork: "Explore my work ",
  letSTalk: "Let’s talk ",
  downloadCv: "Download CV ",
  illustrationOfAConnectedNeuralNetwork:
    "Illustration of a connected neural network",
  sys01NeuralNetwork: "SYS.01 / NEURAL NETWORK",
  alwaysLearningAlwaysBuilding: "Always learning. Always building.",
  humanCuriosityArtificialIntelligence:
    "HUMAN CURIOSITY × ARTIFICIAL INTELLIGENCE",
  scrollToExplore: "SCROLL TO EXPLORE ",
  basedIn: " BASED IN ",
  engineerBuilderPerpetualLearner: "Engineer. Builder. Perpetual learner.",
  aFewThingsIVeTakenFrom:
    "A few things I’ve taken from “what if” to working software.",
  filterProjects: "Filter projects",
  selected: "SELECTED / ",
  moreExperimentsOnTheHorizon: "More experiments on the horizon.",
  noPublished: "No published ",
  projectsYetExploreTheOtherCategories:
    " projects yet. Explore the other categories.",
  viewAllProjects: "View all projects",
  openingCaseStudy: "Opening case study…",
  intelligenceGetsInterestingWhenSystemsCanPlan:
    "Intelligence gets interesting when systems can plan, use tools, and check their own work.",
  theAgentWorkbench: " THE AGENT WORKBENCH",
  interactiveDemo: "INTERACTIVE DEMO",
  aSimplifiedIllustrationOfAnAgentWorkflow:
    "A simplified illustration of an agent workflow. Select a step to look inside.",
  agentRuntimePy: "agent_runtime.py",
  simulatedExecutionLog: "# simulated execution log",
  agentRunQuery: " agent.run(query)",
  aPracticalToolkitForTakingAnIdea:
    "A practical toolkit for taking an idea all the way to production.",
  technologyStack: "Technology stack",
  viewProfile: "View profile",
  explore: "Explore",
  experimentsSideQuestsAndTheCodeBehind:
    "Experiments, side quests, and the code behind the ideas.",
  loadingRecentRepositories: "Loading recent repositories…",
  theCodeIsStillThere: "The code is still there.",
  liveActivityIsUnavailableRightNowExplore:
    "Live activity is unavailable right now. Explore my repositories on GitHub.",
  allRepositories: "All repositories",
  previousRecommendation: "Previous recommendation",
  nextRecommendation: "Next recommendation",
  label11SayHello: "11 / SAY HELLO",
  letSBuild: "Let’s build",
  something: "something ",
  meaningful: "meaningful.",
  haveAnInterestingProblemAnOpportunityOr:
    "Have an interesting problem, an opportunity, or just a good idea? I’d love to hear it.",
  yourName: "Your name",
  alexMorgan: "Alex Morgan",
  emailAddress: "Email address",
  alexCompanyCom: "alex@company.com",
  whatSOnYourMind: "What’s on your mind?",
  tellMeALittleAboutYourIdea: "Tell me a little about your idea…",
  dismissNotification: "Dismiss notification",
  closeProjectDetails: "Close project details",
  caseStudy: " / CASE STUDY",
  architecture: "Architecture",
  viewSource: "View source",
  liveProject: "Live project",
  skipToContent: "Skip to content",
  label404UnchartedTerritory: "404 / UNCHARTED TERRITORY",
  thisPageTook: "This page took",
  aDifferentPath: "a different path.",
  backToHome: "Back to home ↗",
};
```

## C:/Users/320314137/OneDrive - Philips/Desktop/Potfolio/src/data/portfolio.ts

```ts
import type {
  Article,
  Credential,
  Education,
  Experience,
  Project,
  Service,
  SkillGroup,
  Stat,
  Testimonial,
  WorkflowStep,
} from "../types";
export const profile = {
  name: "Nishant Sharma",
  firstName: "Nishant",
  initials: "ns",
  roles: [
    "AI Engineer",
    "Agentic AI Builder",
    "ML Engineer",
    "LLM Systems Architect",
  ],
  location: "Pune, India",
  email: "nishant.jpis@gmail.com",
  phone: "+91 9811480183",
  github: "Nishant05092",
  resume: "/resume.pdf",
  image: "/images/nishant-sharma.jpeg",
  imageAlt: "Portrait of Nishant Sharma",
  portraitCaption: "Engineer. Builder. Curious mind.",
  availability: "Let’s talk AI & opportunities",
  headline: ["Building intelligence.", "Engineering impact."],
  tagline:
    "I turn complex problems into intelligent systems. From autonomous agents to production-ready applications — built with purpose, shipped with care.",
  bio: "I’m Nishant, a software engineer exploring the space where AI meets real-world impact. At Philips, I build systems that help people work better. Outside of work, I turn ambitious ideas into reliable, thoughtful products.",
  bioSecondary:
    "My approach is simple: stay curious, go deep, and build things that work beyond the demo. I care about grounded answers, clear architecture, and the details that make an experience feel right.",
  focus: "Currently exploring multi-agent systems & reliable AI.",
  socials: [
    { name: "GitHub", url: "https://github.com/Nishant05092" },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/nishant-sharma-336800296/",
    },
    { name: "LeetCode", url: "https://leetcode.com/u/Nishant05092/" },
  ],
};
export const heroBadges = ["LangGraph", "Python", "RAG pipelines"];
export const stats: Stat[] = [
  { value: 2, suffix: "", label: "Engineering internships" },
  { value: 200, suffix: "+", label: "Users supported at Philips" },
  { value: 450, suffix: "+", label: "DSA problems solved" },
  { value: 7, prefix: "Top ", suffix: "", label: "National hackathon finish" },
];
export const services: Service[] = [
  {
    title: "Agentic systems",
    description: "Purpose-built agents that plan, collaborate, and act.",
  },
  {
    title: "Grounded LLM apps",
    description: "Retrieval, citations, and guardrails you can trust.",
  },
  {
    title: "Full-stack engineering",
    description: "Thoughtful interfaces. Reliable APIs. End-to-end ownership.",
  },
];
export const projects: Project[] = [
  {
    id: "knowledge-agents",
    title: "Product Knowledge AI",
    category: "Agentic AI",
    summary:
      "An eight-agent team turning product documentation into grounded, cited answers.",
    tags: ["LangGraph", "FastAPI", "FAISS", "Python"],
    metric: "8 agents. One reliable answer.",
    image: "/images/agents.svg",
    github: "https://github.com/Nishant0510/AI-AGENT",
    problem:
      "Complex product documentation makes it difficult to find a precise, traceable answer.",
    approach:
      "Orchestrated eight agents with LangGraph, adding a dedicated security layer before retrieval and evaluating confidence before generating responses.",
    architecture: [
      "Security guardrail",
      "Document ingestion",
      "FAISS retrieval",
      "Confidence evaluation",
      "Grounded generation",
      "Cited response",
    ],
    results:
      "Delivered an /ask API with document, page, chunk-ID and similarity-score citations. Tested chunking, embedding, orchestration, and security with pytest.",
    accent: "violet",
  },
  {
    id: "plan-my-trip",
    title: "PlanMyTrips",
    category: "LLM",
    summary:
      "Less planning, more exploring. Personal travel itineraries, powered by AI.",
    tags: ["React", "FastAPI", "LLaMA 3", "PostgreSQL"],
    metric: "200ms average API latency",
    image: "/images/travel.svg",
    github: "https://github.com/Nishant05092/PlanMyTrip",
    live: "https://plan-my-trip-ruby.vercel.app/",
    problem:
      "Planning a trip requires combining fragmented information into a practical itinerary.",
    approach:
      "Built a React experience for itinerary generation and editing, backed by async FastAPI endpoints and a RAG pipeline over 300+ structured records.",
    architecture: [
      "React client",
      "FastAPI endpoints",
      "Structured retrieval",
      "LLaMA 3 / Groq",
      "PostgreSQL",
    ],
    results:
      "Load-tested at 1,000+ requests/day equivalent with 200ms average latency.",
    accent: "cyan",
  },
  {
    id: "resume-engine",
    title: "Resume Evaluation Engine",
    category: "ML",
    summary:
      "From unstructured resumes to structured, reproducible evaluations.",
    tags: ["Python", "Pydantic", "LLM APIs", "GitHub API"],
    metric: "99% schema conformance",
    image: "/images/resume.svg",
    github: "https://github.com/Nishant05092/Resume_Screening",
    problem:
      "Resume evaluation needs consistent structured data and useful context beyond a PDF.",
    approach:
      "Created an LLM parsing pipeline with Pydantic validation, GitHub enrichment, fairness-aware evaluation, and cached provider-independent scoring.",
    architecture: [
      "PDF extraction",
      "LLM parsing",
      "Pydantic validation",
      "GitHub enrichment",
      "Reproducible scoring",
    ],
    results:
      "99% schema conformance on evaluated outputs; enriched 1,000+ repositories and reduced re-evaluation latency by 70%.",
    accent: "mint",
  },
];
export const skills: SkillGroup[] = [
  { name: "Languages", skills: ["Python", "C++", "JavaScript", "SQL"] },
  {
    name: "LLMs & GenAI",
    skills: ["RAG", "LLM APIs", "Prompt engineering", "Vector search"],
  },
  {
    name: "Agentic frameworks",
    skills: ["LangGraph", "LangChain", "Multi-agent systems"],
  },
  {
    name: "Vector & data",
    skills: ["FAISS", "PostgreSQL", "MySQL", "MongoDB"],
  },
  {
    name: "Backend & web",
    skills: ["FastAPI", "React", "Node.js", "REST APIs", "WebSockets"],
  },
  {
    name: "Cloud & quality",
    skills: [
      "Docker",
      "GitHub Actions",
      "pytest",
      "Postman",
      "AWS EC2 / S3 (basic)",
    ],
  },
  {
    name: "Foundations",
    skills: [
      "Data structures",
      "Algorithms",
      "OOP",
      "DBMS",
      "Operating systems",
    ],
  },
];
export const experience: Experience[] = [
  {
    company: "Philips - HealthCare Innovation Center",
    role: "Software Developer Intern · Level 1",
    period: "MAR 2026 — PRESENT",
    location: "Healthcare Innovation Center · Pune",
    achievements: [
      "Built a scalable Python / FastAPI asset booking backend for 800+ pieces of lab equipment and 200+ users.",
      "Automated cross-functional approvals, reminders, and escalations, cutting turnaround from 1–2 weeks to 3–4 days.",
      "Completed learning programs in software development, GitHub Actions / CI/CD, and AI Ninja Yellow Belt.",
    ],
    tags: ["Python", "FastAPI", "Automation", "CI/CD"],
  },
  {
    company: "NIT Kurukshetra",
    role: "Machine Learning Intern",
    period: "MAY 2025 — JUL 2025",
    location: "Kurukshetra, India",
    achievements: [
      "Developed a Transformer-based multimodal model using transfer learning, achieving 95% precision on a custom dataset of 3,000+ plant images with environmental metadata.",
      "Built a Python evaluation framework using scikit-learn and Matplotlib to automate benchmarking across accuracy, precision, recall, and F1-score metrics.",
      "Deployed the application on Vercel with secure backend APIs and implemented CI/CD workflows using Git and GitHub.",
    ],
    tags: [
      "Python",
      "Transformers",
      "scikit-learn",
      "Matplotlib",
      "Vercel",
      "CI/CD",
    ],
  },
];
export const education: Education[] = [
  {
    institution: "IIIT Bhagalpur",
    degree: "B.Tech · Mechatronics & Automation Engineering",
    period: "2023 — 2027",
    score: "8.36 CGPA",
  },
  {
    institution: "JP International School",
    degree: "Class 12 · Physics, Chemistry & Mathematics (PCM)",
    period: "2021 — 2022",
    score: "90%",
  },
  {
    institution: "JP International School",
    degree: "Class 10",
    period: "2019 — 2020",
    score: "94%",
  },
];
export const credentials: Credential[] = [
  {
    title: "LeetCode Knight",
    issuer: "COMPETITIVE PROGRAMMING",
    detail:
      "Peak rating 1860. Top 3% in Weekly Contest 485; 450+ problems solved.",
    url: "https://leetcode.com/u/Nishant05092/",
  },
  {
    title: "Hack4Bihar Finalist",
    issuer: "NATIONAL HACKATHON · 2025",
    detail:
      "Led a team to a top 7 finish among 1,000+ participants with an AI-powered waste management system.",
  },
  {
    title: "AI Ninja Yellow Belt",
    issuer: "PHILIPS LEARNING",
    detail:
      "Completed internal learning in AI alongside software development and CI/CD programs.",
  },
];
export const workflow: WorkflowStep[] = [
  {
    name: "Planner",
    description: "Break the request into a clear, actionable plan.",
    output: "Plan created → retrieve product documentation.",
  },
  {
    name: "Tools",
    description: "Retrieve evidence from a searchable knowledge base.",
    output: "FAISS search → relevant document chunks retrieved.",
  },
  {
    name: "Memory",
    description: "Keep relevant context connected across steps.",
    output: "Context updated → evidence and conversation retained.",
  },
  {
    name: "Executor",
    description: "Compose a response grounded in the available evidence.",
    output: "Response drafted → sources attached to each claim.",
  },
  {
    name: "Evaluator",
    description: "Check grounding and confidence before responding.",
    output: "Evaluation complete → cited response ready for review.",
  },
];
// TODO: replace example editorial entries with your published articles, then enable blog.
export const articles: Article[] = [
  {
    title: "The Rise of Multimodal AI",
    category: " AI Knowledge",
    date: "Artificial Intelligence has come a long way — from early rule-based systems to powerful deep learning models that surpass human-level performance in specific tasks. One of the most exciting advancements pushing the frontiers of AI today is multimodal AI ",
    url: "https://medium.com/@sherlock75664/the-rise-of-multimodal-ai-from-foundations-to-cutting-edge-innovations-164a0ca38807",
    sample: false,
  },
  {
    title: "The Billion-Dollar Lab Building Tomorrow’s Superintelligence",
    category: " AI Knowledge",
    date: "In early July 2025, Mark Zuckerberg officially launched “Meta Superintelligence Labs (MSL), unifying the company’s FAIR team, Llama model developers, and AI product units into one high-stakes division designed to pursue AGI (Artificial General Intelligence)",
    url: "https://medium.com/@sherlock75664/metas-mindstorm-the-billion-dollar-lab-building-tomorrow-s-superintelligence-565e8b8b4c01",
    sample: false,
  },
];
// TODO: replace with an approved real recommendation before enabling testimonials.
export const testimonials: Testimonial[] = [
  {
    quote:
      "Nishant takes ownership of his work and consistently looks for practical ways to automate repetitive processes. He is proactive, collaborative, and quick to turn ideas into working solutions.",
    role: "Manager",
    sample: true,
  },
  {
    quote:
      "Working with Nishant has been a great experience. He is always willing to explore new ideas, help the team, and find smarter ways to solve problems. His curiosity and hands-on approach make him a valuable teammate",
    role: "Team Lead",
    sample: true,
  },
];
```

## C:/Users/320314137/OneDrive - Philips/Desktop/Potfolio/src/data/siteConfig.ts

```ts
import type { SectionId } from "../types";
export const siteConfig = {
  // TODO: replace with your deployed domain before publishing.
  url: "",
  title: "Nishant Sharma — AI Engineer & Builder",
  description:
    "Nishant Sharma builds reliable AI agents, grounded RAG pipelines, and thoughtful full-stack experiences.",
  sections: [
    "hero",
    "about",
    "projects",
    "agentic",
    "skills",
    "experience",
    "education",
    "certifications",
    "github",
    "blog",
    "testimonials",
    "contact",
  ] as SectionId[],
  enabled: {
    hero: true,
    about: true,
    projects: true,
    agentic: true,
    skills: true,
    experience: true,
    education: true,
    certifications: true,
    github: true,
    blog: true,
    testimonials: true,
    contact: true,
  } as Record<SectionId, boolean>,
  navigation: [
    { id: "about", label: "About" },
    { id: "projects", label: "Projects" },
    { id: "skills", label: "Skills" },
    { id: "experience", label: "Experience" },
    { id: "contact", label: "Contact" },
  ] as {
    id: SectionId;
    label: string;
  }[],
  labels: {
    hero: "Home",
    about: "A little context.",
    projects: "Ideas, engineered.",
    agentic: "Beyond a single prompt.",
    skills: "The tools behind the thinking.",
    experience: "Learning by shipping.",
    education: "The foundations.",
    certifications: "A few milestones.",
    github: "Building together. Learning in the open.",
    blog: "Notes from the lab.",
    testimonials: "Good work, good people.",
    contact: "Let’s build something meaningful.",
  },
  eyebrows: {
    hero: "AI ENGINEER / CREATIVE PROBLEM SOLVER",
    about: "01 / ABOUT ME",
    projects: "02 / SELECTED WORK",
    agentic: "03 / AGENTIC SYSTEMS",
    skills: "04 / TOOLKIT",
    experience: "05 / EXPERIENCE",
    education: "06 / EDUCATION",
    certifications: "07 / RECOGNITION",
    github: "08 / AGENTIC LAB",
    blog: "09 / WRITING",
    testimonials: "10 / RECOMMENDATIONS",
    contact: "11 / SAY HELLO",
  },
  projectFilters: [
    "All",
    "Agentic AI",
    "LLM",
    "ML",
    "Computer Vision",
    "MLOps",
  ],
  footer: "Thoughtfully built with React, TypeScript & a little curiosity.",
};
```

## C:/Users/320314137/OneDrive - Philips/Desktop/Potfolio/src/hooks/useLenis.ts

```ts
import { useEffect } from "react";
import Lenis from "lenis";
import { gsap, ScrollTrigger } from "../lib/gsap";
export function useLenis(reduced: boolean) {
  useEffect(() => {
    if (reduced) return;
    const lenis = new Lenis({ duration: 1.05, anchors: true });
    lenis.on("scroll", ScrollTrigger.update);
    const tick = (time: number) => lenis.raf(time * 1000);
    gsap.ticker.add(tick);
    return () => {
      gsap.ticker.remove(tick);
      lenis.destroy();
    };
  }, [reduced]);
}
```

## C:/Users/320314137/OneDrive - Philips/Desktop/Potfolio/src/hooks/useMediaQuery.ts

```ts
import { useEffect, useState } from "react";
export function useMediaQuery(query: string) {
  const [matches, set] = useState(() => window.matchMedia(query).matches);
  useEffect(() => {
    const m = window.matchMedia(query);
    const change = () => set(m.matches);
    change();
    m.addEventListener("change", change);
    return () => m.removeEventListener("change", change);
  }, [query]);
  return matches;
}
export function useReducedMotion() {
  return useMediaQuery("(prefers-reduced-motion: reduce)");
}
```

## C:/Users/320314137/OneDrive - Philips/Desktop/Potfolio/src/hooks/useScrollSpy.ts

```ts
import { useEffect, useState } from "react";
export function useScrollSpy() {
  const [active, set] = useState("hero");
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) set(e.target.id);
        });
      },
      { rootMargin: "-20% 0px -60% 0px" },
    );
    document
      .querySelectorAll("main section[id]")
      .forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
  return active;
}
```

## C:/Users/320314137/OneDrive - Philips/Desktop/Potfolio/src/hooks/useTheme.ts

```ts
import { useState } from "react";
export function useTheme() {
  const [dark, setDark] = useState(
    document.documentElement.classList.contains("dark"),
  );
  function toggle() {
    const value = !dark;
    setDark(value);
    document.documentElement.classList.toggle("dark", value);
    try {
      localStorage.setItem("theme", value ? "dark" : "light");
    } catch {
      /* Storage may be unavailable in private mode. */
    }
  }
  return { dark, toggle };
}
```

## C:/Users/320314137/OneDrive - Philips/Desktop/Potfolio/src/lib/gsap.ts

```ts
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
export { gsap, ScrollTrigger };
```

## C:/Users/320314137/OneDrive - Philips/Desktop/Potfolio/src/main.tsx

```tsx
import React from "react";
import ReactDOM from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import App from "./App";
import "./styles/theme.css";
import "./styles/globals.css";
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <HelmetProvider>
      <App />
    </HelmetProvider>
  </React.StrictMode>,
);
```

## C:/Users/320314137/OneDrive - Philips/Desktop/Potfolio/src/styles/globals.css

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
* {
  box-sizing: border-box;
}
html {
  scroll-padding-top: 100px;
}
body {
  margin: 0;
  background: var(--bg);
  color: var(--text);
  font-family: var(--body);
  font-size: 14px;
  -webkit-font-smoothing: antialiased;
  transition:
    background 0.3s,
    color 0.3s;
}
button,
input,
textarea {
  font: inherit;
}
a {
  color: inherit;
  text-decoration: none;
}
button {
  cursor: pointer;
  color: inherit;
}
button:disabled {
  cursor: wait;
  opacity: 0.6;
}
button:focus-visible,
a:focus-visible,
input:focus-visible,
textarea:focus-visible {
  outline: 2px solid var(--accent);
  outline-offset: 5px;
}
::selection {
  background: #8663c7;
  color: white;
}
h1,
h2,
h3,
p {
  margin: 0;
}
h1,
h2,
h3 {
  font-family: var(--heading);
}
h2 {
  font-size: clamp(30px, 3.1vw, 43px);
  letter-spacing: -1.7px;
  font-weight: 500;
  line-height: 1.18;
}
h3 {
  font-size: 19px;
  font-weight: 500;
  letter-spacing: -0.5px;
}
p {
  line-height: 1.8;
  color: var(--muted);
}
.container {
  width: min(1200px, calc(100% - 104px));
  margin-inline: auto;
}
.section {
  padding: 94px 0;
  border-top: 1px solid var(--line);
  scroll-margin-top: 30px;
}
.section-heading {
  display: flex;
  justify-content: space-between;
  align-items: end;
  margin-bottom: 38px;
  gap: 40px;
}
.eyebrow {
  font-family: var(--mono);
  font-size: 10px;
  font-weight: 500;
  letter-spacing: 1.7px;
  color: var(--accent);
  margin-bottom: 15px;
  text-transform: uppercase;
}
.section-description {
  max-width: 320px;
  font-size: 13px;
  line-height: 1.8;
}
.mono {
  font-family: var(--mono);
  font-size: 10px;
  letter-spacing: 1px;
}
.muted {
  color: var(--muted);
}
.accent {
  color: var(--accent);
}
.gradient-text {
  background: linear-gradient(
    110deg,
    var(--accent) 8%,
    #9f8de8 45%,
    var(--cyan) 95%
  );
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}
.button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 14px;
  min-height: 46px;
  padding: 12px 20px;
  border: 1px solid var(--line);
  border-radius: 7px;
  background: var(--surface);
  font-size: 12px;
  font-weight: 500;
  transition:
    transform 0.2s,
    border-color 0.2s,
    box-shadow 0.2s;
}
.button:hover {
  transform: translateY(-2px);
  border-color: var(--accent);
  box-shadow: 0 5px 25px var(--glow);
}
.button.primary {
  background: #b29bf3;
  color: #171123;
  border-color: #b29bf3;
}
.button.primary:hover {
  background: #c1adfb;
}
.button.small {
  min-height: 36px;
  padding: 9px 14px;
  font-size: 11px;
}
.button-row {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
}
.icon-button {
  width: 36px;
  height: 36px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  border: 1px solid var(--line);
  border-radius: 6px;
}
.icon-button:hover {
  background: var(--accent-soft);
}
.icon-button span {
  display: flex;
}
.text-link {
  display: inline-flex;
  align-items: center;
  gap: 9px;
  color: var(--accent);
  font-size: 12px;
  margin-top: 20px;
}
.navbar {
  height: 82px;
  position: sticky;
  top: 0;
  z-index: 40;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 max(52px, calc((100vw - 1200px) / 2));
  border-bottom: 1px solid var(--line);
  background: var(--nav);
  backdrop-filter: blur(20px);
}
.brand {
  font-family: var(--heading);
  font-size: 32px;
  font-weight: 700;
  letter-spacing: -3px;
}
.brand span {
  color: var(--accent);
}
.brand i {
  color: var(--line);
  font-style: normal;
  font-size: 28px;
  font-weight: 400;
  margin-left: 18px;
}
.navbar nav {
  display: flex;
  gap: 29px;
}
.navbar nav a {
  font-size: 11px;
  color: var(--muted);
}
.navbar nav a:hover,
.navbar nav a.active {
  color: var(--text);
}
.nav-actions {
  display: flex;
  gap: 12px;
  align-items: center;
}
.nav-actions > .icon-button {
  border: 0;
}
.menu-button {
  display: none;
}
.scroll-progress {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 2px;
  transform-origin: left;
  z-index: 70;
  background: linear-gradient(90deg, #a080f0, #7ce0e3);
}
.hero {
  position: relative;
  min-height: 700px;
  display: grid;
  grid-template-columns: 1.12fr 1fr;
  align-items: center;
  padding-top: 54px;
  padding-bottom: 92px;
  isolation: isolate;
}
.hero-copy {
  z-index: 2;
}
.availability {
  display: inline-flex;
  align-items: center;
  gap: 9px;
  padding: 7px 10px;
  border: 1px solid var(--line);
  border-radius: 20px;
  font-size: 9px;
  color: var(--muted);
  margin-bottom: 35px;
  background: var(--surface);
}
.availability > span,
.system-status > span:first-child,
.live-label i,
.focus-note > span {
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background: #7fcaac;
  display: inline-block;
}
.hero-eyebrow {
  font-size: 10px;
  letter-spacing: 2px;
  color: var(--muted);
  margin-bottom: 18px;
}
.hero h1 {
  font-size: clamp(42px, 4.6vw, 64px);
  line-height: 1.14;
  font-weight: 500;
  letter-spacing: -3px;
  white-space: nowrap;
}
.hero h1 > span {
  display: block;
}
.role {
  display: flex;
  align-items: center;
  gap: 10px;
  font-family: var(--mono);
  font-size: 16px;
  margin-top: 25px;
}
.role > span:first-child {
  color: var(--accent);
}
.hero-description {
  max-width: 420px;
  font-size: 13px;
  line-height: 1.9;
  margin: 21px 0 28px;
}
.hero-social {
  display: flex;
  gap: 19px;
  align-items: center;
  margin-top: 29px;
}
.socials {
  display: flex;
  gap: 17px;
  align-items: center;
}
.socials a {
  color: var(--muted);
  transition:
    color 0.2s,
    transform 0.2s;
}
.socials a:hover {
  color: var(--accent);
  transform: translateY(-3px);
}
.divider {
  height: 16px;
  width: 1px;
  background: var(--line);
}
.hero-social > a {
  display: flex;
  gap: 9px;
  align-items: center;
  font-size: 10px;
  color: var(--muted);
}
.hero-visual {
  height: 460px;
  position: relative;
  margin-left: 15px;
}
.orb-halo {
  position: absolute;
  inset: 2%;
  border-radius: 50%;
  background: radial-gradient(ellipse, #8c54cf25, transparent 66%);
  filter: blur(20px);
}
.scene {
  position: absolute;
  inset: 0;
  z-index: 2;
}
.static-orb {
  position: absolute;
  inset: 14%;
  border: 1px solid #9272ca30;
  border-radius: 50%;
  background: radial-gradient(circle at 30% 25%, #9e6fe21a, transparent 70%);
  box-shadow: inset 0 0 70px #9360db15;
  background-image: radial-gradient(#a988dc55 0.7px, transparent 1px);
  background-size: 18px 18px;
  transform: rotate(-15deg);
}
.orb-ring {
  position: absolute;
  inset: 8%;
  border: 1px solid #947abc22;
  border-radius: 50%;
  transform: rotate(-27deg) scaleY(0.75);
  z-index: 1;
}
.ring-two {
  inset: 0;
  transform: rotate(42deg) scaleY(0.55);
}
.orb-coordinate {
  position: absolute;
  top: 20px;
  left: 25px;
  font-family: var(--mono);
  font-size: 8px;
  letter-spacing: 1.2px;
  color: var(--muted);
}
.floating-badge {
  position: absolute;
  z-index: 3;
  display: flex;
  align-items: center;
  gap: 9px;
  font-family: var(--mono);
  font-size: 10px;
  padding: 10px 13px;
  background: var(--nav);
  border: 1px solid var(--line);
  border-radius: 8px;
  box-shadow: 0 10px 30px #00000010;
  animation: bob 6s ease-in-out infinite;
}
.floating-badge > span {
  color: var(--accent);
}
.badge-0 {
  top: 87px;
  right: -8px;
}
.badge-1 {
  bottom: 120px;
  left: 0;
  animation-delay: -2s;
}
.badge-2 {
  bottom: 62px;
  right: 5px;
  animation-delay: -4s;
}
.system-status {
  position: absolute;
  bottom: 3px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  gap: 8px;
  white-space: nowrap;
  font-family: var(--mono);
  font-size: 8px;
  color: var(--muted);
}
.orb-caption {
  position: absolute;
  bottom: -27px;
  left: 50%;
  transform: translateX(-50%);
  font-family: var(--mono);
  font-size: 6px;
  letter-spacing: 1.7px;
  white-space: nowrap;
  color: var(--muted);
  opacity: 0.6;
}
.ambient-canvas {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  pointer-events: none;
}
.hero-bottom {
  position: absolute;
  bottom: 28px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  color: var(--muted);
  font-family: var(--mono);
  font-size: 8px;
  letter-spacing: 1.5px;
}
.hero-bottom a,
.hero-bottom > span {
  display: flex;
  align-items: center;
  gap: 12px;
}
.hero-bottom > span > i {
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background: var(--accent);
}
.scroll-mouse {
  width: 13px;
  height: 21px;
  border: 1px solid var(--muted);
  border-radius: 8px;
  position: relative;
}
.scroll-mouse:after {
  content: "";
  position: absolute;
  width: 2px;
  height: 4px;
  background: var(--accent);
  top: 4px;
  left: 5px;
}
.glass-card {
  position: relative;
  background: var(--surface);
  border: 1px solid var(--line);
  border-radius: 10px;
  padding: 26px;
  box-shadow: var(--shadow);
  transition: border-color 0.25s;
}
.glass-card:hover {
  border-color: color-mix(in srgb, var(--accent) 40%, var(--line));
  background:
    radial-gradient(
      300px circle at var(--mouse-x) var(--mouse-y),
      var(--glow),
      transparent 70%
    ),
    var(--surface);
}
.glass-card p {
  font-size: 12px;
  margin-top: 12px;
}
.about-layout {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 75px;
}
.profile-line {
  display: flex;
  align-items: center;
  gap: 17px;
  margin-bottom: 22px;
}
.profile-line strong {
  font-family: var(--heading);
  font-weight: 500;
  font-size: 17px;
}
.profile-line span {
  display: block;
  color: var(--muted);
  font-size: 10px;
  margin-top: 4px;
}
.avatar-ring {
  padding: 3px;
  border: 1px solid var(--accent);
  border-radius: 50%;
}
.avatar-ring img {
  border-radius: 50%;
  width: 52px;
  height: 52px;
}
.about-copy > p {
  font-size: 13px;
  margin-top: 13px;
}
.focus-note {
  margin-top: 23px;
  display: flex;
  align-items: center;
  gap: 8px;
  color: var(--accent);
  font-size: 10px;
}
.service-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
}
.service-list .glass-card {
  display: flex;
  align-items: center;
  gap: 17px;
  padding: 23px;
}
.service-icon {
  color: var(--accent);
  background: var(--accent-soft);
  padding: 10px;
  border-radius: 8px;
}
.service-icon svg {
  width: 19px;
  height: 19px;
}
.service-list h3 {
  font-size: 16px;
}
.service-list p {
  font-size: 11px;
  margin-top: 5px;
}
.service-list .glass-card > svg {
  margin-left: auto;
  color: var(--muted);
  flex-shrink: 0;
}
.stats {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  margin-top: 50px;
  padding-top: 32px;
  border-top: 1px solid var(--line);
}
.stats > div {
  padding-left: 34px;
  border-left: 1px solid var(--line);
}
.stats > div:first-child {
  border: 0;
  padding-left: 0;
}
.stats strong {
  font-family: var(--heading);
  font-size: 36px;
  font-weight: 500;
  letter-spacing: -1px;
}
.stats > div > span {
  display: block;
  font-size: 10px;
  color: var(--muted);
  margin-top: 7px;
}
.project-toolbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 25px;
  gap: 15px;
}
.filters {
  display: flex;
  gap: 5px;
  flex-wrap: wrap;
}
.filters button {
  border: 1px solid transparent;
  padding: 8px 12px;
  border-radius: 5px;
  font-size: 10px;
  color: var(--muted);
  background: transparent;
}
.filters button.selected {
  background: var(--accent-soft);
  border-color: #9879d43b;
  color: var(--accent);
}
.filters button span {
  font-size: 8px;
  margin-left: 8px;
  opacity: 0.6;
}
.project-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}
.project-card {
  border: 1px solid var(--line);
  border-radius: 10px;
  overflow: hidden;
  background: var(--surface);
  transition:
    border-color 0.3s,
    box-shadow 0.3s;
}
.project-card:hover {
  border-color: #8b6bc87a;
  box-shadow: 0 12px 40px var(--glow);
}
.project-image {
  position: relative;
  display: block;
  width: 100%;
  border: 0;
  background: #14101f;
  overflow: hidden;
}
.project-image img {
  width: 100%;
  height: auto;
  aspect-ratio: 800/460;
  object-fit: cover;
  transition: transform 0.6s;
}
.project-card:hover .project-image img {
  transform: scale(1.045) rotate(0.4deg);
}
.project-number {
  position: absolute;
  top: 15px;
  left: 17px;
  font-family: var(--mono);
  font-size: 9px;
  color: #c5b7da;
}
.project-open {
  position: absolute;
  right: 15px;
  top: 15px;
  border: 1px solid #ffffff25;
  border-radius: 50%;
  padding: 5px;
  color: #d8cbee;
  background: #ffffff05;
}
.project-body {
  padding: 24px 21px 0;
}
.project-body > .eyebrow {
  font-size: 8px;
  margin-bottom: 10px;
}
.project-title {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  background: none;
  border: 0;
  width: 100%;
  text-align: left;
}
.project-title h3 {
  font-size: 20px;
}
.project-title svg {
  flex-shrink: 0;
  color: var(--muted);
}
.project-body > p:not(.eyebrow) {
  font-size: 11px;
  line-height: 1.8;
  margin: 12px 0 18px;
  min-height: 39px;
}
.tags {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}
.tags > span {
  font-family: var(--mono);
  font-size: 8px;
  padding: 5px 8px;
  border: 1px solid var(--line);
  border-radius: 4px;
  color: var(--muted);
  background: var(--surface-alt);
}
.project-bottom {
  display: flex;
  align-items: center;
  gap: 9px;
  border-top: 1px solid var(--line);
  margin-top: 23px;
  padding: 17px 0;
  font-size: 8px;
  color: var(--muted);
}
.project-bottom > span {
  margin-right: auto;
  display: flex;
  align-items: center;
  gap: 6px;
}
.mini-dot {
  width: 4px;
  height: 4px;
  background: var(--accent);
  border-radius: 50%;
}
.empty-state {
  text-align: center;
  padding: 60px;
  border: 1px dashed var(--line);
  border-radius: 10px;
}
.empty-state > svg {
  margin: 0 auto 20px;
  color: var(--accent);
}
.empty-state p {
  margin: 12px 0 20px;
}
.agent-panel {
  border: 1px solid var(--line);
  border-radius: 12px;
  background: var(--surface);
  overflow: hidden;
}
.agent-top {
  display: flex;
  justify-content: space-between;
  padding: 18px 25px;
  border-bottom: 1px solid var(--line);
  font-family: var(--mono);
  font-size: 9px;
  color: var(--muted);
  letter-spacing: 1px;
}
.agent-top > span {
  display: flex;
  gap: 10px;
  align-items: center;
}
.live-label {
  font-size: 8px;
}
.workflow {
  padding: 35px 35px 30px;
  display: flex;
  justify-content: space-between;
}
.workflow-wrap {
  display: flex;
  align-items: center;
  flex: 1;
}
.workflow-wrap:last-child {
  flex: 0;
}
.workflow-node {
  min-width: 120px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 14px;
  background: var(--surface-alt);
  border: 1px solid var(--line);
  border-radius: 8px;
  padding: 17px;
  color: var(--muted);
}
.workflow-node.is-active {
  color: var(--accent);
  border-color: var(--accent);
  box-shadow: 0 0 25px var(--glow);
}
.workflow-node.is-done {
  color: #71b59e;
}
.workflow-node strong {
  font-size: 11px;
  font-weight: 500;
}
.node-index {
  font-family: var(--mono);
  font-size: 16px;
}
.workflow-arrow {
  margin: auto;
  color: var(--muted);
}
.agent-detail {
  display: grid;
  grid-template-columns: 1fr 1.2fr;
  gap: 40px;
  padding: 10px 35px 35px;
}
.agent-detail h3 {
  font-size: 20px;
  line-height: 1.5;
  max-width: 300px;
}
.agent-detail p:not(.eyebrow) {
  font-size: 11px;
  margin: 12px 0 18px;
  max-width: 310px;
}
.terminal {
  border: 1px solid var(--line);
  border-radius: 8px;
  background: #0d0d14;
  overflow: hidden;
  color: #c0bbcd;
}
.terminal > div {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #17171f;
  padding: 11px 14px;
  font-family: var(--mono);
  font-size: 8px;
  color: #9590a5;
}
.terminal-dots {
  display: flex;
  gap: 4px;
}
.terminal-dots i {
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background: #665977;
}
.terminal-dots i:first-child {
  background: #ba7d8a;
}
.terminal-dots i:nth-child(2) {
  background: #b1a07d;
}
.terminal-dots i:nth-child(3) {
  background: #6da592;
}
.terminal code {
  display: block;
  padding: 18px;
  font-family: var(--mono);
  font-size: 9px;
  line-height: 2.15;
  min-height: 175px;
}
.terminal-purple,
.terminal-caret {
  color: #b39ce9;
}
.terminal-green {
  color: #7abda1;
}
.log-line {
  display: block;
}
.skills-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 15px;
}
.skill-heading {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 22px;
}
.skill-heading svg {
  color: var(--accent);
}
.skill-heading h3 {
  font-size: 14px;
}
.skill-heading > span {
  margin-left: auto;
  font-family: var(--mono);
  font-size: 9px;
  color: var(--muted);
}
.skills-grid .tags > span {
  font-size: 9px;
  padding: 7px 9px;
}
.marquee {
  overflow: hidden;
  margin-top: 35px;
  border-block: 1px solid var(--line);
  padding: 25px 0;
  mask-image: linear-gradient(
    90deg,
    transparent,
    #000 10%,
    #000 90%,
    transparent
  );
}
.marquee > div {
  display: flex;
  width: max-content;
  animation: marquee 45s linear infinite;
}
.marquee span {
  font-family: var(--heading);
  font-size: 19px;
  color: var(--muted);
  display: flex;
  align-items: center;
  gap: 35px;
  padding-right: 35px;
}
.marquee i {
  font-style: normal;
  font-size: 14px;
  color: var(--accent);
}
.timeline {
  position: relative;
}
.timeline-track {
  position: absolute;
  left: 0;
  top: 8px;
  bottom: 0;
  width: 1px;
  background: var(--line);
}
.timeline-fill {
  height: 100%;
  background: var(--accent);
}
.experience-row {
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 50px;
}
.experience-date {
  position: relative;
  padding-left: 28px;
}
.timeline-dot {
  position: absolute;
  left: -4px;
  top: 5px;
  width: 9px;
  height: 9px;
  border-radius: 50%;
  background: var(--accent);
  border: 2px solid var(--bg);
}
.experience-date > span:not(.timeline-dot) {
  font-size: 11px;
  color: var(--muted);
  display: block;
  margin-top: 12px;
  line-height: 1.8;
}
.experience-title {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 15px;
}
.experience-title h3 {
  font-size: 24px;
}
.company-mark {
  font-size: 16px;
  letter-spacing: 1px;
  color: #649fe3;
  font-weight: 700;
}
.experience-row ul {
  padding-left: 17px;
  color: var(--muted);
  font-size: 12px;
  line-height: 1.9;
  margin: 22px 0;
}
.experience-row li {
  padding-left: 5px;
  margin: 12px 0;
}
.experience-row li::marker {
  color: var(--accent);
}
.education-card {
  display: flex;
  align-items: center;
  gap: 25px;
}
.education-card + .education-card {
  margin-top: 14px;
}
.education-card > svg {
  color: var(--accent);
}
.education-card .eyebrow {
  margin: 0 0 7px;
}
.education-card h3 {
  font-size: 23px;
}
.education-card p {
  margin-top: 7px;
}
.score {
  margin-left: auto;
  font-family: var(--mono);
  font-size: 12px;
  border: 1px solid var(--line);
  border-radius: 6px;
  padding: 12px;
  color: var(--accent);
}
.three-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 18px;
}
.three-grid .eyebrow {
  font-size: 8px;
  margin: 20px 0 12px;
}
.repo-title {
  display: flex;
  align-items: center;
  gap: 10px;
}
.repo-title h3 {
  font-size: 14px;
  overflow-wrap: anywhere;
}
.repo-title > svg {
  flex-shrink: 0;
  color: var(--accent);
}
.repo-title > svg:last-child {
  margin-left: auto;
}
.repo-meta {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  color: var(--muted);
  font-size: 9px;
}
.repo-meta > span:last-child {
  display: flex;
  gap: 5px;
  align-items: center;
}
.section-link {
  margin-top: 28px;
}
.contact-panel {
  padding: 48px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 65px;
  background:
    radial-gradient(ellipse at 0 100%, var(--glow), transparent 70%),
    var(--surface);
  border: 1px solid var(--line);
  border-radius: 12px;
}
.contact-panel h2 {
  font-size: 40px;
  line-height: 1.2;
}
.contact-panel > div > p:not(.eyebrow) {
  font-size: 12px;
  margin: 20px 0;
  max-width: 320px;
}
.contact-email {
  display: flex;
  align-items: center;
  gap: 12px;
  font-family: var(--heading);
  font-size: 18px;
  margin: 28px 0 18px;
}
.contact-details {
  display: flex;
  gap: 15px;
  flex-wrap: wrap;
  font-size: 10px;
  color: var(--muted);
  margin-bottom: 28px;
}
.contact-details > * {
  display: flex;
  gap: 6px;
  align-items: center;
}
.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 14px;
}
label {
  display: block;
  font-size: 10px;
  color: var(--muted);
  margin-bottom: 20px;
}
input,
textarea {
  display: block;
  width: 100%;
  background: var(--bg);
  border: 1px solid var(--line);
  border-radius: 6px;
  padding: 13px;
  margin-top: 9px;
  color: var(--text);
  font-size: 11px;
  resize: vertical;
}
textarea {
  min-height: 130px;
}
input::placeholder,
textarea::placeholder {
  color: var(--muted);
  opacity: 0.65;
}
.form-note {
  font-size: 9px;
  margin-top: 15px;
}
.toast {
  position: fixed;
  bottom: 25px;
  right: 25px;
  max-width: 380px;
  z-index: 100;
  padding: 20px 45px 20px 20px;
  background: var(--surface);
  border: 1px solid var(--accent);
  box-shadow: 0 10px 50px #0003;
  border-radius: 8px;
  font-size: 12px;
}
.toast button {
  position: absolute;
  right: 14px;
  top: 12px;
  background: none;
  border: 0;
  font-size: 20px;
}
footer {
  display: flex;
  align-items: center;
  gap: 30px;
  padding: 32px 0 40px;
  border-top: 1px solid var(--line);
}
footer p {
  font-size: 10px;
}
footer p small {
  display: block;
  font-size: 8px;
  margin-top: 3px;
}
footer .socials {
  margin-left: auto;
}
footer > .brand {
  font-size: 28px;
}
.project-modal {
  width: min(760px, calc(100% - 32px));
  padding: 0;
  border: 1px solid var(--line);
  border-radius: 14px;
  background: var(--surface);
  color: var(--text);
  max-height: 85vh;
  overflow-y: auto;
}
.project-modal::backdrop {
  background: #06060dc9;
  backdrop-filter: blur(8px);
}
.project-modal article > img {
  width: 100%;
  height: 240px;
  object-fit: cover;
}
.modal-close {
  position: absolute;
  right: 15px;
  top: 15px;
  z-index: 2;
  background: var(--surface);
}
.modal-content {
  padding: 32px;
}
.modal-content h2 {
  margin-bottom: 20px;
}
.case-block {
  margin: 26px 0;
}
.case-block h3 {
  font-size: 16px;
  margin-bottom: 8px;
}
.case-block p {
  font-size: 13px;
}
.architecture {
  display: flex;
  flex-wrap: wrap;
  gap: 7px;
  list-style: none;
  padding: 0;
  margin: 15px 0 30px;
}
.architecture li {
  font-family: var(--mono);
  font-size: 10px;
  color: var(--accent);
  border: 1px solid var(--line);
  padding: 7px;
}
.preloader {
  position: fixed;
  inset: 0;
  z-index: 100;
  background: var(--bg);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  pointer-events: none;
}
.preloader > div {
  width: 50px;
  height: 2px;
  background: var(--accent);
  margin-top: 15px;
}
.skip-link {
  position: fixed;
  top: -60px;
  left: 15px;
  z-index: 200;
  background: var(--surface);
  padding: 12px;
}
.skip-link:focus {
  top: 15px;
}
#cursor {
  position: fixed;
  top: -13px;
  left: -13px;
  width: 26px;
  height: 26px;
  border: 1px solid #a68bd535;
  border-radius: 50%;
  pointer-events: none;
  z-index: 150;
  opacity: 0;
  transition: transform 0.1s linear;
}
.magnetic {
  display: inline-flex;
  transition: transform 0.15s;
}
.not-found {
  padding: 140px 0;
  min-height: 75vh;
}
.not-found h1 {
  font-size: 60px;
  margin-bottom: 30px;
}
.loading-notice {
  position: fixed;
  bottom: 25px;
  left: 25px;
  background: var(--surface);
  padding: 20px;
  border: 1px solid var(--line);
  border-radius: 8px;
  z-index: 90;
}
.mobile-nav {
  display: none;
}
blockquote {
  font-family: var(--heading);
  font-size: 24px;
  line-height: 1.7;
  margin: 0 0 25px;
}
@keyframes bob {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-9px);
  }
}
@keyframes marquee {
  to {
    transform: translateX(-50%);
  }
}
@media (min-width: 1600px) {
  .hero {
    min-height: 800px;
  }
  .hero h1 {
    font-size: 68px;
  }
  .hero-visual {
    height: 500px;
  }
}
@media (max-width: 1100px) {
  .container {
    width: calc(100% - 64px);
  }
  .navbar {
    padding: 0 32px;
  }
  .hero h1 {
    font-size: 49px;
  }
  .hero-visual {
    height: 390px;
  }
  .floating-badge {
    font-size: 8px;
  }
  .badge-0 {
    right: 0;
  }
  .workflow-node {
    min-width: 100px;
  }
  .about-layout {
    gap: 35px;
  }
  .contact-panel {
    padding: 32px;
    gap: 35px;
  }
  .contact-panel h2 {
    font-size: 34px;
  }
  .project-title h3 {
    font-size: 17px;
  }
  .project-body {
    padding-inline: 16px;
  }
  .hero {
    min-height: 680px;
  }
  .navbar nav {
    gap: 22px;
  }
}
@media (max-width: 800px) {
  .navbar {
    height: 70px;
  }
  .navbar nav {
    display: none;
  }
  .menu-button {
    display: inline-flex;
  }
  .mobile-nav {
    display: flex;
    position: fixed;
    top: 70px;
    left: 0;
    right: 0;
    z-index: 39;
    flex-direction: column;
    background: var(--surface);
    border-bottom: 1px solid var(--line);
    padding: 20px 32px;
    box-shadow: 0 15px 40px #0002;
  }
  .mobile-nav a {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 13px 0;
  }
  .hero {
    grid-template-columns: 1fr;
    min-height: 1020px;
    padding-top: 55px;
    padding-bottom: 75px;
  }
  .hero h1 {
    font-size: clamp(39px, 7vw, 60px);
  }
  .hero-visual {
    width: min(440px, 90%);
    height: 370px;
    margin: 20px auto 35px;
  }
  .hero-copy {
    max-width: 600px;
  }
  .hero-description {
    max-width: 440px;
  }
  .hero-bottom > span {
    font-size: 7px;
  }
  .section {
    padding: 65px 0;
  }
  .section-heading {
    align-items: start;
    gap: 15px;
  }
  .section-description {
    max-width: 230px;
    font-size: 11px;
  }
  .about-layout {
    grid-template-columns: 1fr;
    gap: 30px;
  }
  .project-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  .skills-grid,
  .three-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  .workflow {
    padding: 25px 20px;
    gap: 7px;
  }
  .workflow-node {
    min-width: 76px;
    padding: 15px 10px;
  }
  .workflow-arrow {
    width: 12px;
  }
  .agent-detail {
    gap: 25px;
    padding: 10px 24px 25px;
  }
  .contact-panel {
    grid-template-columns: 1fr;
    gap: 35px;
  }
  .contact-panel h2 {
    font-size: 40px;
  }
  .experience-row {
    grid-template-columns: 1fr;
    gap: 22px;
    padding-left: 24px;
  }
  .experience-date {
    padding-left: 0;
  }
  .timeline-dot {
    left: -28px;
  }
  .stats > div {
    padding-left: 20px;
  }
  .stats strong {
    font-size: 30px;
  }
  .stats > div > span {
    font-size: 9px;
  }
  .availability {
    margin-bottom: 27px;
  }
}
@media (max-width: 540px) {
  .container {
    width: calc(100% - 40px);
  }
  .navbar {
    padding-inline: 20px;
  }
  .nav-resume {
    display: none;
  }
  .hero {
    min-height: 920px;
    padding-top: 40px;
  }
  .hero h1 {
    font-size: 37px;
    letter-spacing: -1.9px;
  }
  .hero-description {
    font-size: 12px;
  }
  .hero-eyebrow {
    font-size: 8px;
    letter-spacing: 1.6px;
  }
  .role {
    font-size: 14px;
  }
  .hero .button {
    padding: 12px 15px;
    font-size: 11px;
  }
  .hero-visual {
    height: 310px;
    margin-top: 15px;
  }
  .hero-bottom > span {
    display: none;
  }
  .hero-bottom {
    bottom: 24px;
  }
  .badge-0 {
    top: 55px;
  }
  .badge-1 {
    bottom: 80px;
  }
  .badge-2 {
    bottom: 42px;
  }
  .orb-coordinate {
    font-size: 6px;
    left: 5px;
  }
  .orb-caption {
    font-size: 5px;
    letter-spacing: 1px;
  }
  .section-heading {
    display: block;
    margin-bottom: 27px;
  }
  .section-description {
    max-width: 100%;
    margin-top: 15px;
  }
  .eyebrow {
    font-size: 8px;
  }
  .section {
    padding: 52px 0;
  }
  .project-grid,
  .skills-grid,
  .three-grid {
    grid-template-columns: 1fr;
  }
  .project-toolbar {
    display: block;
  }
  .project-toolbar > .mono {
    display: none;
  }
  .filters {
    gap: 3px;
  }
  .filters button {
    padding: 8px 10px;
    font-size: 9px;
  }
  .project-body {
    padding: 22px 20px 0;
  }
  .project-title h3 {
    font-size: 21px;
  }
  .project-body > p:not(.eyebrow) {
    min-height: 0;
  }
  .stats {
    grid-template-columns: repeat(2, 1fr);
    gap: 25px;
  }
  .stats > div:nth-child(3) {
    border: 0;
    padding: 0;
  }
  .stats strong {
    font-size: 35px;
  }
  .stats > div > span {
    font-size: 9px;
  }
  .agent-top {
    padding: 15px;
    font-size: 8px;
  }
  .live-label {
    font-size: 6px;
  }
  .workflow {
    overflow-x: auto;
    justify-content: flex-start;
    padding: 22px 15px;
  }
  .workflow-wrap {
    gap: 7px;
  }
  .workflow-node {
    min-width: 75px;
  }
  .workflow-node strong {
    font-size: 9px;
  }
  .agent-detail {
    grid-template-columns: 1fr;
    padding: 12px 20px 25px;
  }
  .agent-detail h3 {
    max-width: none;
  }
  .terminal code {
    font-size: 8px;
  }
  .education-card {
    flex-wrap: wrap;
    padding: 22px;
    gap: 15px;
  }
  .education-card > div {
    width: calc(100% - 50px);
  }
  .education-card h3 {
    font-size: 19px;
  }
  .score {
    margin-left: 45px;
    padding: 8px;
    font-size: 10px;
  }
  .education-card p {
    font-size: 10px;
  }
  .contact-panel {
    padding: 24px 20px;
  }
  .contact-panel h2 {
    font-size: 32px;
  }
  .contact-email {
    font-size: 15px;
  }
  .form-row {
    grid-template-columns: 1fr;
    gap: 0;
  }
  .contact-details {
    font-size: 9px;
  }
  .glass-card {
    padding: 22px;
  }
  .service-list .glass-card {
    padding: 18px 15px;
    gap: 13px;
  }
  .service-list h3 {
    font-size: 14px;
  }
  .service-list p {
    font-size: 10px;
  }
  footer {
    gap: 20px;
    flex-wrap: wrap;
  }
  footer p {
    font-size: 8px;
  }
  footer p small {
    font-size: 7px;
  }
  footer .socials {
    margin-left: 0;
  }
  footer > .icon-button {
    margin-left: auto;
  }
  .toast {
    left: 20px;
    right: 20px;
    bottom: 20px;
  }
  .project-modal article > img {
    height: 180px;
  }
  .modal-content {
    padding: 22px;
  }
  .not-found h1 {
    font-size: 38px;
  }
  .company-mark {
    font-size: 12px;
  }
}
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation: none !important;
    transition: none !important;
    scroll-behavior: auto !important;
  }
  .magnetic {
    transform: none !important;
  }
  #cursor {
    display: none;
  }
}
@media (pointer: coarse) {
  #cursor {
    display: none;
  }
}
@media (max-width: 540px) {
  .hero h1 {
    font-size: clamp(30px, 8.9vw, 43px);
    white-space: normal;
  }
  .hero-copy,
  .about-copy,
  .agent-detail > *,
  .contact-panel > * {
    min-width: 0;
  }
  .focus-note {
    line-height: 1.8;
  }
  .workflow {
    display: grid;
    grid-template-columns: repeat(5, minmax(0, 1fr));
    gap: 5px;
    padding: 20px 10px;
  }
  .workflow-wrap {
    min-width: 0;
    display: block;
  }
  .workflow-node {
    min-width: 0;
    width: 100%;
    padding: 13px 3px;
    gap: 10px;
  }
  .workflow-node strong {
    font-size: 8px;
  }
  .workflow-arrow {
    display: none;
  }
  .node-index {
    font-size: 13px;
  }
  .company-mark {
    max-width: 100px;
    overflow-wrap: anywhere;
  }
  .hero {
    min-height: 900px;
  }
}
.project-modal {
  overscroll-behavior: contain;
}
.three-grid .glass-card {
  min-width: 0;
}
.repo-title h3 {
  line-height: 1.5;
}
.repo-meta {
  gap: 12px;
}

.experience-row + .experience-row {
  margin-top: 32px;
}
.company-mark {
  max-width: 150px;
  text-align: right;
  overflow-wrap: anywhere;
}
/* Agentic Lab: curated community and project showcase. */
.lab-showcase {
  border: 1px solid var(--line);
  border-radius: 14px;
  overflow: hidden;
  background: var(--surface);
}
.lab-banner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  padding: 24px 32px;
  border-bottom: 1px solid var(--line);
}
.lab-identity {
  display: flex;
  align-items: center;
  gap: 14px;
}
.lab-symbol {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  border: 1px solid color-mix(in srgb, var(--accent) 35%, var(--line));
  border-radius: 12px;
  background: var(--accent-soft);
  color: var(--accent);
}
.lab-identity h3 {
  font-size: 23px;
  letter-spacing: -0.7px;
}
.lab-identity a {
  display: inline-flex;
  align-items: center;
  gap: 5px;
  font: 10px var(--mono);
  color: var(--muted);
  margin-top: 5px;
}
.lab-identity a:hover {
  color: var(--accent);
}
.lab-category {
  color: var(--muted);
  font: 9px var(--mono);
  letter-spacing: 1.5px;
}
.lab-main {
  display: grid;
  grid-template-columns: 0.95fr 1.15fr;
  gap: 42px;
  padding: 40px 32px;
  background: radial-gradient(ellipse at 5% 20%, var(--glow), transparent 62%);
}
.lab-intro {
  align-self: center;
}
.lab-intro > .eyebrow {
  font-size: 9px;
  letter-spacing: 1px;
}
.lab-intro > h3 {
  max-width: 390px;
  font-size: clamp(28px, 3vw, 40px);
  line-height: 1.15;
  letter-spacing: -1.4px;
}
.lab-description {
  font-size: 13px;
  margin: 20px 0 27px;
  max-width: 360px;
}
.lab-intro .button {
  gap: 9px;
}
.lab-project {
  padding: 25px;
  border: 1px solid color-mix(in srgb, var(--accent) 30%, var(--line));
  border-radius: 10px;
  background: var(--surface);
  box-shadow: 0 12px 40px var(--glow);
  min-width: 0;
}
.lab-project-heading {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 23px;
  gap: 10px;
}
.lab-project-heading .eyebrow {
  margin: 0;
  font-size: 9px;
}
.lab-project-heading > span {
  color: var(--muted);
  font: 9px var(--mono);
}
.lab-project-name {
  display: flex;
  align-items: center;
  gap: 13px;
}
.lab-project-icon {
  color: var(--accent);
  display: flex;
  background: var(--accent-soft);
  padding: 12px;
  border-radius: 10px;
}
.lab-project-name h3 {
  font-size: 28px;
  line-height: 1.15;
}
.lab-project-name p {
  margin-top: 6px;
  font: 8px var(--mono);
  color: var(--muted);
  letter-spacing: 1px;
  line-height: 1.7;
}
.lab-project-description {
  font-size: 12px;
  margin: 18px 0;
}
.lab-flow {
  background: var(--bg);
  border: 1px solid var(--line);
  border-radius: 7px;
  margin-bottom: 18px;
  padding: 16px 12px;
}
.lab-flow > p {
  font: 8px var(--mono);
  letter-spacing: 0.8px;
  text-align: center;
  margin-bottom: 18px;
}
.lab-flow ol {
  list-style: none;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  margin: 0;
  padding: 0;
  gap: 14px;
}
.lab-flow li {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  position: relative;
  min-width: 0;
}
.lab-step-icon {
  display: flex;
  color: var(--accent);
  margin-bottom: 8px;
}
.lab-flow strong {
  font: 500 12px var(--heading);
}
.lab-flow li > span:not(.lab-step-icon) {
  font-size: 9px;
  color: var(--muted);
  line-height: 1.5;
  margin-top: 5px;
}
.lab-flow-arrow {
  position: absolute;
  right: -14px;
  top: 15px;
  color: var(--muted);
}
.lab-focus {
  padding: 0 32px 32px;
}
.lab-focus > .eyebrow {
  color: var(--muted);
  font-size: 9px;
  margin-bottom: 22px;
}
.lab-focus-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 25px;
}
.lab-focus-grid article {
  min-width: 0;
}
.lab-focus-grid svg {
  color: var(--accent);
  margin-bottom: 14px;
}
.lab-focus-grid h4 {
  font: 500 14px var(--heading);
  margin: 0 0 9px;
  letter-spacing: -0.3px;
}
.lab-focus-grid p {
  font-size: 11px;
  line-height: 1.8;
}
.lab-toolkit {
  display: flex;
  gap: 24px;
  align-items: center;
  padding: 22px 32px;
  border-top: 1px solid var(--line);
}
.lab-toolkit > span {
  font: 8px var(--mono);
  letter-spacing: 1px;
  color: var(--muted);
  flex-shrink: 0;
}
.lab-toolkit .tags {
  gap: 7px;
}
.lab-collaboration {
  display: flex;
  align-items: center;
  gap: 17px;
  padding: 26px 32px;
  border-top: 1px solid var(--line);
  background: var(--bg);
}
.lab-community-icon {
  color: var(--accent);
  flex-shrink: 0;
}
.lab-collaboration > div {
  max-width: 560px;
}
.lab-collaboration h3 {
  font-size: 17px;
}
.lab-collaboration p {
  font-size: 11px;
  margin-top: 6px;
}
.lab-collaboration a {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-left: auto;
  font-size: 11px;
  color: var(--accent);
  flex-shrink: 0;
  padding-block: 10px;
}
.lab-collaboration a:hover {
  text-decoration: underline;
  text-underline-offset: 5px;
}
@media (max-width: 900px) {
  .lab-main {
    gap: 25px;
    padding: 30px 25px;
  }
  .lab-intro > h3 {
    font-size: 31px;
  }
  .lab-banner,
  .lab-collaboration {
    padding: 24px;
  }
  .lab-focus {
    padding: 0 25px 25px;
  }
  .lab-focus-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 25px;
  }
  .lab-toolkit {
    padding: 20px 25px;
  }
  .lab-collaboration {
    flex-wrap: wrap;
  }
  .lab-collaboration > div {
    flex: 1;
  }
  .lab-collaboration a {
    margin-left: 40px;
  }
}
@media (max-width: 650px) {
  .lab-main {
    grid-template-columns: 1fr;
    gap: 28px;
  }
  .lab-description {
    max-width: 100%;
  }
  .lab-intro > h3 {
    max-width: 100%;
  }
  .lab-category {
    display: none;
  }
  .lab-toolkit {
    align-items: flex-start;
    flex-direction: column;
    gap: 14px;
  }
  .lab-project {
    padding: 20px;
  }
  .lab-intro .button {
    font-size: 11px;
  }
  .lab-collaboration > div {
    min-width: 200px;
  }
}
@media (max-width: 400px) {
  .lab-main {
    padding: 25px 18px;
  }
  .lab-banner {
    padding: 20px 18px;
  }
  .lab-project {
    padding: 17px 14px;
  }
  .lab-focus {
    padding: 0 18px 25px;
  }
  .lab-focus-grid {
    gap: 22px 18px;
  }
  .lab-focus-grid h4 {
    line-height: 1.5;
  }
  .lab-project-name h3 {
    font-size: 25px;
  }
  .lab-project-name p {
    font-size: 7px;
    letter-spacing: 0.7px;
  }
  .lab-flow li > span:not(.lab-step-icon) {
    font-size: 8px;
  }
  .lab-collaboration {
    padding: 22px 18px;
  }
  .lab-toolkit {
    padding: 20px 18px;
  }
}
.hero-lab-reference {
  display: flex;
  align-items: center;
  gap: 11px;
  width: fit-content;
  max-width: 100%;
  margin-top: 25px;
  padding-top: 18px;
  border-top: 1px solid var(--line);
  transition: color 0.2s;
}
.hero-lab-icon {
  display: flex;
  padding: 9px;
  background: var(--accent-soft);
  border: 1px solid var(--line);
  border-radius: 8px;
  color: var(--accent);
  flex-shrink: 0;
}
.hero-lab-reference strong {
  display: block;
  font-size: 11px;
  font-weight: 500;
  color: var(--text);
}
.hero-lab-reference > span > span {
  display: block;
  font-size: 10px;
  line-height: 1.6;
  color: var(--muted);
  margin-top: 3px;
}
.hero-lab-reference > svg {
  color: var(--accent);
  margin-left: 12px;
  flex-shrink: 0;
  transition: transform 0.2s;
}
.hero-lab-reference:hover strong {
  color: var(--accent);
}
.hero-lab-reference:hover > svg {
  transform: translate(2px, -2px);
}
@media (max-width: 540px) {
  .hero-lab-reference {
    margin-top: 20px;
    padding-top: 16px;
  }
  .hero-lab-reference > span > span {
    font-size: 9px;
  }
}
/* About portrait framing. */
.avatar-ring {
  flex-shrink: 0;
  box-shadow: 0 0 0 4px var(--accent-soft);
}
.avatar-ring img {
  width: 68px;
  height: 68px;
  object-fit: cover;
  object-position: 50% 23%;
}
@media (max-width: 540px) {
  .avatar-ring img {
    width: 60px;
    height: 60px;
  }
}
```

## C:/Users/320314137/OneDrive - Philips/Desktop/Potfolio/src/styles/theme.css

```css
:root {
  --bg: #f7f7fb;
  --surface: #fff;
  --surface-alt: #eeeef6;
  --text: #20212e;
  --muted: #626374;
  --line: #dcdce8;
  --accent: #7151ce;
  --cyan: #137f95;
  --accent-soft: #ece7fb;
  --glow: rgba(117, 81, 208, 0.13);
  --nav: rgba(247, 247, 251, 0.88);
  --shadow: 0 15px 50px #35305008;
  --heading: "Space Grotesk", sans-serif;
  --body: "Inter", sans-serif;
  --mono: "JetBrains Mono", monospace;
  color-scheme: light;
}
:root.dark {
  --bg: #0a0a0f;
  --surface: #111117;
  --surface-alt: #17171f;
  --text: #eeeef4;
  --muted: #9494a8;
  --line: #252530;
  --accent: #b09af2;
  --cyan: #79cfdb;
  --accent-soft: #231d34;
  --glow: rgba(139, 96, 230, 0.14);
  --nav: rgba(10, 10, 15, 0.84);
  --shadow: 0 15px 50px #00000015;
  color-scheme: dark;
}
```

## C:/Users/320314137/OneDrive - Philips/Desktop/Potfolio/src/types/index.ts

```ts
export interface Social {
  name: string;
  url: string;
}
export interface Project {
  id: string;
  title: string;
  category: string;
  summary: string;
  tags: string[];
  metric: string;
  image: string;
  github: string;
  live?: string;
  problem: string;
  approach: string;
  architecture: string[];
  results: string;
  accent: string;
}
export interface SkillGroup {
  name: string;
  skills: string[];
}
export interface Experience {
  company: string;
  role: string;
  period: string;
  location: string;
  achievements: string[];
  tags: string[];
}
export interface Credential {
  title: string;
  issuer: string;
  detail: string;
  url?: string;
}
export interface Article {
  title: string;
  category: string;
  date: string;
  url: string;
  sample?: boolean;
}
export interface Testimonial {
  quote: string;
  name?: string;
  role: string;
  sample?: boolean;
}
export interface Education {
  institution: string;
  degree: string;
  period: string;
  score: string;
}
export interface WorkflowStep {
  name: string;
  description: string;
  output: string;
}
export interface Service {
  title: string;
  description: string;
}
export interface Stat {
  value: number;
  prefix?: string;
  suffix: string;
  label: string;
}
export type SectionId =
  | "hero"
  | "about"
  | "skills"
  | "experience"
  | "projects"
  | "agentic"
  | "education"
  | "certifications"
  | "blog"
  | "github"
  | "testimonials"
  | "contact";
export interface LabFocus {
  title: string;
  description: string;
  icon: "agents" | "knowledge" | "automation" | "vision";
}
export interface LabShowcase {
  heroReference: { label: string; description: string };
  name: string;
  handle: string;
  url: string;
  category: string;
  introduction: string;
  headline: string;
  description: string;
  philosophy: string;
  githubLabel: string;
  focusLabel: string;
  focus: LabFocus[];
  technologies: string[];
  technologyLabel: string;
  project: {
    label: string;
    name: string;
    category: string;
    description: string;
    steps: { title: string; description: string }[];
    workflowLabel: string;
    tags: string[];
  };
  collaboration: { title: string; description: string; linkLabel: string };
}
```

## C:/Users/320314137/OneDrive - Philips/Desktop/Potfolio/src/vite-env.d.ts

```ts
/// <reference types="vite/client" />
```

## C:/Users/320314137/OneDrive - Philips/Desktop/Potfolio/tailwind.config.js

```js
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        display: ["Space Grotesk", "sans-serif"],
      },
    },
  },
  plugins: [],
};
```

## C:/Users/320314137/OneDrive - Philips/Desktop/Potfolio/tsconfig.json

```json
{
  "compilerOptions": {
    "target": "ES2022",
    "useDefineForClassFields": true,
    "lib": ["ES2022", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "skipLibCheck": true,
    "moduleResolution": "Bundler",
    "allowImportingTsExtensions": true,
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react-jsx",
    "strict": true
  },
  "include": ["src"]
}
```

## C:/Users/320314137/OneDrive - Philips/Desktop/Potfolio/vercel.json

```json
{ "rewrites": [{ "source": "/((?!.*\\.).*)", "destination": "/index.html" }] }
```

## C:/Users/320314137/OneDrive - Philips/Desktop/Potfolio/vite.config.ts

```ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          three: ["three", "@react-three/fiber", "@react-three/drei"],
        },
      },
    },
  },
});
```

## README.md

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
