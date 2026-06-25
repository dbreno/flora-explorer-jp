import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  LayoutDashboard,
  Users,
  PlusSquare,
  Settings,
  Leaf,
  AlertTriangle,
  Bell,
  ChevronRight,
  Search,
  Download,
  CheckCircle2,
  XCircle,
  Trophy,
  MapPin,
  ArrowLeft,
  ArrowRight,
  Rocket,
  Sparkles,
  Calendar,
  Pencil,
} from "lucide-react";
import { alunosRelatorio, turmas, type Turma, assets } from "@/lib/flora-data";
import mapJP from "@/assets/joao-pessoa-map.jpg";

export const Route = createFileRoute("/web")({
  component: WebDashboard,
});

type Section = "dashboard" | "turmas" | "nova" | "config";

function WebDashboard() {
  const [section, setSection] = useState<Section>("dashboard");

  return (
    <div className="min-h-screen bg-cream text-foreground">
      <div className="flex min-h-screen">
        <Sidebar current={section} onChange={setSection} />

        <div className="flex-1 min-w-0">
          <TopBar />
          <main className="px-6 py-6 lg:px-10 lg:py-8">
            {section === "dashboard" && <DashboardHome onGoTurmas={() => setSection("turmas")} />}
            {section === "turmas" && <GerenciarTurmas />}
            {section === "nova" && <NovaAtividade onDone={() => setSection("dashboard")} />}
            {section === "config" && <Configuracoes />}
          </main>
        </div>
      </div>
    </div>
  );
}

/* ---------------- SIDEBAR ---------------- */
function Sidebar({ current, onChange }: { current: Section; onChange: (s: Section) => void }) {
  const items: { key: Section; label: string; icon: React.ElementType }[] = [
    { key: "dashboard", label: "Dashboard", icon: LayoutDashboard },
    { key: "turmas", label: "Gerenciar Turmas", icon: Users },
    { key: "nova", label: "Nova Atividade", icon: PlusSquare },
    { key: "config", label: "Configurações", icon: Settings },
  ];

  return (
    <aside className="hidden w-64 shrink-0 border-r border-border bg-sidebar p-5 lg:flex lg:flex-col">
      <Link to="/" className="mb-8 flex items-center gap-2">
        <div className="grid h-9 w-9 place-items-center rounded-xl bg-moss text-moss-foreground">
          <Leaf className="h-4 w-4" />
        </div>
        <div>
          <p className="font-display text-lg leading-none text-moss">Flora Explorer</p>
          <p className="text-[10px] uppercase tracking-wider text-muted-foreground">Painel Pedagógico</p>
        </div>
      </Link>

      <nav className="space-y-1">
        {items.map((it) => (
          <button
            key={it.key}
            onClick={() => onChange(it.key)}
            className={`flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm transition ${
              current === it.key
                ? "bg-moss text-moss-foreground"
                : "text-foreground hover:bg-secondary"
            }`}
          >
            <it.icon className="h-4 w-4" />
            {it.label}
          </button>
        ))}
      </nav>

      <div className="mt-auto rounded-2xl border border-moss/15 bg-card p-4">
        <p className="text-xs font-semibold text-moss">Versão Aluno</p>
        <p className="mt-1 text-[11px] text-muted-foreground">
          Veja como os alunos enxergam o app no celular.
        </p>
        <Link
          to="/app"
          className="mt-3 inline-flex items-center gap-1 text-xs font-medium text-terracotta"
        >
          Abrir app mobile <ChevronRight className="h-3 w-3" />
        </Link>
      </div>
    </aside>
  );
}

