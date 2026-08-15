# Especificação Visual — Novas Estruturas

> Versão adaptada: paleta alterada de **preto + verde** para **amarelo + preto + azul-marinho**, refletindo as cores da marca.

---

## 1. Direção visual

Criar um site com estética inspirada em um portfólio tecnológico premium, mantendo:

- fundo predominantemente preto;
- aparência premium e tecnológica;
- layout minimalista;
- bastante espaço negativo;
- tipografia grande e forte;
- cards com efeito glassmorphism;
- bordas discretas;
- gradientes luminosos;
- **elementos amarelos como destaque principal**, com **azul-marinho como cor de profundidade e apoio**;
- animações suaves;
- navegação fluida;
- sensação de profundidade.

Adaptar a identidade para uma empresa de estruturas e montagem para eventos.

O resultado **não** deve parecer um portfólio de desenvolvedor. Deve transmitir:

**engenharia + arquitetura + eventos + tecnologia + sofisticação.**

---

## 2. Paleta de cores

| Função | Cor | Hex |
|---|---|---|
| Fundo principal | Preto | `#050505` |
| Fundo secundário | Preto azulado (navy quase preto) | `#0A0E1A` |
| Cards | Cinza-chumbo escuro | `#10141F` |
| Bordas | Cinza escuro com leve tom azulado | `#22262F` |
| Texto principal | Branco | `#FFFFFF` |
| Texto secundário | Cinza claro | `#B8BCC4` |
| **Destaque primário — Amarelo** | Amarelo âmbar/dourado | `#F5B700` |
| **Destaque secundário — Azul-marinho** | Azul-marinho profundo | `#14213D` |

**Regras de uso:**

- O **preto** continua sendo a base predominante de todo o site (fundo, seções, footer).
- O **amarelo** é a cor de ação principal — usado com moderação em:
  - botões primários;
  - links;
  - ícones e pequenos detalhes;
  - linhas e divisores;
  - iluminação de destaque dos elementos 3D;
  - estados de hover.
- O **azul-marinho** é a cor de profundidade e sofisticação — usado em:
  - fundos secundários e camadas de gradiente;
  - reflexos e sombras do elemento 3D;
  - bordas ou brilhos secundários (quando o amarelo já está presente em excesso na tela);
  - composição de contraste com o amarelo (evita que o site pareça "todo dourado").
- Nunca deixar a página predominantemente amarela ou azul — ambas são camadas de destaque sobre o fundo preto.

---

## 3. Tipografia

Utilizar uma fonte moderna e limpa. Priorizar:

- Inter;
- Geist;
- ou outra sans-serif moderna.

**Títulos:** grandes, fortes, pouco espaçamento entre linhas.

```
ESTRUTURAS
QUE TRANSFORMAM
EVENTOS.
```

`font-weight: 700–900`

**Texto secundário:** peso mais leve, cor cinza claro (`#B8BCC4`). Evitar grandes blocos de texto.

---

## 4. Navbar

- Inicial: `background: transparent`
- Após scroll: `background: rgba(5,5,5,0.75)` + `backdrop-filter: blur(...)` + `border-bottom: 1px solid #22262F`
- Fixa no topo.
- Transição de aproximadamente `500ms`.

Estrutura:

```
NOVAS ESTRUTURAS
Sobre | Serviços | Projetos | Contato
```

- Desktop: links horizontais.
- Mobile: menu hambúrguer.
- Link ativo/hover em **amarelo** (`#F5B700`).

---

## 5. Hero

Estrutura em duas colunas:

```
┌──────────────────────────────┬──────────────────────┐
│  NOVAS ESTRUTURAS             │                       │
│  Estruturas que transformam   │   ELEMENTO 3D         │
│  eventos em experiências.     │                       │
│  [Conheça nossos projetos]    │                       │
│  [Entre em contato]           │                       │
└──────────────────────────────┴──────────────────────┘
```

- Esquerda: conteúdo textual.
- Direita: composição 3D.

---

## 6. Elemento 3D

Diferencial em relação ao portfólio de referência: no lugar da imagem pessoal, criar uma **estrutura arquitetônica 3D abstrata**.

Possibilidades:

- estrutura metálica;
- palco;
- treliças;
- cobertura;
- módulos geométricos;
- estrutura de evento;
- formas arquitetônicas.

Stack: **Three.js + React Three Fiber + Drei**.

Características:

- rotação extremamente suave;
- **iluminação principal em amarelo**, com **reflexos/sombras em azul-marinho** para dar profundidade e contraste;
- pequenas partículas;
- resposta ao mouse;
- resposta ao scroll.

Evitar aparência de "jogo" — deve parecer uma peça arquitetônica premium.

---

## 7. Background do Hero

Gradientes radiais discretos, combinando amarelo e azul-marinho:

```css
radial-gradient(
  circle at 20% 20%,
  rgba(245,183,0,0.10),
  transparent 30%
)
```

```css
radial-gradient(
  circle at 80% 70%,
  rgba(20,33,61,0.25),
  transparent 35%
)
```

Objetivo: iluminação ambiental sutil — amarelo como "luz quente" em um canto, azul-marinho como "sombra profunda" no outro. Não deixar a página nem amarela nem azul.

---

## 8. Glassmorphism

Classe reutilizável: `glass-card`

```css
.glass-card {
  border: 1px solid rgba(255,255,255,0.08);
  background: rgba(255,255,255,0.05);
  backdrop-filter: blur(16px);
}
```

