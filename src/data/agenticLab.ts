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
