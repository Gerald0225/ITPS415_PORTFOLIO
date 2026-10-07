export default function ProjectCard({ project }) {
  return (
    <a className="project-card" href={project.url} aria-label={`View ${project.title}`}>
      <div
        className={`project-visual mock-${project.media.visualType}`}
        role="img"
        aria-label={project.media.alt}
      ></div>
      <div className="project-content">
        <p className="card-kicker">{project.category}</p>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <span className="project-arrow" aria-hidden="true">
          -&gt;
        </span>
      </div>
    </a>
  )
}
