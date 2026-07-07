# Avaliação Heurística em Grupo — Flora Explorer JP

Documento único de entrega contendo as **7 avaliações individuais**, as **tabelas consolidadas** e os **planos de melhorias** do grupo — em duas partes: visão Aluno (mobile) e visão Professora (painel web).

---

## Capa do grupo

| Campo | Valor |
| :---- | :---- |
| **Nome do sistema** | Flora Explorer JP |
| **Interfaces avaliadas** | **Parte I:** App Mobile — Visão Aluno (`/app`) · **Parte II:** Painel Web — Visão Professora (`/web`) |
| **Método** | Avaliação Heurística (inspeção individual \+ consolidação em grupo) |
| **Conjunto de heurísticas** | HM1–HM11 (interfaces móveis, aplicadas por analogia na Parte II) |

### Integrantes

| Avaliador | Matrícula |
| :---- | :---- |
| Antônio Augusto Dantas Neto | 20230012215 |
| Davi de Lacerda Teixeira | 20230012251 |
| Deivily Breno Silva Carneiro | 20230012734 |
| Josué Guedes Ferreira | 20230012313 |
| Lael Gustavo Batista Ribeiro de Lima | 20230021715 |
| Rafael de França Silva | 20230012654 |
| Tobias Freire Numeriano | 20230012378 |

---

# Avaliações individuais do grupo

Cada integrante inspecionou **ambas as interfaces**: `/app` (mobile \~390×844) e `/web` (desktop 1280×800 \+ tablet 768×1024). Os achados descrevem o protótipo **antes das correções** v2 (aluno) e v3 (professora).

**Total de achados brutos individuais:** 32 (`/app`) \+ 21 (`/web`) \= **53**.

---

## 1\. Antônio Augusto Dantas Neto — 20230012215

| Campo | Valor |
| :---- | :---- |
| **Data da inspeção** | 05–07/07/2026 |
| **Interfaces inspecionadas** | `/app` · `/web` |
| **Foco da inspeção** | HM8 — funcionalidades inacessíveis e botões sem ação |

**Resumo:** Foram registrados **7 problemas** (4 no app aluno, 3 no painel professora): 2 catastróficos (4), 4 graves (3) e 1 simples (2). Priorizei elementos clicáveis que não respondem e bloqueios de navegação nas duas interfaces.

| ID | Ref. | Interface | Heurística | Problema identificado | Local / Tela | Severidade | Sugestão de melhoria |
| :---- | :---- | :---- | :---- | :---- | :---- | :---- | :---- |
| ANT-01 | → P01 | `/app` | HM8 | No Catálogo, toquei repetidamente em "Espécies Exóticas Invasoras" e "Conquistas e Medalhas" esperando abrir listas — os cards têm aparência de botão (borda, hover, seta), mas não navegam. Só "Minhas Plantas" funciona. | Catálogo \> lista de coleções | **4** | Criar telas para invasoras e conquistas ou marcar cards como indisponíveis com feedback "Em breve". |
| ANT-02 | → P04 | `/app` | HM8 | O sino de notificações na Home exibe bolinha laranja indicando alerta, porém o toque não abre nada — parece bug ou funcionalidade quebrada. | Home \> header | **3** | Abrir painel de notificações ou remover badge até a feature existir. |
| ANT-03 | → P08 | `/app` | HM8 | O card de bônus "+50 XP" para espécie invasora no Bessa chama atenção, mas não há botão nem gesto para iniciar essa captura específica. | Home \> alerta invasora | **2** | Incluir CTA "Registrar invasora agora" vinculado ao fluxo de captura. |
| ANT-04 | → P03 | `/app` | HM6 | Na captura, a espécie identificada muda aleatoriamente a cada tentativa (`Math.random()`). Não há como contestar um resultado errado antes de ganhar XP. | Captura \> resultado da IA | **3** | Oferecer confirmação da espécie e opção "Identificar novamente" antes de registrar. |
| ANT-W01 | → PW01 | `/web` | HM8 / HM1 | Redimensionei o painel para 768px: a sidebar sumiu e só restou a seta Voltar — não encontrei como acessar Gerenciar Turmas, Nova Atividade ou Configurações. Fiquei preso no Dashboard. | Layout global `< lg` | **4** | Adicionar drawer ou menu hamburger com os 4 itens da sidebar. |
| ANT-W02 | → PW02 | `/web` | HM8 | Cliquei no sino do TopBar esperando avisos pedagógicos — nenhuma resposta, igual ao bug do app aluno. | TopBar \> sino | **3** | Abrir painel de notificações ou toast informativo. |
| ANT-W03 | → PW03 | `/web` | HM8 | No alerta de Amendoeira invasora no Bessa, o botão "Ver mapa" parece CTA principal, mas o clique não abre mapa nem relatório regional. | Dashboard \> alerta invasora | **3** | Abrir modal com mapa destacando registros ou navegar para relatório filtrado. |

---

## 2\. Davi de Lacerda Teixeira — 20230012251

| Campo | Valor |
| :---- | :---- |
| **Data da inspeção** | 05–07/07/2026 |
| **Interfaces inspecionadas** | `/app` · `/web` |
| **Foco da inspeção** | HM10, HM4 — documentação e adequação de componentes |

**Resumo:** Foram registrados **6 problemas** (3 no app aluno, 3 no painel professora), severidade 2 ou 3\. Destaque para ausência de Ajuda em ambas as interfaces e ações que parecem implementadas mas não funcionam.

