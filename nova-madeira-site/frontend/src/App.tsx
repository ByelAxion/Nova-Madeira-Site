import { useEffect } from 'react'
import { Header } from './components/Header/Header'
import { Footer } from './components/Footer/Footer'
import { FloatingButtons } from './components/FloatingButtons/FloatingButtons'
import { Hero } from './sections/Hero/Hero'
import { QuemSomos } from './sections/QuemSomos/QuemSomos'
import { Servicos } from './sections/Servicos/Servicos'
import { Diferenciais } from './sections/Diferenciais/Diferenciais'
import { Informacoes } from './sections/Informacoes/Informacoes'

export default function App() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add('is-visible')
      }),
      { threshold: .12 }
    )

    document.querySelectorAll('.reveal').forEach((element) => observer.observe(element))
    return () => observer.disconnect()
  }, [])

  return (
    <div id="top">
      <Header />
      <main>
        <Hero />
        <QuemSomos />
        <Servicos />
        <Diferenciais />
        <Informacoes />
      </main>
      <Footer />
      <FloatingButtons />
    </div>
  )
}
