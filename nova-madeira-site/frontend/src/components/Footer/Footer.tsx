export function Footer() {
  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <img className="footer-logo" src="/images/logo.png" alt="Nova Madeira" />
          <p className="footer-description">Marcenaria e móveis planejados para transformar espaços com personalidade e funcionalidade.</p>
        </div>

        <div>
          <h3>Navegação</h3>
          <div className="footer-links">
            <button onClick={() => scrollTo('quem-somos')}>Quem Somos</button>
            <button onClick={() => scrollTo('servicos')}>Serviços</button>
            <button onClick={() => scrollTo('informacoes')}>Informações</button>
          </div>
        </div>

        <div>
          <h3>Contato</h3>
          <div className="footer-contact">
            <a href="https://wa.me/5511914867169" target="_blank" rel="noreferrer">WhatsApp (11) 91486-7169</a>
            <a href="https://www.instagram.com/novamadeiraplanejados?utm_source=ig_web_button_share_sheet&stkn=ZDNlZDc0MzIxNw==" target="_blank" rel="noreferrer">Instagram @novamadeiraplanejados</a>
            <a href="mailto:novamadeiraplanejados@gmail.com">Gmail: novamadeiraplanejados@gmail.com</a>
            <span>Endereço: Avenida Dr. Frederico Martins da Costa Carvalho, 1434</span>
          </div>
        </div>
      </div>
      <div className="footer-bottom">© Nova Madeira — Todos os direitos reservados.</div>
    </footer>
  )
}
