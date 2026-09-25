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