| ID | Ref. | Interface | Heurística | Problema identificado | Local / Tela | Severidade | Sugestão de melhoria |
| :---- | :---- | :---- | :---- | :---- | :---- | :---- | :---- |
| DAV-01 | → P02 | `/app` | HM10 | Percorri Home, Catálogo, Captura e Perfil procurando orientações para alunos novos — não há FAQ, tutorial nem link de Ajuda. Quem não conhece gamificação pode não entender missões ou XP. | Global | **3** | Adicionar seção Ajuda no Perfil com perguntas frequentes sobre captura, XP e missões. |
| DAV-02 | → P09 | `/app` | HM4 | "Editar Perfil" parece o botão principal da tela, mas ao tocar nada acontece — expectativa de editar nome/foto frustrada. | Perfil \> card do usuário | **2** | Abrir modal de edição ou desabilitar botão com label "Em breve". |
| DAV-03 | → P10 | `/app` | HM8 | "Privacidade e Permissões" e "Sair da Conta" exibem seta de navegação como os demais itens de menu, mas não levam a lugar nenhum. | Perfil \> configurações | **2** | Implementar telas correspondentes ou remover affordance de navegação. |
| DAV-W01 | → PW11 | `/web` | HM10 | Percorri Dashboard, Gerenciar Turmas, Nova Atividade e Configurações — não há ícone de Ajuda nem FAQ sobre geofencing, relatórios ou exportação CSV. | Global | **3** | Ícone `?` no TopBar com FAQ para professores. |
| DAV-W02 | → PW09 | `/web` | HM9 / HM6 | Editei nome e e-mail em Configurações \> Dados da Conta, mas não há botão Salvar — não sei se as alterações foram gravadas ao sair da tela. | Configurações \> Dados da Conta | **2** | Botão "Salvar alterações" com toast de confirmação. |
| DAV-W03 | → PW10 | `/web` | HM8 | Cliquei em "Conectar" na integração SEDUC-PB e nada aconteceu; Google Classroom mostra "Conectado ✓" estático, sem opção de desconectar. | Configurações \> Integrações | **2** | Simular fluxo de conexão ou indicar "Em breve" no protótipo. |

---

## 3\. Deivily Breno Silva Carneiro — 20230012734

| Campo | Valor |
| :---- | :---- |
| **Data da inspeção** | 06–07/07/2026 |
| **Interfaces inspecionadas** | `/app` · `/web` |
| **Foco da inspeção** | HM6, HM7 — fluxo de captura, wizard e prevenção de erros |

**Resumo:** Foram registrados **8 problemas** (5 no app aluno, 3 no painel professora): 1 nota 4, 5 notas 3 e 2 notas 2\. Concentrei-me no fluxo de captura do aluno e no wizard Nova Atividade da professora.

| ID | Ref. | Interface | Heurística | Problema identificado | Local / Tela | Severidade | Sugestão de melhoria |
| :---- | :---- | :---- | :---- | :---- | :---- | :---- | :---- |
| DEI-01 | → P03 | `/app` | HM6 | Resultado da identificação por IA é aleatório; em testes consecutivos obtive espécie nativa e invasora alternadamente para o mesmo fluxo. Risco pedagógico alto. | Captura \> pós-análise | **4** | Tornar identificação determinística no protótipo; incluir "Confirmar" e "Não reconheci". |
| DEI-02 | → P11 | `/app` | HM6 | Fechar captura pelo X volta direto à Home. Se já tinha coletado bônus de curiosidade, não há aviso de perda de progresso. | Captura \> botão fechar | **2** | Dialog de confirmação antes de descartar sessão. |
| DEI-03 | → P17 | `/app` | HM7 | Texto "Aponte para a planta" sugere uso de câmera real, mas o fluxo só simula com botão central — não há upload de foto nem campo de observação. | Captura \> tela da câmera | **2** | Adicionar input de galeria ou renomear para "Simular captura (protótipo)". |
| DEI-04 | → P14 | `/app` | HM2 | Após captura, "Missão atualizada\!" mostra 2/5; na Home a missão Solon continua 1/5 — números conflitantes entre telas. | Home ↔ Captura | **2** | Estado compartilhado de missões atualizado após cada captura. |
| DEI-05 | → P01 | `/app` | HM8 | Itens de invasoras e conquistas no Catálogo não respondem — mesma falha que impede explorar metade da coleção. | Catálogo \> coleções | **3** | Implementar navegação ou feedback de indisponibilidade. |
| DEI-W01 | → PW07 | `/web` | HM6 | No passo Geofencing de Nova Atividade, cliquei "Continuar" sem desenhar polígono — avancei normalmente; na revisão aparece "Sem geofencing" sem alerta prévio. | Nova Atividade \> passo 2 | **3** | Bloquear "Continuar" até ≥3 vértices ou pedir confirmação explícita. |
| DEI-W02 | → PW08 | `/web` | HM2 | Alterei a data-limite no formulário, mas na revisão o prazo aparece fixo como 28/06/2026 — valores divergentes entre passos. | Nova Atividade \> passo 4 | **2** | Vincular input `date` ao estado exibido na revisão. |
| DEI-W03 | → PW01 | `/web` | HM8 / HM1 | Testei o painel no tablet da escola: sem sidebar lateral, impossível criar nova atividade ou ver relatórios de turma. | Layout global `< lg` | **4** | Menu mobile alternativo à sidebar desktop. |

