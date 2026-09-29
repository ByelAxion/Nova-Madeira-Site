export function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero-overlay" />
      <div className="hero-content">
        <span className="eyebrow">NOVA MADEIRA • MARCENARIA</span>
        <h1 id="hero-title">Móveis planejados para transformar seus espaços.</h1>
        <p>Projetos que unem madeira, funcionalidade e uma estética pensada para cada ambiente.</p>
        <button className="primary-btn" onClick={() => document.getElementById('servicos')?.scrollIntoView({ behavior: 'smooth' })}>
          CONHEÇA NOSSOS SERVIÇOS <span>→</span>
        </button>
      </div>
      <div className="hero-scroll">ROLE PARA EXPLORAR <span>↓</span></div>
    </section>
  )
}
