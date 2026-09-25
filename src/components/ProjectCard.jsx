import { Icon } from "@iconify/react";
import { SiGithub } from "react-icons/si";

export function ProjectActionButton({ url }) {
  const content = <span>View Project <span aria-hidden="true">↗</span></span>;

  if (!url) {
    return (
      <button
        type="button"
        className="project-card-primary-link project-card-primary-link-disabled"
        aria-label="View project"
        disabled
      >
        {content}
      </button>
    );
  }

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="project-card-primary-link"
      aria-label="View project"
    >
      {content}
    </a>
  );
}

export function GitHubButton({ url }) {
  const content = (
    <>
      <SiGithub className="project-card-github-icon" aria-hidden="true" />
      <span>GitHub</span>
      <span className="project-card-arrow" aria-hidden="true">→</span>
    </>
  );

  if (!url) {
    return (
      <button
        type="button"
        className="project-card-github-link project-card-github-link-disabled"
        aria-label="View on GitHub"
        disabled
      >
        {content}
      </button>
    );
  }

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="project-card-github-link"
      aria-label="View on GitHub"
    >
      {content}
    </a>
  );
}

export function TechIcon({ icon, name }) {
  return (
    <div className="tech-icon-item">
      <div className="tech-icon" aria-label={`${name} icon`}>
        <Icon icon={icon} aria-hidden="true" />
      </div>
      <span className="tech-icon-label">{name}</span>
    </div>
  );
}

export function TechIcons({ technologies }) {
  return (
    <div className="project-card-tech-list" aria-label="Technology stack">
      {technologies.map((item) => (
        <TechIcon key={item.name} icon={item.icon} name={item.name} />
      ))}
    </div>
  );
}

export default function ProjectCard({
  eyebrow,
  title,
  subtitle,
  description,
  technologies,
  githubUrl,
  projectUrl,
  showAction = false,
  showTechLabel = false,
  accentColor = "#4D6CFA",
}) {
  return (
    <article className="project-card" style={{ "--project-accent": accentColor }}>
      <div className="project-card-body">
        {eyebrow && <p className="project-card-eyebrow">{eyebrow}</p>}
        <h2 className="project-card-title">{title}</h2>
        {subtitle && <p className="project-card-subtitle">{subtitle}</p>}

        <p className="project-card-description">{description}</p>
        <div className="project-card-divider" aria-hidden="true" />
        {showTechLabel && <p className="project-card-tech-label">Tech Stack</p>}
        <TechIcons technologies={technologies} />

        <div className="project-card-actions">
          <ProjectActionButton url={projectUrl || (showAction ? "#" : null)} />
          <GitHubButton url={githubUrl} />
        </div>
      </div>
    </article>
  );
}
