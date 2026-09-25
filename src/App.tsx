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