Aplicar em: cards, informações de projetos, elementos 3D, blocos de serviços, contato.
Não utilizar glassmorphism em tudo.

---

## 9. Seção Sobre

Título:

```
SOBRE A
NOVAS ESTRUTURAS
```

Layout: texto + imagem (imagens reais de `/public/images`).

- Entrada animada durante o scroll.
- Imagem com borda, glassmorphism opcional, leve parallax, zoom sutil.

---

## 10. Serviços

Cards escuros:

```
┌─────────────────────────┐
│ 01                       │
│                           │
│ MONTAGEM DE ESTRUTURAS   │
│ Soluções completas...    │
│                           │
│ →                         │
└─────────────────────────┘
```

```css
background: rgba(255,255,255,0.05);
border: 1px solid #22262F;
```

**No hover:**

- borda fica **amarela** (`#F5B700`);
- pequeno deslocamento vertical;
- ícone se movimenta;
- brilho amarelo muito sutil (com leve halo azul-marinho por trás para profundidade).

---

## 11. Projetos

Seção mais importante — galeria moderna e assimétrica com imagens reais, composição editorial (algumas imagens em 2 colunas, outras em 1).

**No hover:**

- `scale: 1.03`
- overlay escuro;
- título;
- descrição;
- pequena seta;
- **borda amarela**.

---

## 12. Scroll Reveal

Sistema tipo `useScrollReveal`. Cada seção aparece ao entrar na viewport.

- `opacity: 0 → 1`
- `translateY: 30px → 0`
- Duração: `0.6s – 0.9s`, `ease-out`.
- Delays escalonados: `0ms / 100ms / 200ms / 300ms`.

---

## 13. Parallax

Aplicar em imagens, elementos 3D, backgrounds e elementos decorativos. Movimentos pequenos — sensação de "site vivo", nunca de "página se movendo demais".

---

## 14. Seção de impacto

Frase grande de impacto, ex.:

```
Grandes eventos começam com grandes estruturas.
```

- fundo preto;
- texto gigante;
- **pequena iluminação amarela**, com leve profundidade em azul-marinho;
- animação de entrada;
- bastante espaço vertical (`70vh`–`100vh`).

---

## 15. Contato

Título:

```
VAMOS CONSTRUIR
SEU PRÓXIMO EVENTO?
```

Card grande:

```
┌─────────────────────────────────────┐
│ Vamos conversar.                     │
│ WhatsApp | E-mail | Instagram        │
│ [ ENTRE EM CONTATO ]                 │
└─────────────────────────────────────┘
```

O formulário pode existir visualmente, mas **não deve armazenar nenhuma informação do cliente**. Não criar: banco de dados, API, cadastro, login, CRM, painel, armazenamento local.

---

## 16. Botões

**Primário:**

```css
background: #F5B700;
color: #050505;
border-radius: 12px;
```

Hover: pequena elevação, brilho, mudança de tonalidade, transição rápida.

**Secundário:**

```css
border: 1px solid #22262F;
background: rgba(255,255,255,0.05);
color: #FFFFFF;
```

Hover:

```css
border-color: #F5B700;
color: #F5B700;
```

*(Opcional: variação com borda/hover em azul-marinho `#14213D` para botões de contexto secundário, criando contraste com os botões principais em amarelo.)*

---

## 17. Footer

Minimalista. Fundo `#050505`.

- Nome: Novas Estruturas
- Links: Sobre, Serviços, Projetos, Contato
- Redes sociais
- `border-top: 1px solid #22262F`

---

## 18. Microinterações

- hover em links (sublinhado animado em amarelo);
- botões com transição;
- cards elevando;
- imagens ampliando;
- elementos 3D reagindo ao mouse;
- navbar reagindo ao scroll.

Todas as animações suaves.

---

## 19. Responsividade

No mobile, manter a mesma identidade.

Hero: de 2 colunas → 1 coluna. Ordem:

1. Título
2. Descrição
3. Botões
4. 3D

Reduzir intensidade das animações 3D em dispositivos menores.

---

## 20. Arquitetura de componentes

```
src/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
│
├── components/
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── Scene3D.tsx
│   ├── About.tsx
│   ├── Services.tsx
│   ├── Projects.tsx
│   ├── ImpactSection.tsx
│   ├── Contact.tsx
│   └── Footer.tsx
│
├── hooks/
│   ├── useScrollReveal.ts
│   └── useParallax.ts
│
└── data/
    ├── services.ts
    └── projects.ts
```

---

## 21. Tokens de design

```css
:root {
  --bg: #050505;
  --bg-secondary: #0A0E1A;
  --card: #10141F;
  --border-soft: #22262F;
  --text-primary: #ffffff;
  --text-secondary: #b8bcc4;
  --brand-yellow: #f5b700;
  --brand-navy: #14213d;
}
```

---

## 22. Regra de ouro do design

O site deve parecer:

> "um portfólio tecnológico aplicado a uma empresa de engenharia e eventos."

E não:

> "um site tradicional de empresa de montagem."

A combinação deve ser:

**DARK + MINIMALISTA + 3D + ARQUITETURA + GLASSMORPHISM + ANIMAÇÕES + FOTOGRAFIA REAL**

— agora com **amarelo** como cor de ação e **azul-marinho** como cor de profundidade, sobre a base preta.

- agora redimencione as imagens de forma que elas caibam dentro do seu espaço reservado-