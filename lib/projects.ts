export type Project = {
  slug: string;
  number: string;
  title: string;
  type: string;
  description: string;
  stack: string;
  accent: "lime" | "orange" | "blue";
  year: string;
  role: string;
  problem: string;
  solution: string;
  features: string[];
  architecture: string[];
  githubUrl?: string;
  liveUrl?: string;
};

export const projects: Project[] = [
  {
    slug: "fincil",
    number: "01",
    title: "Fincil",
    type: "Personal finance platform",
    description:
      "A calm, categorized ledger for bringing UPI, bank SMS and spreadsheet data into one clear financial view.",
    stack: "Next.js / Supabase / PostgreSQL",
    accent: "lime",
    year: "2026",
    role: "Product design / Full-stack development",
    problem:
      "Personal finance data is often scattered across UPI apps, bank messages and spreadsheets. Fincil brings those fragments into one understandable place.",
    solution:
      "I designed a focused ledger experience around categorization, clean transaction schemas and a dashboard that makes everyday spending easier to understand.",
    features: ["Categorized transaction ledger", "Import-ready data model", "Responsive dashboard", "Supabase authentication"],
    architecture: ["Next.js App Router", "Supabase Auth + Database", "PostgreSQL relational schema", "Server-side data fetching"],
  },
  {
    slug: "packright",
    number: "02",
    title: "PackRight",
    type: "AI packing-list SaaS",
    description:
      "Trip-specific packing lists generated with AI and synchronized across web and mobile experiences.",
    stack: "Next.js / Convex / Groq / Expo",
    accent: "orange",
    year: "2026",
    role: "Product design / Frontend development",
    problem:
      "Packing lists are usually generic, easy to forget and disconnected from the details of a specific trip.",
    solution:
      "PackRight turns destination, weather, duration and activities into a practical checklist that can be edited and shared in real time.",
    features: ["AI-generated packing suggestions", "Real-time shared lists", "Trip-aware recommendations", "Web and mobile experience"],
    architecture: ["Next.js web application", "Expo mobile client", "Convex real-time backend", "Groq-powered generation"],
  },
  {
    slug: "personal-ai-agent",
    number: "03",
    title: "Personal AI Agent",
    type: "Retrieval-Augmented Generation",
    description:
      "A grounded assistant that uses document chunking, vector embeddings and similarity search to answer with context.",
    stack: "Python / Claude API / Embeddings",
    accent: "blue",
    year: "2025",
    role: "AI engineering / Python development",
    problem:
      "General-purpose models can produce confident answers without the context of a user’s own documents.",
    solution:
      "I built a retrieval pipeline that chunks source material, creates embeddings and selects relevant context before generating a response.",
    features: ["Document ingestion", "Semantic similarity search", "Context-grounded answers", "Modular retrieval pipeline"],
    architecture: ["Python processing pipeline", "Vector embeddings", "Similarity retrieval", "Claude API generation"],
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
