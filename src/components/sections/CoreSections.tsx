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