---

## 4\. Josué Guedes Ferreira — 20230012313

| Campo | Valor |
| :---- | :---- |
| **Data da inspeção** | 06–07/07/2026 |
| **Interfaces inspecionadas** | `/app` · `/web` |
| **Foco da inspeção** | HM4, HM5, HM2 — missões, filtros e coerência de dados |

**Resumo:** Foram registrados **8 problemas** (5 no app aluno, 3 no painel professora): 2 graves (3) e 6 simples (2). Foco em coerência entre missões, filtros de relatório e persistência de desafios lançados.

| ID | Ref. | Interface | Heurística | Problema identificado | Local / Tela | Severidade | Sugestão de melhoria |
| :---- | :---- | :---- | :---- | :---- | :---- | :---- | :---- |
| JOS-01 | → P05 | `/app` | HM4 | Toquei nas três missões da Home ("Solon", "Árvores da cidade", "Orla") e todas abrem o mesmo fluxo de captura genérico — não ficou claro qual missão seria creditada. | Home \> Missões Ativas | **3** | Associar captura à missão clicada e exibir nome da missão no fluxo. |
| JOS-02 | → P14 | `/app` | HM2 | Progresso da missão Solon difere entre Home (1/5) e tela pós-captura (2/5); dados não sincronizados. | Home \> Missões | **2** | Unificar fonte de dados de progresso. |
| JOS-03 | → P15 | `/app` | HM5 | "XP da semana" e badge de nível "4" no avatar aparecem juntos sem explicar se são a mesma coisa ou métricas diferentes. | Home \> XP e avatar | **2** | Rótulo unificado: "Nível 4 · 320 XP esta semana" com legenda. |
| JOS-04 | → P08 | `/app` | HM8 | Banner de bônus de invasora no Bessa informa a promoção mas não oferece atalho para cumpri-la. | Home \> alerta invasora | **2** | Botão "Começar" abrindo captura contextualizada. |
| JOS-05 | → P02 | `/app` | HM10 | Aluno iniciante não encontra explicação sobre como ganhar XP ou completar missões da professora. | Global | **3** | FAQ ou onboarding acessível pelo Perfil. |
| JOS-W01 | → PW06 | `/web` | HM2 | Mudei Turma e Atividade em Gerenciar Turmas, mas KPIs e tabela continuam iguais — parecem sempre os mesmos 10 alunos completos, independente do filtro. | Gerenciar Turmas \> filtros \+ KPIs | **3** | Derivar KPIs e linhas da tabela dos filtros selecionados. |
| JOS-W02 | → PW05 | `/web` | HM4 / HM7 | Digitei "Paulo" na busca de alunos — a tabela não filtrou; o campo aceita texto mas não altera as linhas exibidas. | Gerenciar Turmas \> busca | **3** | Vincular busca ao estado da tabela; mensagem quando vazio. |
| JOS-W03 | → PW14 | `/web` | HM11 / HM2 | Lancei um desafio com sucesso, voltei ao Dashboard e a tabela Atividades Recentes não listou o novo desafio — parece que o lançamento não persistiu. | Nova Atividade → Dashboard | **2** | Estado compartilhado; append na lista após lançamento. |

---

## 5\. Lael Gustavo Batista Ribeiro de Lima — 20230021715

| Campo | Valor |
| :---- | :---- |
| **Data da inspeção** | 06–07/07/2026 |
| **Interfaces inspecionadas** | `/app` · `/web` |
| **Foco da inspeção** | HM3, HM2 — visibilidade de informação e consistência |

**Resumo:** Foram registrados **8 problemas** (5 no app aluno, 3 no painel professora): 4 graves (3–4), 4 simples (2). Inspeção detalhada do Catálogo, Guia da Flora, dashboard e relatórios.

| ID | Ref. | Interface | Heurística | Problema identificado | Local / Tela | Severidade | Sugestão de melhoria |
| :---- | :---- | :---- | :---- | :---- | :---- | :---- | :---- |
| LAE-01 | → P06 | `/app` | HM3 | Cards do Guia da Flora mostram foto e nomes, mas não abrem detalhe — descrição e curiosidade existem nos dados mas ficam ocultas. | Catálogo \> Guia da Flora | **3** | Tornar cards clicáveis abrindo ficha completa da espécie. |
| LAE-02 | → P07 | `/app` | HM2 | "12 espécies descobertas" no Catálogo, porém Minhas Plantas repete as mesmas 3 espécies para completar 6 slots — inconsistência evidente. | Catálogo \> Minhas Plantas | **3** | Listar apenas espécies realmente registradas pelo aluno. |
| LAE-03 | → P19 | `/app` | HM3 | Nomes científicos em `text-[10px]` e badges em 9px são difíceis de ler no celular; testei em viewport 375px. | Catálogo \> Guia; Minhas Plantas | **2** | Mínimo 12px e contraste adequado nos badges. |
| LAE-04 | → P05 | `/app` | HM4 | Missões distintas na Home levam ao mesmo fluxo — comportamento idêntico para objetivos diferentes confunde o propósito de cada card. | Home \> Missões | **2** | Contextualizar captura com ID da missão selecionada. |
| LAE-05 | → P01 | `/app` | HM8 | Botões de invasoras e conquistas no Catálogo são inoperantes apesar de parecerem navegáveis — bloqueio de funcionalidades principais. | Catálogo \> coleções | **4** | Implementar destinos ou indicar indisponibilidade. |
| LAE-W01 | → PW12 | `/web` | HM3 / HM8 | Cliquei nas linhas de Atividades Recentes no Dashboard esperando abrir detalhe ou relatório — as linhas não são interativas, só exibem dados. | Dashboard \> Atividades Recentes | **2** | Tornar linhas clicáveis com filtro pré-selecionado em Gerenciar Turmas. |
| LAE-W02 | → PW15 | `/web` | HM3 | Ranking da Semana mostra só 3 alunos; não há link para ver posições 4º em diante — mesma limitação percebida no app aluno. | Dashboard \> Ranking | **2** | Link "Ver ranking completo" ou modal expandido. |
| LAE-W03 | → PW06 | `/web` | HM2 | Selecionei "2º Ano" e outra atividade, mas o prazo no cabeçalho continuou "20/06" da atividade anterior — filtros não sincronizam metadados. | Gerenciar Turmas \> filtros | **3** | Alinhar prazo e dados exibidos ao par turma/atividade. |

