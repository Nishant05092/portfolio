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
    company: "Philips",
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
