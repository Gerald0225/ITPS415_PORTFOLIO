export default function Experience({ profile, experience }) {
  return (
    <section className="editorial-section reveal" id="about" aria-labelledby="about-title">
      <div>
        <p className="section-label">About</p>
        <h2 id="about-title">Practical digital solutions with polish.</h2>
        <p>{profile.about}</p>
      </div>
      <div className="experience-list">
        {experience.map((item) => (
          <article className="experience-item" key={`${item.title}-${item.company}`}>
            <p className="experience-meta">
              {item.start} - {item.end}
            </p>
            <h3>
              {item.title} / {item.company}
            </h3>
            <p>{item.description}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
