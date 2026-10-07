import Icon from './Icon'

export default function Footer({ user, socialLinks }) {
  return (
    <footer className="footer">
      <span>Copyright 2026 {user.name}. All rights reserved.</span>
      <div className="socials">
        <span>Let's connect</span>
        <div className="social-icons" aria-label="Social links">
          {socialLinks.map((link) =>
            link.url ? (
              <a
                className="social-icon"
                key={link.label}
                href={link.url}
                target="_blank"
                rel="noreferrer"
                aria-label={link.label}
                title={link.label}
              >
                <Icon name={link.icon} />
              </a>
            ) : (
              <span
                className="social-icon is-disabled"
                key={link.label}
                aria-label={`${link.label} link not configured`}
                title={`${link.label} link not configured`}
                role="img"
              >
                <Icon name={link.icon} />
              </span>
            ),
          )}
        </div>
      </div>
    </footer>
  )
}
