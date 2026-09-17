import Link from "next/link";
import { projects } from "@/lib/projects";
import { SiteNav } from "@/components/site-nav";
import { AiToolFlow } from "@/components/ai-tool-flow";

const skillGroups = [
  ["Frontend", "React", "Next.js", "TypeScript", "Tailwind CSS"],
  ["Backend", "Node.js", "Express.js", "REST APIs", "Firebase"],
  ["Data", "PostgreSQL", "MySQL", "SQL", "Schema Design"],
  ["Cloud + AI", "Vercel", "Supabase", "GCP", "RAG", "LLM APIs"],
];

export default function Home() {
  return (
    <main id="main-content">
      <SiteNav />

      <section className="hero section-wrap" id="top">
        <AiToolFlow />
        <div className="hero-meta">
          <span>Software developer</span>
          <span>Chennai, India / 2026</span>
        </div>
        <div className="hero-title">
          <p className="eyebrow reveal">React · Full-stack · Product</p>
          <h1 className="reveal reveal-delay">
            Building <em>useful</em>
            <br />
            digital things<span className="accent-dot">.</span>
          </h1>
          <div className="profile-links reveal reveal-delay">
            <a href="/Kiran_A_Resume_12-09-2026.pdf" download>
              <span>Resume</span><b>↓</b>
            </a>
            <a href="#skills">
              <span>Focus</span><b>↘</b>
            </a>
            <a href="https://github.com/Kirananandan" target="_blank" rel="noreferrer">
              <span>GitHub</span><b>↗</b>
            </a>
            <a href="https://www.linkedin.com/in/kiran-a-06b349338/" target="_blank" rel="noreferrer">
              <span>LinkedIn</span><b>↗</b>
            </a>
            <a href="https://leetcode.com/u/kiran_Ak46/" target="_blank" rel="noreferrer">
              <span>LeetCode</span><b>↗</b>
            </a>
          </div>
          <div className="hero-bottom reveal reveal-delay-2">
            <p>
              I&apos;m Kiran, a software developer focused on thoughtful
              interfaces, reliable systems and products that feel good to use.
            </p>
            <div className="hero-actions">
              <a className="hire-button" href="mailto:kirananandan24@gmail.com?subject=Hiring%20inquiry%20for%20Kiran%20A">
                Hire me <span>↗</span>
              </a>
              <a className="circle-link" href="#work" aria-label="Scroll to selected work">
                <span>↓</span>
              </a>
            </div>
          </div>
        </div>
        <div className="hero-orbit" aria-hidden="true">
          <div className="orbit-ring ring-one" />
          <div className="orbit-ring ring-two" />
          <div className="orbit-core">KA</div>
        </div>
      </section>

      <section className="work section-wrap" id="work">
        <div className="section-heading">
          <p className="eyebrow">Selected work</p>
          <span>(03 projects)</span>
        </div>
        <div className="project-list">
          {projects.map((project) => (
            <Link href={`/work/${project.slug}`} className={`project-card ${project.accent}`} key={project.title}>
              <div className="project-visual" aria-hidden="true">
                <span className="visual-number">{project.number}</span>
                <div className="visual-shape" />
                <span className="visual-label">View / case study ↗</span>
              </div>
              <div className="project-info">
                <div>
                  <p className="project-type">{project.type}</p>
                  <h2>{project.title}</h2>
                </div>
                <p className="project-description">{project.description}</p>
                <div className="project-footer">
                  <span>{project.stack}</span>
                  <span>↗</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="about section-wrap" id="about">
        <div className="section-heading">
          <p className="eyebrow">A little about me</p>
          <span>(01)</span>
        </div>
        <div className="about-grid">
          <p className="about-lead">
            I work at the intersection of <strong>frontend experience</strong>,
            backend systems and practical product development.
          </p>
          <div className="about-copy">
            <p>
              From Chennai, I build web applications with React, Next.js and
              TypeScript. I enjoy turning ambiguous ideas into clear,
              accessible products — from the first wireframe to production.
            </p>
            <p>
              Currently freelancing at Codelab 69 and looking for a team where
              I can keep learning while shipping meaningful software.
            </p>
          </div>
        </div>
      </section>

      <section className="experience section-wrap">
        <div className="section-heading">
          <p className="eyebrow">Experience</p>
          <span>(02 roles)</span>
        </div>
        <div className="timeline">
          <div className="timeline-row">
            <span className="timeline-date">2025 — now</span>
            <div>
              <h2>Freelance Full-Stack Developer</h2>
              <p>Codelab 69 · Chennai</p>
            </div>
            <span className="timeline-detail">Client products / 01</span>
          </div>
          <div className="timeline-row">
            <span className="timeline-date">Jul — Aug 2025</span>
            <div>
              <h2>Full Stack Developer Intern</h2>
              <p>WHY Global Services · Chennai</p>
            </div>
            <span className="timeline-detail">React + Firebase / 02</span>
          </div>
        </div>
      </section>

      <section className="skills section-wrap" id="skills">
        <div className="section-heading">
          <p className="eyebrow">Toolkit</p>
          <span>Always learning</span>
        </div>
        <div className="skills-grid">
          {skillGroups.map(([title, ...skills]) => (
            <div className="skill-group" key={title}>
              <p>{title}</p>
              <ul>
                {skills.map((skill) => <li key={skill}>{skill}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="credentials section-wrap">
        <div className="section-heading">
          <p className="eyebrow">Credentials</p>
          <span>(02 areas)</span>
        </div>
        <div className="credentials-grid">
          <div className="credential-block">
            <p className="eyebrow">Education</p>
            <h2>B.Tech, Information Technology</h2>
            <p>Ganadipathy Tulsi&apos;s Jain Engineering College, Vellore</p>
            <strong>CGPA: 8.0</strong>
          </div>
          <div className="credential-block">
            <p className="eyebrow">Certifications</p>
            <ul>
              <li><span>01</span> Java Full Stack — Besant Technologies</li>
              <li><span>02</span> GCP Essentials &amp; Data Analytics — Google / Coursera</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="contact section-wrap" id="contact">
        <p className="eyebrow">Have a project in mind?</p>
        <h2>
          Let&apos;s make
          <br />
          something <em>useful</em><span className="accent-dot">.</span>
        </h2>
        <a className="email-link" href="mailto:kirananandan24@gmail.com">
          kirananandan24@gmail.com <span>↗</span>
        </a>
        <div className="contact-network">
          <a href="https://github.com/Kirananandan" target="_blank" rel="noreferrer">GitHub ↗</a>
          <a href="https://www.linkedin.com/in/kiran-a-06b349338/" target="_blank" rel="noreferrer">LinkedIn ↗</a>
          <a href="/Kiran_A_Resume_12-09-2026.pdf" download>Download resume ↓</a>
        </div>
      </section>

      <footer className="footer section-wrap">
        <span>© 2026 Kiran A</span>
        <div>
          <a href="https://github.com/Kirananandan" target="_blank" rel="noreferrer">GitHub</a>
          <a href="https://www.linkedin.com/in/kiran-a-06b349338/" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="/Kiran_A_Resume_12-09-2026.pdf" download>Resume</a>
          <a href="#top">Back to top ↑</a>
        </div>
      </footer>
    </main>
  );
}
