import ProjectCard from './ProjectCard'

export default function FeaturedWork({ projects }) {
  return (
    <section id="work" className="reveal" aria-labelledby="work-title">
      <div className="section-heading">
        <h2 className="section-label" id="work-title">
          Featured Work
        </h2>
        <a className="text-link" href="#work">
          Explore All Projects -&gt;
        </a>
      </div>
      <div className="project-grid">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  )
}
