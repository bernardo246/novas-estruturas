# Novas Estruturas — Especificação do Projeto

## 1. Contexto

Criar um site institucional **estático, moderno e 3D** para a empresa **Novas Estruturas**, especializada em montagem de estruturas para eventos.

O objetivo é apresentar a empresa, seus serviços e trabalhos realizados de forma visualmente impactante, utilizando as imagens existentes na pasta `images`, animações de scroll e elementos 3D.

### Regra principal

O projeto **não deve possuir nenhuma funcionalidade de cadastro, armazenamento ou gerenciamento de informações de clientes**.

Não criar:
- banco de dados;
- login ou autenticação;
- cadastro de clientes;
- painel administrativo;
- CRM;
- armazenamento de formulários;
- API para salvar dados de contato;
- cookies para armazenar informações de clientes;
- localStorage/sessionStorage para dados pessoais.

O formulário de contato deve ser apenas visual/estático ou, caso seja conectado posteriormente a algum serviço externo, isso deve ser feito sem criar uma base de dados própria no projeto.

---

# 2. Stack recomendada

- Next.js
- React
- TypeScript
- Tailwind CSS
- Three.js
- React Three Fiber
- Framer Motion
- ESLint

O site deve ser preparado para geração estática sempre que possível.

---

# 3. Estrutura esperada

```text
novas-estruturas/
├── public/
│   └── images/
│       ├── imagem-01.jpg
│       ├── imagem-02.jpg
│       └── ...
├── src/
│   ├── app/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   └── globals.css
│   ├── components/
│   │   ├── Navbar.tsx
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Services.tsx
│   │   ├── Projects.tsx
│   │   ├── Scene3D.tsx
│   │   ├── Contact.tsx
│   │   └── Footer.tsx
│   └── data/
│       └── projects.ts
├── package.json
├── tsconfig.json
├── next.config.ts
└── README.md
```

As imagens fornecidas devem ficar em `public/images`.

---

# 4. Etapa 1 — Criar o projeto

Execute:

```bash
npx create-next-app@latest novas-estruturas
```

Durante a configuração, utilize:

```text
TypeScript: Yes
ESLint: Yes
Tailwind CSS: Yes
src/ directory: Yes
App Router: Yes
Turbopack: Yes
Import alias: Yes
```

Depois:

```bash
cd novas-estruturas
```

---

# 5. Etapa 2 — Instalar as dependências 3D e animações

Execute:

```bash
npm install three @react-three/fiber @react-three/drei framer-motion
```

Para os tipos do Three.js:

```bash
npm install -D @types/three
```

---

# 6. Etapa 3 — Preparar as imagens

Crie a pasta:

```bash
mkdir -p public/images
```

Coloque todas as imagens fornecidas pelo cliente dentro dela.

A aplicação deve utilizar as imagens reais disponíveis nessa pasta.

Não inventar imagens para substituir materiais existentes.

---

# 7. Etapa 4 — Criar os componentes

Crie:

```bash
mkdir -p src/components src/data
```

Depois crie os arquivos:

```bash
touch src/components/Navbar.tsx
touch src/components/Hero.tsx
touch src/components/About.tsx
touch src/components/Services.tsx
touch src/components/Projects.tsx
touch src/components/Scene3D.tsx
touch src/components/Contact.tsx
touch src/components/Footer.tsx
touch src/data/projects.ts
```

---

# 8. Navbar

Criar uma navbar fixa no topo.

Elementos:

- Logo/nome: `Novas Estruturas`
- Sobre
- Serviços
- Projetos
- Contato

Comportamento:

- transparente inicialmente;
- muda de aparência durante o scroll;
- animação suave;
- menu mobile responsivo;
- botão de contato em destaque.

Não deve existir área de login ou conta de usuário.

---

# 9. Hero

Criar uma primeira seção visualmente forte.

Conteúdo:

**Novas Estruturas**

Texto sugerido:

> Estruturas que transformam eventos em experiências.

Adicionar:

- botão "Conheça nossos projetos";
- botão "Entre em contato";
- imagem de destaque;
- elemento 3D relacionado a estruturas, arquitetura ou eventos.

O objeto 3D deve reagir suavemente ao movimento do mouse e ao scroll.

---

# 10. Seção Sobre

Criar uma seção apresentando a Novas Estruturas.

O conteúdo deve ser institucional e não deve solicitar ou armazenar nenhuma informação do visitante.

Utilizar imagens da pasta:

```text
/public/images
```

Aplicar:

- fade-in;
- slide;
- parallax;
- pequenas transições de escala.

---

# 11. Seção Serviços

Criar cards para apresentar os serviços.

Exemplos:

- Montagem de estruturas;
- Estruturas para eventos;
- Coberturas;
- Palcos;
- Estruturas corporativas;
- Soluções personalizadas.

Os serviços podem ser ajustados posteriormente.

Cada card deve possuir:

- título;
- descrição curta;
- imagem ou elemento gráfico;
- animação no hover.

---

# 12. Seção Projetos

Criar um portfólio visual utilizando as imagens reais da pasta `images`.

