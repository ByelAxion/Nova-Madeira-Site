import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import './styles/global.css'
import './components/Header/Header.css'
import './components/Footer/Footer.css'
import './components/FloatingButtons/FloatingButtons.css'
import './sections/Hero/Hero.css'
import './sections/QuemSomos/QuemSomos.css'
import './sections/Servicos/Servicos.css'
import './sections/Diferenciais/Diferenciais.css'
import './sections/Informacoes/Informacoes.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
