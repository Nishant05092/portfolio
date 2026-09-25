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
