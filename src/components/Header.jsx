import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { useScrolled } from '../hooks/useScrolled'

const links = [
  { href: '#atelier', label: 'Atelier' },
  { href: '#servicos', label: 'Serviços' },
  { href: '#galeria', label: 'Galeria' },
  { href: '#precos', label: 'Preços' },
  { href: '#equipe', label: 'Equipe' },
]

export default function Header() {
  const scrolled = useScrolled(24)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  return (
    <motion.header
      id="hdr"
      className={scrolled ? 'scrolled' : ''}
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 0.61, 0.36, 1] }}
    >
      <div className="wrap nav">
        <a className="logo" href="#top" onClick={() => setOpen(false)}>
          Noir<span>.</span> Atelier
        </a>

        <nav aria-label="Principal" className="desktop-nav">
          <ul className="nav-links">
            {links.map((l) => (
              <li key={l.href}><a href={l.href}>{l.label}</a></li>
            ))}
          </ul>
        </nav>

        <a className="btn btn-solid nav-cta" href="#agendar">Agendar</a>

        <button
          className="burger"
          aria-label={open ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={open}
          aria-controls="menu-mobile"
          onClick={() => setOpen((v) => !v)}
        >
          <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
            {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M3 6h18M3 12h18M3 18h18" />}
          </svg>
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.ul
            className="nav-links mobile-open"
            id="menu-mobile"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3, ease: [0.22, 0.61, 0.36, 1] }}
          >
            {links.map((l) => (
              <li key={l.href}><a href={l.href} onClick={() => setOpen(false)}>{l.label}</a></li>
            ))}
            <li><a className="btn btn-solid" href="#agendar" onClick={() => setOpen(false)}>Agendar</a></li>
          </motion.ul>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
