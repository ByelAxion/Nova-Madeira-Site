import { useRef, useState, type PointerEvent } from 'react'
import { services } from '../../data'

export function Servicos() {
  const [index, setIndex] = useState(0)
  const startX = useRef<number | null>(null)

  const go = (direction: number) => {
    setIndex((current) => (current + direction + services.length) % services.length)
  }

  const onPointerDown = (event: PointerEvent<HTMLDivElement>) => {
    startX.current = event.clientX
    event.currentTarget.setPointerCapture(event.pointerId)
  }

  const onPointerUp = (event: PointerEvent<HTMLDivElement>) => {
    if (startX.current === null) return
    const delta = event.clientX - startX.current
    if (Math.abs(delta) > 45) go(delta < 0 ? 1 : -1)
    startX.current = null
  }

  const getPosition = (cardIndex: number) => {
    let delta = cardIndex - index
    if (delta > services.length / 2) delta -= services.length
    if (delta < -services.length / 2) delta += services.length
    return delta
  }

  return (
    <section id="servicos" className="section services-section">
      <div className="container">
        <div className="section-heading centered reveal">
          <span className="eyebrow">PROJETOS E AMBIENTES</span>
          <h2>Nossos serviços</h2>
          <p>Inspirações de marcenaria planejada para diferentes necessidades.</p>
        </div>

        <div
          className="carousel"
          onPointerDown={onPointerDown}
          onPointerUp={onPointerUp}
          onPointerCancel={() => { startX.current = null }}
          role="region"
          aria-label="Carrossel de serviços"
        >
          <div className="carousel-track">
            {services.map((service, cardIndex) => {
              const position = getPosition(cardIndex)
              return (
                <article
                  key={service.title}
                  className={`service-card ${position === 0 ? 'active' : ''}`}
                  style={{ transform: `translateX(calc(-50% + ${position * 74}%)) scale(${position === 0 ? 1 : .82})`, opacity: Math.abs(position) > 1 ? 0 : position === 0 ? 1 : .42, zIndex: 10 - Math.abs(position) }}
                  aria-hidden={Math.abs(position) > 1}
                >
                  <img src={service.image} alt={service.alt} draggable="false" />
                  <div className="service-card-overlay">
                    <span>{String(cardIndex + 1).padStart(2, '0')}</span>
                    <h3>{service.title}</h3>
                    <p>{service.description}</p>
                  </div>
                </article>
              )
            })}
          </div>

          <button className="carousel-btn prev" onClick={() => go(-1)} aria-label="Serviço anterior">←</button>
          <button className="carousel-btn next" onClick={() => go(1)} aria-label="Próximo serviço">→</button>
        </div>

        <div className="carousel-dots" aria-label="Selecionar serviço">
          {services.map((service, dotIndex) => (
            <button key={service.title} className={dotIndex === index ? 'active' : ''} onClick={() => setIndex(dotIndex)} aria-label={`Ir para ${service.title}`} />
          ))}
        </div>
      </div>
    </section>
  )
}
