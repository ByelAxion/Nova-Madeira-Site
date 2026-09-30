export function Informacoes() {
  return (
    <section id="informacoes" className="section info-section">
      <div className="container">
        <div className="info-panel reveal">
          <div className="info-main">
            <span className="eyebrow">ONDE ESTAMOS</span>
            <h2>Informações</h2>
            <h3>Nova Madeira</h3>
            <div className="info-list">
              <div><span>Endereço</span><strong>Rua Nova Brasília nº 576</strong></div>
              <div><span>E-mail</span><a href="mailto:novamadeiraplanejados@gmail.com">novamadeiraplanejados@gmail.com</a></div>
              <div><span>Nome do Responsável</span><strong>Valter</strong></div>
            </div>
            <a className="primary-btn whatsapp-link" href="https://wa.me/5511913331929" target="_blank" rel="noreferrer">FALE CONOSCO PELO WHATSAPP <span>↗</span></a>
          </div>
          <div className="info-mark">
            <img src="/images/logo.png" alt="" aria-hidden="true" />
            <span>NOVA MADEIRA</span>
            <small>MARCENARIA E MÓVEIS PLANEJADOS</small>
          </div>
        </div>
      </div>
    </section>
  )
}