import Icon from './Icon'

export default function DevelopmentProcess({ steps }) {
  return (
    <section className="process-panel reveal" aria-labelledby="process-title">
      <h2 className="section-label" id="process-title">
        My Development Process
      </h2>
      <div className="process-grid">
        {steps.map((step) => (
          <article className="process-step" key={step.number}>
            <strong>{step.number}</strong>
            <h3>{step.title}</h3>
            <p>{step.description}</p>
            <Icon name={step.icon} />
          </article>
        ))}
      </div>
    </section>
  )
}
