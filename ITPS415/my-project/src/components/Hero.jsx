export default function Hero({ profile, user }) {
  const words = profile.headline.split(' ')

  return (
    <section className="hero reveal" id="top">
      <div className="hero-copy">
        <p className="eyebrow">{profile.label}</p>
        <h1>
          {words.slice(0, 2).join(' ')}
          <br />
          {words.slice(2).join(' ')}
        </h1>
        <p>{profile.intro}</p>
        <div className="hero-actions">
          <a className="primary-button" href="#work">
            View My Work -&gt;
          </a>
          {profile.resumeUrl ? (
            <a className="ghost-link" href={profile.resumeUrl} download>
              Download Resume v
            </a>
          ) : null}
        </div>
      </div>
      <div className="hero-visual" aria-label={`${user.name} portfolio portrait area`}>
        <div className="orbit"></div>
        <div className="spark"></div>
        <div className="portrait-frame">
          {profile.portrait ? (
            <img src={profile.portrait} alt={profile.portraitAlt} />
          ) : (
            <div className="portrait-placeholder" role="img" aria-label={profile.portraitAlt}>
              <span>{user.initials}</span>
            </div>
          )}
        </div>
        <div className="availability">
          <span>{profile.availability}</span>
          <strong>Open</strong>
          <span>collabs -&gt;</span>
        </div>
      </div>
    </section>
  )
}
