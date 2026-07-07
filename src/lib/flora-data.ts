import ipe from "@/assets/plant-ipe.jpg";
import amendoeira from "@/assets/plant-amendoeira.jpg";
import paulo from "@/assets/avatar-paulo.jpg";
import eliana from "@/assets/avatar-eliana.jpg";

export const assets = { ipe, amendoeira, paulo, eliana };

export type Plant = {
  id: string;
  popular: string;
  scientific: string;
  image: string;
  tags: string[];
  invasive?: boolean;
  description: string;
  curiosity: string;
};

export const plants: Plant[] = [
  {
    id: "ipe-amarelo",
    popular: "Ipê-amarelo",
    scientific: "Handroanthus chrysotrichus",
    image: ipe,
    tags: ["#MataAtlântica", "#Nativa", "#Arbórea"],
    description:
      "Árvore símbolo do cerrado e da Mata Atlântica. Suas flores amarelas vibrantes florescem entre julho e setembro, atraindo abelhas e beija-flores nativos.",
    curiosity:
      "O Ipê-amarelo é considerado a flor nacional do Brasil. Em João Pessoa, é uma das espécies-bandeira para reflorestamento urbano.",
  },
  {
    id: "amendoeira",
    popular: "Amendoeira",
    scientific: "Terminalia catappa",
    image: amendoeira,
    tags: ["#Invasora", "#Amendoeira", "#Ásia"],
    invasive: true,
    description:
      "Originária do sudeste asiático, foi introduzida no litoral nordestino e se espalhou rapidamente. Compete com espécies nativas por luz e nutrientes.",
    curiosity:
      "Estudos da UFPB mostram que a Amendoeira corresponde a parte significativa dos 37% de espécies invasoras na arborização urbana de João Pessoa.",
  },
  {
    id: "pau-brasil",
    popular: "Pau-brasil",
    scientific: "Paubrasilia echinata",
    image: ipe,
    tags: ["#MataAtlântica", "#Nativa", "#Ameaçada"],
    description:
      "Árvore que deu nome ao nosso país. Sua madeira avermelhada foi intensamente explorada no passado, tornando-a uma espécie ameaçada de extinção.",
    curiosity:
      "Atualmente, o Pau-brasil é protegido por lei. Plantios de recuperação em João Pessoa buscam reintroduzir a espécie em seu habitat natural.",
  },
];

export const turmas = ["1º Ano", "2º Ano", "3º Ano"] as const;
export type Turma = (typeof turmas)[number];

export const ranking = [
  { pos: 1, name: "Felipe Andrade", xp: 560, you: false },
  { pos: 2, name: "Paulo S.", xp: 320, you: true },
  { pos: 3, name: "Ana Beatriz", xp: 280, you: false },
  { pos: 4, name: "Lucas Mendes", xp: 245, you: false },
  { pos: 5, name: "Júlia Costa", xp: 210, you: false },
];

export type Mission = {
  id: string;
  title: string;
  progress: number;
  total: number;
  deadline: string;
};

export const missoes: Mission[] = [
  {
    id: "solon",
    title: "Explore o Parque Solon de Lucena",
    progress: 1,
    total: 5,
    deadline: "20/06",
  },
  {
    id: "arvores",
    title: "Árvores da nossa cidade",
    progress: 2,
    total: 8,
    deadline: "10/06",
  },
  {
    id: "orla",
    title: "Espécies da orla de Cabo Branco",
    progress: 0,
    total: 6,
    deadline: "25/06",
  },
];

export const CURRENT_STUDENT = "Paulo S.";

export function getStudentReport(name = CURRENT_STUDENT) {
  return alunosRelatorio.find((a) => a.name === name);
}

export function getStudentPlants(name = CURRENT_STUDENT): Plant[] {
  const report = getStudentReport(name);
  if (!report) return [];
  return report.plantas
    .map((popular) => plants.find((p) => p.popular === popular))
    .filter((p): p is Plant => p != null);
}

export function getStudentStats(name = CURRENT_STUDENT) {
  const registered = getStudentPlants(name);
  const nativeCount = registered.filter((p) => !p.invasive).length;
  const invasiveCount = registered.filter((p) => p.invasive).length;
  const solonMission = missoes.find((m) => m.id === "solon");
  let medals = 0;
  if (nativeCount >= 1) medals += 1;
  if (invasiveCount >= 1) medals += 1;
  if (solonMission && solonMission.progress >= 1) medals += 1;
  return {
    species: registered.length,
    invasive: invasiveCount,
    native: nativeCount,
    medals,
  };
}

export type Achievement = {
  id: string;
  title: string;
  description: string;
  progress: number;
  total: number;
  unlocked: boolean;
};