O layout pode utilizar:

- grid assimétrico;
- cards;
- galeria horizontal;
- efeito de expansão;
- parallax.

No hover:

- aumentar levemente a imagem;
- mostrar informações do projeto;
- aplicar overlay;
- criar sensação de profundidade.

Não criar qualquer funcionalidade de cadastro ou gerenciamento dos projetos.

Os projetos podem ser definidos estaticamente em:

```text
src/data/projects.ts
```

---

# 13. Experiência 3D

Criar `Scene3D.tsx` utilizando:

- Three.js;
- React Three Fiber;
- Drei.

O elemento 3D deve ser leve e complementar o design.

Possíveis elementos:

- estrutura metálica abstrata;
- módulos arquitetônicos;
- formas geométricas;
- estruturas inspiradas em palcos e eventos.

Adicionar movimento:

- rotação suave;
- deslocamento com scroll;
- resposta ao mouse;
- iluminação dinâmica sutil.

Evitar modelos 3D excessivamente pesados.

---

# 14. Animações de scroll

Utilizar Framer Motion.

Implementar:

- `fade-in`;
- `slide-up`;
- `scale`;
- `parallax`;
- animações de entrada;
- transições entre seções;
- hover animations.

As animações devem ser elegantes.

Não utilizar animações exageradas que dificultem a leitura.

Respeitar:

```css
prefers-reduced-motion
```

para usuários que preferem reduzir movimentos.

---

# 15. Seção de contato

Criar uma seção:

## Entre em contato

Texto:

> Vamos transformar seu próximo evento em uma experiência memorável.

Campos visuais:

```text
Nome
E-mail
Telefone
Tipo de evento
Mensagem
```


Não criar:

```text
database
API de clientes
CRM
login
cadastro
painel
```



---

# 16. Footer

Adicionar:

- Novas Estruturas;
- links das seções;
- contato;
- redes sociais;
- copyright.

Não adicionar cadastro de newsletter ou coleta de dados.

---

# 17. Responsividade

O site deve funcionar em:

- desktop;
- notebook;
- tablet;
- celular.

Testar especialmente:

```text
320px
375px
768px
1024px
1440px+
```

Garantir que o 3D não cause problemas em telas pequenas.

---

# 18. Performance

Priorizar:
- deixar as imagens corretamente dimencionadas ao espaço alocado a ela
- imagens otimizadas;
- lazy loading;
- componentes leves;
- carregamento sob demanda do 3D;
- redução de JavaScript desnecessário;
- boa pontuação no Lighthouse.

Utilizar `next/image` para imagens sempre que possível.

---

# 19. SEO

Adicionar no `layout.tsx`:

- title;
- description;
- metadata;
- Open Graph básico.

Exemplo de título:

```text
Novas Estruturas | Estruturas para Eventos
```

Descrição:

```text
Novas Estruturas — soluções profissionais em estruturas e montagem para eventos.
```

---

# 20. Testes e validação

Executar:

```bash
npm run lint
```

Depois:

```bash
npm run build
```

Corrigir todos os erros antes de considerar o projeto concluído.

Para executar localmente:

```bash
npm run dev
```

Abrir:

```text
http://localhost:3000
```

---

# 21. Checklist final

- [ ] Projeto Next.js criado
- [ ] TypeScript configurado
- [ ] Tailwind configurado
- [ ] Three.js instalado
- [ ] React Three Fiber instalado
- [ ] Framer Motion instalado
- [ ] Imagens colocadas em `public/images`
- [ ] Navbar criada
- [ ] Hero criada
- [ ] Seção Sobre criada
- [ ] Serviços criados
- [ ] Portfólio criado
- [ ] Elemento 3D criado
- [ ] Animações de scroll implementadas
- [ ] Seção de contato criada
- [ ] Formulário sem armazenamento de dados
- [ ] Footer criado
- [ ] Responsividade implementada
- [ ] SEO configurado
- [ ] `npm run lint` executado
- [ ] `npm run build` executado
- [ ] Site testado em desktop e mobile

---

# 22. Comandos principais

Criar:

```bash
npx create-next-app@latest novas-estruturas
```

Entrar:

```bash
cd novas-estruturas
```

Instalar 3D e animações:

```bash
npm install three @react-three/fiber @react-three/drei framer-motion
```

Tipos:

```bash
npm install -D @types/three
```

Criar pastas:

```bash
mkdir -p public/images
mkdir -p src/components src/data
```

Executar:

```bash
npm run dev
```

Lint:

```bash
npm run lint
```

Build:

```bash
npm run build
```

---

# 23. Resultado esperado

O resultado deve ser um **site institucional estático premium para a Novas Estruturas**, com forte presença visual, utilizando as imagens reais fornecidas, elementos 3D, transições e animações baseadas no scroll.

O site deve funcionar como uma vitrine da empresa e direcionar o visitante para o contato.

**Nenhum dado de cliente deve ser armazenado pelo projeto.**

A arquitetura deve permanecer simples, estática, performática e fácil de manter.
