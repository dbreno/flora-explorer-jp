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

export const missoes = [
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

export const alunosRelatorio = [
  {
    name: "Felipe Andrade",
    status: "fez",
    plantas: ["Ipê-amarelo", "Pau-brasil", "Cajueiro"],
    xp: 60,
    data: "12/06",
  },
  {
    name: "Paulo S.",
    status: "fez",
    plantas: ["Ipê-amarelo", "Amendoeira"],
    xp: 45,
    data: "13/06",
  },
  {
    name: "Ana Beatriz",
    status: "fez",
    plantas: ["Mangueira", "Ipê-amarelo"],
    xp: 40,
    data: "13/06",
  },
  { name: "Lucas Mendes", status: "fez", plantas: ["Cajueiro"], xp: 20, data: "14/06" },
  { name: "Júlia Costa", status: "nao", plantas: [], xp: 0, data: "—" },
  { name: "Rafael Lima", status: "fez", plantas: ["Amendoeira"], xp: 20, data: "14/06" },
  { name: "Beatriz Souza", status: "nao", plantas: [], xp: 0, data: "—" },
  {
    name: "Tobias Freire",
    status: "fez",
    plantas: ["Pau-brasil", "Mangueira", "Ipê-amarelo"],
    xp: 55,
    data: "12/06",
  },
  {
    name: "Davi Teixeira",
    status: "fez",
    plantas: ["Cajueiro", "Ipê-amarelo"],
    xp: 40,
    data: "13/06",
  },
  { name: "Mariana Alves", status: "nao", plantas: [], xp: 0, data: "—" },
] as const;