export function getAchievements(
  name = CURRENT_STUDENT,
  missions: Mission[] = missoes,
): Achievement[] {
  const stats = getStudentStats(name);
  const solon = missions.find((m) => m.id === "solon");
  return [
    {
      id: "guardiao",
      title: "Guardião da Mata Atlântica",
      description: "Registre 10 espécies nativas",
      progress: stats.native,
      total: 10,
      unlocked: stats.native >= 10,
    },
    {
      id: "cacador-invasoras",
      title: "Caçador de Invasoras",
      description: "Registre 3 espécies exóticas invasoras",
      progress: stats.invasive,
      total: 3,
      unlocked: stats.invasive >= 3,
    },
    {
      id: "explorador-solon",
      title: "Explorador do Solon",
      description: "Complete a missão do Parque Solon de Lucena",
      progress: solon?.progress ?? 0,
      total: solon?.total ?? 5,
      unlocked: (solon?.progress ?? 0) >= (solon?.total ?? 5),
    },
  ];
}

export type AlunoRelatorio = {
  name: string;
  turma: Turma;
  status: "fez" | "nao";
  plantas: string[];
  xp: number;
  data: string;
};

export const alunosRelatorio: AlunoRelatorio[] = [
  {
    name: "Felipe Andrade",
    turma: "1º Ano",
    status: "fez",
    plantas: ["Ipê-amarelo", "Pau-brasil", "Cajueiro"],
    xp: 60,
    data: "12/06",
  },
  {
    name: "Paulo S.",
    turma: "1º Ano",
    status: "fez",
    plantas: ["Ipê-amarelo", "Amendoeira"],
    xp: 45,
    data: "13/06",
  },
  {
    name: "Ana Beatriz",
    turma: "2º Ano",
    status: "fez",
    plantas: ["Mangueira", "Ipê-amarelo"],
    xp: 40,
    data: "13/06",
  },
  {
    name: "Lucas Mendes",
    turma: "2º Ano",
    status: "fez",
    plantas: ["Cajueiro"],
    xp: 20,
    data: "14/06",
  },
  {
    name: "Júlia Costa",
    turma: "1º Ano",
    status: "nao",
    plantas: [],
    xp: 0,
    data: "—",
  },
  {
    name: "Rafael Lima",
    turma: "3º Ano",
    status: "fez",
    plantas: ["Amendoeira"],
    xp: 20,
    data: "14/06",
  },
  {
    name: "Beatriz Souza",
    turma: "3º Ano",
    status: "nao",
    plantas: [],
    xp: 0,
    data: "—",
  },
  {
    name: "Tobias Freire",
    turma: "1º Ano",
    status: "fez",
    plantas: ["Pau-brasil", "Mangueira", "Ipê-amarelo"],
    xp: 55,
    data: "12/06",
  },
  {
    name: "Davi Teixeira",
    turma: "2º Ano",
    status: "fez",
    plantas: ["Cajueiro", "Ipê-amarelo"],
    xp: 40,
    data: "13/06",
  },
  {
    name: "Mariana Alves",
    turma: "3º Ano",
    status: "nao",
    plantas: [],
    xp: 0,
    data: "—",
  },
];

export type AtividadeProfessora = {
  titulo: string;
  turma: Turma;
  prazo: string;
  alunos: string[];
};

export const atividadesProfessora: AtividadeProfessora[] = [
  {
    titulo: "Explore o Parque Solon de Lucena",
    turma: "1º Ano",
    prazo: "20/06",
    alunos: ["Felipe Andrade", "Paulo S.", "Júlia Costa", "Tobias Freire"],
  },
  {
    titulo: "Árvores da nossa cidade",
    turma: "2º Ano",
    prazo: "10/06",
    alunos: ["Ana Beatriz", "Lucas Mendes", "Davi Teixeira"],
  },
  {
    titulo: "Caça às invasoras no Bessa",
    turma: "2º Ano",
    prazo: "28/06",
    alunos: ["Ana Beatriz", "Lucas Mendes", "Davi Teixeira"],
  },
  {
    titulo: "Espécies da orla de Cabo Branco",
    turma: "3º Ano",
    prazo: "25/06",
    alunos: ["Rafael Lima", "Beatriz Souza", "Mariana Alves"],
  },
];

export type FaqItem = { id: string; q: string; a: string };

