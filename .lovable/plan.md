# Flora Explorer JP — Protótipo navegável

Protótipo visual de alta fidelidade, sem backend. Duas interfaces independentes acessadas por rotas separadas, com paleta **Botânico moderno** (off-white #faf7f0, verde-musgo #3d5a40, sage #8fae8b, terracota #c97b56).

## Arquitetura de rotas

```
/            → Landing mínima (escolha de versão, opcional, com link direto pras duas)
/app         → App Mobile (Aluno) — moldura de celular no desktop, fullscreen no mobile
/web         → Dashboard Web (Professora)
```

Cada versão tem navegação interna própria (state-based, sem rotas aninhadas pesadas — mantém o protótipo leve e a apresentação fluida).

## Versão APP (Aluno) — mobile-first

Renderizada dentro de uma moldura de celular quando vista em telas grandes (apresentação no projetor) e em fullscreen no mobile real. Bottom nav fixo: Início · Catálogo · **Câmera (destaque central)** · Perfil.

Telas:
1. **Home** — header com avatar, nível 4, barra XP 320/500. Card Ranking da Turma (1º Felipe 560 XP, 2º Você 320 XP). Lista Missões Ativas com barras de progresso ("Explore o Parque Solon de Lucena 1/5", "Árvores da nossa cidade 2/8"). Densidade alta, sem espaços vazios.
2. **Catálogo** — três cards grandes navegáveis: Minhas Plantas (12), Espécies Exóticas Invasoras (7), Conquistas e Medalhas (5). Sub-tela de Minhas Plantas com grid de fichas.
3. **Fluxo de Captura** (carrossel de etapas):
   - Câmera fake (viewport com mira + botão disparar)
   - Analisando com IA (loader animado)
   - **Ficha de Planta Nativa** — foto, nome popular/científico, **tags** (#MataAtlântica #Nativa #Arbórea), descrição, **bloco XP destacado: "+10 XP por captura" + botão "Ler curiosidades (+5 XP Bônus)"**
   - **Ficha de Planta Invasora** — mesma estrutura **com etiqueta vermelha "ESPÉCIE INVASORA"** no topo, alerta de impacto ecológico, tags (#Invasora #Amendoeira), mesmo bloco de XP
   - Missão atualizada (progresso 2/5 → confete sutil) → volta pra Home
4. **Perfil + Configurações** — avatar, nível, XP total, botão Editar Perfil, toggles (Notificações, Privacidade/GPS), Sair.

Todas as telas seguem regra de densidade: tipografia legível (base 15-16px), espaçamento generoso mas sem buracos, conteúdo preenche a viewport mobile (375×812 referência).

## Versão WEB (Professora) — dashboard responsivo

Sidebar fixa: Dashboard · Gerenciar Turmas · Nova Atividade/Desafio · Configurações. Header com saudação "Olá, Eliana!" e seletor "Turmas ativas: 2".

Telas:
1. **Dashboard inicial** — 4 painéis:
   - Resumo de Engajamento (gráfico de barras por turma: **1º Ano, 2º Ano, 3º Ano**)
   - Alertas de Segurança e Meio Ambiente (card com ícone de alerta + "Alta incidência de Amendoeira invasora detectada na região do Bessa", botão "Ver mapa completo")
   - Atividades Recentes (tabela: Desafio | Turma | Status | Prazo)
   - Ranking Geral da Turma (pódio top 3)
2. **Gerenciar Turmas / Relatórios** — seletor de turma (1º/2º/3º Ano), seletor de atividade. **Tabela detalhada por aluno**: Nome | Status (Fez ✓ / Não fez ✗) | Plantas fotografadas (thumbs + nomes) | XP ganho | Data. Filtros e exportar CSV (fake).
3. **Nova Atividade / Geofencing** — wizard 4 passos:
   - Passo 1: escolher turma
   - Passo 2: **Mapa de João Pessoa** (imagem estática estilizada de JP) com **botão "Desenhar zona no mapa"** — ao clicar, aparece o overlay de polígono pré-definido com handles; sem clicar, fica sem polígono (conforme solicitado, não obrigatório estar lá)
   - Passo 3: Formulário (Título, Descrição, Data-limite, toggle "Obrigatório para todos")
   - Passo 4: Confirmação ("Desafio lançado! Alertas enviados.")
4. **Configurações** — integrações (Google Sala de Aula card), dados da conta.

## Stack técnica (TanStack Start)

- Rotas: `src/routes/index.tsx` (landing), `src/routes/app.tsx`, `src/routes/web.tsx` — sem rotas aninhadas; cada uma gerencia suas próprias "telas" via `useState` para velocidade de demo.
- Componentes em `src/components/app/*` e `src/components/web/*` para separar.
- Design tokens no `src/styles.css` em `@theme`: paleta botânico moderno, fontes Instrument Serif (display) + Work Sans (texto) via `<link>` no `__root.tsx`.
- shadcn/ui já disponível (Card, Button, Progress, Badge, Tabs, Table, Dialog, Switch).
- Ícones via `lucide-react` (Leaf, Camera, Trophy, AlertTriangle, MapPin, Users…).
- Mapa de JP: imagem ilustrada gerada (vista aérea estilizada off-white/sage) + SVG overlay opcional do polígono.
- Plantas/avatares: 3–4 imagens geradas (Ipê-amarelo, Amendoeira invasora, avatares Paulo/Eliana) — premium quality nas que tiverem texto, fast nas demais.
- Sem Lovable Cloud, sem auth, sem persistência — tudo mock no client.

## Detalhes que cumprem as exigências do professor

- Turmas em **todo lugar** como 1º/2º/3º Ano (nunca 9ºA, 8ºB etc.)
- Mobile: viewport densa, sem grandes vazios, hierarquia tipográfica forte
- Web Professora completa com geofencing controlável e relatório nominal (quem fez/quem não fez + plantas)
- Ficha de planta com XP explícito (+10 captura, +5 leitura bônus), tags e selo invasor

Posso partir pra implementação?