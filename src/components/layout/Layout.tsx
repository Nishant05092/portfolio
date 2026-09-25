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
