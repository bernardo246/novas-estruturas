export type Project = {
  id: string;
  title: string;
  category: string;
  location: string;
  description: string;
  image: string;
  span?: "wide" | "tall" | "normal";
};

export const projects: Project[] = [
  {
    id: "arco-monumental-recife",
    title: "Arco Monumental à Beira-Mar",
    category: "Estrutura para grande evento",
    location: "Recife, PE",
    description:
      "Estrutura metálica circular de grande porte, com acabamento espelhado e iluminação cênica integrada, projetada para receber milhares de pessoas à beira da orla.",
    image: "/images/projeto-aerea-skyline-recife.jpg",
    span: "wide",
  },
  {
    id: "cobertura-rooftop",
    title: "Cobertura Técnica em Rooftop",
    category: "Cobertura para eventos",
    location: "Recife, PE",
    description:
      "Montagem de cobertura e piso técnico em laje suspensa, com estrutura preparada para suportar equipamentos de som, luz e público em pé.",
    image: "/images/about-montagem-rooftop-dia.jpg",
  },
  {
    id: "palco-led-barchef",
    title: "Palco com Telão de LED",
    category: "Palco para eventos",
    location: "Casa noturna",
    description:
      "Estrutura de palco com painel de LED de alta resolução e treliças para iluminação, dimensionada para shows e apresentações ao vivo.",
    image: "/images/projeto-barchef-palco-led.jpg",
  },
  {
    id: "ambientacao-pista",
    title: "Ambientação de Pista",
    category: "Estruturas corporativas",
    location: "Casa noturna",
    description:
      "Estruturas de sustentação para tecidos, iluminação cênica e efeitos visuais, criando atmosfera imersiva para o público.",
    image: "/images/projeto-barchef-pista.jpg",
  },
  {
    id: "arco-noturno-close",
    title: "Detalhe da Estrutura em Aço",
    category: "Soluções personalizadas",
    location: "Recife, PE",
    description:
      "Módulos em aço inox com iluminação em LED embutida, unindo resistência estrutural e impacto visual em uma peça escultural única.",
    image: "/images/projeto-arco-close-azul-noite.jpg",
    span: "tall",
  },
  {
    id: "arco-publico-noite",
    title: "Estrutura em Operação",
    category: "Estrutura para grande evento",
    location: "Recife, PE",
    description:
      "A estrutura em pleno funcionamento, recebendo o público durante o evento, com toda a engenharia validada em campo.",
    image: "/images/projeto-arco-publico-azul.jpg",
  },
  {
    id: "arco-identidade",
    title: "Assinatura Novas Estruturas",
    category: "Estrutura para grande evento",
    location: "Recife, PE",
    description:
      "Projeto assinado Novas Estruturas: engenharia, montagem e operação de uma das estruturas mais fotografadas do evento.",
    image: "/images/projeto-arco-branded-noite.jpg",
  },
];
