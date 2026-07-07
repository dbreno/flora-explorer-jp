# Avaliação Heurística em Grupo — Flora Explorer JP

Documento único de entrega contendo as **7 avaliações individuais**, as **tabelas consolidadas** e os **planos de melhorias** do grupo — em duas partes: visão Aluno (mobile) e visão Professora (painel web).

---

## Capa do grupo

| Campo | Valor |
|-------|-------|
| **Nome do sistema** | Flora Explorer JP |
| **Interfaces avaliadas** | **Parte I:** App Mobile — Visão Aluno (`/app`) · **Parte II:** Painel Web — Visão Professora (`/web`) |
| **Data da consolidação (Parte I)** | 07/07/2026 |
| **Data da consolidação (Parte II)** | 07/07/2026 (preliminar — a validar em sessão de grupo) |
| **Data das correções (v2 — Parte I)** | 07/07/2026 |
| **Data das correções (v3 — Parte II)** | 07/07/2026 |
| **Método** | Avaliação Heurística (inspeção individual + consolidação em grupo) |
| **Conjunto de heurísticas** | HM1–HM11 (interfaces móveis, aplicadas por analogia na Parte II) |
| **Arquivos inspecionados** | Parte I: `src/routes/app.tsx`, `src/lib/flora-data.ts` · Parte II: `src/routes/web.tsx`, `src/lib/flora-data.ts` |

### Integrantes

| Avaliador | Matrícula |
|-----------|-----------|
| Antônio Augusto Dantas Neto | 20230012215 |
| Davi de Lacerda Teixeira | 20230012251 |
| Deivily Breno Silva Carneiro | 20230012734 |
| Josué Guedes Ferreira | 20230012313 |
| Lael Gustavo Batista Ribeiro de Lima | 20230021715 |
| Rafael de França Silva | 20230012654 |
| Tobias Freire Numeriano | 20230012378 |

---

## Sumário

