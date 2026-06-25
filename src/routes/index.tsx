import { createFileRoute, Link } from "@tanstack/react-router";
import { Smartphone, Monitor, Leaf, ArrowRight, Sparkles } from "lucide-react";

export const Route = createFileRoute("/")({
  component: Landing,
});

function Landing() {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Blobs decorativos */}
      <div className="pointer-events-none absolute -top-40 -right-40 h-[36rem] w-[36rem] rounded-full bg-sage/25 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-48 -left-40 h-[40rem] w-[40rem] rounded-full bg-terracotta/12 blur-3xl" />
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[28rem] w-[28rem] rounded-full bg-moss/6 blur-3xl" />

      {/* Header */}
      <header className="relative z-10 mx-auto flex max-w-6xl items-center justify-between px-6 py-7">
        <div className="flex items-center gap-2.5">
          <div className="grid h-9 w-9 place-items-center rounded-full bg-moss text-moss-foreground shadow-lg shadow-moss/25">
            <Leaf className="h-4 w-4" strokeWidth={2.5} />
          </div>
          <span className="text-xl font-bold tracking-tight text-foreground">
            Flora Explorer JP
          </span>
        </div>
        <span className="hidden text-[11px] font-semibold uppercase tracking-[0.2em] text-muted-foreground sm:block">
          Protótipo · UFPB 2026.1
        </span>
      </header>

      {/* Hero */}
      <main className="relative z-10 mx-auto max-w-6xl px-6 pt-6 pb-20 sm:pt-14">
        <div className="max-w-3xl">
          {/* Badge pill */}
          <span className="inline-flex items-center gap-2 rounded-full border border-moss/25 bg-sage/15 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-widest text-moss shadow-sm">
            <Sparkles className="h-3 w-3 text-xp" />
            Educação ambiental · Ensino Médio
          </span>

          <h1 className="mt-7 text-[2.8rem] font-bold leading-[1.06] tracking-tight text-foreground text-balance sm:text-[4.5rem]">
            A Mata Atlântica de João Pessoa{" "}
            <em className="text-terracotta not-italic">cabe no bolso</em>{" "}
            dos seus alunos.
          </h1>

          <p className="mt-7 max-w-2xl text-[1.05rem] leading-relaxed text-muted-foreground sm:text-xl">
            Um jogo de exploração urbana que transforma parques, praças e ruas
            em laboratório vivo de biodiversidade — com gamificação para os
            alunos e painel pedagógico para o professor.
          </p>
        </div>

        {/* Cards de entrada */}
        <div className="mt-14 grid gap-5 sm:grid-cols-2">
          <Link
            to="/app"
            className="group relative overflow-hidden rounded-3xl border border-moss/15 bg-card p-8 transition-all duration-300 hover:border-moss/50 hover:shadow-2xl hover:shadow-moss/10 hover:-translate-y-0.5"
          >
            <div className="flex items-center justify-between">
              <div className="grid h-12 w-12 place-items-center rounded-2xl bg-moss text-moss-foreground shadow-lg shadow-moss/30">
                <Smartphone className="h-5 w-5" strokeWidth={2} />
              </div>
              <span className="rounded-full bg-secondary px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
                Mobile · Aluno
              </span>
            </div>
            <h2 className="mt-8 text-[1.9rem] font-bold tracking-tight text-foreground">
              Sou Aluno
            </h2>
            <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">
              Capture plantas, suba de nível, complete missões da turma e
              desafie seus colegas.
            </p>
            <div className="mt-7 flex items-center gap-2 text-sm font-semibold text-moss">
              Entrar no app
              <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1.5" />
            </div>
            <div className="absolute -bottom-14 -right-14 h-48 w-48 rounded-full bg-sage/35 blur-2xl transition-all duration-500 group-hover:scale-125" />
          </Link>

          <Link
            to="/web"
            className="group relative overflow-hidden rounded-3xl border border-moss/15 bg-card p-8 transition-all duration-300 hover:border-terracotta/40 hover:shadow-2xl hover:shadow-terracotta/10 hover:-translate-y-0.5"
          >
            <div className="flex items-center justify-between">
              <div className="grid h-12 w-12 place-items-center rounded-2xl bg-terracotta text-terracotta-foreground shadow-lg shadow-terracotta/30">
                <Monitor className="h-5 w-5" strokeWidth={2} />
              </div>
              <span className="rounded-full bg-secondary px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
                Dashboard · Professora
              </span>
            </div>
            <h2 className="mt-8 text-[1.9rem] font-bold tracking-tight text-foreground">
              Sou Professora
            </h2>
            <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">
              Crie atividades com geofencing no mapa de João Pessoa e
              acompanhe o engajamento da turma.
            </p>
            <div className="mt-7 flex items-center gap-2 text-sm font-semibold text-moss">
              Abrir painel
              <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1.5" />
            </div>
            <div className="absolute -bottom-14 -right-14 h-48 w-48 rounded-full bg-terracotta/25 blur-2xl transition-all duration-500 group-hover:scale-125" />
          </Link>
        </div>

        {/* Stats */}
        <div className="mt-20 grid gap-8 border-t border-border/50 pt-12 sm:grid-cols-3">
          {[
            { k: "1ª", l: "App educativo focado na flora de João Pessoa" },
            {
              k: "37%",
              l: "da arborização urbana de JP é composta por espécies invasoras",
            },
            {
              k: "1º · 2º · 3º Ano",
              l: "Ensino Médio — currículo de Ciências e Biologia",
            },
          ].map((s) => (
            <div key={s.k}>
              <div className="text-[2.2rem] font-bold leading-none tracking-tight text-moss">
                {s.k}
              </div>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {s.l}
              </p>
            </div>
          ))}
        </div>

        {/* Footer mínimo */}
        <p className="mt-16 text-center text-xs text-muted-foreground/60">
          Desenvolvido como protótipo acadêmico — UFPB 2026.1
        </p>
      </main>
    </div>
  );
}
