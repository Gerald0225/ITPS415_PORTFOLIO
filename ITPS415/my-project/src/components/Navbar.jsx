import { useState } from 'react'

const links = [
  { label: 'Work', href: '#work' },
  { label: 'Skills', href: '#capabilities' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar({ initials }) {
  const [open, setOpen] = useState(false)

  return (
    <header className="nav">
      <a className="logo" href="#top" aria-label="Back to top">
        {initials}
      </a>
      <button
        className="menu-button"
        type="button"
        aria-expanded={open}
        aria-controls="site-navigation"
        onClick={() => setOpen((current) => !current)}
      >
        Menu
      </button>
      <nav id="site-navigation" className={`nav-links ${open ? 'is-open' : ''}`}>
        {links.map((link) => (
          <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
            {link.label}
          </a>
        ))}
        <a className="talk-button" href="#contact" onClick={() => setOpen(false)}>
          Let's Talk -&gt;
        </a>
      </nav>
    </header>
  )
}
