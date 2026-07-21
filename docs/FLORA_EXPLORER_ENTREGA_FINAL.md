# Relatório Final de Testes de Usabilidade — Flora Explorer JP

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

Este documento registra a preparação, a execução e os resultados dos testes empíricos de usabilidade do **Flora Explorer JP**, com base em protótipos de alta fidelidade no Figma (App Mobile — visão do aluno — e Dashboard Web — visão do professor).

Os testes foram realizados de forma **presencial** com **5 participantes**: três adolescentes (uma pessoa de 14 anos e duas de 15 anos, familiares dos integrantes do grupo, simulando o perfil aluno) e dois professores de ensino médio (conhecidos do grupo — uma mãe de um amigo e um ex-professor de um integrante). Antes da interação, cada participante respondeu a um formulário de pré-teste no **Google Forms** (formulário específico para alunos e outro para professores), com o objetivo de validar o enquadramento nas personas e aferir o estado físico/emocional (incluindo a escala SAM). Em seguida, os participantes executaram os cenários descritos nesta seção, enquanto a equipe observava e anotava o desempenho — registrando **dois problemas específicos** (um com um aluno e um com um professor). Ao final, todos responderam a um formulário único de pós-teste no Google Forms, contendo a escala **SUS** para avaliação global de usabilidade.

---

## 1. Cenários para o Teste de Usabilidade

Os usuários recrutados executaram as tarefas abaixo, conforme o perfil (App Mobile ou Dashboard Web).

### 1.1 Cenários para o Perfil Aluno (Personas Paulo e Felipe)

#### Cenário/Tarefa 1: Navegação Inicial, Gamificação e Notificações

- **Instrução para o usuário:** “Você acabou de abrir o aplicativo. Verifique se você possui alguma notificação nova, descubra quanto de XP (experiência) falta para você atingir o próximo nível e, em seguida, abra o ranking para ver quem está em primeiro lugar na sua turma.”
- **O que o avaliador deve observar:** Se o usuário localiza intuitivamente o ícone de sino (Notificações), se entende a barra de progresso de nível na tela inicial e se clica na seção de Ranking para abrir o pop-up correspondente.

#### Cenário/Tarefa 2: O Fluxo Principal (Captura e Catálogo)

- **Instrução para o usuário:** “Você encontrou uma árvore que parece ser uma Amendoeira. Abra a câmera do aplicativo e simule o envio de uma foto da sua galeria. Depois, acesse o seu Catálogo para verificar a lista de Espécies Exóticas Invasoras e leia a ficha com as curiosidades dessa árvore.”
- **O que o avaliador deve observar:** Se o usuário identifica o grande botão central da câmera, entende o processo de simulação da captura e consegue navegar facilmente para o menu inferior “Catálogo” para localizar a seção correta e abrir o Guia da Flora específico da Amendoeira.

#### Cenário/Tarefa 3: Ajuda e Suporte

- **Instrução para o usuário:** “Você não lembra como a pontuação do jogo funciona. Tente encontrar a seção de dúvidas do aplicativo e descubra a resposta para a pergunta ‘O que é XP?’.”
- **O que o avaliador deve observar:** Se o usuário percebe o ícone com ponto de interrogação (?) na tela inicial e se compreende a mecânica de expansão (sanfona) das perguntas frequentes.

#### Cenário/Tarefa 4: Gestão de Perfil e Privacidade

- **Instrução para o usuário:** “Vá até o seu perfil, inicie a edição do seu nome de exibição e, por fim, desative o compartilhamento da sua localização nas configurações de privacidade.”
- **O que o avaliador deve observar:** Como o usuário lida com o menu inferior “Perfil”, se localiza o botão “Editar Perfil” e se entende o fluxo do menu “Privacidade e Permissões” para desligar as chaves seletoras (toggles).

### 1.2 Cenários para o Perfil Professora (Persona Eliana)

#### Cenário/Tarefa 1: Visão Geral e Alertas (Dashboard)

- **Instrução para o usuário:** “Verifique no seu painel qual turma possui a maior média de engajamento atual e identifique qual é o alerta ambiental crítico que o sistema está reportando.”
- **O que o avaliador deve observar:** Se o usuário lê e compreende rapidamente os gráficos de barra (onde o 3º ano se destaca) e se nota o card de “Alerta Ambiental” indicando a alta incidência da Amendoeira.

#### Cenário/Tarefa 2: Emissão de Relatórios (Gerenciar Turmas)

