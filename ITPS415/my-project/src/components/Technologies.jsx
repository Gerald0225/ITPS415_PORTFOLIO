export default function Technologies({ technologies }) {
  return (
    <section className="panel" aria-labelledby="tools-title">
      <h2 className="section-label" id="tools-title">
        Tools & Technologies
      </h2>
      <div className="tool-grid">
        {technologies.map((tool) => (
          <div className="tool" key={tool.name}>
            <span className="tool-mark" aria-hidden="true">
              {tool.mark}
            </span>
            <h3>{tool.name}</h3>
          </div>
        ))}
      </div>
    </section>
  )
}
