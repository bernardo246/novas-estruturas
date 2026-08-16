# Novas Estruturas — Especificação do Projeto (v2, com Design System)

> Esta versão incorpora o **design system extraído** do repositório
> `bernardo246/portifolio_front` (glassmorphism escuro, glow, grid de fundo,
> tilt 3D no mouse, animações de scroll com Framer Motion), adaptado para a
> paleta principal **azul marinho + preto** exigida pelo cliente. Tudo o que
> já estava definido na especificação original (regra de "sem
> cadastro/CRM/banco de dados", stack, estrutura de pastas, seções) permanece
> válido — as seções abaixo substituem/complementam as seções 3, 8, 9, 11,
> 12, 13, 14 e 19 do documento original.

---

## 1. Contexto e regra principal (inalterado)

Site institucional **estático, moderno e 3D** para a **Novas Estruturas**
(montagem de estruturas para eventos).

**Nenhuma funcionalidade de cadastro, login, banco de dados, CRM ou
armazenamento de dados de clientes.** Formulário de contato é apenas visual
(ou preparado para integração externa futura, sem base de dados própria).

Stack: Next.js + React + TypeScript + Tailwind CSS + Three.js + React Three
Fiber + Framer Motion + ESLint. Geração estática sempre que possível.

---

## 2. Design System extraído — resumo do que foi analisado

Do repositório de referência foram extraídos os seguintes padrões, que
formam a base visual do novo site (com a paleta trocada para azul
marinho/preto):

| Padrão identificado | Onde estava | Como será reaproveitado |
|---|---|---|
| Tokens de cor em CSS vars (`styles/tokens.css`) | tema escuro puro | recriado com `#050810` (preto) → `#0A1128` (azul marinho) |
| Cor de destaque única (`brand`) usada em links, CTAs, glow, bordas em hover | `#3ECF8E` (verde) | substituída por azul marinho vibrante `#2F5FA8` |
| `boxShadow.glow` — sombra suave colorida atrás de cards | `rgba(110,231,183,0.25)` | `rgba(76,127,196,0.28)` (glow azul) |
| `backgroundImage.grid` — grid sutil de linhas 1px | fundo do hero card | mantido, cor branca a 5% de opacidade sobre navy |
| Keyframes `float`, `glowPulse`, `gradientShift` | elemento 3D/imagem do hero | reaproveitados no `Scene3D` e no card do Hero |
| `.section-container`, `.section-title`, `.glass-card`, `.focus-ring` (utilitários Tailwind via `@apply`) | `globals.css` | recriados 1:1, cores atualizadas |
| Navbar: transparente → `bg-black/70 backdrop-blur-xl` ao rolar, borda sutil | `Navbar.tsx` | mantido o comportamento, com `border-navy` |
| Hero: tilt 3D com `framer-motion` (`useMotionValue`/`useSpring`/`useTransform`) reagindo ao mouse, blobs de glow atrás da imagem, animação `float` na imagem, `whileInView` fade+slide no texto | `Hero.tsx` | replicado no Hero da Novas Estruturas, imagem trocada por elemento 3D de estrutura |
| Botões: um **sólido** (`bg-brand`, texto preto) e um **outline** (`border-borderSoft bg-white/5`, hover ganha cor da brand) | Hero.tsx | mesma dualidade de CTA (`Conheça nossos projetos` / `Entre em contato`) |
| Cards com `glass-card` (borda 1px + `bg-white/5` + `backdrop-blur-xl`) | usado em vários componentes | usado em Services, Projects e Contact |

Sem CMS, sem autenticação, sem coleta de dados — o repositório de referência
já seguia o mesmo princípio (apenas um `ContactModal` visual), o que é
compatível com a regra principal deste projeto.

---

## 3. Paleta de cores (nova — azul marinho + preto)

### 3.1 Tokens CSS — `src/app/globals.css` / `src/styles/tokens.css`

```css
:root {
  /* base preto/azul-marinho */
  --bg: #05070c;              /* preto profundo, fundo geral */
  --bg-secondary: #0a0f1a;    /* seções alternadas, menu mobile */
  --card: #0e1522;            /* fundo de cards sólidos */
  --border-soft: #1f2a3d;     /* bordas sutis */

  /* texto */
  --text-primary: #ffffff;
  --text-secondary: #a6b0c3;

  /* azul marinho (cor de marca) */
  --navy: #0a1128;            /* azul marinho profundo (institucional) */
  --brand: #1b3358;           /* azul marinho médio — CTAs, bordas hover */
  --brand-hover: #2a4a7f;     /* hover dos CTAs sólidos */
  --brand-light: #3d6bb0;     /* links, destaques, ícones ativos */
  --brand-glow: #4c7fc4;      /* usado em sombras/blur decorativos */

  color-scheme: dark;
}
```

### 3.2 `tailwind.config.ts`

```ts
import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/app/**/*.{ts,tsx}", "./src/components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#05070C",
        bgSecondary: "#0A0F1A",
        card: "#0E1522",
        borderSoft: "#1F2A3D",
        textPrimary: "#FFFFFF",
        textSecondary: "#A6B0C3",
        navy: "#0A1128",
        brand: "#1B3358",
        brandHover: "#2A4A7F",
        brandLight: "#3D6BB0",
        brandGlow: "#4C7FC4"
      },
      boxShadow: {
        glow: "0 0 40px rgba(76, 127, 196, 0.28)"
      },
      backgroundImage: {
        grid:
          "linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)",
        navyRadial:
          "radial-gradient(circle at 20% 20%, rgba(61,107,176,0.12), transparent 30%), radial-gradient(circle at 80% 70%, rgba(27,51,88,0.20), transparent 30%)"
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        glowPulse: "glowPulse 2.5s ease-in-out infinite",
        gradientShift: "gradientShift 8s ease infinite"
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" }
        },
        glowPulse: {
          "0%, 100%": { boxShadow: "0 0 30px rgba(76, 127, 196, 0.2)" },
          "50%": { boxShadow: "0 0 55px rgba(76, 127, 196, 0.4)" }
        },
        gradientShift: {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" }
        }
      }
    }
  },
  plugins: []
};

export default config;
```

### 3.3 Uso das cores por elemento

| Elemento | Cor |
|---|---|
| Fundo geral do site | `bg` (`#05070C`) |
| Seções alternadas / menu mobile | `bgSecondary` (`#0A0F1A`) |
| Cards (Serviços, Projetos, Contato) | `card` + `border-borderSoft` |
| Texto principal | `textPrimary` (branco) |
| Texto secundário / parágrafos | `textSecondary` (cinza-azulado) |
| Botão CTA principal ("Solicitar orçamento", "Entre em contato") | fundo `brand`, texto branco, hover `brandHover` |
| Botão CTA secundário ("Conheça nossos projetos") | outline `borderSoft`, hover borda/texto `brandLight` |
| Links da navbar, ícones ativos | `brandLight` |
| Glow atrás do elemento 3D / cards em destaque | `brandGlow` via `shadow-glow` |
| Logo/nome "Novas Estruturas" na navbar | branco, com leve peso em `brandLight` no hover |

Não usar verde, laranja ou dourado como substitutos de destaque — o único
acento de cor além de preto/branco é o **azul marinho** em suas variações
(`brand`, `brandHover`, `brandLight`, `brandGlow`).

---

## 4. Utilitários globais — `globals.css`

```css
@import "../styles/tokens.css";

@tailwind base;
@tailwind components;
@tailwind utilities;

html {
  scroll-behavior: smooth;
}

body {
  background: #05070c;
  color: #fff;
  overflow-x: hidden;
}

.section-container {
  @apply mx-auto max-w-6xl px-6 py-20 md:px-10;
}

.section-title {
  @apply text-3xl font-bold tracking-tight md:text-5xl;
}

.glass-card {
  @apply border border-borderSoft bg-white/5 backdrop-blur-xl;
}

.focus-ring {
  @apply focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brandLight focus-visible:ring-offset-2 focus-visible:ring-offset-bg;
}

@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

---

## 5. Navbar (substitui a seção 8 original)

Comportamento idêntico ao do repositório de referência, com paleta nova:

- Fixa no topo (`fixed inset-x-0 top-0 z-50`), `transition-all duration-500`.
- Estado inicial: `bg-transparent`.
- Ao rolar (`scrollY > 18`): `bg-black/70 backdrop-blur-xl border-b border-borderSoft`.
- Logo/nome: `Novas Estruturas`, branco, `font-semibold tracking-wide`.
- Itens: Sobre, Serviços, Projetos, Contato — `text-textSecondary`, `hover:text-brandLight`.
- Botão de contato em destaque: `bg-brand text-white hover:bg-brandHover rounded-xl px-4 py-2`.
- Menu mobile: painel `bg-bgSecondary border-t border-borderSoft`, ícones `lucide-react` (`Menu`/`X`).
- Sem login, sem área de usuário — apenas navegação institucional.

---

## 6. Hero (substitui a seção 9 original)

Reaproveita o padrão de **tilt 3D reativo ao mouse** do repositório de
referência, trocando a foto de perfil por um **elemento 3D de estrutura
metálica/arquitetônica** (via `Scene3D.tsx`).

Estrutura:

- `<section id="hero" className="relative min-h-screen overflow-hidden pt-24">`
- Fundo decorativo: `bg-navyRadial` (glow azul marinho sutil nos cantos, ver `backgroundImage.navyRadial`).
- Coluna de texto (`whileInView` fade + slide-up, `framer-motion`):
  - Título: **Novas Estruturas** — `text-4xl md:text-6xl font-black`.
  - Subtítulo em `text-brandLight`: *"Estruturas que transformam eventos em experiências."*
  - Parágrafo institucional em `text-textSecondary`.
  - CTAs:
    - Sólido: **"Entre em contato"** — `bg-brand text-white hover:bg-brandHover rounded-xl px-6 py-3`.
    - Outline: **"Conheça nossos projetos"** — `border border-borderSoft bg-white/5 hover:border-brandLight hover:text-brandLight rounded-xl px-6 py-3`.
- Coluna 3D (mesmo mecanismo de tilt do repositório de referência):
  - `useMotionValue`/`useSpring`/`useTransform` do Framer Motion mapeando a posição do mouse dentro do container para `rotateX`/`rotateY` (±8°), com `[perspective:1000px]`.
  - Container `glass-card rounded-3xl shadow-glow` envolvendo o `<Scene3D />` (Three.js/R3F) em vez da imagem estática.
  - Camada de grid sutil (`bg-grid bg-[size:24px_24px] opacity-20`) atrás do 3D.
  - Dois "blobs" de glow azul marinho (`bg-brand/20 blur-3xl`) posicionados nos cantos do card, como no original.
  - O objeto 3D em si também aplica `animate-float` (leve flutuação vertical) além de reagir ao scroll (ver seção 8).

---

## 7. Serviços (substitui parte da seção 11)

Cards em `glass-card rounded-2xl p-6`, com:

- Ícone ou elemento gráfico em `text-brandLight`.
- Título `text-textPrimary font-semibold`.
- Descrição curta `text-textSecondary text-sm`.
- Hover: borda muda para `border-brandLight`, leve `scale-[1.02]` via `framer-motion` ou `transition-transform`, e `shadow-glow` aparece com `glowPulse`.

---

## 8. Projetos (substitui parte da seção 12)

Portfólio com as imagens reais de `public/images`, cards `glass-card`:

- No hover: leve `scale` na imagem (`group-hover:scale-105`), overlay `bg-gradient-to-t from-black/80 via-black/20 to-transparent`, texto do projeto sobe com `translate-y` (Framer Motion), tudo com o glow azul marinho como acento (`shadow-glow` no card ativo).
- Grid assimétrico ou galeria — mantém a liberdade definida no documento original; a única exigência nova é usar os tokens de cor acima (nenhum verde/laranja).
- Dados estáticos em `src/data/projects.ts` (sem cadastro/gerenciamento).

---

## 9. Elemento 3D — `Scene3D.tsx` (substitui a seção 13)

- Objeto: estrutura metálica abstrata / módulos arquitetônicos, em tom **azul marinho metálico** (`MeshStandardMaterial` com `color: "#1B3358"`, `metalness` alto, `roughness` baixo) com pontos de luz branca/azul-clara para dar contraste no fundo preto.
- Iluminação: uma luz ambiente fraca + uma luz direcional/point light em tom `brandGlow` para reforçar o glow azul sem poluir a leitura.
- Movimento: rotação suave contínua, leve deslocamento com o scroll (`useScroll`/`useTransform` do Framer Motion ou listener de scroll simples), resposta ao mouse (reaproveita o mesmo tilt do Hero), sem excesso de polígonos (modelo leve, geometrias primitivas ou low-poly).
- Fundo transparente para deixar o glow azul marinho do container (`shadow-glow`) visível por trás.

---

## 10. Animações de scroll (substitui a seção 14)

Reaproveita diretamente o vocabulário de animação do repositório de
referência:

- `whileInView={{ opacity: 1, y: 0 }}` com `initial={{ opacity: 0, y: 30 }}` e `viewport={{ once: true }}` para entrada de seções (fade-in + slide-up).
- `animate-float` (keyframe de 6s) em elementos flutuantes (imagem/objeto 3D do Hero, ícones destacados).
- `animate-glowPulse` em cards/CTAs que precisam de ênfase (ex.: botão principal de contato).
- `animate-gradientShift` opcional em fundos com gradiente azul marinho sutil (ex.: seção Sobre).
- Parallax leve na seção Sobre e nos cards de Projetos.
- Tudo respeitando `prefers-reduced-motion` (ver bloco `@media` na seção 4 acima).

---

## 11. Contato e Footer (inalterado na regra, atualizado na cor)

- Formulário 100% visual — **sem armazenamento**, sem banco de dados, sem API própria de clientes (regra mantida da especificação original).
- Card do formulário em `glass-card`, botão "Solicitar orçamento" em `bg-brand hover:bg-brandHover`.
- Ícones de WhatsApp/E-mail/Instagram/Telefone em `text-brandLight`, hover `text-white`.
- Footer em `bg-bgSecondary border-t border-borderSoft`, texto `textSecondary`, links hover `brandLight`. Sem newsletter, sem coleta de dados (regra mantida).

---

## 12. SEO (atualização da seção 19 original)

Mesmo padrão de `layout.tsx` do repositório de referência (metadata +
Open Graph + Twitter card + JSON-LD), adaptado para a empresa:

```ts
export const metadata: Metadata = {
  metadataBase: new URL("https://novasestruturas.com.br"),
  title: "Novas Estruturas | Estruturas para Eventos",
  description:
    "Novas Estruturas — soluções profissionais em estruturas e montagem para eventos.",
  openGraph: {
    title: "Novas Estruturas | Estruturas para Eventos",
    description:
      "Montagem de estruturas, coberturas, palcos e soluções personalizadas para eventos.",
    url: "https://novasestruturas.com.br",
    siteName: "Novas Estruturas",
    locale: "pt_BR",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Novas Estruturas | Estruturas para Eventos",
    description:
      "Estruturas que transformam eventos em experiências."
  }
};
```

Um `organizationSchema` (JSON-LD tipo `Organization`, em vez de `Person`)
pode substituir o `personSchema` do repositório de referência.

---

## 13. O que permanece exatamente igual ao documento original

- Seções 1 (contexto/regra principal), 2 (stack), 4–7 (setup do projeto,
  dependências, pastas), 10 (conteúdo institucional da seção Sobre), 15–18
  (conteúdo do formulário, footer, responsividade, performance), 20–23
  (testes, checklist, comandos, resultado esperado).
- A única mudança nessas seções é **de cor**: qualquer referência genérica a
  "cores" ou "paleta" nelas deve seguir os tokens definidos na seção 3 deste
  documento (azul marinho + preto, sem outras cores de destaque).

---

## 14. Checklist adicional (design system)

- [ ] Tokens de cor (`tokens.css`) criados com paleta azul marinho + preto
- [ ] `tailwind.config.ts` com `brand`, `brandHover`, `brandLight`, `brandGlow`, `shadow-glow`, `bg-grid`, `bg-navyRadial`
- [ ] Classes utilitárias `.section-container`, `.section-title`, `.glass-card`, `.focus-ring` recriadas
- [ ] Navbar com transição transparente → `bg-black/70 backdrop-blur-xl`
- [ ] Hero com tilt 3D reativo ao mouse (`useMotionValue`/`useSpring`/`useTransform`)
- [ ] `Scene3D.tsx` com material em tom azul marinho metálico e luz de glow
- [ ] Cards de Serviços e Projetos usando `glass-card` + `shadow-glow` no hover
- [ ] Nenhuma cor de destaque fora da família azul marinho (sem verde, laranja, dourado etc.)
- [ ] `prefers-reduced-motion` respeitado em todas as animações
- [ ] Regra de "sem cadastro/CRM/banco de dados" mantida integralmente
