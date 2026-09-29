import type { Service } from './types'

import cozinha from './assets/service-01-cozinha.jpg'
import guardaRoupa from './assets/service-02-guarda-roupa.jpg'
import closet from './assets/service-03-closet.jpg'
import quarto from './assets/service-04-quarto.jpg'
import painelTv from './assets/service-05-painel-tv.jpg'
import homeOffice from './assets/service-06-home-office.jpg'
import sala from './assets/service-07-sala.jpg'
import banheiro from './assets/service-08-banheiro.jpg'
import sobMedida from './assets/service-09-sob-medida.jpg'
import outro from './assets/service-10-outro-ambiente.jpg'

export const services: Service[] = [
  { title: '', description: '', image: cozinha, alt: 'Cozinha planejada em madeira e tons escuros' },
  { title: '', description: '', image: guardaRoupa, alt: 'Guarda-roupa planejado de portas claras' },
  { title: '', description: '', image: closet, alt: 'Closet planejado com acabamento amadeirado' },
  { title: '', description: '', image: quarto, alt: 'Quarto com mobiliário planejado' },
  { title: '', description: '', image: painelTv, alt: 'Painel de TV planejado com madeira e iluminação' },
  { title: '', description: '', image: homeOffice, alt: 'Home office com marcenaria planejada' },
  { title: '', description: '', image: sala, alt: 'Sala de estar com móveis planejados' },
  { title: '', description: '', image: banheiro, alt: 'Banheiro com bancada e armário sob medida' },
  { title: '', description: '', image: sobMedida, alt: 'Móvel sob medida em madeira clara' },
  { title: '', description: '', image: outro, alt: 'Ambiente residencial com marcenaria planejada' },
]

export const advantages = [
  { icon: '✦', title: 'Projetos personalizados', description: 'Cada solução é pensada para as medidas, rotina e estética do ambiente.' },
  { icon: '⌂', title: 'Móveis sob medida', description: 'Peças desenvolvidas para encaixar com precisão e aproveitar melhor o espaço.' },
  { icon: '▦', title: 'Aproveitamento inteligente', description: 'Mais organização sem abrir mão de circulação e proporção.' },
  { icon: '◆', title: 'Acabamento de qualidade', description: 'Atenção aos detalhes para entregar um resultado visualmente refinado.' },
  { icon: '◎', title: 'Atendimento personalizado', description: 'Uma experiência clara e próxima do primeiro contato ao projeto.' },
  { icon: '◇', title: 'Soluções para ambientes', description: 'Ideias para cozinhas, quartos, salas, escritórios e muito mais.' },
]
