import Icon from './Icon'

export default function Capabilities({ skills }) {
  return (
    <section aria-labelledby="capabilities-title">
      <h2 className="section-label" id="capabilities-title">
        Skills
      </h2>
      <div className="capability-grid">
        {skills.map((skill) => (
          <article className="capability" key={skill.title}>
            <Icon name={skill.icon} />
            <div>
              <h3>{skill.title}</h3>
              <p>{skill.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