function TopBar() {
  return (
    <header className="flex items-center justify-between border-b border-border bg-cream px-6 py-4 lg:px-10">
      <div className="flex items-center gap-3">
        <Link to="/" className="lg:hidden">
          <ArrowLeft className="h-4 w-4 text-moss" />
        </Link>
        <div>
          <p className="text-xs uppercase tracking-wider text-muted-foreground">Bom dia</p>
          <h1 className="font-display text-2xl leading-tight text-moss">Olá, Eliana!</h1>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <button className="hidden items-center gap-2 rounded-full border border-border bg-card px-3 py-1.5 text-xs font-medium text-foreground sm:flex">
          <Calendar className="h-3.5 w-3.5" /> Turmas ativas: <span className="text-moss">2</span>
        </button>
        <button className="grid h-9 w-9 place-items-center rounded-full bg-card border border-border">
          <Bell className="h-4 w-4 text-moss" />
        </button>
        <img src={assets.eliana} alt="Eliana" className="h-10 w-10 rounded-full object-cover ring-2 ring-moss/20" />
      </div>
    </header>
  );
}

/* ---------------- DASHBOARD ---------------- */
function DashboardHome({ onGoTurmas }: { onGoTurmas: () => void }) {
  return (
    <div className="space-y-6">
      {/* row 1: chart + alerts */}
      <div className="grid gap-5 lg:grid-cols-3">
        <Card className="lg:col-span-2">
          <CardHeader title="Resumo de Engajamento" subtitle="Alunos que completaram missões (%)" />
          <EngagementChart />
        </Card>

        <Card className="bg-invasive/8 border-invasive/30">
          <div className="flex items-start gap-3">
            <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-invasive text-invasive-foreground">
              <AlertTriangle className="h-5 w-5" />
            </div>
            <div className="min-w-0">
              <p className="text-[10px] font-semibold uppercase tracking-wider text-invasive">
                Alerta · Meio Ambiente
              </p>
              <h3 className="mt-1 font-display text-xl leading-tight text-foreground">
                Alta incidência de Amendoeira invasora
              </h3>
              <p className="mt-1 text-sm text-foreground/75">
                Detectada por alunos do 2º Ano na região do <strong>Bessa</strong>. 14 registros nos últimos 7 dias.
              </p>
              <button className="mt-3 inline-flex items-center gap-1.5 rounded-full bg-invasive px-3 py-1.5 text-xs font-medium text-invasive-foreground">
                <MapPin className="h-3 w-3" /> Ver mapa completo
              </button>
            </div>
          </div>
        </Card>
      </div>

      {/* row 2: activities + ranking */}
      <div className="grid gap-5 lg:grid-cols-3">
        <Card className="lg:col-span-2">
          <div className="flex items-center justify-between">
            <CardHeader title="Atividades Recentes" subtitle="Status por desafio lançado" />
            <button onClick={onGoTurmas} className="text-xs font-medium text-moss hover:underline">
              Ver todas →
            </button>
          </div>
          <div className="mt-2 overflow-hidden rounded-xl border border-border">
            <table className="w-full text-sm">
              <thead className="bg-secondary text-left text-[11px] uppercase tracking-wider text-muted-foreground">
                <tr>
                  <th className="px-3 py-2">Desafio</th>
                  <th className="px-3 py-2">Turma</th>
                  <th className="px-3 py-2">Status</th>
                  <th className="px-3 py-2">Prazo</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border bg-card">
                {[
                  { d: "Explore o Parque Solon de Lucena", t: "1º Ano", s: "andamento", p: "20/06" },
                  { d: "Árvores da nossa cidade", t: "2º Ano", s: "concluido", p: "10/06" },
                  { d: "Espécies da orla de Cabo Branco", t: "3º Ano", s: "andamento", p: "25/06" },
                  { d: "Caça às invasoras no Bessa", t: "2º Ano", s: "andamento", p: "28/06" },
                ].map((r) => (
                  <tr key={r.d}>
                    <td className="px-3 py-3 font-medium">{r.d}</td>
                    <td className="px-3 py-3 text-muted-foreground">{r.t}</td>
                    <td className="px-3 py-3">
                      <span
                        className={`inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[11px] font-medium ${
                          r.s === "concluido"
                            ? "bg-moss/12 text-moss"
                            : "bg-terracotta/15 text-terracotta"
                        }`}
                      >
                        {r.s === "concluido" ? "Concluído" : "Em andamento"}
                      </span>
                    </td>
                    <td className="px-3 py-3 text-muted-foreground">{r.p}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>

        <Card>
          <CardHeader title="Ranking Geral" subtitle="Top alunos da semana" icon={<Trophy className="h-4 w-4 text-xp" />} />
          <div className="mt-2 space-y-2">
            {[
              { p: 1, n: "Felipe Andrade", t: "1º Ano", xp: 560 },
              { p: 2, n: "Paulo S.", t: "1º Ano", xp: 320 },
              { p: 3, n: "Ana Beatriz", t: "2º Ano", xp: 280 },
            ].map((r) => (
              <div key={r.p} className="flex items-center gap-3 rounded-xl border border-border bg-card p-3">
                <span className={`grid h-8 w-8 place-items-center rounded-full text-xs font-bold ${
                  r.p === 1 ? "bg-xp text-foreground" :
                  r.p === 2 ? "bg-sage text-moss" :
                  "bg-terracotta/30 text-terracotta"
                }`}>
                  {r.p}º
                </span>
                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-medium">{r.n}</p>
                  <p className="text-[11px] text-muted-foreground">{r.t}</p>
                </div>
                <span className="text-sm font-semibold text-moss">{r.xp} XP</span>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}

function Card({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`rounded-2xl border border-border bg-card p-5 ${className}`}>{children}</div>
  );
}
function CardHeader({ title, subtitle, icon }: { title: string; subtitle?: string; icon?: React.ReactNode }) {
  return (
    <div>
      <h2 className="flex items-center gap-2 font-display text-lg text-moss">{icon}{title}</h2>
      {subtitle && <p className="text-xs text-muted-foreground">{subtitle}</p>}
    </div>
  );
}

function EngagementChart() {
  const data = [
    { turma: "1º Ano", pct: 78 },
    { turma: "2º Ano", pct: 64 },
    { turma: "3º Ano", pct: 91 },
  ];
  return (
    <div className="mt-4">
      <div className="flex h-44 items-end gap-6 border-b border-border pb-2">
        {data.map((d) => (
          <div key={d.turma} className="flex flex-1 flex-col items-center gap-2">
            <span className="font-display text-2xl text-moss">{d.pct}%</span>
            <div
              className="w-full rounded-t-xl bg-gradient-to-t from-moss to-sage"
              style={{ height: `${d.pct}%` }}
            />
          </div>
        ))}
      </div>
      <div className="mt-2 flex gap-6">
        {data.map((d) => (
          <p key={d.turma} className="flex-1 text-center text-xs font-medium text-muted-foreground">
            {d.turma}
          </p>
        ))}
      </div>
    </div>
  );
}

/* ---------------- GERENCIAR TURMAS / RELATÓRIO ---------------- */
function GerenciarTurmas() {
  const [turma, setTurma] = useState<Turma>("1º Ano");
  const [atividade, setAtividade] = useState("Explore o Parque Solon de Lucena");

  const total = alunosRelatorio.length;
  const fizeram = alunosRelatorio.filter((a) => a.status === "fez").length;
  const pct = Math.round((fizeram / total) * 100);

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <p className="text-xs uppercase tracking-wider text-muted-foreground">Relatórios</p>
          <h1 className="font-display text-3xl text-moss">Gerenciar Turmas</h1>
        </div>
        <div className="flex flex-wrap gap-2">
          <Select label="Turma" value={turma} onChange={(v) => setTurma(v as Turma)} options={[...turmas]} />
          <Select
            label="Atividade"
            value={atividade}
            onChange={setAtividade}
            options={[
              "Explore o Parque Solon de Lucena",
              "Árvores da nossa cidade",
              "Caça às invasoras no Bessa",
            ]}
          />
        </div>
      </div>

      {/* KPIs */}
      <div className="grid gap-4 sm:grid-cols-4">
        <Kpi label="Alunos na turma" value={String(total)} />
        <Kpi label="Concluíram" value={String(fizeram)} tone="moss" />
        <Kpi label="Não fizeram" value={String(total - fizeram)} tone="invasive" />
        <Kpi label="Engajamento" value={`${pct}%`} tone="terracotta" />
      </div>

      {/* Tabela detalhada */}
      <Card className="overflow-hidden p-0">
        <div className="flex items-center justify-between gap-3 border-b border-border px-5 py-4">
          <div>
            <h2 className="font-display text-lg text-moss">{atividade}</h2>
            <p className="text-xs text-muted-foreground">{turma} · prazo 20/06</p>
          </div>
          <div className="flex items-center gap-2">
            <div className="hidden items-center gap-2 rounded-full border border-border bg-cream px-3 py-1.5 text-xs sm:flex">
              <Search className="h-3 w-3 text-muted-foreground" />
              <input placeholder="Buscar aluno…" className="w-32 bg-transparent outline-none" />
            </div>
            <button className="flex items-center gap-1.5 rounded-full bg-moss px-3 py-1.5 text-xs font-medium text-moss-foreground">
              <Download className="h-3 w-3" /> Exportar CSV
            </button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-secondary text-left text-[11px] uppercase tracking-wider text-muted-foreground">
              <tr>
                <th className="px-5 py-3">Aluno</th>
                <th className="px-5 py-3">Status</th>
                <th className="px-5 py-3">Plantas fotografadas</th>
                <th className="px-5 py-3 text-right">XP</th>
                <th className="px-5 py-3 text-right">Data</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {alunosRelatorio.map((a) => (
                <tr key={a.name} className="hover:bg-secondary/50">
                  <td className="px-5 py-3 font-medium">{a.name}</td>
                  <td className="px-5 py-3">
                    {a.status === "fez" ? (
                      <span className="inline-flex items-center gap-1 rounded-full bg-moss/12 px-2 py-0.5 text-[11px] font-medium text-moss">
                        <CheckCircle2 className="h-3 w-3" /> Fez
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1 rounded-full bg-invasive/10 px-2 py-0.5 text-[11px] font-medium text-invasive">
                        <XCircle className="h-3 w-3" /> Não fez
                      </span>
                    )}
                  </td>
                  <td className="px-5 py-3">
                    {a.plantas.length > 0 ? (
                      <div className="flex flex-wrap gap-1">
                        {a.plantas.map((p) => (
                          <span key={p} className="rounded-full bg-sage/25 px-2 py-0.5 text-[11px] font-medium text-moss">
                            🌿 {p}
                          </span>
                        ))}
                      </div>
                    ) : (
                      <span className="text-xs text-muted-foreground">—</span>
                    )}
                  </td>
                  <td className="px-5 py-3 text-right font-semibold text-moss">
                    {a.xp > 0 ? `${a.xp} XP` : "—"}
                  </td>
                  <td className="px-5 py-3 text-right text-muted-foreground">{a.data}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
}

function Kpi({ label, value, tone = "neutral" }: { label: string; value: string; tone?: "neutral" | "moss" | "invasive" | "terracotta" }) {
  const ring =
    tone === "moss" ? "border-moss/30 bg-moss/8" :
    tone === "invasive" ? "border-invasive/30 bg-invasive/8" :
    tone === "terracotta" ? "border-terracotta/30 bg-terracotta/10" :
    "border-border bg-card";
  return (
    <div className={`rounded-2xl border p-4 ${ring}`}>
      <p className="text-[11px] uppercase tracking-wider text-muted-foreground">{label}</p>
      <p className="mt-1 font-display text-3xl text-moss">{value}</p>
    </div>
  );
}

function Select({
  label, value, onChange, options,
}: { label: string; value: string; onChange: (v: string) => void; options: string[] }) {
  return (
    <label className="flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1.5 text-xs">
      <span className="text-muted-foreground">{label}:</span>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="bg-transparent font-medium text-moss outline-none"
      >
        {options.map((o) => <option key={o}>{o}</option>)}
      </select>
    </label>
  );
}

/* ---------------- NOVA ATIVIDADE ---------------- */
function NovaAtividade({ onDone }: { onDone: () => void }) {
  const [step, setStep] = useState(0);
  const [turma, setTurma] = useState<Turma>("1º Ano");
  const [drawPolygon, setDrawPolygon] = useState(false);
  const [title, setTitle] = useState("Caça às invasoras no Bessa");
  const [description, setDescription] = useState("Encontre e fotografe 3 espécies invasoras no bairro do Bessa.");
  const [obligatory, setObligatory] = useState(true);
  const [done, setDone] = useState(false);

  const steps = ["Turma", "Geofencing", "Formulário", "Lançar"];

  return (
    <div className="space-y-6">
      <div>
        <p className="text-xs uppercase tracking-wider text-muted-foreground">Nova Atividade</p>
        <h1 className="font-display text-3xl text-moss">Criar um novo desafio</h1>
      </div>

      {/* steps */}
      <ol className="flex items-center gap-2 text-xs">
        {steps.map((s, i) => (
          <li key={s} className="flex items-center gap-2">
            <span
              className={`grid h-6 w-6 place-items-center rounded-full text-[10px] font-bold ${
                i <= step ? "bg-moss text-moss-foreground" : "bg-secondary text-muted-foreground"
              }`}
            >
              {i + 1}
            </span>
            <span className={i === step ? "font-semibold text-moss" : "text-muted-foreground"}>{s}</span>
            {i < steps.length - 1 && <span className="h-px w-6 bg-border" />}
          </li>
        ))}
      </ol>

      {done ? (
        <Card className="text-center py-12">
          <div className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-moss text-moss-foreground">
            <Rocket className="h-7 w-7" />
          </div>
          <h2 className="mt-5 font-display text-3xl text-moss">Desafio lançado com sucesso!</h2>
          <p className="mt-1 text-sm text-muted-foreground">
            Alertas enviados para os {alunosRelatorio.length} alunos do {turma}.
          </p>
          <div className="mt-6 flex justify-center gap-2">
            <button onClick={() => { setDone(false); setStep(0); }} className="rounded-full border border-border bg-card px-4 py-2 text-sm">
              Criar outro
            </button>
            <button onClick={onDone} className="rounded-full bg-moss px-4 py-2 text-sm text-moss-foreground">
              Voltar ao dashboard
            </button>
          </div>
        </Card>
      ) : (
        <Card>
          {step === 0 && (
            <div className="space-y-4">
              <CardHeader title="Para qual turma é este desafio?" subtitle="Apenas alunos selecionados serão notificados." />
              <div className="grid gap-3 sm:grid-cols-3">
                {[...turmas].map((t) => (
                  <button
                    key={t}
                    onClick={() => setTurma(t)}
                    className={`rounded-2xl border-2 p-4 text-left transition ${
                      turma === t ? "border-moss bg-moss/8" : "border-border bg-card hover:border-moss/40"
                    }`}
                  >
                    <p className="font-display text-2xl text-moss">{t}</p>
                    <p className="text-xs text-muted-foreground">28 alunos · Ensino Médio</p>
                  </button>
                ))}
              </div>
            </div>
          )}

          {step === 1 && (
            <div className="space-y-4">
              <div className="flex flex-wrap items-end justify-between gap-3">
                <CardHeader title="Delimitar a zona no mapa" subtitle="João Pessoa · selecione a área onde os alunos devem explorar." />
                <button
                  onClick={() => setDrawPolygon((v) => !v)}
                  className={`flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-medium transition ${
                    drawPolygon ? "bg-moss text-moss-foreground" : "border border-moss/30 bg-card text-moss"
                  }`}
                >
                  <Pencil className="h-3 w-3" />
                  {drawPolygon ? "Limpar zona" : "Desenhar zona"}
                </button>
              </div>

              <div className="relative overflow-hidden rounded-2xl border border-border bg-secondary">
                <img src={mapJP} alt="Mapa de João Pessoa" className="w-full" loading="lazy" />
                {drawPolygon && (
                  <svg viewBox="0 0 100 67" className="pointer-events-none absolute inset-0 h-full w-full" preserveAspectRatio="none">
                    <polygon
                      points="62,18 80,22 84,38 72,52 56,46 54,30"
                      fill="oklch(0.62 0.13 45 / 0.25)"
                      stroke="oklch(0.62 0.13 45)"
                      strokeWidth="0.5"
                      strokeDasharray="1.2 0.8"
                    />
                    {[
                      [62, 18], [80, 22], [84, 38], [72, 52], [56, 46], [54, 30],
                    ].map(([x, y], i) => (
                      <circle key={i} cx={x} cy={y} r="1.2" fill="oklch(0.62 0.13 45)" stroke="white" strokeWidth="0.4" />
                    ))}
                  </svg>
                )}
                {drawPolygon && (
                  <div className="absolute bottom-3 left-3 rounded-xl bg-card/95 px-3 py-2 text-xs shadow-lg backdrop-blur-sm">
                    <p className="font-semibold text-moss">Zona definida</p>
                    <p className="text-muted-foreground">~2,4 km² · região do Bessa / Manaíra</p>
                  </div>
                )}
              </div>

              <p className="rounded-xl bg-sage/15 p-3 text-xs text-moss">
                <Sparkles className="mr-1 inline h-3 w-3" />
                Estimativa: <strong>120 espécies catalogadas</strong> nesta zona segura.
              </p>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-4">
              <CardHeader title="Detalhes do desafio" subtitle="Os alunos verão essas informações no app." />
              <Field label="Título">
                <input value={title} onChange={(e) => setTitle(e.target.value)}
                  className="w-full rounded-xl border border-border bg-card px-3 py-2 text-sm outline-none focus:border-moss" />
              </Field>
              <Field label="Descrição">
                <textarea value={description} onChange={(e) => setDescription(e.target.value)} rows={3}
                  className="w-full rounded-xl border border-border bg-card px-3 py-2 text-sm outline-none focus:border-moss" />
              </Field>
              <div className="grid gap-3 sm:grid-cols-2">
                <Field label="Data-limite">
                  <input type="date" defaultValue="2026-06-28"
                    className="w-full rounded-xl border border-border bg-card px-3 py-2 text-sm outline-none focus:border-moss" />
                </Field>
                <Field label="Obrigatório para todos">
                  <button onClick={() => setObligatory((v) => !v)}
                    className={`flex h-10 w-full items-center justify-between rounded-xl border border-border px-3 text-sm ${obligatory ? "bg-moss/8 text-moss" : "bg-card text-muted-foreground"}`}>
                    {obligatory ? "Sim" : "Não"}
                    <div className={`flex h-5 w-9 items-center rounded-full transition ${obligatory ? "bg-moss" : "bg-secondary"}`}>
                      <div className={`h-4 w-4 rounded-full bg-card transition ${obligatory ? "translate-x-[18px]" : "translate-x-0.5"}`} />
                    </div>
                  </button>
                </Field>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-4">
              <CardHeader title="Revise e lance o desafio" />
              <div className="grid gap-3 sm:grid-cols-2">
                <Review label="Turma" value={turma} />
                <Review label="Zona no mapa" value={drawPolygon ? "Bessa / Manaíra (~2,4 km²)" : "Sem geofencing"} />
                <Review label="Título" value={title} />
                <Review label="Prazo" value="28/06/2026" />
                <Review label="Obrigatório" value={obligatory ? "Sim" : "Não"} />
                <Review label="Estimativa" value="120 espécies catalogadas" />
              </div>
              <button
                onClick={() => setDone(true)}
                className="mt-2 flex w-full items-center justify-center gap-2 rounded-2xl bg-moss py-3 font-medium text-moss-foreground"
              >
                <Rocket className="h-4 w-4" /> Lançar Desafio
              </button>
            </div>
          )}

          {/* nav */}
          <div className="mt-6 flex items-center justify-between border-t border-border pt-4">
            <button
              onClick={() => setStep((s) => Math.max(0, s - 1))}
              disabled={step === 0}
              className="flex items-center gap-1 rounded-full px-3 py-1.5 text-sm text-muted-foreground disabled:opacity-40"
            >
              <ArrowLeft className="h-4 w-4" /> Voltar
            </button>
            {step < 3 && (
              <button
                onClick={() => setStep((s) => s + 1)}
                className="flex items-center gap-1 rounded-full bg-moss px-4 py-1.5 text-sm font-medium text-moss-foreground"
              >
                Continuar <ArrowRight className="h-4 w-4" />
              </button>
            )}
          </div>
        </Card>
      )}
    </div>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-1 block text-xs font-medium text-muted-foreground">{label}</span>
      {children}
    </label>
  );
}
function Review({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl border border-border bg-cream p-3">
      <p className="text-[10px] uppercase tracking-wider text-muted-foreground">{label}</p>
      <p className="mt-1 text-sm font-medium text-foreground">{value}</p>
    </div>
  );
}

/* ---------------- CONFIG ---------------- */
function Configuracoes() {
  return (
    <div className="space-y-6 max-w-3xl">
      <div>
        <p className="text-xs uppercase tracking-wider text-muted-foreground">Configurações</p>
        <h1 className="font-display text-3xl text-moss">Sua conta e integrações</h1>
      </div>

      <Card>
        <CardHeader title="Integrações" subtitle="Sincronize com ferramentas pedagógicas." />
        <div className="mt-4 space-y-3">
          <IntegrationRow name="Google Sala de Aula" desc="Sincronize turmas e lance atividades direto no Classroom." connected />
          <IntegrationRow name="Diário de Classe (SEDUC-PB)" desc="Envie automaticamente notas dos desafios concluídos." />
        </div>
      </Card>

      <Card>
        <CardHeader title="Dados da Conta" subtitle="Profª Eliana M. · UFPB" />
        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          <Field label="Nome completo">
            <input defaultValue="Eliana Mendes" className="w-full rounded-xl border border-border bg-card px-3 py-2 text-sm outline-none" />
          </Field>
          <Field label="E-mail institucional">
            <input defaultValue="eliana.mendes@escola.pb.gov.br" className="w-full rounded-xl border border-border bg-card px-3 py-2 text-sm outline-none" />
          </Field>
          <Field label="Escola">
            <input defaultValue="EEEFM Olivina Olívia" className="w-full rounded-xl border border-border bg-card px-3 py-2 text-sm outline-none" />
          </Field>
          <Field label="Disciplina">
            <input defaultValue="Biologia · Ensino Médio" className="w-full rounded-xl border border-border bg-card px-3 py-2 text-sm outline-none" />
          </Field>
        </div>
      </Card>
    </div>
  );
}

function IntegrationRow({ name, desc, connected }: { name: string; desc: string; connected?: boolean }) {
  return (
    <div className="flex items-center justify-between gap-3 rounded-xl border border-border bg-cream p-3">
      <div className="flex items-center gap-3">
        <div className="grid h-10 w-10 place-items-center rounded-xl bg-card text-moss">
          <Leaf className="h-4 w-4" />
        </div>
        <div>
          <p className="text-sm font-semibold">{name}</p>
          <p className="text-xs text-muted-foreground">{desc}</p>
        </div>
      </div>
      <button
        className={`rounded-full px-3 py-1.5 text-xs font-medium ${
          connected ? "bg-moss/12 text-moss" : "bg-moss text-moss-foreground"
        }`}
      >
        {connected ? "Conectado ✓" : "Conectar"}
      </button>
    </div>
  );
}