- **Instrução para o usuário:** “A coordenação solicitou um relatório da atividade no Parque Solon de Lucena. Acesse a área de gerenciamento, verifique na turma do 1º Ano quantos alunos ‘Não fizeram’ a tarefa e simule a exportação dessa lista para o seu computador.”
- **O que o avaliador deve observar:** Se o usuário utiliza o menu lateral “Gerenciar Turmas”, percebe os atalhos de filtros visuais (Concluíram/Não Fizeram) e localiza o botão de “Exportar CSV”.

#### Cenário/Tarefa 3: Criação de Desafio com Geofencing

- **Instrução para o usuário:** “Você vai levar seus alunos a campo. Crie uma Nova Atividade. No mapa, desenhe uma área segura ao redor do Parque Solon de Lucena. Preencha o formulário pedindo para buscarem invasoras, marque como obrigatório e lance o desafio.”
- **O que o avaliador deve observar:** A facilidade de lidar com o assistente de etapas (Turma → Geofencing → Formulário → Lançar). É o teste mais crítico para avaliar se o usuário compreende a adição de vértices no mapa.

#### Cenário/Tarefa 4: Integrações do Sistema

- **Instrução para o usuário:** “Verifique nas configurações se o seu sistema já está integrado ao Google Sala de Aula para facilitar a sincronização de turmas.”
- **O que o avaliador deve observar:** Se o usuário localiza intuitivamente o menu lateral “Configurações” e entende o status de conexão no card de Integrações.

---

## 2. Preparação e Pré-Teste

Antes de iniciar a interação com os protótipos no Figma, todos os participantes recrutados responderam a um questionário rápido para validação de enquadramento nas personas do projeto e aferição de seu estado atual. Os questionários foram aplicados individualmente via **Google Forms**, com versões distintas conforme o perfil (aluno ou professor).

### 2.1 Validação do Perfil (Enquadramento nas Personas)

Para garantir que os testadores correspondessem ao público-alvo do Flora Explorer JP, foram aplicadas perguntas-filtro distintas dependendo do protótipo a ser testado.

**Para usuários que testaram o App Mobile (Personas Alunos — Paulo e Felipe):**

- Qual a sua idade? (Filtro de aceitação: 13 a 15 anos)
- Você possui o hábito de jogar games no celular? (Filtro comportamental: ajuda a distinguir o perfil engajado/heavy user do perfil relutante)
- Em uma escala de 1 a 5, qual o seu nível de interesse por assuntos relacionados a aulas de ciências, meio ambiente e natureza? (1 — Nenhum interesse / 5 — Muito interesse)

**Para usuários que testaram o Dashboard Web (Persona Professora — Eliana):**

- Qual a sua profissão e idade? (Filtro de aceitação: professores, faixa dos 30 a 50 anos)
- Você leciona para turmas de qual nível escolar? (Filtro de aceitação: Ensino Fundamental — anos finais — ou Ensino Médio)
- Em uma escala de 1 a 5, qual o seu nível de familiaridade com ferramentas tecnológicas de ensino, como o Google Sala de Aula? (Filtro comportamental: esperado nível intermediário, nota 3 ou 4)

### 2.2 Avaliação do Estado Físico e Emocional (Questionário Padrão + SAM)

Para isolar variáveis que possam prejudicar a avaliação de usabilidade (como impaciência gerada por fome ou sono), os usuários responderam às seguintes perguntas padronizadas antes do teste:

**Questionário físico:**

- Quantas horas aproximadamente você dormiu na última noite? (Opções: 1 a 2h / 3 a 4h / 5 a 6h / 7 a 8h / Mais de 8h)
- Em uma escala de 1 a 5, o quanto você está com sono? (1 — Pouco / 5 — Muito)
- Em uma escala de 1 a 5, o quanto você está cansado fisicamente? (1 — Pouco / 5 — Muito)
- Em uma escala de 1 a 5, qual é o seu nível de fome no momento? (1 — Pouco / 5 — Muito)
- Em uma escala de 1 a 5, o quanto você está preocupado(a) com assuntos pessoais? (1 — Pouco / 5 — Muito)

**Escala SAM (Self-Assessment Manikin):** em seguida, foi apresentada a escala visual SAM para que o usuário indicasse como se sentia naquele momento, medindo duas dimensões principais:

- **Dimensão 1 (Excitação/Agitação):** nível de 1 a 5, variando de totalmente calmo (1) até totalmente agitado (5).
- **Dimensão 2 (Valência/Humor):** nível de 1 a 5, variando de visualmente triste (1) até feliz (5).

---

## 3. Execução do Teste de Usabilidade

A etapa de execução consistiu na interação direta do usuário com as interfaces do Flora Explorer JP (App Mobile e Dashboard Web) prototipadas no Figma. Todos os testes foram **presenciais**. Durante esta fase, a equipe de experimentadores seguiu diretrizes estritas de isenção para não enviesar os resultados.

### 3.1. Abordagem Inicial

