import { useState } from 'react'

const navItems = [
  { label: 'QUEM SOMOS', target: 'quem-somos' },
  { label: 'INFORMAÇÕES', target: 'informacoes' },
]

export function Header() {
  const [open, setOpen] = useState(false)

  const scrollTo = (target: string) => {
    document.getElementById(target)?.scrollIntoView({ behavior: 'smooth' })
    setOpen(false)
  }

  return (
    <header className="site-header">
      <div className="header-inner">
        <button className="mobile-menu" aria-label={open ? 'Fechar menu' : 'Abrir menu'} aria-expanded={open} onClick={() => setOpen(!open)}>
          <span /><span /><span />
        </button>

        <button className="brand" onClick={() => scrollTo('top')} aria-label="Ir para o início">
          <img src="/images/logo.png" alt="Logo Nova Madeira" />
        </button>

        <nav className={`main-nav ${open ? 'is-open' : ''}`} aria-label="Navegação principal">
          {navItems.map((item) => (
            <button key={item.target} className="outline-btn nav-btn" onClick={() => scrollTo(item.target)}>
              {item.label}
            </button>
          ))}
        </nav>
      </div>
    </header>
  )
}
