import { createFileRoute, Link } from "@tanstack/react-router";
import { Smartphone, Monitor, Leaf, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/")({
  component: Landing,
});

function Landing() {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* botanical decorative blob */}
      <div className="pointer-events-none absolute -top-32 -right-32 h-[28rem] w-[28rem] rounded-full bg-sage/30 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 -left-32 h-[32rem] w-[32rem] rounded-full bg-terracotta/15 blur-3xl" />

      <header className="relative z-10 mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
        <div className="flex items-center gap-2">
          <div className="grid h-9 w-9 place-items-center rounded-full bg-moss text-moss-foreground">
            <Leaf className="h-4 w-4" />
          </div>
          <span className="font-display text-xl text-moss">Flora Explorer JP</span>
        </div>
        <span className="hidden text-xs uppercase tracking-[0.18em] text-muted-foreground sm:block">
          Protótipo navegável · UFPB 2026.1
        </span>
      </header>

      <main className="relative z-10 mx-auto max-w-6xl px-6 pt-8 pb-20 sm:pt-16">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-moss/20 bg-cream px-3 py-1 text-xs font-medium uppercase tracking-wider text-moss">
            Educação ambiental · Ensino Médio
          </span>
          <h1 className="mt-6 font-display text-5xl leading-[1.05] text-moss text-balance sm:text-7xl">
            A Mata Atlântica de João Pessoa <em className="text-terracotta">cabe no bolso</em> dos seus alunos.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground sm:text-xl">
            Um jogo de exploração urbana que transforma parques, praças e ruas em laboratório vivo
            de biodiversidade — com gamificação para os alunos e painel pedagógico para o professor.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          <Link
            to="/app"
            className="group relative overflow-hidden rounded-3xl border border-moss/15 bg-card p-8 transition hover:border-moss/40 hover:shadow-xl"
          >
            <div className="flex items-center justify-between">
              <div className="grid h-12 w-12 place-items-center rounded-2xl bg-moss text-moss-foreground">
                <Smartphone className="h-5 w-5" />
              </div>
              <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                Mobile · Aluno
              </span>
            </div>
            <h2 className="mt-8 font-display text-3xl text-moss">Sou Aluno</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Capture plantas, suba de nível, complete missões da turma e desafie seus colegas.
            </p>
            <div className="mt-6 flex items-center gap-2 text-sm font-medium text-moss">
              Entrar no app
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </div>
            <div className="absolute -bottom-12 -right-12 h-40 w-40 rounded-full bg-sage/40 blur-2xl" />
          </Link>

          <Link
            to="/web"
            className="group relative overflow-hidden rounded-3xl border border-moss/15 bg-card p-8 transition hover:border-moss/40 hover:shadow-xl"
          >
            <div className="flex items-center justify-between">
              <div className="grid h-12 w-12 place-items-center rounded-2xl bg-terracotta text-terracotta-foreground">
                <Monitor className="h-5 w-5" />
              </div>
              <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                Dashboard · Professora
              </span>
            </div>
            <h2 className="mt-8 font-display text-3xl text-moss">Sou Professora</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Crie atividades com geofencing no mapa de João Pessoa e acompanhe o engajamento da turma.
            </p>
            <div className="mt-6 flex items-center gap-2 text-sm font-medium text-moss">
              Abrir painel
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </div>
            <div className="absolute -bottom-12 -right-12 h-40 w-40 rounded-full bg-terracotta/30 blur-2xl" />
          </Link>
        </div>

        <div className="mt-16 grid gap-6 border-t border-border/60 pt-10 sm:grid-cols-3">
          {[
            { k: "1ª", l: "App educativo focado na flora de João Pessoa" },
            { k: "37%", l: "da arborização urbana de JP é composta por espécies invasoras" },
            { k: "1º · 2º · 3º Ano", l: "Ensino Médio — currículo de Ciências e Biologia" },
          ].map((s) => (
            <div key={s.k}>
              <div className="font-display text-3xl text-moss">{s.k}</div>
              <p className="mt-1 text-sm text-muted-foreground">{s.l}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