Antes de entregar o controle ao participante, o avaliador:

- **Explicou o protótipo:** informou brevemente do que se trata o sistema (um app de educação ambiental gamificado e um painel escolar) e deixou claras as limitações da navegação (avisando que se trata de um protótipo e que nem todos os botões funcionam).
- **Alinhou expectativas:** reforçou que o objetivo da sessão é testar exclusivamente o software, e não a capacidade ou a inteligência do usuário. Não existem respostas ou cliques “errados” por parte de quem testa.

### 3.2. A Regra de Ouro (Conduta do Avaliador)

Durante a execução das tarefas (cenários) estipuladas no Passo 1, o avaliador manteve total neutralidade. Conforme a metodologia estabelecida:

- A equipe de experimentadores manteve **isenção total** na avaliação.
- Não foi permitido nenhum tipo de comentário, ajuda ou intervenção durante o uso, mesmo que o usuário demonstrasse frustração.
- A equipe se limitou a observar a interação presencialmente e a analisar os pontos positivos e negativos do fluxo.

### 3.3. Matriz de Observação (Registro de Interação)

Para cada um dos cenários executados pelos usuários, o avaliador fez anotações silenciosas, preenchendo a matriz abaixo (registrada também em formulário de observação da equipe) para posterior análise:

- **Cenário Testado:** (Ex.: Criação de Desafio com Geofencing)
- **Status de Conclusão:** ( ) Sucesso / ( ) Sucesso com ajuda/dificuldade / ( ) Desistência-Falha
- **Dificuldades e Travamentos:** anotar onde o usuário parou, hesitou ou clicou no lugar errado (Ex.: “Usuário não entendeu que precisava clicar no mapa para formar o polígono”).
- **Atalhos e Comportamentos Inesperados:** anotar se o usuário descobriu um caminho diferente do planejado ou se ignorou informações importantes na tela.
- **Comentários Espontâneos:** anotar frases relevantes ditas pelo usuário em voz alta durante o uso (Ex.: “Onde fica o botão de salvar?”).

Durante a execução, a equipe registrou **duas ocorrências específicas** de problema (uma com um aluno e uma com um professor), detalhadas na seção 5.2.

---

## 4. Pós-Teste e Cálculo do SUS (System Usability Scale)

Após a conclusão da interação com o protótipo (app do aluno ou painel da professora), o usuário foi convidado a responder ao questionário de usabilidade **SUS** (System Usability Scale) via **Google Forms** (formulário único de pós-teste). O objetivo desta etapa é medir a percepção subjetiva do usuário em três frentes: efetividade (se conseguiu completar os objetivos), eficiência (esforço necessário) e satisfação com a experiência.

### 4.1. O Questionário Aplicado

O questionário padrão é composto por 10 afirmações. Para cada uma delas, o participante atribuiu uma nota em uma escala Likert de 1 a 5, onde 1 significa “Discordo totalmente” e 5 significa “Concordo totalmente”:

1. Eu gostaria de usar o aplicativo com frequência.
2. Eu acho o aplicativo desnecessariamente complexo.
3. Eu achei o aplicativo fácil de usar.
4. Eu acho que precisaria da ajuda de uma pessoa com conhecimentos técnicos para usar o aplicativo.
5. Eu acho que as várias funções do aplicativo estão muito bem integradas.
6. Eu acho que o aplicativo tem muitas inconsistências.
7. Eu imagino que as pessoas aprenderão como usar esse aplicativo rapidamente.
8. Eu achei o aplicativo muito complicado de usar.
9. Eu me senti confiante ao usar o aplicativo.
10. Eu precisei aprender várias coisas novas antes de conseguir usar o aplicativo.

*(Nota da equipe: as perguntas 3, 4, 7 e 10 medem a facilidade de aprendizagem; 5, 6 e 8 medem a eficiência; a 2 relaciona-se à memorização; a 6 à minimização de erros; e 1, 4 e 9 medem a satisfação do usuário.)*

### 4.2. Metodologia de Cálculo da Nota

O SUS gera uma nota final de **0 a 100**, que não é um percentual, mas sim um indicativo do nível de usabilidade do sistema. O cálculo realizado pelo grupo seguiu as regras matemáticas oficiais do método:

- **Afirmações ímpares (1, 3, 5, 7, 9):** subtrair 1 da nota dada pelo usuário (Nota do Usuário − 1).
- **Afirmações pares (2, 4, 6, 8, 10):** subtrair a nota dada pelo usuário de 5 (5 − Nota do Usuário).
- **Resultado final:** somar todos os novos valores obtidos nas 10 perguntas e multiplicar esse total por **2,5**.

### 4.3. Interpretação dos Resultados