1. [Parte I — App Mobile (Visão Aluno)](#parte-i--app-mobile-visão-aluno)
   - Metodologia de consolidação
   - 7 avaliações individuais
   - Tabela consolidada P01–P20
   - Plano de melhorias e correções v2
2. [Parte II — Painel Web (Visão Professora)](#parte-ii--painel-web-visão-professora)
   - Escopo e mapa de fluxos
   - Metodologia adaptada
   - Tabela consolidada preliminar PW01–PW15
   - Plano de melhorias e correções v3 (7 Alta corrigidos; 8 pendentes)
3. [Visão geral do projeto](#visão-geral-do-projeto)
4. [Observações metodológicas](#observações-metodológicas)

---

# Parte I — App Mobile (Visão Aluno)

Interface: `/app` · Arquivo principal: `src/routes/app.tsx` · **Status v2:** 9 de 20 problemas corrigidos (P01–P07, P13, P14).

---

## Metodologia de consolidação (Parte I)

Cada integrante realizou inspeção **individual** da interface mobile, percorrendo Home, Catálogo, Captura, Perfil e bottom nav em viewport mobile (~390×844). As listas foram reunidas em sessão de consolidação do grupo, seguindo estas regras:

1. **Mesclagem:** problemas no **mesmo local da interface** e mesma **heurística violada** foram unificados em um único item consolidado (P01–P20).
2. **Severidade:** adotou-se o **valor máximo** entre os avaliadores que identificaram o mesmo problema.
3. **Descrição:** redação consolidada como **síntese** das perspectivas individuais.
4. **Inclusão:** achados de um único avaliador foram mantidos quando severidade ≥ 2.

**Resultado:** 32 achados individuais → **20 problemas únicos** na tabela consolidada.

### Mapa de rastreabilidade (individual → consolidado)

| Consolidado | Avaliadores | IDs individuais |
|-------------|-------------|-----------------|
| P01 | Antônio, Deivily, Lael | ANT-01, DEI-05, LAE-05 |
| P02 | Davi, Josué, Tobias | DAV-01, JOS-05, TOB-05 |
| P03 | Deivily, Antônio | DEI-01, ANT-04 |
| P04 | Antônio, Tobias | ANT-02, TOB-03 |
| P05 | Josué, Lael | JOS-01, LAE-04 |
| P06 | Lael, Rafael | LAE-01, RAF-04 |
| P07 | Lael, Rafael | LAE-02, RAF-01 |
| P08 | Antônio, Josué | ANT-03, JOS-04 |
| P09 | Davi, Rafael | DAV-02, RAF-03 |
| P10 | Davi | DAV-03 |
| P11 | Deivily | DEI-02 |
| P12 | Tobias | TOB-01 |
| P13 | Rafael | RAF-02 |
| P14 | Deivily, Josué | DEI-04, JOS-02 |
| P15 | Josué | JOS-03 |
| P16 | Tobias | TOB-04 |
| P17 | Deivily | DEI-03 |
| P18 | Tobias | TOB-02 |
| P19 | Lael | LAE-03 |
| P20 | Rafael | RAF-05 |

---

## Avaliações individuais (Parte I)

---

## 1. Antônio Augusto Dantas Neto — 20230012215

| Campo | Valor |
|-------|-------|
| **Data** | 05/07/2026 |
| **Foco da inspeção** | HM8 — funcionalidades inacessíveis e botões sem ação |

**Resumo:** Foram registrados **4 problemas**, sendo 1 catastrófico (4), 2 graves (3) e 1 simples (2). A inspeção priorizou elementos clicáveis que não respondem ao toque e fluxos centrais bloqueados no Catálogo e na Home.

| ID | Ref. | Heurística | Problema identificado | Local / Tela | Severidade | Sugestão de melhoria |
|----|------|------------|----------------------|--------------|------------|----------------------|
| ANT-01 | → P01 | HM8 | No Catálogo, toquei repetidamente em "Espécies Exóticas Invasoras" e "Conquistas e Medalhas" esperando abrir listas — os cards têm aparência de botão (borda, hover, seta), mas não navegam. Só "Minhas Plantas" funciona. | Catálogo > lista de coleções | **4** | Criar telas para invasoras e conquistas ou marcar cards como indisponíveis com feedback "Em breve". |
| ANT-02 | → P04 | HM8 | O sino de notificações na Home exibe bolinha laranja indicando alerta, porém o toque não abre nada — parece bug ou funcionalidade quebrada. | Home > header | **3** | Abrir painel de notificações ou remover badge até a feature existir. |
| ANT-03 | → P08 | HM8 | O card de bônus "+50 XP" para espécie invasora no Bessa chama atenção, mas não há botão nem gesto para iniciar essa captura específica. | Home > alerta invasora | **2** | Incluir CTA "Registrar invasora agora" vinculado ao fluxo de captura. |
| ANT-04 | → P03 | HM6 | Na captura, a espécie identificada muda aleatoriamente a cada tentativa (`Math.random()`). Não há como contestar um resultado errado antes de ganhar XP. | Captura > resultado da IA | **3** | Oferecer confirmação da espécie e opção "Identificar novamente" antes de registrar. |

---

## 2. Davi de Lacerda Teixeira — 20230012251

| Campo | Valor |
|-------|-------|
| **Data** | 05/07/2026 |
| **Foco da inspeção** | HM10, HM4 — documentação e adequação de componentes no Perfil |

**Resumo:** Foram registrados **3 problemas**, todos de severidade 2 ou 3. Destaque para ausência total de Ajuda em app educativo e ações do Perfil que parecem implementadas mas não funcionam.

| ID | Ref. | Heurística | Problema identificado | Local / Tela | Severidade | Sugestão de melhoria |
|----|------|------------|----------------------|--------------|------------|----------------------|
| DAV-01 | → P02 | HM10 | Percorri Home, Catálogo, Captura e Perfil procurando orientações para alunos novos — não há FAQ, tutorial nem link de Ajuda. Quem não conhece gamificação pode não entender missões ou XP. | Global | **3** | Adicionar seção Ajuda no Perfil com perguntas frequentes sobre captura, XP e missões. |
| DAV-02 | → P09 | HM4 | "Editar Perfil" parece o botão principal da tela, mas ao tocar nada acontece — expectativa de editar nome/foto frustrada. | Perfil > card do usuário | **2** | Abrir modal de edição ou desabilitar botão com label "Em breve". |
| DAV-03 | → P10 | HM8 | "Privacidade e Permissões" e "Sair da Conta" exibem seta de navegação como os demais itens de menu, mas não levam a lugar nenhum. | Perfil > configurações | **2** | Implementar telas correspondentes ou remover affordance de navegação. |

---

## 3. Deivily Breno Silva Carneiro — 20230012734

| Campo | Valor |
|-------|-------|
| **Data** | 06/07/2026 |
| **Foco da inspeção** | HM6, HM7 — fluxo de captura e prevenção de erros |

**Resumo:** Foram registrados **5 problemas** (1 nota 4, 4 notas 2). A análise concentrou-se no fluxo completo de captura, desde a câmera simulada até a atualização de missão.

| ID | Ref. | Heurística | Problema identificado | Local / Tela | Severidade | Sugestão de melhoria |
|----|------|------------|----------------------|--------------|------------|----------------------|
| DEI-01 | → P03 | HM6 | Resultado da identificação por IA é aleatório; em testes consecutivos obtive espécie nativa e invasora alternadamente para o mesmo fluxo. Risco pedagógico alto. | Captura > pós-análise | **4** | Tornar identificação determinística no protótipo; incluir "Confirmar" e "Não reconheci". |
| DEI-02 | → P11 | HM6 | Fechar captura pelo X volta direto à Home. Se já tinha coletado bônus de curiosidade, não há aviso de perda de progresso. | Captura > botão fechar | **2** | Dialog de confirmação antes de descartar sessão. |
| DEI-03 | → P17 | HM7 | Texto "Aponte para a planta" sugere uso de câmera real, mas o fluxo só simula com botão central — não há upload de foto nem campo de observação. | Captura > tela da câmera | **2** | Adicionar input de galeria ou renomear para "Simular captura (protótipo)". |
| DEI-04 | → P14 | HM2 | Após captura, "Missão atualizada!" mostra 2/5; na Home a missão Solon continua 1/5 — números conflitantes entre telas. | Home ↔ Captura | **2** | Estado compartilhado de missões atualizado após cada captura. |
| DEI-05 | → P01 | HM8 | Itens de invasoras e conquistas no Catálogo não respondem — mesma falha que impede explorar metade da coleção. | Catálogo > coleções | **3** | Implementar navegação ou feedback de indisponibilidade. |

---

## 4. Josué Guedes Ferreira — 20230012313

| Campo | Valor |
|-------|-------|
| **Data** | 06/07/2026 |
| **Foco da inspeção** | HM4, HM5 — missões, mensagens e linguagem do usuário |

**Resumo:** Foram registrados **5 problemas** (1 grave, 4 simples). Foco em coerência entre missões, textos de XP/prazos e ausência de orientação ao usuário.

| ID | Ref. | Heurística | Problema identificado | Local / Tela | Severidade | Sugestão de melhoria |
|----|------|------------|----------------------|--------------|------------|----------------------|
| JOS-01 | → P05 | HM4 | Toquei nas três missões da Home ("Solon", "Árvores da cidade", "Orla") e todas abrem o mesmo fluxo de captura genérico — não ficou claro qual missão seria creditada. | Home > Missões Ativas | **3** | Associar captura à missão clicada e exibir nome da missão no fluxo. |
| JOS-02 | → P14 | HM2 | Progresso da missão Solon difere entre Home (1/5) e tela pós-captura (2/5); dados não sincronizados. | Home > Missões | **2** | Unificar fonte de dados de progresso. |
| JOS-03 | → P15 | HM5 | "XP da semana" e badge de nível "4" no avatar aparecem juntos sem explicar se são a mesma coisa ou métricas diferentes. | Home > XP e avatar | **2** | Rótulo unificado: "Nível 4 · 320 XP esta semana" com legenda. |
| JOS-04 | → P08 | HM8 | Banner de bônus de invasora no Bessa informa a promoção mas não oferece atalho para cumpri-la. | Home > alerta invasora | **2** | Botão "Começar" abrindo captura contextualizada. |
| JOS-05 | → P02 | HM10 | Aluno iniciante não encontra explicação sobre como ganhar XP ou completar missões da professora. | Global | **3** | FAQ ou onboarding acessível pelo Perfil. |

---

## 5. Lael Gustavo Batista Ribeiro de Lima — 20230021715

| Campo | Valor |
|-------|-------|
| **Data** | 06/07/2026 |
| **Foco da inspeção** | HM3, HM2 — visibilidade de informação e consistência no Catálogo |

**Resumo:** Foram registrados **5 problemas** (3 graves, 2 simples). Inspeção detalhada do Catálogo, Guia da Flora e consistência de dados exibidos.

| ID | Ref. | Heurística | Problema identificado | Local / Tela | Severidade | Sugestão de melhoria |
|----|------|------------|----------------------|--------------|------------|----------------------|
| LAE-01 | → P06 | HM3 | Cards do Guia da Flora mostram foto e nomes, mas não abrem detalhe — descrição e curiosidade existem nos dados mas ficam ocultas. | Catálogo > Guia da Flora | **3** | Tornar cards clicáveis abrindo ficha completa da espécie. |
| LAE-02 | → P07 | HM2 | "12 espécies descobertas" no Catálogo, porém Minhas Plantas repete as mesmas 3 espécies para completar 6 slots — inconsistência evidente. | Catálogo > Minhas Plantas | **3** | Listar apenas espécies realmente registradas pelo aluno. |
| LAE-03 | → P19 | HM3 | Nomes científicos em `text-[10px]` e badges em 9px são difíceis de ler no celular; testei em viewport 375px. | Catálogo > Guia; Minhas Plantas | **2** | Mínimo 12px e contraste adequado nos badges. |
| LAE-04 | → P05 | HM4 | Missões distintas na Home levam ao mesmo fluxo — comportamento idêntico para objetivos diferentes confunde o propósito de cada card. | Home > Missões | **2** | Contextualizar captura com ID da missão selecionada. |
| LAE-05 | → P01 | HM8 | Botões de invasoras e conquistas no Catálogo são inoperantes apesar de parecerem navegáveis — bloqueio de funcionalidades principais. | Catálogo > coleções | **4** | Implementar destinos ou indicar indisponibilidade. |

---

## 6. Rafael de França Silva — 20230012654

| Campo | Valor |
|-------|-------|
| **Data** | 07/07/2026 |
| **Foco da inspeção** | HM2, HM1 — consistência de navegação e layout da Home |

**Resumo:** Foram registrados **5 problemas** (2 graves, 2 simples, 1 cosmético). Ênfase em navegação, contadores e organização espacial da interface.

| ID | Ref. | Heurística | Problema identificado | Local / Tela | Severidade | Sugestão de melhoria |
|----|------|------------|----------------------|--------------|------------|----------------------|
| RAF-01 | → P07 | HM2 | Estatísticas do Perfil (12 espécies, 7 invasoras) não batem com Minhas Plantas nem com `alunosRelatorio` — que cita só Ipê-amarelo e Amendoeira para Paulo S. | Perfil; Catálogo | **3** | Derivar contadores de dados reais do aluno logado. |
| RAF-02 | → P13 | HM2 | Dentro de Minhas Plantas, a aba Catálogo na barra inferior deixa de ficar destacada — parece que saí do Catálogo. | Bottom nav | **2** | Manter Catálogo ativo em sub-telas (`catalog-plants`). |
| RAF-03 | → P09 | HM4 | Botão "Editar Perfil" visualmente primário sem ação — quebra expectativa de formulário de edição. | Perfil | **2** | Modal de edição ou estado desabilitado explícito. |
| RAF-04 | → P06 | HM3 | Guia da Flora é vitrine somente leitura parcial — falta acesso à ficha educativa completa de cada espécie. | Catálogo > Guia | **2** | Abrir detalhe ao toque no card. |
| RAF-05 | → P20 | HM1 | Home empilha header, XP, ranking, três missões e alerta — scroll longo em tela única; sensação de sobrecarga visual. | Home | **1** | Carrossel de missões e ranking colapsável. |

---

## 7. Tobias Freire Numeriano — 20230012378

| Campo | Valor |
|-------|-------|
| **Data** | 07/07/2026 |
| **Foco da inspeção** | HM9, HM11, HM5 — feedback, memória e clareza de mensagens |

**Resumo:** Foram registrados **5 problemas**, todos severidade 2 ou 3. Foco em ranking incompleto, feedback de captura, notificações e prazos de missão.

| ID | Ref. | Heurística | Problema identificado | Local / Tela | Severidade | Sugestão de melhoria |
|----|------|------------|----------------------|--------------|------------|----------------------|
| TOB-01 | → P12 | HM11 | Ranking mostra só top 3; subtítulo diz "2º lugar" mas não consigo ver quem está em 4º e 5º — preciso memorizar ou adivinhar posição relativa. | Home > Ranking | **2** | Link "Ver ranking completo" com lista total. |
| TOB-02 | → P18 | HM9 | "Ler curiosidades · +5 XP Bônus" mistura recompensa e leitura; curiosidade só aparece depois do clique, sem preview do conteúdo educativo. | Captura > PlantSheet | **2** | Separar botão "Ver curiosidade" do ganho de XP. |
| TOB-03 | → P04 | HM9 | Sino com badge sugere novidade, mas zero feedback ao toque — usuário não sabe se falhou ou se não há notificações. | Home > notificações | **2** | Toast ou tela vazia de notificações ao interagir. |
| TOB-04 | → P16 | HM5 | Prazos 10/06, 20/06 e 25/06 parecem vencidos (jul/2026) sem label "encerrada" ou "ativa". | Home > Missões | **2** | Status visual de prazo ou datas atualizadas. |
| TOB-05 | → P02 | HM10 | App educativo sem documentação acessível — aluno não sabe como usar captura, ranking ou espécies invasoras sem orientação externa. | Global | **3** | Central de Ajuda com tópicos por funcionalidade. |

---

## Tabela consolidada do grupo (Parte I)

---

### Resumo executivo consolidado (Parte I)

Após consolidação das **7 avaliações individuais** (32 achados brutos), o grupo registrou **20 problemas únicos**, distribuídos por severidade: **0 nota 0**, **1 cosmético (1)**, **10 simples (2)**, **8 graves (3)** e **1 catastrófico (4)**.

Heurísticas mais violadas: **HM8** (4 problemas), **HM2** (3), **HM3**, **HM4** e **HM6** (2 cada).

**Top 3 prioritários (v1):** (1) botões do Catálogo sem ação (P01); (2) ausência de Ajuda (P02); (3) identificação aleatória na captura (P03).

**Status v2 (07/07/2026):** os itens **P01–P07** (prioridade Alta) foram corrigidos em `src/routes/app.tsx` e `src/lib/flora-data.ts`. Adicionalmente, **P13** e **P14** foram resolvidos como benefício colateral da refatoração de estado. Permanecem pendentes **P08–P12** e **P15–P20**.

---

## Tabela principal de avaliação (consolidada)

| ID | Status v2 | Heurística | Problema identificado | Local / Tela | Severidade (0–4) | Sugestão de melhoria | Identificado por |
|----|-----------|------------|----------------------|--------------|------------------|----------------------|------------------|
| P01 | **Corrigido** | HM8 — Facilidade de acesso às funcionalidades | Os itens **"Espécies Exóticas Invasoras"** e **"Conquistas e Medalhas"** no Catálogo são renderizados como `<button>` com ícone, contador, `ChevronRight` e estilo hover, mas **não possuem `onClick`** — apenas "Minhas Plantas" navega. O usuário tenta acessar funcionalidades centrais do jogo e nada acontece, violando HM8 (funcionalidades difíceis de usar por serem inacessíveis). | Catálogo > lista de coleções | **4** | Implementar navegação para telas `InvasiveSpeciesScreen` e `AchievementsScreen`, ou substituir botões por cards desabilitados com rótulo "Em breve" e toast explicativo ao toque. | Antônio, Deivily, Lael |
| P02 | **Corrigido** | HM10 — Ajuda e documentação | Não existe seção, ícone ou link de **Ajuda** em nenhuma tela do app (`HomeScreen`, `CatalogScreen`, `ProfileScreen`, `CaptureFlow`). Em um app educativo com gamificação, missões e espécies invasoras, o usuário não encontra orientação sobre como capturar, ganhar XP ou cumprir missões. | Global (todas as telas) | **3** | Adicionar item "Ajuda" no Perfil ou ícone `?` no header da Home, abrindo modal com FAQ: como capturar, o que é XP, como funcionam missões e espécies invasoras. | Davi, Josué, Tobias |
| P03 | **Corrigido** | HM6 — Prevenção de erros e retomada ao último estado estável | No fluxo de captura, após o botão de câmera, o resultado (nativa ou invasora) é definido por **`Math.random() > 0.5`** (`CaptureFlow`, linha ~506). A IA simulada pode classificar incorretamente a espécie sem opção de "Não é esta planta" ou correção manual, gerando registro pedagógico errado e impossibilitando retorno a um estado confiável. | Captura > pós-análise (`PlantSheet`) | **3** | Substituir aleatoriedade por seleção determinística no protótipo; adicionar botões "Confirmar espécie" e "Tentar novamente" / "Informar erro de identificação" antes de registrar XP. | Deivily, Antônio |
| P04 | **Corrigido** | HM8 — Facilidade de acesso às funcionalidades | O botão de **notificações** (ícone `Bell` com badge laranja) na Home é um `<button>` **sem handler `onClick`** (linhas ~115–118). O indicador visual sugere avisos pendentes, mas o toque não produz resposta alguma. | Home > header > sino de notificações | **3** | Implementar tela/modal de notificações ou, no protótipo, exibir toast "Nenhuma notificação nova" / desabilitar o botão removendo o badge falso. | Antônio, Tobias |
| P05 | **Corrigido** | HM4 — Adequação entre componente e funcionalidade | Cada card de **Missão Ativa** na Home abre o **mesmo fluxo genérico de captura** (`onClick={onCapture}`), independentemente da missão selecionada ("Parque Solon", "Árvores da cidade", "Orla de Cabo Branco"). O componente sugere ação contextual por missão, mas o comportamento é idêntico, gerando ambiguidade sobre qual missão será atualizada. | Home > Missões Ativas | **3** | Passar `missionId` ao abrir captura; exibir banner "Missão: Explore o Parque Solon de Lucena" durante a captura e vincular progresso à missão correta. | Josué, Lael |
| P06 | **Corrigido** | HM3 — Visibilidade e acesso fácil a toda informação | Os cards do **Guia da Flora** no Catálogo são `<div>` estáticos (não clicáveis), embora exibam foto, nome popular, científico e badges ("Nativa", "Registrada"). O usuário não consegue abrir a ficha completa (descrição, curiosidades) a partir do guia — informação existe em `flora-data.ts`, mas fica inacessível. | Catálogo > Guia da Flora de João Pessoa | **3** | Transformar cards em botões que abrem `PlantSheet` ou modal de detalhe com `description` e `curiosity` de cada espécie. | Lael, Rafael |
| P07 | **Corrigido** | HM2 — Consistência e padrões da interface | A tela **Minhas Plantas** indica **"12 espécies descobertas"** no Catálogo, mas a grade exibe apenas **6 entradas** geradas por `[...plants, ...plants, ...plants].slice(0, 6)` — repetindo Ipê-amarelo, Amendoeira e Pau-brasil várias vezes. Contagens do Perfil (12 espécies, 7 invasoras, 5 medalhas) também divergem do conteúdo real exibido. | Catálogo > Minhas Plantas; Perfil > estatísticas | **3** | Usar lista real de plantas registradas pelo aluno (ex.: derivada de `alunosRelatorio`) e alinhar contadores entre Catálogo, Perfil e Home. | Lael, Rafael |
| P08 | Pendente | HM8 — Facilidade de acesso às funcionalidades | O banner **"+50 XP Bônus essa semana"** (espécie invasora no Bessa) é um `<div>` informativo **sem ação de toque** ou CTA para iniciar captura filtrada por espécie invasora/bairro, apesar de ser uma funcionalidade promovida como bônus. | Home > alerta de espécie invasora | **2** | Adicionar botão "Registrar invasora" que abre captura com contexto pré-selecionado (filtro invasora + região Bessa). | Antônio, Josué |
| P09 | Pendente | HM4 — Adequação entre componente e funcionalidade | O botão **"Editar Perfil"** no Perfil é estilizado como ação primária (`bg-moss`, largura total), mas **não possui `onClick`** — metáfora clara de edição sem funcionalidade associada. | Perfil > card do usuário | **2** | Implementar formulário modal de edição (nome, avatar) ou rotular como "Em breve" com estilo secundário/desabilitado. | Davi, Rafael |
| P10 | Pendente | HM8 — Facilidade de acesso às funcionalidades | As opções **"Privacidade e Permissões"** e **"Sair da Conta"** no Perfil usam `SettingRow` com `ChevronRight`, sugerindo navegação, mas **não definem ação** (apenas o toggle de notificações responde ao toque). | Perfil > configurações | **2** | Adicionar handlers: tela de privacidade simulada e confirmação antes de logout; ou remover chevron e indicar "Indisponível no protótipo". | Davi |
| P11 | Pendente | HM6 — Prevenção de erros e retomada ao último estado estável | No fluxo de captura, o botão **X** (fechar) encerra imediatamente e retorna à Home **sem confirmação**, mesmo após análise concluída ou XP parcialmente coletado — risco de perda de progresso percebido. | Captura > botão fechar (canto superior) | **2** | Exibir `AlertDialog`: "Descartar captura? Seu progresso desta sessão será perdido." com opções Cancelar / Sair. | Deivily |
| P12 | Pendente | HM11 — Minimização da carga de memória do usuário | O **Ranking** exibe apenas os **3 primeiros colocados** (`ranking.slice(0, 3)`), embora existam 5+ alunos em `flora-data.ts` e o subtítulo informe "você está em 2º lugar" sem opção de ver posições 4º e 5º ou ranking completo da turma. | Home > seção Ranking | **2** | Adicionar link "Ver ranking completo" expandindo lista ou abrindo modal com todos os participantes. | Tobias |
| P13 | **Corrigido** | HM2 — Consistência e padrões da interface | Ao navegar para **Minhas Plantas** (`screen = "catalog-plants"`), a aba **Catálogo** na bottom nav **não permanece ativa**, pois `BottomNav` compara `current === "catalog"`, ignorando `"catalog-plants"`. O usuário perde referência de onde está na hierarquia. | Bottom nav + Minhas Plantas | **2** | Tratar `"catalog-plants"` como sub-rota do catálogo: `active={current === key \|\| (key === "catalog" && current === "catalog-plants")}`. | Rafael |
| P14 | **Corrigido** | HM2 — Consistência e padrões da interface | Após captura, a tela **"Missão atualizada!"** exibe progresso **2/5 espécies**, enquanto na Home a mesma missão "Explore o Parque Solon de Lucena" mostra **1/5** antes da captura e **1/5** permanece estático (dados hardcoded, sem atualização de estado). | Home > Missões vs. Captura > MissionUpdated | **2** | Centralizar estado de missões em `useState`/contexto compartilhado; refletir incremento de progresso na Home após captura bem-sucedida. | Deivily, Josué |
| P15 | Pendente | HM5 — Adequação de mensagem à funcionalidade e ao usuário | O card de XP exibe **"XP da semana"** (320/500) e, separadamente, o avatar traz badge **"4"** (nível) com texto "Faltam 180 XP para o nível 5" — sem explicar a relação entre XP semanal e nível global, gerando dúvida sobre qual métrica importa para gamificação. | Home > barra de XP + avatar | **2** | Unificar rótulos: ex. "Nível 4 · 320 XP esta semana" com tooltip ou linha auxiliar explicando meta semanal vs. progressão de nível. | Josué |
| P16 | Pendente | HM5 — Adequação de mensagem à funcionalidade e ao usuário | Missões exibem prazos (**"10/06"**, **"20/06"**, **"25/06"**) que parecem **expirados** em relação à data atual do protótipo (jul/2026), sem indicação de status (ativa, encerrada, atrasada). | Home > Missões Ativas > badges de deadline | **2** | Atualizar datas fictícias para o semestre vigente ou exibir status visual: "Encerrada", "3 dias restantes", "Atrasada". | Tobias |
| P17 | Pendente | HM7 — Facilidade de entrada de dados | O fluxo de captura **não solicita entrada real** (câmera, galeria ou formulário) — apenas um botão simula disparo. Labels como "Aponte para a planta" sugerem interação fotográfica, mas não há `<input type="file">`, permissão de câmera ou campo de observação. | Captura > tela da câmera | **2** | No protótipo, usar `input` oculto para selecionar imagem da galeria; manter botão de captura com label honesto: "Simular captura (protótipo)". | Deivily |
| P18 | Pendente | HM9 — Feedback imediato e fácil de ser notado | O botão **"Ler curiosidades · +5 XP Bônus"** só revela o texto da curiosidade **após** o clique; antes disso, o usuário não sabe que precisa interagir para ler conteúdo educativo, e o rótulo mistura leitura com recompensa de XP de forma pouco clara. | Captura > PlantSheet > bloco de XP | **2** | Separar ações: botão "Ver curiosidade" expande texto; badge "+5 XP" aparece após scroll mínimo ou tempo de leitura, com animação de confirmação. | Tobias |
| P19 | Pendente | HM3 — Visibilidade e acesso fácil a toda informação | Nomes científicos e badges nos cards do guia usam tipografia **`text-[10px]`** e **`text-[9px]`**, abaixo do recomendado para leitura confortável em mobile (~12sp mínimo), prejudicando legibilidade especialmente em telas pequenas. | Catálogo > Guia da Flora; Minhas Plantas | **2** | Aumentar para `text-xs` (12px) mínimo; garantir contraste WCAG AA nos badges "Nativa"/"Invasora". | Lael |
| P20 | Pendente | HM1 — Bom aproveitamento do espaço da tela | A **Home concentra muitos blocos empilhados** (header, XP, ranking, 3 missões, alerta invasora) exigindo scroll extenso antes de alcançar o banner de bônus; em viewport `100dvh` com bottom nav fixa (`pb-24`), a densidade pode sobrecarregar a tela inicial do aluno. | Home (visão geral) | **1** | Colapsar ranking em top 3 + link; agrupar missões em carrossel horizontal; mover alerta de bônus para topo contextual. | Rafael |

---

## Matriz heurística × problemas (Parte I — consolidada)

| Heurística | Qtd. problemas | Maior severidade |
|------------|----------------|------------------|
| HM1 — Bom aproveitamento do espaço da tela | 1 | 1 |
| HM2 — Consistência e padrões da interface | 3 | 3 |
| HM3 — Visibilidade e acesso fácil a toda informação | 2 | 3 |
| HM4 — Adequação entre componente e funcionalidade | 2 | 3 |
| HM5 — Adequação de mensagem à funcionalidade e ao usuário | 2 | 2 |
| HM6 — Prevenção de erros e retomada ao último estado estável | 2 | 3 |
| HM7 — Facilidade de entrada de dados | 1 | 2 |
| HM8 — Facilidade de acesso às funcionalidades | 4 | 4 |
| HM9 — Feedback imediato e fácil de ser notado | 1 | 2 |
| HM10 — Ajuda e documentação | 1 | 3 |
| HM11 — Minimização da carga de memória do usuário | 1 | 2 |

**Totais por severidade:** 0 → 0 · 1 → 1 · 2 → 10 · 3 → 8 · 4 → 1

---

## Plano de melhorias priorizado (Parte I)

| ID | Prioridade | Esforço | Status v2 | Arquivos |
|----|------------|---------|-----------|----------|
| P01 | Alta | Médio | **Corrigido** | `src/routes/app.tsx` |
| P02 | Alta | Baixo | **Corrigido** | `src/routes/app.tsx` |
| P03 | Alta | Médio | **Corrigido** | `src/routes/app.tsx` |
| P04 | Alta | Baixo | **Corrigido** | `src/routes/app.tsx` |
| P05 | Alta | Médio | **Corrigido** | `src/routes/app.tsx` |
| P06 | Alta | Médio | **Corrigido** | `src/routes/app.tsx` |
| P07 | Alta | Médio | **Corrigido** | `src/routes/app.tsx`, `src/lib/flora-data.ts` |
| P08 | Média | Baixo | Pendente | `src/routes/app.tsx` |
| P09 | Média | Baixo | Pendente | `src/routes/app.tsx` |
| P10 | Média | Baixo | Pendente | `src/routes/app.tsx` |
| P11 | Média | Baixo | Pendente | `src/routes/app.tsx` |
| P12 | Média | Baixo | Pendente | `src/routes/app.tsx` |
| P13 | Média | Baixo | **Corrigido** | `src/routes/app.tsx` |
| P14 | Média | Médio | **Corrigido** | `src/routes/app.tsx` |
| P15 | Baixa | Baixo | Pendente | `src/routes/app.tsx` |
| P16 | Baixa | Baixo | Pendente | `src/lib/flora-data.ts`, `HomeScreen` |
| P17 | Baixa | Médio | Pendente | `src/routes/app.tsx` |
| P18 | Baixa | Baixo | Pendente | `src/routes/app.tsx` |
| P19 | Baixa | Baixo | Pendente | `src/routes/app.tsx` |
| P20 | Baixa | Médio | Pendente | `src/routes/app.tsx` |

---

## Correções implementadas — protótipo v2 / Parte I (07/07/2026)

Alterações em [`src/routes/app.tsx`](src/routes/app.tsx) e [`src/lib/flora-data.ts`](src/lib/flora-data.ts):

| ID | Correção aplicada |
|----|-------------------|
| **P01** | Telas `InvasiveSpeciesScreen` e `AchievementsScreen` acessíveis pelo Catálogo |
| **P02** | `HelpDialog` com FAQ (4 tópicos); gatilhos na Home (ícone ?) e no Perfil (item Ajuda) |
| **P03** | Removido `Math.random()`; step de confirmação com "Confirmar espécie" e "Tentar novamente" |
| **P04** | `NotificationsDialog` ao tocar no sino da Home |
| **P05** | Missões passam `missionId`; banner contextual na captura; progresso vinculado à missão |
| **P06** | Cards do Guia abrem `PlantDetailDialog` com descrição e curiosidade |
| **P07** | Helpers `getStudentPlants` / `getStudentStats`; contadores alinhados (2 espécies, 1 invasora) |
| **P13** | Bottom nav mantém aba Catálogo ativa em sub-telas (`catalog-plants`, `catalog-invasive`, etc.) |
| **P14** | Estado `missions` centralizado em `AppMobile`; progresso sincronizado após captura |

**Pendentes para v2 (Parte I):** P08–P12, P15–P20.

---

# Parte II — Painel Web (Visão Professora)

Interface: `/web` · Arquivo principal: [`src/routes/web.tsx`](../src/routes/web.tsx) · **Status v3:** 7 de 15 problemas corrigidos (PW01, PW02, PW04–PW07, PW11).

---

## Escopo da avaliação (Parte II)

| Campo | Valor |
|-------|-------|
| **Rota** | `/web` |
| **Persona** | Profª Eliana — gestão pedagógica de turmas e desafios |
| **Viewport de inspeção** | Desktop **1280×800** (primário) · Tablet **768×1024** (secundário — sidebar oculta em `< lg`) |
| **Heurísticas** | HM1–HM11 ([material Becker](../Heurísticas%20para%20Avaliação%20de%20Interfaces%20de%20Dispositivos%20Móveis.md)) |
| **Dados compartilhados** | `turmas`, `alunosRelatorio`, `assets` em [`src/lib/flora-data.ts`](../src/lib/flora-data.ts) |

### Nota metodológica — HM em interface web

O painel da professora é uma **interface web responsiva** (desktop-first), não um app mobile nativo. As heurísticas HM1–HM11 foram aplicadas **por analogia**: HM1 como densidade e organização do layout; HM8 como acesso às funcionalidades pedagógicas; HM7 como clareza de formulários e filtros. A inspeção em tablet é obrigatória porque a sidebar principal fica oculta abaixo do breakpoint `lg`.

### Mapa de telas e fluxos

| Seção | Componente | Interações críticas |
|-------|------------|---------------------|
| **Dashboard** | `DashboardHome` | Gráfico de engajamento, alerta ambiental, tabela de atividades recentes, ranking semanal |
| **Gerenciar Turmas** | `GerenciarTurmas` | Filtros turma/atividade, KPIs, busca de aluno, exportação CSV, tabela detalhada |
| **Nova Atividade** | `NovaAtividade` | Wizard em 4 passos (Turma → Geofencing → Formulário → Revisar/Lançar), tela de sucesso |
| **Configurações** | `Configuracoes` | Integrações (Google Classroom, SEDUC-PB), dados da conta |
| **Global** | `Sidebar`, `TopBar` | Navegação lateral, sino de notificações, badge "2 turmas ativas", link para `/app` |

**Fluxo Nova Atividade:** Turma → desenho de polígono no mapa → título/descrição/prazo → revisão → confirmação de lançamento → retorno ao dashboard.

**Fora de escopo:** landing (`/`), backend real, persistência, autenticação e integrações externas funcionais.

---

## Metodologia de consolidação (Parte II)

A Parte II segue as **mesmas regras** da Parte I:

1. **Mesclagem:** problemas no mesmo local e mesma heurística → item único (PW01–PW15).
2. **Severidade:** valor máximo entre avaliadores.
3. **Descrição:** síntese das perspectivas individuais.
4. **Inclusão:** achados isolados mantidos quando severidade ≥ 2.

**Status atual:** a tabela abaixo foi produzida por **inspeção estática consolidada** de `web.tsx` (07/07/2026). Em **07/07/2026**, os **7 itens de prioridade Alta** (PW01, PW02, PW04–PW07, PW11) foram corrigidos na v3. Os 7 avaliadores ainda devem validar PW01–PW15 em sessão de grupo, com inspeções individuais prefixo `PRO-` (ex.: `ANT-W01`), e ajustar severidades se necessário.

**Resultado preliminar:** **15 problemas únicos** (PW01–PW15).

---

## Tabela consolidada preliminar (Parte II)

| ID | Status v3 | Heurística | Problema identificado | Local / Tela | Severidade (0–4) | Sugestão de melhoria | Validar em grupo |
|----|-----------|------------|----------------------|--------------|------------------|----------------------|------------------|
| PW01 | **Corrigido** | HM8 / HM1 | A sidebar de navegação usa `hidden lg:flex` — em viewports **&lt; lg** (tablet/mobile) **não há menu alternativo** (drawer, bottom nav ou hamburger). A professora fica presa no Dashboard sem acesso a Turmas, Nova Atividade ou Configurações. | Layout global `< lg` | **4** | Adicionar drawer/mobile nav com os 4 itens da sidebar; manter estado `section` acessível em qualquer breakpoint. | Sim |
| PW02 | **Corrigido** | HM8 | O botão de **notificações** (`Bell`) no `TopBar` é um `<button>` **sem `onClick`** — mesmo padrão do P04 corrigido no app aluno, mas ainda inoperante no painel web. | TopBar > sino | **3** | Reutilizar `NotificationsDialog` ou exibir painel/toast ao clicar; remover badge se não houver notificações. | Sim |
| PW03 | Pendente | HM8 | No card de **alerta ambiental** (Amendoeira invasora no Bessa), o botão **"Ver mapa"** não possui handler — promete visualização geográfica sem entrega. | Dashboard > alerta invasora | **3** | Abrir modal com mapa destacando registros ou navegar para relatório filtrado por região. | Sim |
| PW04 | **Corrigido** | HM8 / HM9 | O botão **"Exportar CSV"** em Gerenciar Turmas não gera download — professora não consegue extrair relatório para planilha ou diário de classe. | Gerenciar Turmas > tabela | **3** | Implementar exportação client-side a partir de `alunosRelatorio` filtrado; feedback toast "CSV baixado". | Sim |
| PW05 | **Corrigido** | HM4 / HM7 | O campo **"Buscar aluno…"** aceita texto mas **não filtra** as linhas da tabela — componente de busca sem funcionalidade associada. | Gerenciar Turmas > header da tabela | **3** | Vincular `input` a estado de filtro por nome; exibir "Nenhum aluno encontrado" quando vazio. | Sim |
| PW06 | **Corrigido** | HM2 | Os selects **Turma** e **Atividade** alteram labels visuais, mas KPIs e tabela **sempre usam `alunosRelatorio` completo** — filtros não refletem nos dados exibidos. | Gerenciar Turmas > filtros + KPIs | **3** | Derivar KPIs e linhas da tabela dos filtros selecionados; alinhar prazo exibido com atividade escolhida. | Sim |
| PW07 | **Corrigido** | HM6 | No passo **Geofencing**, o botão **"Continuar"** permite avançar **sem polígono mínimo** (≥3 vértices). A revisão exibe "Sem geofencing" silenciosamente, sem alerta ou bloqueio. | Nova Atividade > passo 2 | **3** | Desabilitar "Continuar" até `polyPoints.length >= 3` ou exibir confirmação "Lançar sem zona geográfica?". | Sim |
| PW08 | Pendente | HM2 | No passo de revisão, o **prazo** está hardcoded como `"28/06/2026"` no componente `Review`, enquanto o input `type="date"` do formulário **não está vinculado a estado** — dados inconsistentes entre passos. | Nova Atividade > passo 4 | **2** | Estado `deadline` compartilhado; `Review` lê valor do input; formatação pt-BR consistente. | Sim |
| PW09 | Pendente | HM9 / HM6 | Em **Configurações**, os campos de conta são editáveis, mas **não há botão "Salvar"** nem feedback de persistência — usuário não sabe se alterações foram gravadas. | Configurações > Dados da Conta | **2** | Botão "Salvar alterações" com toast de confirmação ou indicador "Alterações não salvas" ao sair. | Sim |
| PW10 | Pendente | HM8 | **Integrações:** botão "Conectar" (SEDUC-PB) sem fluxo; Google Classroom exibe "Conectado ✓" estático sem ação de desconectar ou configurar. | Configurações > Integrações | **2** | Simular fluxo OAuth mock ou desabilitar com label "Em breve"; toggle conectar/desconectar no protótipo. | Sim |
| PW11 | **Corrigido** | HM10 | **Ausência total de Ajuda/FAQ** para a professora — criar desafio, desenhar geofencing, interpretar relatórios e exportar CSV não têm orientação in-app (espelha P02 do aluno). | Global | **3** | Ícone `?` no TopBar ou item na sidebar com FAQ: criar atividade, geofencing, relatórios, integrações. | Sim |
| PW12 | Pendente | HM3 / HM8 | Linhas da tabela **Atividades Recentes** no Dashboard não são clicáveis — informação visível sem caminho para detalhe ou relatório da atividade. | Dashboard > Atividades Recentes | **2** | Tornar linhas clicáveis navegando para Gerenciar Turmas com filtro pré-selecionado. | Sim |
| PW13 | Pendente | HM8 | Badge **"2 turmas ativas"** no TopBar não abre painel, lista ou navegação — affordance informativa sem aprofundamento. | TopBar | **2** | Dropdown com resumo das turmas ou link para Gerenciar Turmas. | Sim |
| PW14 | Pendente | HM11 / HM2 | Após **"Desafio lançado com sucesso!"**, o novo desafio **não aparece** em Atividades Recentes do Dashboard — estado local isolado entre wizard e dashboard. | Nova Atividade → Dashboard | **2** | Estado compartilhado de atividades; append na lista após `setDone(true)`. | Sim |
| PW15 | Pendente | HM3 | **Ranking da Semana** exibe apenas **top 3** alunos, sem "Ver todos" — análogo ao P12 pendente no app aluno. | Dashboard > Ranking | **2** | Link expandindo lista completa ou modal com ranking da turma. | Sim |

---

## Matriz heurística × problemas (Parte II — preliminar)

| Heurística | Qtd. problemas | Maior severidade |
|------------|----------------|------------------|
| HM1 — Bom aproveitamento do espaço da tela | 1 | 4 |
| HM2 — Consistência e padrões da interface | 3 | 3 |
| HM3 — Visibilidade e acesso fácil a toda informação | 2 | 2 |
| HM4 — Adequação entre componente e funcionalidade | 1 | 3 |
| HM6 — Prevenção de erros e retomada ao último estado estável | 2 | 3 |
| HM7 — Facilidade de entrada de dados | 1 | 3 |
| HM8 — Facilidade de acesso às funcionalidades | 6 | 4 |
| HM9 — Feedback imediato e fácil de ser notado | 2 | 3 |
| HM10 — Ajuda e documentação | 1 | 3 |
| HM11 — Minimização da carga de memória do usuário | 1 | 2 |

**Totais por severidade (Parte II):** 0 → 0 · 1 → 0 · 2 → 7 · 3 → 7 · 4 → 1

**Top 3 prioritários (Parte II):** (1) navegação inacessível em tablet (PW01) — **corrigido v3**; (2) export CSV e busca/filtros inoperantes (PW04, PW05, PW06) — **corrigidos v3**; (3) ausência de Ajuda (PW11) — **corrigido v3**.

---

## Plano de melhorias priorizado (Parte II)

| ID | Prioridade | Esforço | Status v3 | Arquivos |
|----|------------|---------|-----------|----------|
| PW01 | Alta | Médio | **Corrigido** | `src/routes/web.tsx` |
| PW02 | Alta | Baixo | **Corrigido** | `src/routes/web.tsx`, `src/components/flora/NotificationsDialog.tsx` |
| PW04 | Alta | Baixo | **Corrigido** | `src/routes/web.tsx`, `src/lib/flora-data.ts` |
| PW05 | Alta | Baixo | **Corrigido** | `src/routes/web.tsx` |
| PW06 | Alta | Médio | **Corrigido** | `src/routes/web.tsx`, `src/lib/flora-data.ts` |
| PW07 | Alta | Baixo | **Corrigido** | `src/routes/web.tsx` |
| PW11 | Alta | Baixo | **Corrigido** | `src/routes/web.tsx`, `src/components/flora/HelpDialog.tsx` |
| PW03 | Média | Baixo | Pendente | `src/routes/web.tsx` |
| PW08 | Média | Baixo | Pendente | `src/routes/web.tsx` |
| PW09 | Média | Baixo | Pendente | `src/routes/web.tsx` |
| PW12 | Média | Baixo | Pendente | `src/routes/web.tsx` |
| PW14 | Média | Médio | Pendente | `src/routes/web.tsx` |
| PW10 | Baixa | Baixo | Pendente | `src/routes/web.tsx` |
| PW13 | Baixa | Baixo | Pendente | `src/routes/web.tsx` |
| PW15 | Baixa | Baixo | Pendente | `src/routes/web.tsx` |

---

## Correções implementadas — protótipo v3 / Parte II (07/07/2026)

Alterações em [`src/routes/web.tsx`](../src/routes/web.tsx), [`src/lib/flora-data.ts`](../src/lib/flora-data.ts) e [`src/components/flora/`](../src/components/flora/):

| ID | Correção aplicada |
|----|-------------------|
| **PW01** | `MobileNavSheet` com `Sheet` lateral; botão Menu no `TopBar` (`lg:hidden`); `NAV_ITEMS` compartilhado com sidebar |
| **PW02** | `NotificationsDialog` compartilhado; sino abre avisos pedagógicos (`TEACHER_NOTIFICATIONS`) |
| **PW04** | `exportRelatorioCsv()` gera download client-side; feedback "CSV baixado" após exportação |
| **PW05** | Estado `search` filtra tabela por nome; mensagem "Nenhum aluno encontrado" quando vazio |
| **PW06** | `getRelatorioFiltrado()` + `atividadesProfessora`; KPIs, prazo e tabela derivados de turma/atividade |
| **PW07** | Botão "Continuar" desabilitado no passo Geofencing sem ≥3 vértices; mensagem orientativa |
| **PW11** | `HelpDialog` com `FAQ_TEACHER`; ícone `?` no TopBar |

**Pendentes para v3 (Parte II):** PW03, PW08–PW10, PW12–PW15.

Implementação prevista em [`src/routes/web.tsx`](../src/routes/web.tsx), reutilizando padrões já criados em [`src/routes/app.tsx`](../src/routes/app.tsx) (`HelpDialog`, `NotificationsDialog`) quando aplicável.

**Ordem sugerida para itens restantes:** PW03 (Ver mapa) → PW08 (data wizard) → PW12/PW14 (dashboard) → demais Média/Baixa.

---

## Limitações do protótipo (Parte II)

- **Dados fictícios:** engajamento, ranking, alertas e relatórios vêm de arrays hardcoded ou `alunosRelatorio` estático.
- **Wizard sem persistência:** desafio "lançado" não altera dashboard nem app do aluno.
- **Integrações fictícias:** Google Classroom e SEDUC-PB são visuais, sem OAuth real.
- **Sidebar inacessível em mobile/tablet:** corrigido na v3 com drawer (PW01).
- **Geofencing simulado:** polígono sobre imagem estática, sem GPS ou validação real de área.

---

## Visão geral do projeto

| Parte | Interface | Problemas | Corrigidos | Pendientes |
|-------|-----------|-----------|------------|------------|
| **I — Aluno** | `/app` (mobile) | 20 (P01–P20) | **9** (P01–P07, P13, P14) | 11 (P08–P12, P15–P20) |
| **II — Professora** | `/web` (painel) | 15 (PW01–PW15) | **7** (PW01, PW02, PW04–PW07, PW11) | 8 (PW03, PW08–PW10, PW12–PW15) |
| **Total** | — | **35** | **16** | **19** |

### Próximos passos sugeridos

1. **Sessão de grupo:** validar PW01–PW15 e registrar achados com prefixo `PRO-` (itens Alta já corrigidos na v3).
2. **Implementação v3 (restante):** corrigir PW03, PW08–PW10, PW12–PW15 em `web.tsx`.

---

## Observações metodológicas

### Limitações do protótipo (Parte I — v2)

- **Dados fictícios:** ranking, missões, XP e plantas vêm de `flora-data.ts`; progresso de missões persiste apenas na sessão (sem backend).
- **Captura simulada:** sem integração real com câmera, GPS ou IA; identificação determinística com confirmação manual.
- **Estado local:** navegação via `useState<Screen>` — recarregar retorna à Home.

### Telas/fluxos ainda pendentes (Parte I — v2)

- CTA no banner de bônus invasora (P08)
- Edição de perfil, privacidade e logout (P09, P10)
- Confirmação ao fechar captura (P11)
- Ranking completo da turma (P12)
- Unificação de rótulos XP/nível e status de prazos (P15, P16)
- Entrada real por câmera/galeria (P17)
- Separação feedback curiosidades/XP (P18)
- Tipografia mínima 12px no guia (P19)
- Reorganização espacial da Home (P20)

### Metodologia aplicada

**Parte I:** sete avaliadores inspecionaram individualmente a interface mobile (`/app`), registrando problemas com heurísticas HM1–HM11 e severidade 0–4 (Nielsen/Becker). A consolidação em grupo produziu 20 itens (P01–P20). Nove foram corrigidos na v2.

**Parte II:** tabela preliminar PW01–PW15 validada por inspeção estática; **7 itens Alta corrigidos na v3** (07/07/2026). HM1–HM11 aplicadas por analogia à interface web responsiva.

Não houve testes com usuários reais em nenhuma das partes nesta etapa.
