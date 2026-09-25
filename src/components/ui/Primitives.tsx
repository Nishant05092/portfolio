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