As notas obtidas foram analisadas sob a seguinte régua do mercado de Interação Humano-Computador:

- **Média 68:** nota média padrão do mercado.
- **Acima de 80:** o público identifica alta qualidade (capacidade de uso) e utilidade (percepção de valor) no protótipo.
- **Abaixo de 50:** problemas graves — sinal de alerta de que os investimentos em correção de design precisam ser priorizados.

---

## 5. Relatório Final de Testes de Usabilidade e Redesign

### 5.1. Descrição Metodológica

Os testes empíricos de usabilidade do Flora Explorer JP foram conduzidos utilizando protótipos de alta fidelidade desenvolvidos na ferramenta Figma, abrangendo as interfaces móveis (visão do aluno) e o dashboard web (visão do professor).

A avaliação contou com a participação de **5** usuários no total, recrutados de acordo com os critérios de enquadramento das personas do projeto:

- **Perfil Aluno (Personas Paulo e Felipe):** recrutamos **3** adolescentes com idades entre 14 e 15 anos (uma pessoa de 14 anos e duas de 15), familiares dos integrantes do grupo, simulando estudantes do público-alvo.
- **Perfil Professor (Persona Eliana):** recrutamos **2** docentes de ensino médio (conhecidos do grupo) para testar as ferramentas de gestão pedagógica.

Os testes ocorreram de forma **presencial**. O pré-teste (validação de perfil e estado físico/SAM) e o pós-teste (SUS global) foram aplicados via **Google Forms**. A moderação seguiu rigorosamente a regra de isenção, baseada na observação silenciosa das tarefas. Para a funcionalidade de identificação botânica, utilizamos a técnica de simulação (**Wizard of Oz**), em que o usuário interagia com respostas pré-programadas do protótipo no lugar de uma Inteligência Artificial real. Durante a observação, a equipe registrou um problema específico com um aluno e um problema específico com um professor. Após as tarefas, os usuários responderam ao questionário padronizado SUS (System Usability Scale).

### 5.2. Resultados Obtidos

A nota geral obtida pelo Flora Explorer JP no cálculo do SUS foi de **[INSERIR NOTA AQUI]** pontos (lembrando que a média de mercado é 68).

Para aprofundar a análise, cruzamos as pontuações individuais de cada pergunta do SUS com suas respectivas dimensões de usabilidade e as Heurísticas Móveis (HM). Identificamos que as piores notas se concentraram nos seguintes aspectos, gerando a lista de problemas abaixo — correspondente às **duas ocorrências** anotadas durante a observação:

- **Problema 1: Dificuldade no Geofencing — Professor**
  - **Análise SUS:** piores notas nas perguntas **3, 4, 7 e 10**, que medem a **Facilidade de Aprendizagem**.
  - **Heurística violada:** **HM4** (Adequação entre o componente e sua funcionalidade) e **HM6** (Prevenção de erros). O usuário não entendeu intuitivamente que precisava clicar sequencialmente no mapa para formar o polígono da zona segura, gerando cliques errados.

- **Problema 2: Falta de clareza no ganho de XP na Câmera — Aluno**
  - **Análise SUS:** notas baixas na pergunta **6**, que mede a **Minimização de Erros**.
  - **Heurística violada:** **HM9** (Feedback imediato e fácil de ser notado). O adolescente registrou a planta, mas não percebeu o pop-up de confirmação de XP, ficando em dúvida se a missão havia sido concluída com sucesso.

### 5.3. Alterações no Protótipo (Redesign)

Com base no diagnóstico das heurísticas violadas, a equipe de desenvolvimento repensou os fluxos e implementou as seguintes correções na versão final da interface:

- **Correção do Problema 1 (Geofencing):** para melhorar a Facilidade de Aprendizagem e atender à heurística **HM10** (Ajuda e documentação), incluímos um balão de instrução (tooltip) flutuante na tela “2. Geofencing”, que agora exibe a mensagem clara: *“Clique em 3 ou mais pontos no mapa para desenhar a área permitida”*.

- **Correção do Problema 2 (Feedback de Captura):** para adequar a interface à heurística **HM9** (Feedback imediato), a tela de resultado da câmera foi redesenhada. O pop-up de “+50 XP Bônus” recebeu animação, maior contraste de cores (utilizando o verde e o vermelho padronizados no UI) e foi centralizado na tela antes de o usuário ser redirecionado para o catálogo.

### 5.4. Link de Entrega

A versão final e atualizada do protótipo, contendo todas as correções de usabilidade listadas neste relatório, pode ser acessada no link abaixo:

**Link do Preview Lovable (Flora Explorer JP — Versão Final):** https://cab2fbf7-8d52-4f32-b0bd-8969264925d7.lovable.app