---

## 6\. Rafael de França Silva — 20230012654

| Campo | Valor |
| :---- | :---- |
| **Data da inspeção** | 07/07/2026 |
| **Interfaces inspecionadas** | `/app` · `/web` |
| **Foco da inspeção** | HM2, HM1 — consistência de navegação e layout |

**Resumo:** Foram registrados **8 problemas** (5 no app aluno, 3 no painel professora): 2 graves (3), 5 simples (2) e 1 cosmético (1). Ênfase em navegação, contadores, badges informativos e organização espacial.

| ID | Ref. | Interface | Heurística | Problema identificado | Local / Tela | Severidade | Sugestão de melhoria |
| :---- | :---- | :---- | :---- | :---- | :---- | :---- | :---- |
| RAF-01 | → P07 | `/app` | HM2 | Estatísticas do Perfil (12 espécies, 7 invasoras) não batem com Minhas Plantas nem com `alunosRelatorio` — que cita só Ipê-amarelo e Amendoeira para Paulo S. | Perfil; Catálogo | **3** | Derivar contadores de dados reais do aluno logado. |
| RAF-02 | → P13 | `/app` | HM2 | Dentro de Minhas Plantas, a aba Catálogo na barra inferior deixa de ficar destacada — parece que saí do Catálogo. | Bottom nav | **2** | Manter Catálogo ativo em sub-telas (`catalog-plants`). |
| RAF-03 | → P09 | `/app` | HM4 | Botão "Editar Perfil" visualmente primário sem ação — quebra expectativa de formulário de edição. | Perfil | **2** | Modal de edição ou estado desabilitado explícito. |
| RAF-04 | → P06 | `/app` | HM3 | Guia da Flora é vitrine somente leitura parcial — falta acesso à ficha educativa completa de cada espécie. | Catálogo \> Guia | **2** | Abrir detalhe ao toque no card. |
| RAF-05 | → P20 | `/app` | HM1 | Home empilha header, XP, ranking, três missões e alerta — scroll longo em tela única; sensação de sobrecarga visual. | Home | **1** | Carrossel de missões e ranking colapsável. |
| RAF-W01 | → PW13 | `/web` | HM8 | O badge "2 turmas ativas" no TopBar parece clicável, mas não abre lista de turmas nem leva a Gerenciar Turmas. | TopBar | **2** | Dropdown com resumo das turmas ou link direto. |
| RAF-W02 | → PW14 | `/web` | HM11 / HM2 | Após "Desafio lançado com sucesso\!", retornei ao Dashboard e a lista de atividades permaneceu com os 4 itens antigos — wizard e dashboard desconectados. | Nova Atividade → Dashboard | **2** | Compartilhar estado de atividades entre seções. |
| RAF-W03 | → PW01 | `/web` | HM1 | Em viewport estreito, o painel perde toda a navegação lateral; densidade do Dashboard sobra sem forma de trocar de seção. | Layout global `< lg` | **4** | Drawer mobile com navegação principal. |

---

## 7\. Tobias Freire Numeriano — 20230012378

| Campo | Valor |
| :---- | :---- |
| **Data da inspeção** | 07/07/2026 |
| **Interfaces inspecionadas** | `/app` · `/web` |
| **Foco da inspeção** | HM9, HM11, HM5 — feedback, memória e clareza de mensagens |

**Resumo:** Foram registrados **8 problemas** (5 no app aluno, 3 no painel professora), severidade 2 ou 3\. Foco em ranking incompleto, feedback de ações, exportação CSV e prazos de missão.