export const FAQ_STUDENT: FaqItem[] = [
  {
    id: "captura",
    q: "Como capturar uma planta?",
    a: "Toque no botão central da câmera na barra inferior, aponte para a espécie e confirme a identificação sugerida pela IA. Você ganha XP ao registrar cada espécie nova.",
  },
  {
    id: "xp",
    q: "O que é XP?",
    a: "XP (pontos de experiência) medem seu progresso na semana. Capture plantas, leia curiosidades e complete missões para subir de nível e aparecer melhor no ranking da turma.",
  },
  {
    id: "missoes",
    q: "Como funcionam as missões?",
    a: "A professora cria missões para a turma (ex.: explorar um parque). Toque em uma missão na Home para iniciar uma captura vinculada a ela. O progresso atualiza ao confirmar cada espécie.",
  },
  {
    id: "invasoras",
    q: "O que são espécies invasoras?",
    a: "Espécies exóticas que se espalham na cidade e competem com plantas nativas. Registrá-las também dá XP bônus e ajuda na educação ambiental. Veja sua coleção em Catálogo > Espécies Exóticas Invasoras.",
  },
];

export const FAQ_TEACHER: FaqItem[] = [
  {
    id: "criar",
    q: "Como criar um novo desafio?",
    a: "Acesse Nova Atividade na barra lateral. Escolha a turma, delimite a zona no mapa (geofencing), preencha título e descrição, revise e lance. Os alunos recebem notificação no app.",
  },
  {
    id: "geofencing",
    q: "Como funciona o geofencing?",
    a: "No passo Geofencing, clique no mapa para marcar pelo menos 3 vértices e formar um polígono. Essa zona delimita onde os alunos podem capturar espécies válidas para o desafio.",
  },
  {
    id: "relatorios",
    q: "Como exportar relatórios?",
    a: "Em Gerenciar Turmas, selecione turma e atividade, use a busca para filtrar alunos e clique em Exportar CSV para baixar o relatório de engajamento.",
  },
  {
    id: "integracoes",
    q: "Como funcionam as integrações?",
    a: "Google Sala de Aula sincroniza turmas e lançamentos. O Diário de Classe (SEDUC-PB) envia notas dos desafios concluídos. Configure em Configurações > Integrações.",
  },
];

export type NotificationItem = {
  id: string;
  title: string;
  body: string;
  time: string;
};

export function getStudentNotifications(missions: Mission[]): NotificationItem[] {
  const solon = missions.find((m) => m.id === "solon");
  return [
    {
      id: "1",
      title: "Missão ativa",
      body: solon
        ? `${solon.title}: faltam ${solon.total - solon.progress} espécie(s).`
        : "Você tem missões pendentes na Home.",
      time: "Hoje",
    },
    {
      id: "2",
      title: "Bônus da semana",
      body: "+50 XP ao registrar 1 espécie invasora no bairro do Bessa.",
      time: "Esta semana",
    },
    {
      id: "3",
      title: "Ranking",
      body: "Você está em 2º lugar no 1º Ano. Continue capturando!",
      time: "Atualizado",
    },
  ];
}

export const TEACHER_NOTIFICATIONS: NotificationItem[] = [
  {
    id: "1",
    title: "Alerta ambiental",
    body: "14 registros de Amendoeira invasora no Bessa nos últimos 7 dias.",
    time: "Hoje",
  },
  {
    id: "2",
    title: "Missão Solon — pendências",
    body: "3 alunos do 1º Ano ainda não concluíram Explore o Parque Solon de Lucena.",
    time: "Esta semana",
  },
  {
    id: "3",
    title: "Integração ativa",
    body: "Google Sala de Aula conectado. Turmas sincronizadas.",
    time: "Atualizado",
  },
];

export function getRelatorioFiltrado(
  turma: Turma,
  atividade: string,
  search = "",
) {
  const meta = atividadesProfessora.find((a) => a.titulo === atividade);
  const alunosAtividade = meta?.alunos ?? [];

  let rows = alunosRelatorio.filter(
    (a) => a.turma === turma && alunosAtividade.includes(a.name),
  );

  const q = search.trim().toLowerCase();
  if (q) {
    rows = rows.filter((a) => a.name.toLowerCase().includes(q));
  }

  const total = rows.length;
  const fizeram = rows.filter((a) => a.status === "fez").length;
  const pct = total > 0 ? Math.round((fizeram / total) * 100) : 0;

  return {
    rows,
    kpis: { total, fizeram, naoFizeram: total - fizeram, pct },
    prazo: meta?.prazo ?? "—",
  };
}

export function exportRelatorioCsv(rows: AlunoRelatorio[], filename = "relatorio-flora.csv") {
  const header = "Aluno,Status,Plantas,XP,Data";
  const lines = rows.map((a) => {
    const plantas = a.plantas.join("; ");
    const status = a.status === "fez" ? "Fez" : "Não fez";
    return `"${a.name}","${status}","${plantas}",${a.xp},"${a.data}"`;
  });
  const csv = [header, ...lines].join("\n");
  const blob = new Blob(["\uFEFF" + csv], { type: "text/csv;charset=utf-8;" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  link.click();
  URL.revokeObjectURL(url);
}
