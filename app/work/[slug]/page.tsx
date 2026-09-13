import Link from "next/link";
import { notFound } from "next/navigation";
import { getProject, projects } from "@/lib/projects";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProject(slug);
  return {
    title: project ? `${project.title} — Kiran A` : "Project — Kiran A",
    description: project?.description,
  };
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const currentIndex = projects.findIndex((item) => item.slug === project.slug);
  const nextProject = projects[(currentIndex + 1) % projects.length];

  return (
    <main>
      <nav className="site-nav">
        <Link className="brand" href="/" aria-label="Kiran A home">K<span>.</span>A</Link>
        <Link className="back-link" href="/#work">← Back to work</Link>
        <a className="availability" href="mailto:kirananandan24@gmail.com">
          <span className="pulse" /> Available for work
        </a>
      </nav>

      <article className={`case-study section-wrap ${project.accent}`}>
        <header className="case-header">
          <div className="hero-meta">
            <span>{project.number} / {project.type}</span>
            <span>{project.year}</span>
          </div>
          <h1>{project.title}<span className="accent-dot">.</span></h1>
          <p className="case-intro">{project.description}</p>
        </header>

        <div className="case-visual" aria-hidden="true">
          <span className="visual-number">{project.number}</span>
          <div className="visual-shape" />
          <span className="visual-label">{project.stack}</span>
        </div>

        <div className="case-meta">
          <div><span>Role</span><strong>{project.role}</strong></div>
          <div><span>Stack</span><strong>{project.stack}</strong></div>
        </div>

        <div className="case-content">
          <div>
            <p className="eyebrow">The challenge</p>
            <p>{project.problem}</p>
          </div>
          <div>
            <p className="eyebrow">The approach</p>
            <p>{project.solution}</p>
          </div>
        </div>

        <div className="case-lists">
          <div>
            <p className="eyebrow">Key features</p>
            <ul>{project.features.map((feature) => <li key={feature}>{feature}</li>)}</ul>
          </div>
          <div>
            <p className="eyebrow">Architecture</p>
            <ul>{project.architecture.map((item) => <li key={item}>{item}</li>)}</ul>
          </div>
        </div>

        <div className="case-next">
          <p className="eyebrow">Next project</p>
          <Link href={`/work/${nextProject.slug}`}>
            <span>{nextProject.number}</span>
            {nextProject.title} <span>↗</span>
          </Link>
        </div>
      </article>
    </main>
  );
}
