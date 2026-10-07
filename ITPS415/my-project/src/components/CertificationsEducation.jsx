import Icon from './Icon'

export default function CertificationsEducation({ certifications, education }) {
  return (
    <section className="panel" aria-labelledby="credentials-title">
      <h2 className="section-label" id="credentials-title">
        Certifications & Education
      </h2>
      <div className="compact-list">
        {certifications.map((item) => (
          <article className="compact-row" key={item.title}>
            <Icon name="trophy" />
            <div>
              <strong>{item.title}</strong>
              <p>{item.issuer} - {item.year}</p>
            </div>
          </article>
        ))}
        {education.map((item) => (
          <article className="compact-row" key={item.program}>
            <Icon name="layers" />
            <div>
              <strong>{item.program}</strong>
              <p>{item.institution} - {item.year}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
