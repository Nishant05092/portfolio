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
