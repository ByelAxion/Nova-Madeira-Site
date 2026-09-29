import { advantages } from '../../data'

export function Diferenciais() {
  return (
    <section className="section advantages-section">
      <div className="container">
        <div className="section-heading centered reveal">
          <span className="eyebrow">NOSSO JEITO DE FAZER</span>
          <h2>Por que escolher a Nova Madeira?</h2>
        </div>

        <div className="advantages-grid">
          {advantages.map((item) => (
            <article className="advantage-card reveal" key={item.title}>
              <div className="advantage-icon" aria-hidden="true">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
