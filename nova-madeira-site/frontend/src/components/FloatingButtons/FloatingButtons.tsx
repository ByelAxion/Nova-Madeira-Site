import { useEffect, useState } from 'react'

function WhatsAppIcon() {
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20.5 3.5A11.9 11.9 0 0 0 12.04 0C5.47 0 .12 5.35.12 11.92c0 2.1.55 4.15 1.6 5.96L.02 24l6.26-1.64a11.9 11.9 0 0 0 5.75 1.47h.01c6.57 0 11.91-5.35 11.91-11.92 0-3.18-1.23-6.17-3.45-8.41Zm-8.46 18.3h-.01a9.86 9.86 0 0 1-5.03-1.38l-.36-.21-3.71.97.99-3.61-.23-.37a9.88 9.88 0 1 1 8.35 4.6Zm5.42-7.4c-.3-.15-1.78-.88-2.05-.98-.27-.1-.47-.15-.67.15-.2.3-.77.98-.95 1.18-.17.2-.35.22-.65.07-.3-.15-1.24-.46-2.36-1.46-.87-.77-1.46-1.73-1.63-2.02-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.61-.92-2.2-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.01-1.04 2.47s1.07 2.87 1.22 3.07c.15.2 2.1 3.2 5.08 4.49.71.31 1.27.5 1.7.64.72.23 1.37.2 1.89.12.58-.09 1.78-.73 2.03-1.43.25-.7.25-1.3.17-1.43-.07-.12-.27-.2-.57-.35Z"/></svg>
}

function InstagramIcon() {
  return <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5" fill="none" stroke="currentColor" strokeWidth="2"/><circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" strokeWidth="2"/><circle cx="17.4" cy="6.7" r="1.1" fill="currentColor"/></svg>
}

function ArrowUp() {
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 19V5M6 11l6-6 6 6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
}

export function FloatingButtons() {
  const [showTop, setShowTop] = useState(false)

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 480)
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className="floating-buttons" aria-label="Atalhos de contato">
      <a className="float-btn whatsapp" href="https://wa.me/55914867169" target="_blank" rel="noreferrer" aria-label="Falar com a Nova Madeira pelo WhatsApp">
        <WhatsAppIcon />
      </a>
      <a className="float-btn instagram" href="https://www.instagram.com/novamadeiraplanejados?utm_source=ig_web_button_share_sheet&stkn=ZDNlZDc0MzIxNw==" target="_blank" rel="noreferrer" aria-label="Abrir Instagram da Nova Madeira">
        <InstagramIcon />
      </a>
      {showTop && (
        <button className="float-btn top-btn" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} aria-label="Voltar ao topo">
          <ArrowUp />
        </button>
      )}
    </div>
  )
}