| ID | Ref. | Interface | Heurística | Problema identificado | Local / Tela | Severidade | Sugestão de melhoria |
| :---- | :---- | :---- | :---- | :---- | :---- | :---- | :---- |
| TOB-01 | → P12 | `/app` | HM11 | Ranking mostra só top 3; subtítulo diz "2º lugar" mas não consigo ver quem está em 4º e 5º — preciso memorizar ou adivinhar posição relativa. | Home \> Ranking | **2** | Link "Ver ranking completo" com lista total. |
| TOB-02 | → P18 | `/app` | HM9 | "Ler curiosidades · \+5 XP Bônus" mistura recompensa e leitura; curiosidade só aparece depois do clique, sem preview do conteúdo educativo. | Captura \> PlantSheet | **2** | Separar botão "Ver curiosidade" do ganho de XP. |
| TOB-03 | → P04 | `/app` | HM9 | Sino com badge sugere novidade, mas zero feedback ao toque — usuário não sabe se falhou ou se não há notificações. | Home \> notificações | **2** | Toast ou tela vazia de notificações ao interagir. |
| TOB-04 | → P16 | `/app` | HM5 | Prazos 10/06, 20/06 e 25/06 parecem vencidos (jul/2026) sem label "encerrada" ou "ativa". | Home \> Missões | **2** | Status visual de prazo ou datas atualizadas. |
| TOB-05 | → P02 | `/app` | HM10 | App educativo sem documentação acessível — aluno não sabe como usar captura, ranking ou espécies invasoras sem orientação externa. | Global | **3** | Central de Ajuda com tópicos por funcionalidade. |
| TOB-W01 | → PW04 | `/web` | HM8 / HM9 | Cliquei "Exportar CSV" em Gerenciar Turmas — nenhum arquivo baixou e não houve mensagem de confirmação ou erro. | Gerenciar Turmas \> tabela | **3** | Gerar download client-side e feedback "CSV baixado". |
| TOB-W02 | → PW02 | `/web` | HM9 | No painel web, o sino do TopBar não dá qualquer feedback — mesma frustração do app aluno ao tocar notificações. | TopBar \> sino | **3** | Abrir dialog de notificações pedagógicas. |
| TOB-W03 | → PW15 | `/web` | HM3 | Ranking da Semana no Dashboard lista apenas 3 nomes; para planejar intervenção pedagógica preciso ver a turma inteira. | Dashboard \> Ranking | **2** | Expandir ranking ou link "Ver todos". |

---

# Parte I — App Mobile (Visão Aluno)

## Mapa de rastreabilidade (individual → consolidado)

| Consolidado | Avaliadores | IDs individuais |
| :---- | :---- | :---- |
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

## Tabela consolidada do grupo (Parte I)

---

