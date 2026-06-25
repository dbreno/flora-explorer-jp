# 🌿 Flora Explorer JP

Protótipo navegável de um jogo educativo de exploração da flora urbana de **João Pessoa (PB)**. O projeto apresenta duas interfaces:

- **App Mobile** (`/app`) — Visão do aluno: captura de plantas, ranking, missões e catálogo
- **Painel Web** (`/web`) — Visão da professora: dashboard de engajamento, gerenciamento de turmas e criação de atividades com geofencing

> **Atenção:** Este é um **protótipo** de navegação. Os dados são fictícios e o propósito é validar fluxos de UX.

---

## 🛠️ Tecnologias

| Tecnologia | Versão | Papel |
|---|---|---|
| [TanStack Start](https://tanstack.com/start) | ^1.167 | Framework React fullstack (SSR + roteamento) |
| [TanStack Router](https://tanstack.com/router) | ^1.168 | Roteamento baseado em arquivos |
| [Tailwind CSS v4](https://tailwindcss.com) | ^4.2 | Estilização utilitária |
| [Vite](https://vite.dev) | ^8.0 | Bundler e dev server |
| [Lucide React](https://lucide.dev) | ^0.575 | Ícones |
| [React](https://react.dev) | ^19.2 | UI |

**Fontes:** [Fraunces](https://fonts.google.com/specimen/Fraunces) (display) + [Plus Jakarta Sans](https://fonts.google.com/specimen/Plus+Jakarta+Sans) (corpo)

---

## ⚡ Pré-requisitos

- **Node.js** ≥ 18  
- **bun** (recomendado) ou npm/pnpm

```bash
# Verificar versão do Node
node -v

# Instalar bun (se necessário)
curl -fsSL https://bun.sh/install | bash
```

---

## 🚀 Como rodar localmente

### 1. Clone o repositório

```bash
git clone <url-do-repositório>
cd flora-explorer-jp
```

### 2. Instale as dependências

```bash
bun install
# ou
npm install
```

### 3. Inicie o servidor de desenvolvimento

```bash
bun run dev
# ou
npm run dev
```

O app estará disponível em **[http://localhost:3000](http://localhost:3000)**.

---

## 📂 Estrutura do projeto

```
flora-explorer-jp/
├── src/
│   ├── assets/              # Imagens estáticas (mapa de JP, etc.)
│   ├── components/
│   │   └── ui/              # Componentes shadcn/ui (Radix UI)
│   ├── hooks/               # Custom hooks React
│   ├── lib/
│   │   └── flora-data.ts    # Dados mockados (plantas, alunos, ranking)
│   ├── routes/
│   │   ├── __root.tsx       # Layout raiz (HTML shell, fontes, meta tags)
│   │   ├── index.tsx        # Página inicial (/)
│   │   ├── app.tsx          # App mobile – visão aluno (/app)
│   │   └── web.tsx          # Dashboard web – visão professora (/web)
│   ├── styles.css           # Estilos globais + paleta de cores botânica
│   └── router.tsx           # Configuração do TanStack Router
├── package.json
├── vite.config.ts
└── README.md
```

---

## 🎨 Paleta de cores

| Token | Cor | Uso |
|---|---|---|
| `--moss` | `oklch(0.36 0.038 145)` | Verde-musgo escuro — cor primária |
| `--sage` | `oklch(0.71 0.045 145)` | Verde-sálvia — cor secundária |
| `--terracotta` | `oklch(0.62 0.13 45)` | Terracota — destaque / professora |
| `--cream` | `oklch(0.97 0.012 85)` | Creme quente — fundo |
| `--invasive` | `oklch(0.55 0.22 25)` | Vermelho-invasora — alertas |
| `--xp` | `oklch(0.78 0.16 85)` | Ouro quente — XP e conquistas |

---

## 🗂️ Rotas disponíveis

| URL | Componente | Descrição |
|---|---|---|
| `/` | `Landing` | Página inicial com seleção de perfil |
| `/app` | `AppMobile` | Protótipo do app do aluno (mobile-first) |
| `/web` | `WebDashboard` | Dashboard pedagógico da professora |

---

## 🧱 Scripts disponíveis

```bash
bun run dev          # Servidor de desenvolvimento (http://localhost:3000)
bun run build        # Build de produção
bun run preview      # Pré-visualizar o build de produção
bun run lint         # Verificar erros de linting (ESLint)
bun run format       # Formatar código (Prettier)
```

---

## 🔧 Roteamento

Este projeto usa **file-based routing** do TanStack Router. O arquivo `src/routes/routeTree.gen.ts` é **gerado automaticamente** — não edite manualmente.

Para adicionar uma nova rota, basta criar um arquivo `.tsx` em `src/routes/`. Exemplos:

| Arquivo | URL |
|---|---|
| `src/routes/about.tsx` | `/about` |
| `src/routes/plants/$id.tsx` | `/plants/:id` |

---

## 📄 Licença

Protótipo acadêmico desenvolvido para a disciplina de Biologia / UFPB 2026.1.  
Dados e imagens utilizados são fictícios ou de domínio público para fins educacionais.
