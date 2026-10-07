import Icon from './Icon'

export default function ContactSection({ profile, socialLinks, previewMessage }) {
  const configuredLinks = socialLinks.filter((link) => link.url)

  return (
    <section className="contact-panel reveal" id="contact" aria-labelledby="contact-title">
      <h2 id="contact-title">Let's create something extraordinary.</h2>
      <div>
        <p>
          I'm available for interesting projects, collaborations, and opportunities to
          build meaningful digital experiences.
        </p>
        <a className="primary-button contact-button" href={`mailto:${profile.email}`}>
          <span>Let's Work Together</span>
          <span aria-hidden="true">-&gt;</span>
        </a>
        <p className="card-kicker" aria-hidden="true">
          {previewMessage.summary}
        </p>
      </div>
      <address className="contact-list">
        <a href={`mailto:${profile.email}`}>
          <Icon name="mail" /> {profile.email}
        </a>
        <a href={`tel:${profile.phone.replace(/[^+\d]/g, '')}`}>
          <Icon name="phone" /> {profile.phone}
        </a>
        <span>
          <Icon name="pin" /> {profile.location}
        </span>
        <span>
          <Icon name="web" /> {profile.website}
        </span>
        {configuredLinks.map((link) => (
          <a key={link.label} href={link.url} target="_blank" rel="noreferrer">
            {link.label}
          </a>
        ))}
      </address>
    </section>
  )
}