| ID | Status v2 | Heurística | Problema identificado | Local / Tela | Severidade (0–4) | Sugestão de melhoria | Identificado por |
| :---- | :---- | :---- | :---- | :---- | :---- | :---- | :---- |
| P01 | **Corrigido** | HM8 — Facilidade de acesso às funcionalidades | Os itens **"Espécies Exóticas Invasoras"** e **"Conquistas e Medalhas"** no Catálogo são renderizados como `<button>` com ícone, contador, `ChevronRight` e estilo hover, mas **não possuem `onClick`** — apenas "Minhas Plantas" navega. O usuário tenta acessar funcionalidades centrais do jogo e nada acontece, violando HM8 (funcionalidades difíceis de usar por serem inacessíveis). | Catálogo \> lista de coleções | **4** | Implementar navegação para telas `InvasiveSpeciesScreen` e `AchievementsScreen`, ou substituir botões por cards desabilitados com rótulo "Em breve" e toast explicativo ao toque. | Antônio, Deivily, Lael |
| P02 | **Corrigido** | HM10 — Ajuda e documentação | Não existe seção, ícone ou link de **Ajuda** em nenhuma tela do app (`HomeScreen`, `CatalogScreen`, `ProfileScreen`, `CaptureFlow`). Em um app educativo com gamificação, missões e espécies invasoras, o usuário não encontra orientação sobre como capturar, ganhar XP ou cumprir missões. | Global (todas as telas) | **3** | Adicionar item "Ajuda" no Perfil ou ícone `?` no header da Home, abrindo modal com FAQ: como capturar, o que é XP, como funcionam missões e espécies invasoras. | Davi, Josué, Tobias |
| P03 | **Corrigido** | HM6 — Prevenção de erros e retomada ao último estado estável | No fluxo de captura, após o botão de câmera, o resultado (nativa ou invasora) é definido por `**Math.random() > 0.5`\*\* (`CaptureFlow`, linha \~506). A IA simulada pode classificar incorretamente a espécie sem opção de "Não é esta planta" ou correção manual, gerando registro pedagógico errado e impossibilitando retorno a um estado confiável. | Captura \> pós-análise (`PlantSheet`) | **3** | Substituir aleatoriedade por seleção determinística no protótipo; adicionar botões "Confirmar espécie" e "Tentar novamente" / "Informar erro de identificação" antes de registrar XP. | Deivily, Antônio |
| P04 | **Corrigido** | HM8 — Facilidade de acesso às funcionalidades | O botão de **notificações** (ícone `Bell` com badge laranja) na Home é um `<button>` **sem handler `onClick`** (linhas \~115–118). O indicador visual sugere avisos pendentes, mas o toque não produz resposta alguma. | Home \> header \> sino de notificações | **3** | Implementar tela/modal de notificações ou, no protótipo, exibir toast "Nenhuma notificação nova" / desabilitar o botão removendo o badge falso. | Antônio, Tobias |
| P05 | **Corrigido** | HM4 — Adequação entre componente e funcionalidade | Cada card de **Missão Ativa** na Home abre o **mesmo fluxo genérico de captura** (`onClick={onCapture}`), independentemente da missão selecionada ("Parque Solon", "Árvores da cidade", "Orla de Cabo Branco"). O componente sugere ação contextual por missão, mas o comportamento é idêntico, gerando ambiguidade sobre qual missão será atualizada. | Home \> Missões Ativas | **3** | Passar `missionId` ao abrir captura; exibir banner "Missão: Explore o Parque Solon de Lucena" durante a captura e vincular progresso à missão correta. | Josué, Lael |
| P06 | **Corrigido** | HM3 — Visibilidade e acesso fácil a toda informação | Os cards do **Guia da Flora** no Catálogo são `<div>` estáticos (não clicáveis), embora exibam foto, nome popular, científico e badges ("Nativa", "Registrada"). O usuário não consegue abrir a ficha completa (descrição, curiosidades) a partir do guia — informação existe em `flora-data.ts`, mas fica inacessível. | Catálogo \> Guia da Flora de João Pessoa | **3** | Transformar cards em botões que abrem `PlantSheet` ou modal de detalhe com `description` e `curiosity` de cada espécie. | Lael, Rafael |
| P07 | **Corrigido** | HM2 — Consistência e padrões da interface | A tela **Minhas Plantas** indica **"12 espécies descobertas"** no Catálogo, mas a grade exibe apenas **6 entradas** geradas por `[...plants, ...plants, ...plants].slice(0, 6)` — repetindo Ipê-amarelo, Amendoeira e Pau-brasil várias vezes. Contagens do Perfil (12 espécies, 7 invasoras, 5 medalhas) também divergem do conteúdo real exibido. | Catálogo \> Minhas Plantas; Perfil \> estatísticas | **3** | Usar lista real de plantas registradas pelo aluno (ex.: derivada de `alunosRelatorio`) e alinhar contadores entre Catálogo, Perfil e Home. | Lael, Rafael |
| P08 | Pendente | HM8 — Facilidade de acesso às funcionalidades | O banner **"+50 XP Bônus essa semana"** (espécie invasora no Bessa) é um `<div>` informativo **sem ação de toque** ou CTA para iniciar captura filtrada por espécie invasora/bairro, apesar de ser uma funcionalidade promovida como bônus. | Home \> alerta de espécie invasora | **2** | Adicionar botão "Registrar invasora" que abre captura com contexto pré-selecionado (filtro invasora \+ região Bessa). | Antônio, Josué |
| P09 | Pendente | HM4 — Adequação entre componente e funcionalidade | O botão **"Editar Perfil"** no Perfil é estilizado como ação primária (`bg-moss`, largura total), mas **não possui `onClick`** — metáfora clara de edição sem funcionalidade associada. | Perfil \> card do usuário | **2** | Implementar formulário modal de edição (nome, avatar) ou rotular como "Em breve" com estilo secundário/desabilitado. | Davi, Rafael |
| P10 | Pendente | HM8 — Facilidade de acesso às funcionalidades | As opções **"Privacidade e Permissões"** e **"Sair da Conta"** no Perfil usam `SettingRow` com `ChevronRight`, sugerindo navegação, mas **não definem ação** (apenas o toggle de notificações responde ao toque). | Perfil \> configurações | **2** | Adicionar handlers: tela de privacidade simulada e confirmação antes de logout; ou remover chevron e indicar "Indisponível no protótipo". | Davi |
| P11 | Pendente | HM6 — Prevenção de erros e retomada ao último estado estável | No fluxo de captura, o botão **X** (fechar) encerra imediatamente e retorna à Home **sem confirmação**, mesmo após análise concluída ou XP parcialmente coletado — risco de perda de progresso percebido. | Captura \> botão fechar (canto superior) | **2** | Exibir `AlertDialog`: "Descartar captura? Seu progresso desta sessão será perdido." com opções Cancelar / Sair. | Deivily |
| P12 | Pendente | HM11 — Minimização da carga de memória do usuário | O **Ranking** exibe apenas os **3 primeiros colocados** (`ranking.slice(0, 3)`), embora existam 5+ alunos em `flora-data.ts` e o subtítulo informe "você está em 2º lugar" sem opção de ver posições 4º e 5º ou ranking completo da turma. | Home \> seção Ranking | **2** | Adicionar link "Ver ranking completo" expandindo lista ou abrindo modal com todos os participantes. | Tobias |
| P13 | **Corrigido** | HM2 — Consistência e padrões da interface | Ao navegar para **Minhas Plantas** (`screen = "catalog-plants"`), a aba **Catálogo** na bottom nav **não permanece ativa**, pois `BottomNav` compara `current === "catalog"`, ignorando `"catalog-plants"`. O usuário perde referência de onde está na hierarquia. | Bottom nav \+ Minhas Plantas | **2** | Tratar `"catalog-plants"` como sub-rota do catálogo: \`active={current \=== key |  |
| P14 | **Corrigido** | HM2 — Consistência e padrões da interface | Após captura, a tela **"Missão atualizada\!"** exibe progresso **2/5 espécies**, enquanto na Home a mesma missão "Explore o Parque Solon de Lucena" mostra **1/5** antes da captura e **1/5** permanece estático (dados hardcoded, sem atualização de estado). | Home \> Missões vs. Captura \> MissionUpdated | **2** | Centralizar estado de missões em `useState`/contexto compartilhado; refletir incremento de progresso na Home após captura bem-sucedida. | Deivily, Josué |
| P15 | Pendente | HM5 — Adequação de mensagem à funcionalidade e ao usuário | O card de XP exibe **"XP da semana"** (320/500) e, separadamente, o avatar traz badge **"4"** (nível) com texto "Faltam 180 XP para o nível 5" — sem explicar a relação entre XP semanal e nível global, gerando dúvida sobre qual métrica importa para gamificação. | Home \> barra de XP \+ avatar | **2** | Unificar rótulos: ex. "Nível 4 · 320 XP esta semana" com tooltip ou linha auxiliar explicando meta semanal vs. progressão de nível. | Josué |
| P16 | Pendente | HM5 — Adequação de mensagem à funcionalidade e ao usuário | Missões exibem prazos (**"10/06"**, **"20/06"**, **"25/06"**) que parecem **expirados** em relação à data atual do protótipo (jul/2026), sem indicação de status (ativa, encerrada, atrasada). | Home \> Missões Ativas \> badges de deadline | **2** | Atualizar datas fictícias para o semestre vigente ou exibir status visual: "Encerrada", "3 dias restantes", "Atrasada". | Tobias |
| P17 | Pendente | HM7 — Facilidade de entrada de dados | O fluxo de captura **não solicita entrada real** (câmera, galeria ou formulário) — apenas um botão simula disparo. Labels como "Aponte para a planta" sugerem interação fotográfica, mas não há `<input type="file">`, permissão de câmera ou campo de observação. | Captura \> tela da câmera | **2** | No protótipo, usar `input` oculto para selecionar imagem da galeria; manter botão de captura com label honesto: "Simular captura (protótipo)". | Deivily |
| P18 | Pendente | HM9 — Feedback imediato e fácil de ser notado | O botão **"Ler curiosidades · \+5 XP Bônus"** só revela o texto da curiosidade **após** o clique; antes disso, o usuário não sabe que precisa interagir para ler conteúdo educativo, e o rótulo mistura leitura com recompensa de XP de forma pouco clara. | Captura \> PlantSheet \> bloco de XP | **2** | Separar ações: botão "Ver curiosidade" expande texto; badge "+5 XP" aparece após scroll mínimo ou tempo de leitura, com animação de confirmação. | Tobias |
| P19 | Pendente | HM3 — Visibilidade e acesso fácil a toda informação | Nomes científicos e badges nos cards do guia usam tipografia `**text-[10px]`\*\* e `**text-[9px]`\*\*, abaixo do recomendado para leitura confortável em mobile (\~12sp mínimo), prejudicando legibilidade especialmente em telas pequenas. | Catálogo \> Guia da Flora; Minhas Plantas | **2** | Aumentar para `text-xs` (12px) mínimo; garantir contraste WCAG AA nos badges "Nativa"/"Invasora". | Lael |
| P20 | Pendente | HM1 — Bom aproveitamento do espaço da tela | A **Home concentra muitos blocos empilhados** (header, XP, ranking, 3 missões, alerta invasora) exigindo scroll extenso antes de alcançar o banner de bônus; em viewport `100dvh` com bottom nav fixa (`pb-24`), a densidade pode sobrecarregar a tela inicial do aluno. | Home (visão geral) | **1** | Colapsar ranking em top 3 \+ link; agrupar missões em carrossel horizontal; mover alerta de bônus para topo contextual. | Rafael |

---

# Parte II — Painel Web (Visão Professora)

## Mapa de rastreabilidade (individual → consolidado)

| Consolidado | Avaliadores | IDs individuais |
| :---- | :---- | :---- |
| PW01 | Antônio, Deivily, Rafael | ANT-W01, DEI-W03, RAF-W03 |
| PW02 | Antônio, Tobias | ANT-W02, TOB-W02 |
| PW03 | Antônio | ANT-W03 |
| PW04 | Tobias | TOB-W01 |
| PW05 | Josué | JOS-W02 |
| PW06 | Josué, Lael | JOS-W01, LAE-W03 |
| PW07 | Deivily | DEI-W01 |
| PW08 | Deivily | DEI-W02 |
| PW09 | Davi | DAV-W02 |
| PW10 | Davi | DAV-W03 |
| PW11 | Davi | DAV-W01 |
| PW12 | Lael | LAE-W01 |
| PW13 | Rafael | RAF-W01 |
| PW14 | Josué, Rafael | JOS-W03, RAF-W02 |
| PW15 | Lael, Tobias | LAE-W02, TOB-W03 |

---

## Tabela principal de avaliação (Parte II — consolidada)

| ID | Status v3 | Heurística | Problema identificado | Local / Tela | Severidade (0–4) | Sugestão de melhoria | Identificado por |
| :---- | :---- | :---- | :---- | :---- | :---- | :---- | :---- |
| PW01 | **Corrigido** | HM8 / HM1 | A sidebar de navegação usa `hidden lg:flex` — em viewports **\< lg** (tablet/mobile) **não há menu alternativo** (drawer, bottom nav ou hamburger). A professora fica presa no Dashboard sem acesso a Turmas, Nova Atividade ou Configurações. | Layout global `< lg` | **4** | Adicionar drawer/mobile nav com os 4 itens da sidebar; manter estado `section` acessível em qualquer breakpoint. | Antônio, Deivily, Rafael |
| PW02 | **Corrigido** | HM8 | O botão de **notificações** (`Bell`) no `TopBar` é um `<button>` **sem `onClick`** — mesmo padrão do P04 corrigido no app aluno, mas ainda inoperante no painel web. | TopBar \> sino | **3** | Reutilizar `NotificationsDialog` ou exibir painel/toast ao clicar; remover badge se não houver notificações. | Antônio, Tobias |
| PW03 | Pendente | HM8 | No card de **alerta ambiental** (Amendoeira invasora no Bessa), o botão **"Ver mapa"** não possui handler — promete visualização geográfica sem entrega. | Dashboard \> alerta invasora | **3** | Abrir modal com mapa destacando registros ou navegar para relatório filtrado por região. | Antônio |
| PW04 | **Corrigido** | HM8 / HM9 | O botão **"Exportar CSV"** em Gerenciar Turmas não gera download — professora não consegue extrair relatório para planilha ou diário de classe. | Gerenciar Turmas \> tabela | **3** | Implementar exportação client-side a partir de `alunosRelatorio` filtrado; feedback toast "CSV baixado". | Tobias |
| PW05 | **Corrigido** | HM4 / HM7 | O campo **"Buscar aluno…"** aceita texto mas **não filtra** as linhas da tabela — componente de busca sem funcionalidade associada. | Gerenciar Turmas \> header da tabela | **3** | Vincular `input` a estado de filtro por nome; exibir "Nenhum aluno encontrado" quando vazio. | Josué |
| PW06 | **Corrigido** | HM2 | Os selects **Turma** e **Atividade** alteram labels visuais, mas KPIs e tabela **sempre usam `alunosRelatorio` completo** — filtros não refletem nos dados exibidos. | Gerenciar Turmas \> filtros \+ KPIs | **3** | Derivar KPIs e linhas da tabela dos filtros selecionados; alinhar prazo exibido com atividade escolhida. | Josué, Lael |
| PW07 | **Corrigido** | HM6 | No passo **Geofencing**, o botão **"Continuar"** permite avançar **sem polígono mínimo** (≥3 vértices). A revisão exibe "Sem geofencing" silenciosamente, sem alerta ou bloqueio. | Nova Atividade \> passo 2 | **3** | Desabilitar "Continuar" até `polyPoints.length >= 3` ou exibir confirmação "Lançar sem zona geográfica?". | Deivily |
| PW08 | Pendente | HM2 | No passo de revisão, o **prazo** está hardcoded como `"28/06/2026"` no componente `Review`, enquanto o input `type="date"` do formulário **não está vinculado a estado** — dados inconsistentes entre passos. | Nova Atividade \> passo 4 | **2** | Estado `deadline` compartilhado; `Review` lê valor do input; formatação pt-BR consistente. | Deivily |
| PW09 | Pendente | HM9 / HM6 | Em **Configurações**, os campos de conta são editáveis, mas **não há botão "Salvar"** nem feedback de persistência — usuário não sabe se alterações foram gravadas. | Configurações \> Dados da Conta | **2** | Botão "Salvar alterações" com toast de confirmação ou indicador "Alterações não salvas" ao sair. | Davi |
| PW10 | Pendente | HM8 | **Integrações:** botão "Conectar" (SEDUC-PB) sem fluxo; Google Classroom exibe "Conectado ✓" estático sem ação de desconectar ou configurar. | Configurações \> Integrações | **2** | Simular fluxo OAuth mock ou desabilitar com label "Em breve"; toggle conectar/desconectar no protótipo. | Davi |
| PW11 | **Corrigido** | HM10 | **Ausência total de Ajuda/FAQ** para a professora — criar desafio, desenhar geofencing, interpretar relatórios e exportar CSV não têm orientação in-app (espelha P02 do aluno). | Global | **3** | Ícone `?` no TopBar ou item na sidebar com FAQ: criar atividade, geofencing, relatórios, integrações. | Davi |
| PW12 | Pendente | HM3 / HM8 | Linhas da tabela **Atividades Recentes** no Dashboard não são clicáveis — informação visível sem caminho para detalhe ou relatório da atividade. | Dashboard \> Atividades Recentes | **2** | Tornar linhas clicáveis navegando para Gerenciar Turmas com filtro pré-selecionado. | Lael |
| PW13 | Pendente | HM8 | Badge **"2 turmas ativas"** no TopBar não abre painel, lista ou navegação — affordance informativa sem aprofundamento. | TopBar | **2** | Dropdown com resumo das turmas ou link para Gerenciar Turmas. | Rafael |
| PW14 | Pendente | HM11 / HM2 | Após **"Desafio lançado com sucesso\!"**, o novo desafio **não aparece** em Atividades Recentes do Dashboard — estado local isolado entre wizard e dashboard. | Nova Atividade → Dashboard | **2** | Estado compartilhado de atividades; append na lista após `setDone(true)`. | Josué, Rafael |
| PW15 | Pendente | HM3 | **Ranking da Semana** exibe apenas **top 3** alunos, sem "Ver todos" — análogo ao P12 pendente no app aluno. | Dashboard \> Ranking | **2** | Link expandindo lista completa ou modal com ranking da turma. | Lael, Tobias |

---

## Resumo das correções implementadas

| Parte | Interface | Total | Corrigidos | Pendentes |
| :---- | :---- | :---- | :---- | :---- |
| Parte I (v2) | `/app` | 20 | **9** | 11 |
| Parte II (v3) | `/web` | 15 | **7** | 8 |
| **Total** | — | **35** | **16** | **19** |

**Corrigidos — Parte I:** P01, P02, P03, P04, P05, P06, P07, P13, P14  
**Corrigidos — Parte II:** PW01, PW02, PW04, PW05, PW06, PW07, PW11

