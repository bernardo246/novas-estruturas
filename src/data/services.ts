export type Service = {
  id: string
  title: string
  description: string
}

export const services: Service[] = [
  {
    id: 'montagem-de-estruturas',
    title: 'Montagem de estruturas',
    description: 'Planejamento e execução de estruturas para eventos de diferentes portes.'
  },
  {
    id: 'estruturas-para-eventos',
    title: 'Estruturas para eventos',
    description: 'Soluções modulares para áreas técnicas, circulação e operação.'
  },
  {
    id: 'coberturas',
    title: 'Coberturas',
    description: 'Coberturas com foco em proteção, estética e segurança operacional.'
  },
  {
    id: 'palcos',
    title: 'Palcos',
    description: 'Montagem de palco com reforço estrutural e suporte técnico.'
  },
  {
    id: 'estruturas-corporativas',
    title: 'Estruturas corporativas',
    description: 'Ambientes para convenções, ativações e experiências de marca.'
  },
  {
    id: 'solucoes-personalizadas',
    title: 'Soluções personalizadas',
    description: 'Projetos sob medida conforme necessidade técnica e visual do cliente.'
  }
]

export default services
