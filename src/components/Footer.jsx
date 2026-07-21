export default function Footer() {
  return (
    <footer>
      <div className="wrap foot">
        <p>© {new Date().getFullYear()} Noir Atelier. Site exemplo — fins demonstrativos.</p>
        <div className="social">
          <a href="#" aria-label="Instagram do Noir Atelier">
            <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17" cy="7" r="1" fill="currentColor" stroke="none" /></svg>
          </a>
          <a href="#" aria-label="WhatsApp do Noir Atelier">
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 20l1.3-4A8 8 0 1 1 8 18.7L4 20Z" /><path d="M9 9.5c0 3 2.5 5.5 5.5 5.5l1-1.5-2-1-1 1a5 5 0 0 1-2-2l1-1-1-2-1.5 1Z" /></svg>
          </a>
          <a href="#" aria-label="E-mail do Noir Atelier">
            <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></svg>
          </a>
        </div>
      </div>
    </footer>
  )
}
