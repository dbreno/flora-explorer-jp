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
  ChevronDown,
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
  Menu,
  HelpCircle,
  X,
} from "lucide-react";
import {
  alunosRelatorio,
  turmas,
  atividadesProfessora,
  FAQ_TEACHER,
  TEACHER_NOTIFICATIONS,
  getRelatorioFiltrado,
  exportRelatorioCsv,
  type Turma,
  assets,
} from "@/lib/flora-data";
import mapJP from "@/assets/joao-pessoa-map.jpg";
import { HelpDialog } from "@/components/flora/HelpDialog";
import { NotificationsDialog } from "@/components/flora/NotificationsDialog";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";

export const Route = createFileRoute("/web")({
  component: WebDashboard,
});

type Section = "dashboard" | "turmas" | "nova" | "config";

const NAV_ITEMS: { key: Section; label: string; icon: React.ElementType }[] = [
  { key: "dashboard", label: "Dashboard", icon: LayoutDashboard },
  { key: "turmas", label: "Gerenciar Turmas", icon: Users },
  { key: "nova", label: "Nova Atividade", icon: PlusSquare },
  { key: "config", label: "Configurações", icon: Settings },
];

type RecentActivity = { d: string; t: string; s: string; p: string };

const INITIAL_ACTIVITIES: RecentActivity[] = [
  { d: "Explore o Parque Solon de Lucena", t: "1º Ano", s: "andamento", p: "20/06" },
  { d: "Árvores da nossa cidade", t: "2º Ano", s: "concluido", p: "10/06" },
  { d: "Espécies da orla de Cabo Branco", t: "3º Ano", s: "andamento", p: "25/06" },
  { d: "Caça às invasoras no Bessa", t: "2º Ano", s: "andamento", p: "28/06" },
];

function WebDashboard() {
  const [section, setSection] = useState<Section>("dashboard");
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [helpOpen, setHelpOpen] = useState(false);
  const [notificationsOpen, setNotificationsOpen] = useState(false);
  const [recentActivities, setRecentActivities] = useState<RecentActivity[]>(INITIAL_ACTIVITIES);

  const goToSection = (s: Section) => {
    setSection(s);
    setMobileNavOpen(false);
  };

  const addActivity = (a: RecentActivity) =>
    setRecentActivities((prev) => [a, ...prev]);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="flex min-h-screen">
        <Sidebar current={section} onChange={goToSection} />

        <div className="flex-1 min-w-0 flex flex-col">
          <TopBar
            onOpenNav={() => setMobileNavOpen(true)}
            onHelp={() => setHelpOpen(true)}
            onNotifications={() => setNotificationsOpen(true)}
            onGoTurmas={() => goToSection("turmas")}
          />
          <main className="flex-1 px-6 py-6 lg:px-8 lg:py-7">
            {section === "dashboard" && (
              <DashboardHome
                onGoTurmas={() => goToSection("turmas")}
                recentActivities={recentActivities}
              />
            )}
            {section === "turmas" && <GerenciarTurmas />}
            {section === "nova" && (
              <NovaAtividade
                onDone={() => goToSection("dashboard")}
                onAddActivity={addActivity}
              />
            )}
            {section === "config" && <Configuracoes />}
          </main>
        </div>
      </div>

      <MobileNavSheet
        open={mobileNavOpen}
        onOpenChange={setMobileNavOpen}
        current={section}
        onChange={goToSection}
      />

      <HelpDialog
        open={helpOpen}
        onOpenChange={setHelpOpen}
        items={FAQ_TEACHER}
        title="Ajuda — Painel Pedagógico"
        description="Perguntas frequentes para professores"
      />
      <NotificationsDialog
        open={notificationsOpen}
        onOpenChange={setNotificationsOpen}
        notifications={TEACHER_NOTIFICATIONS}
      />
    </div>
  );
}

/* ---------------- SIDEBAR ---------------- */
function Sidebar({ current, onChange }: { current: Section; onChange: (s: Section) => void }) {
  return (
    <aside className="hidden w-64 shrink-0 flex-col border-r border-border bg-card lg:flex">
      <SidebarHeader />
      <NavList current={current} onChange={onChange} />
      <SidebarFooter />
    </aside>
  );
}

function MobileNavSheet({
  open,
  onOpenChange,
  current,
  onChange,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  current: Section;
  onChange: (s: Section) => void;
}) {
  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent side="left" className="w-64 p-0">
        <SheetHeader className="border-b border-border px-5 py-4 text-left">
          <SheetTitle className="text-sm font-semibold">Flora Explorer</SheetTitle>
          <p className="text-[11px] text-muted-foreground">Painel pedagógico</p>
        </SheetHeader>
        <div className="px-3 py-4">
          <NavList current={current} onChange={onChange} />
        </div>
        <div className="border-t border-border px-4 py-4">
          <SidebarFooter />
        </div>
      </SheetContent>
    </Sheet>
  );
}

function SidebarHeader() {
  return (
    <Link to="/" className="flex items-center gap-2.5 border-b border-border px-5 py-4">
      <div className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-moss text-moss-foreground">
        <Leaf className="h-3.5 w-3.5" strokeWidth={2.5} />
      </div>
      <div>
        <p className="text-sm font-semibold leading-tight text-foreground">Flora Explorer</p>
        <p className="text-[11px] text-muted-foreground">Painel pedagógico</p>
      </div>
    </Link>
  );
}

function NavList({
  current,
  onChange,
}: {
  current: Section;
  onChange: (s: Section) => void;
}) {
  return (
    <nav className="flex-1 space-y-0.5">
      {NAV_ITEMS.map((it) => (
        <button
          key={it.key}
          type="button"
          onClick={() => onChange(it.key)}
          className={`flex w-full items-center gap-2.5 rounded-lg px-3 py-2 text-sm font-medium transition ${
            current === it.key
              ? "bg-moss/10 text-moss"
              : "text-muted-foreground hover:bg-secondary hover:text-foreground"
          }`}
        >
          <it.icon className="h-4 w-4 shrink-0" />
          {it.label}
        </button>
      ))}
    </nav>
  );
}

function SidebarFooter() {
  return (
    <>
      <p className="text-xs font-medium text-muted-foreground">Ver app do aluno</p>
      <Link
        to="/app"
        className="mt-1 inline-flex items-center gap-1 text-xs font-semibold text-moss hover:underline"
      >
        Abrir simulação <ChevronRight className="h-3 w-3" />
      </Link>
    </>
  );
}

const TURMAS_ATIVAS_RESUMO = [
  { nome: "1º Ano — Turma A", alunos: 28, desafios: 2 },
  { nome: "2º Ano — Turma B", alunos: 28, desafios: 1 },
];

function TopBar({
  onOpenNav,
  onHelp,
  onNotifications,
  onGoTurmas,
}: {
  onOpenNav: () => void;
  onHelp: () => void;
  onNotifications: () => void;
  onGoTurmas: () => void;
}) {
  const [turmasOpen, setTurmasOpen] = useState(false);

  return (
    <header className="flex items-center justify-between border-b border-border bg-card px-6 py-3.5 lg:px-8">
      <div className="flex items-center gap-3">
        <button
          type="button"
          onClick={onOpenNav}
          className="grid h-8 w-8 place-items-center rounded-lg border border-border bg-background lg:hidden hover:border-moss/40 transition"
          aria-label="Abrir menu"
        >
          <Menu className="h-4 w-4 text-muted-foreground" />
        </button>
        <Link to="/" className="lg:hidden">
          <ArrowLeft className="h-4 w-4 text-muted-foreground" />
        </Link>
        <div>
          <p className="text-[11px] text-muted-foreground">Painel · Profª Eliana</p>
          <h1 className="text-base font-semibold leading-tight text-foreground">Olá, Eliana!</h1>
        </div>
      </div>
      <div className="flex items-center gap-2">
        {/* Badge turmas ativas com dropdown */}
        <div className="relative hidden sm:block">
          <button
            type="button"
            onClick={() => setTurmasOpen((v) => !v)}
            className="flex items-center gap-1.5 rounded-lg border border-border bg-background px-3 py-1.5 text-xs font-medium text-muted-foreground hover:border-moss/40 hover:text-moss transition"
          >
            <Calendar className="h-3.5 w-3.5" />
            2 turmas ativas
            <ChevronDown className={`h-3 w-3 transition-transform ${turmasOpen ? "rotate-180" : ""}`} />
          </button>
          {turmasOpen && (
            <>
              <div className="fixed inset-0 z-40" onClick={() => setTurmasOpen(false)} />
              <div className="absolute right-0 top-full z-50 mt-1 w-64 rounded-xl border border-border bg-card shadow-xl">
                <div className="border-b border-border px-4 py-2.5">
                  <p className="text-xs font-semibold text-foreground">Turmas ativas</p>
                </div>
                {TURMAS_ATIVAS_RESUMO.map((t) => (
                  <div key={t.nome} className="px-4 py-3 hover:bg-secondary/50 transition">
                    <p className="text-sm font-medium text-foreground">{t.nome}</p>
                    <p className="text-xs text-muted-foreground">
                      {t.alunos} alunos · {t.desafios} desafio{t.desafios !== 1 ? "s" : ""} ativo{t.desafios !== 1 ? "s" : ""}
                    </p>
                  </div>
                ))}
                <div className="border-t border-border p-2">
                  <button
                    onClick={() => { setTurmasOpen(false); onGoTurmas(); }}
                    className="w-full rounded-lg px-3 py-1.5 text-xs font-medium text-moss hover:bg-moss/8 transition text-center"
                  >
                    Gerenciar turmas →
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
        <button
          type="button"
          onClick={onHelp}
          className="grid h-8 w-8 place-items-center rounded-lg border border-border bg-background hover:border-moss/40 transition"
          aria-label="Ajuda"
        >
          <HelpCircle className="h-3.5 w-3.5 text-muted-foreground" />
        </button>
        <button
          type="button"
          onClick={onNotifications}
          className="grid h-8 w-8 place-items-center rounded-lg border border-border bg-background hover:border-moss/40 transition"
          aria-label="Notificações"
        >
          <Bell className="h-3.5 w-3.5 text-muted-foreground" />
        </button>
        <img
          src={assets.eliana}
          alt="Eliana"
          className="h-8 w-8 rounded-lg object-cover ring-1 ring-border"
        />
      </div>
    </header>
  );
}

/* ---------------- DASHBOARD ---------------- */
const FULL_RANKING = [
  { p: 1, n: "Felipe Andrade", t: "1º Ano", xp: 560 },
  { p: 2, n: "Paulo S.", t: "1º Ano", xp: 320 },
  { p: 3, n: "Ana Beatriz", t: "2º Ano", xp: 280 },
  { p: 4, n: "Carla R.", t: "3º Ano", xp: 245 },
  { p: 5, n: "João M.", t: "1º Ano", xp: 210 },
  { p: 6, n: "Luana T.", t: "2º Ano", xp: 195 },
  { p: 7, n: "Bruno F.", t: "3º Ano", xp: 180 },
  { p: 8, n: "Maria L.", t: "1º Ano", xp: 165 },
];

function DashboardHome({
  onGoTurmas,
  recentActivities,
}: {
  onGoTurmas: () => void;
  recentActivities: RecentActivity[];
}) {
  const [mapModalOpen, setMapModalOpen] = useState(false);
  const [rankingModalOpen, setRankingModalOpen] = useState(false);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-foreground">Dashboard</h1>
        <p className="mt-0.5 text-sm text-muted-foreground">Visão geral do engajamento das turmas</p>
      </div>

      {/* row 1: chart + alerts */}
      <div className="grid gap-5 lg:grid-cols-3">
        <Card className="lg:col-span-2">
          <CardHeader title="Resumo de Engajamento" subtitle="Missões concluídas por turma (%)" />
          <EngagementChart />
        </Card>

        <Card className="border-invasive/20 bg-invasive/5">
          <div className="flex items-start gap-4">
            <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-invasive/12">
              <AlertTriangle className="h-5 w-5 text-invasive" />
            </div>
            <div className="min-w-0">
              <p className="text-xs font-semibold uppercase tracking-widest text-invasive">Alerta ambiental</p>
              <h3 className="mt-2 text-base font-bold leading-snug text-foreground">Alta incidência de Amendoeira invasora</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Detectada na região do <strong className="text-foreground">Bessa</strong>. 14 registros nos últimos 7 dias.
              </p>
              <button
                onClick={() => setMapModalOpen(true)}
                className="mt-4 inline-flex items-center gap-1.5 rounded-lg bg-invasive px-4 py-2 text-sm font-medium text-invasive-foreground hover:opacity-90"
              >
                <MapPin className="h-4 w-4" /> Ver mapa
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
            <button onClick={onGoTurmas} className="text-sm font-medium text-moss hover:underline">
              Ver todas →
            </button>
          </div>
          <div className="mt-4 overflow-hidden rounded-lg border border-border">
            <table className="w-full">
              <thead className="border-b border-border bg-secondary/60">
                <tr>
                  <th className="px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider text-muted-foreground">Desafio</th>
                  <th className="px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider text-muted-foreground">Turma</th>
                  <th className="px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider text-muted-foreground">Status</th>
                  <th className="px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider text-muted-foreground">Prazo</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {recentActivities.map((r) => (
                  <tr
                    key={r.d}
                    onClick={onGoTurmas}
                    className="cursor-pointer hover:bg-secondary/40 transition"
                    title="Ver relatório da atividade"
                  >
                    <td className="px-5 py-3.5 text-sm font-medium text-foreground">{r.d}</td>
                    <td className="px-5 py-3.5 text-sm text-muted-foreground">{r.t}</td>
                    <td className="px-5 py-3.5">
                      <span className={`inline-flex items-center rounded-md px-2.5 py-1 text-xs font-medium ${
                        r.s === "concluido" ? "bg-moss/10 text-moss" : "bg-secondary text-muted-foreground"
                      }`}>
                        {r.s === "concluido" ? "Concluído" : "Em andamento"}
                      </span>
                    </td>
                    <td className="px-5 py-3.5 text-sm text-muted-foreground">{r.p}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>

        <Card>
          <div className="flex items-center justify-between mb-1">
            <CardHeader title="Ranking da Semana" icon={<Trophy className="h-4 w-4 text-xp" />} />
            <button onClick={() => setRankingModalOpen(true)} className="text-xs font-medium text-moss hover:underline shrink-0">
              Ver todos →
            </button>
          </div>
          <div className="mt-3 space-y-1">
            {FULL_RANKING.slice(0, 3).map((r) => (
              <div key={r.p} className="flex items-center gap-3 rounded-lg px-3 py-3 hover:bg-secondary transition">
                <span className={`grid h-7 w-7 shrink-0 place-items-center rounded-lg text-xs font-bold ${
                  r.p === 1 ? "bg-xp/20 text-yellow-700" : r.p === 2 ? "bg-sage/20 text-moss" : "bg-secondary text-muted-foreground"
                }`}>{r.p}</span>
                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-semibold text-foreground">{r.n}</p>
                  <p className="text-xs text-muted-foreground">{r.t}</p>
                </div>
                <span className="text-sm font-bold text-moss">{r.xp} XP</span>
              </div>
            ))}
          </div>
        </Card>
      </div>

      {/* Modal: Mapa do Bessa */}
      {mapModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4" onClick={() => setMapModalOpen(false)}>
          <div className="w-full max-w-2xl rounded-2xl bg-card shadow-2xl" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center justify-between border-b border-border px-6 py-4">
              <div>
                <h2 className="text-base font-bold text-foreground">Registros — Bessa</h2>
                <p className="text-xs text-muted-foreground">14 ocorrências de Amendoeira invasora (7 dias)</p>
              </div>
              <button onClick={() => setMapModalOpen(false)} className="grid h-8 w-8 place-items-center rounded-lg border border-border hover:bg-secondary transition">
                <X className="h-4 w-4 text-muted-foreground" />
              </button>
            </div>
            <div className="relative overflow-hidden rounded-b-2xl">
              <img src={mapJP} alt="Mapa de João Pessoa" className="w-full" />
              <svg viewBox="0 0 100 67" className="absolute inset-0 h-full w-full pointer-events-none" preserveAspectRatio="none">
                {/* Bessa highlight — NE coastal region */}
                <polygon points="72,18 80,16 85,22 83,32 76,34 70,28" fill="oklch(0.55 0.18 25 / 0.25)" stroke="oklch(0.55 0.18 25)" strokeWidth="0.5" />
                {[{cx:74,cy:22},{cx:78,cy:19},{cx:82,cy:24},{cx:80,cy:29},{cx:75,cy:31},{cx:77,cy:25}].map((pt,i) => (
                  <circle key={i} cx={pt.cx} cy={pt.cy} r="1.5" fill="oklch(0.55 0.18 25)" stroke="white" strokeWidth="0.4" />
                ))}
              </svg>
              <div className="absolute bottom-3 left-3 rounded-xl bg-card/95 px-3 py-2 text-xs shadow-lg backdrop-blur-sm">
                <p className="font-semibold text-invasive">⚠️ Bessa — 14 registros</p>
                <p className="text-muted-foreground">Terminalia catappa (Amendoeira)</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Modal: Ranking completo */}
      {rankingModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4" onClick={() => setRankingModalOpen(false)}>
          <div className="w-full max-w-md rounded-2xl bg-card shadow-2xl" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center justify-between border-b border-border px-6 py-4">
              <div className="flex items-center gap-2">
                <Trophy className="h-4 w-4 text-xp" />
                <h2 className="text-base font-bold text-foreground">Ranking da Semana</h2>
              </div>
              <button onClick={() => setRankingModalOpen(false)} className="grid h-8 w-8 place-items-center rounded-lg border border-border hover:bg-secondary transition">
                <X className="h-4 w-4 text-muted-foreground" />
              </button>
            </div>
            <div className="divide-y divide-border max-h-[60vh] overflow-y-auto">
              {FULL_RANKING.map((r) => (
                <div key={r.p} className="flex items-center gap-3 px-5 py-3.5 hover:bg-secondary/50 transition">
                  <span className={`grid h-7 w-7 shrink-0 place-items-center rounded-lg text-xs font-bold ${
                    r.p === 1 ? "bg-xp/20 text-yellow-700" : r.p === 2 ? "bg-sage/20 text-moss" : r.p === 3 ? "bg-secondary text-muted-foreground" : "bg-transparent text-muted-foreground"
                  }`}>{r.p}</span>
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-sm font-semibold text-foreground">{r.n}</p>
                    <p className="text-xs text-muted-foreground">{r.t}</p>
                  </div>
                  <span className="text-sm font-bold text-moss">{r.xp} XP</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function Card({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div
      className={`rounded-xl border border-border bg-card p-6 ${className}`}
    >
      {children}
    </div>
  );
}
function CardHeader({
  title,
  subtitle,
  icon,
}: {
  title: string;
  subtitle?: string;
  icon?: React.ReactNode;
}) {
  return (
    <div className="mb-2">
      <h2 className="flex items-center gap-2 text-base font-semibold text-foreground">
        {icon}
        {title}
      </h2>
      {subtitle && <p className="mt-0.5 text-sm text-muted-foreground">{subtitle}</p>}
    </div>
  );
}

function EngagementChart() {
  const data = [
    { turma: "1º Ano", pct: 78, count: 22 },
    { turma: "2º Ano", pct: 64, count: 18 },
    { turma: "3º Ano", pct: 91, count: 26 },
  ];
  const avg = Math.round(data.reduce((s, d) => s + d.pct, 0) / data.length);

  return (
    <div className="mt-5 space-y-4">
      {data.map((d) => (
        <div key={d.turma}>
          <div className="mb-1.5 flex items-center justify-between">
            <span className="text-sm font-medium text-foreground">{d.turma}</span>
            <span className="text-sm font-bold tabular-nums text-moss">{d.pct}%</span>
          </div>
          <div className="h-3 w-full overflow-hidden rounded-full bg-secondary">
            <div
              className="h-full rounded-full bg-moss transition-all duration-700"
              style={{ width: `${d.pct}%` }}
            />
          </div>
          <p className="mt-1 text-xs text-muted-foreground">{d.count} alunos concluíram</p>
        </div>
      ))}
      <div className="flex items-center justify-between border-t border-border pt-3">
        <span className="text-sm text-muted-foreground">Média geral</span>
        <span className="text-sm font-bold text-moss">{avg}%</span>
      </div>
    </div>
  );
}

/* ---------------- GERENCIAR TURMAS / RELATÓRIO ---------------- */
function GerenciarTurmas() {
  const defaultAtividade = atividadesProfessora[0]?.titulo ?? "Explore o Parque Solon de Lucena";
  const [turma, setTurma] = useState<Turma>("1º Ano");
  const [atividade, setAtividade] = useState(defaultAtividade);
  const [search, setSearch] = useState("");
  const [exportMsg, setExportMsg] = useState("");

  const atividadeOptions = atividadesProfessora
    .filter((a) => a.turma === turma)
    .map((a) => a.titulo);

  const handleTurmaChange = (v: string) => {
    const t = v as Turma;
    setTurma(t);
    const first = atividadesProfessora.find((a) => a.turma === t);
    if (first) setAtividade(first.titulo);
    setSearch("");
  };

  const { rows, kpis, prazo } = getRelatorioFiltrado(turma, atividade, search);

  const handleExport = () => {
    exportRelatorioCsv(rows, `relatorio-${turma.replace(/\s/g, "-")}.csv`);
    setExportMsg("CSV baixado com sucesso.");
    setTimeout(() => setExportMsg(""), 3000);
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Gerenciar Turmas</h1>
          <p className="mt-0.5 text-sm text-muted-foreground">Relatórios de engajamento por atividade</p>
        </div>
        <div className="flex flex-wrap gap-2">
          <Select
            label="Turma"
            value={turma}
            onChange={handleTurmaChange}
            options={[...turmas]}
          />
          <Select
            label="Atividade"
            value={atividade}
            onChange={(v) => {
              setAtividade(v);
              setSearch("");
            }}
            options={atividadeOptions.length > 0 ? atividadeOptions : [defaultAtividade]}
          />
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-4">
        <Kpi label="Alunos na turma" value={String(kpis.total)} />
        <Kpi label="Concluíram" value={String(kpis.fizeram)} tone="moss" />
        <Kpi label="Não fizeram" value={String(kpis.naoFizeram)} tone="invasive" />
        <Kpi label="Engajamento" value={`${kpis.pct}%`} tone="terracotta" />
      </div>

      <Card className="overflow-hidden p-0">
        <div className="flex flex-col gap-3 border-b border-border px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-base font-semibold text-foreground">{atividade}</h2>
            <p className="text-xs text-muted-foreground">
              {turma} · prazo {prazo}
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <div className="flex items-center gap-2 rounded-full border border-border bg-cream px-3 py-1.5 text-xs">
              <Search className="h-3 w-3 shrink-0 text-muted-foreground" />
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Buscar aluno…"
                className="w-full min-w-[120px] bg-transparent outline-none sm:w-32"
              />
            </div>
            <button
              type="button"
              onClick={handleExport}
              disabled={rows.length === 0}
              className="flex items-center gap-1.5 rounded-full bg-moss px-3 py-1.5 text-xs font-medium text-moss-foreground disabled:opacity-40"
            >
              <Download className="h-3 w-3" /> Exportar CSV
            </button>
          </div>
        </div>
        {exportMsg && (
          <p className="border-b border-border bg-moss/8 px-5 py-2 text-xs font-medium text-moss">
            {exportMsg}
          </p>
        )}

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
              {rows.length === 0 ? (
                <tr>
                  <td colSpan={5} className="px-5 py-8 text-center text-sm text-muted-foreground">
                    Nenhum aluno encontrado.
                  </td>
                </tr>
              ) : (
                rows.map((a) => (
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
                            <span
                              key={p}
                              className="rounded-full bg-sage/25 px-2 py-0.5 text-[11px] font-medium text-moss"
                            >
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
                ))
              )}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
}

function Kpi({
  label,
  value,
  tone = "neutral",
}: {
  label: string;
  value: string;
  tone?: "neutral" | "moss" | "invasive" | "terracotta";
}) {
  const accent =
    tone === "moss"
      ? "text-moss"
      : tone === "invasive"
        ? "text-invasive"
        : tone === "terracotta"
          ? "text-terracotta"
          : "text-foreground";
  return (
    <div className="rounded-xl border border-border bg-card p-5">
      <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">{label}</p>
      <p className={`mt-2 text-3xl font-bold tabular-nums ${accent}`}>{value}</p>
    </div>
  );
}

function Select({
  label,
  value,
  onChange,
  options,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  options: string[];
}) {
  return (
    <label className="flex items-center gap-2 rounded-lg border border-border bg-card px-4 py-2 text-sm cursor-pointer hover:border-moss/40 transition">
      <span className="text-muted-foreground">{label}:</span>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="bg-transparent font-semibold text-foreground outline-none cursor-pointer"
      >
        {options.map((o) => (
          <option key={o}>{o}</option>
        ))}
      </select>
    </label>
  );
}

/* ---------------- NOVA ATIVIDADE ---------------- */
function NovaAtividade({ onDone, onAddActivity }: { onDone: () => void; onAddActivity: (a: RecentActivity) => void }) {
  const [step, setStep] = useState(0);
  const [turma, setTurma] = useState<Turma>("1º Ano");
  const [polyPoints, setPolyPoints] = useState<[number, number][]>([]);
  const [title, setTitle] = useState("Caça às invasoras no Bessa");
  const [description, setDescription] = useState(
    "Encontre e fotografe 3 espécies invasoras no bairro do Bessa.",
  );
  const [obligatory, setObligatory] = useState(true);
  const [deadline, setDeadline] = useState("2026-06-28");
  const [done, setDone] = useState(false);

  const hasPolygon = polyPoints.length >= 3;
  const steps = ["Turma", "Geofencing", "Formulário", "Lançar"];

  return (
    <div className="space-y-6">
      <div>
        <p className="text-xs uppercase tracking-wider text-muted-foreground">Nova Atividade</p>
        <h1 className="text-2xl font-bold text-foreground">Criar um novo desafio</h1>
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
            <span className={i === step ? "font-semibold text-moss" : "text-muted-foreground"}>
              {s}
            </span>
            {i < steps.length - 1 && <span className="h-px w-6 bg-border" />}
          </li>
        ))}
      </ol>

      {done ? (
        <Card className="text-center py-12">
          <div className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-moss text-moss-foreground">
            <Rocket className="h-7 w-7" />
          </div>
          <h2 className="mt-5 text-2xl font-bold text-foreground">Desafio lançado com sucesso!</h2>
          <p className="mt-1 text-sm text-muted-foreground">
            Alertas enviados para os {alunosRelatorio.length} alunos do {turma}.
          </p>
          <div className="mt-6 flex justify-center gap-2">
            <button
              onClick={() => {
                setDone(false);
                setStep(0);
              }}
              className="rounded-full border border-border bg-card px-4 py-2 text-sm"
            >
              Criar outro
            </button>
            <button
              onClick={onDone}
              className="rounded-full bg-moss px-4 py-2 text-sm text-moss-foreground"
            >
              Voltar ao dashboard
            </button>
          </div>
        </Card>
      ) : (
        <Card>
          {step === 0 && (
            <div className="space-y-4">
              <CardHeader
                title="Para qual turma é este desafio?"
                subtitle="Apenas alunos selecionados serão notificados."
              />
              <div className="grid gap-3 sm:grid-cols-3">
                {[...turmas].map((t) => (
                  <button
                    key={t}
                    onClick={() => setTurma(t)}
                    className={`rounded-2xl border-2 p-4 text-left transition ${
                      turma === t
                        ? "border-moss bg-moss/8"
                        : "border-border bg-card hover:border-moss/40"
                    }`}
                  >
                    <p className="text-base font-semibold text-foreground">{t}</p>
                    <p className="text-xs text-muted-foreground">28 alunos · Ensino Médio</p>
                  </button>
                ))}
              </div>
            </div>
          )}

          {step === 1 && (
            <div className="space-y-4">
              <div className="flex flex-wrap items-end justify-between gap-3">
                <CardHeader
                  title="Delimitar a zona no mapa"
                  subtitle="Clique no mapa para definir os vértices do polígono."
                />
                <button
                  onClick={() => setPolyPoints([])}
                  disabled={polyPoints.length === 0}
                  className="flex items-center gap-1.5 rounded-full border border-moss/30 bg-card px-3 py-1.5 text-xs font-medium text-moss disabled:opacity-40 hover:bg-moss hover:text-moss-foreground transition"
                >
                  <Pencil className="h-3 w-3" />
                  Limpar zona
                </button>
              </div>

              {/* Interactive map */}
              <div
                className="relative overflow-hidden rounded-2xl border border-border bg-secondary"
                style={{ cursor: "crosshair" }}
              >
                <img src={mapJP} alt="Mapa de João Pessoa" className="w-full pointer-events-none" loading="lazy" />
                {/* SVG overlay for drawing */}
                <svg
                  viewBox="0 0 100 67"
                  className="absolute inset-0 h-full w-full"
                  preserveAspectRatio="none"
                  onClick={(e) => {
                    const rect = (e.currentTarget as SVGSVGElement).getBoundingClientRect();
                    const x = ((e.clientX - rect.left) / rect.width) * 100;
                    const y = ((e.clientY - rect.top) / rect.height) * 67;
                    setPolyPoints((prev) => [...prev, [+x.toFixed(2), +y.toFixed(2)]]);
                  }}
                >
                  {/* Completed polygon fill + stroke */}
                  {polyPoints.length >= 3 && (
                    <polygon
                      points={polyPoints.map(([x, y]) => `${x},${y}`).join(" ")}
                      fill="oklch(0.62 0.13 45 / 0.22)"
                      stroke="oklch(0.62 0.13 45)"
                      strokeWidth="0.6"
                      strokeDasharray="1.5 0.8"
                      style={{ cursor: "pointer" }}
                      onClick={(e) => {
                        e.stopPropagation();
                        setPolyPoints([]);
                      }}
                    />
                  )}
                  {/* Line preview connecting dots */}
                  {polyPoints.length >= 2 && (
                    <polyline
                      points={polyPoints.map(([x, y]) => `${x},${y}`).join(" ")}
                      fill="none"
                      stroke="oklch(0.62 0.13 45)"
                      strokeWidth="0.5"
                      strokeDasharray="1.5 0.8"
                    />
                  )}
                  {/* Vertices */}
                  {polyPoints.map(([x, y], i) => (
                    <circle
                      key={i}
                      cx={x}
                      cy={y}
                      r="1.4"
                      fill="oklch(0.62 0.13 45)"
                      stroke="white"
                      strokeWidth="0.5"
                    />
                  ))}
                  {/* Closing line preview */}
                  {polyPoints.length >= 2 && polyPoints.length < 3 && (
                    <line
                      x1={polyPoints[polyPoints.length - 1][0]}
                      y1={polyPoints[polyPoints.length - 1][1]}
                      x2={polyPoints[0][0]}
                      y2={polyPoints[0][1]}
                      stroke="oklch(0.62 0.13 45 / 0.4)"
                      strokeWidth="0.4"
                      strokeDasharray="0.8 0.8"
                    />
                  )}
                </svg>

                {/* Status badge */}
                <div className="absolute top-3 right-3 rounded-xl bg-card/95 px-3 py-1.5 text-xs shadow-lg backdrop-blur-sm">
                  {polyPoints.length === 0 && (
                    <p className="text-muted-foreground">Clique para adicionar pontos</p>
                  )}
                  {polyPoints.length === 1 && (
                    <p className="text-terracotta font-medium">1 ponto — adicione mais 2+</p>
                  )}
                  {polyPoints.length === 2 && (
                    <p className="text-terracotta font-medium">2 pontos — mais 1 para fechar</p>
                  )}
                  {hasPolygon && (
                    <div>
                      <p className="font-semibold text-moss">{polyPoints.length} vértices definidos</p>
                      <p className="text-muted-foreground">Clique no polígono para apagar</p>
                    </div>
                  )}
                </div>

                {hasPolygon && (
                  <div className="absolute bottom-3 left-3 rounded-xl bg-card/95 px-3 py-2 text-xs shadow-lg backdrop-blur-sm">
                    <p className="font-semibold text-moss">Zona definida ✓</p>
                    <p className="text-muted-foreground">~{(polyPoints.length * 0.4).toFixed(1)} km² estimado</p>
                  </div>
                )}
              </div>

              <p className="rounded-xl bg-sage/15 p-3 text-xs text-moss">
                <Sparkles className="mr-1 inline h-3 w-3" />
                Estimativa: <strong>120 espécies catalogadas</strong> nesta zona segura.
              </p>
              {step === 1 && !hasPolygon && (
                <p className="text-xs text-terracotta">
                  Defina pelo menos 3 pontos no mapa para continuar.
                </p>
              )}
            </div>
          )}


          {step === 2 && (
            <div className="space-y-4">
              <CardHeader
                title="Detalhes do desafio"
                subtitle="Os alunos verão essas informações no app."
              />
              <Field label="Título">
                <input
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="w-full rounded-xl border border-border bg-card px-3 py-2 text-sm outline-none focus:border-moss"
                />
              </Field>
              <Field label="Descrição">
                <textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  rows={3}
                  className="w-full rounded-xl border border-border bg-card px-3 py-2 text-sm outline-none focus:border-moss"
                />
              </Field>
              <div className="grid gap-3 sm:grid-cols-2">
                <Field label="Data-limite">
                  <input
                    type="date"
                    value={deadline}
                    onChange={(e) => setDeadline(e.target.value)}
                    className="w-full rounded-xl border border-border bg-card px-3 py-2 text-sm outline-none focus:border-moss"
                  />
                </Field>
                <Field label="Obrigatório para todos">
                  <button
                    onClick={() => setObligatory((v) => !v)}
                    className={`flex h-10 w-full items-center justify-between rounded-xl border border-border px-3 text-sm ${obligatory ? "bg-moss/8 text-moss" : "bg-card text-muted-foreground"}`}
                  >
                    {obligatory ? "Sim" : "Não"}
                    <div
                      className={`flex h-5 w-9 items-center rounded-full transition ${obligatory ? "bg-moss" : "bg-secondary"}`}
                    >
                      <div
                        className={`h-4 w-4 rounded-full bg-card transition ${obligatory ? "translate-x-[18px]" : "translate-x-0.5"}`}
                      />
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
                <Review
                  label="Zona no mapa"
                  value={hasPolygon ? `Zona customizada · ${polyPoints.length} vértices` : "Sem geofencing"}
                />
                <Review label="Título" value={title} />
                <Review
                  label="Prazo"
                  value={deadline
                    ? new Date(deadline + "T12:00:00").toLocaleDateString("pt-BR")
                    : "—"}
                />
                <Review label="Obrigatório" value={obligatory ? "Sim" : "Não"} />
                <Review label="Estimativa" value="120 espécies catalogadas" />
              </div>
              <button
                onClick={() => {
                  const prazo = deadline
                    ? new Date(deadline + "T12:00:00").toLocaleDateString("pt-BR", { day: "2-digit", month: "2-digit" })
                    : "—";
                  onAddActivity({ d: title, t: turma, s: "andamento", p: prazo });
                  setDone(true);
                }}
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
                type="button"
                onClick={() => {
                  if (step === 1 && !hasPolygon) return;
                  setStep((s) => s + 1);
                }}
                disabled={step === 1 && !hasPolygon}
                className="flex items-center gap-1 rounded-full bg-moss px-4 py-1.5 text-sm font-medium text-moss-foreground disabled:opacity-40"
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
      <span className="mb-2 block text-sm font-semibold text-foreground">{label}</span>
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
  const [nome, setNome] = useState("Eliana Mendes");
  const [email, setEmail] = useState("eliana.mendes@escola.pb.gov.br");
  const [escola, setEscola] = useState("EEEFM Olivina Olívia");
  const [disciplina, setDisciplina] = useState("Biologia · Ensino Médio");
  const [saved, setSaved] = useState(false);
  const [dirty, setDirty] = useState(false);

  const mark = () => { setSaved(false); setDirty(true); };

  const handleSave = () => {
    setSaved(true);
    setDirty(false);
    setTimeout(() => setSaved(false), 3000);
  };

  return (
    <div className="space-y-8 max-w-5xl mx-auto">
      <div>
        <h1 className="text-3xl font-bold text-foreground">Sua conta e integrações</h1>
        <p className="mt-1 text-base text-muted-foreground">Gerencie suas informações e conexões</p>
      </div>

      <Card className="p-8">
        <CardHeader title="Integrações" subtitle="Sincronize com ferramentas pedagógicas." />
        <div className="mt-6 space-y-4">
          <IntegrationRow
            name="Google Sala de Aula"
            desc="Sincronize turmas e lance atividades direto no Classroom."
            initialConnected
          />
          <IntegrationRow
            name="Diário de Classe (SEDUC-PB)"
            desc="Envie automaticamente notas dos desafios concluídos."
            comingSoon
          />
        </div>
      </Card>

      <Card className="p-8">
        <div className="flex items-center justify-between mb-6">
          <CardHeader title="Dados da Conta" subtitle="Profª Eliana M. · UFPB" />
          {dirty && (
            <span className="text-xs font-medium text-terracotta">● Alterações não salvas</span>
          )}
        </div>
        <div className="grid gap-6 sm:grid-cols-2">
          <Field label="Nome completo">
            <input
              value={nome}
              onChange={(e) => { setNome(e.target.value); mark(); }}
              className="w-full rounded-xl border border-border bg-card px-4 py-3 text-base outline-none hover:border-moss/40 focus:border-moss transition"
            />
          </Field>
          <Field label="E-mail institucional">
            <input
              value={email}
              onChange={(e) => { setEmail(e.target.value); mark(); }}
              className="w-full rounded-xl border border-border bg-card px-4 py-3 text-base outline-none hover:border-moss/40 focus:border-moss transition"
            />
          </Field>
          <Field label="Escola">
            <input
              value={escola}
              onChange={(e) => { setEscola(e.target.value); mark(); }}
              className="w-full rounded-xl border border-border bg-card px-4 py-3 text-base outline-none hover:border-moss/40 focus:border-moss transition"
            />
          </Field>
          <Field label="Disciplina">
            <input
              value={disciplina}
              onChange={(e) => { setDisciplina(e.target.value); mark(); }}
              className="w-full rounded-xl border border-border bg-card px-4 py-3 text-base outline-none hover:border-moss/40 focus:border-moss transition"
            />
          </Field>
        </div>
        <div className="mt-6 flex items-center gap-4">
          <button
            onClick={handleSave}
            className="rounded-xl bg-moss px-6 py-2.5 text-sm font-semibold text-moss-foreground hover:opacity-90 transition"
          >
            Salvar alterações
          </button>
          {saved && (
            <span className="flex items-center gap-1.5 text-sm font-medium text-moss">
              <CheckCircle2 className="h-4 w-4" /> Salvo com sucesso!
            </span>
          )}
        </div>
      </Card>
    </div>
  );
}

function IntegrationRow({
  name,
  desc,
  initialConnected,
  comingSoon,
}: {
  name: string;
  desc: string;
  initialConnected?: boolean;
  comingSoon?: boolean;
}) {
  const [connected, setConnected] = useState(!!initialConnected);

  return (
    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 rounded-xl border border-border bg-cream p-5">
      <div className="flex items-start sm:items-center gap-4">
        <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-card text-moss shadow-sm">
          <Leaf className="h-5 w-5" />
        </div>
        <div>
          <p className="text-base font-bold">{name}</p>
          <p className="mt-0.5 text-sm text-muted-foreground">{desc}</p>
        </div>
      </div>
      {comingSoon ? (
        <span className="rounded-lg border border-border px-5 py-2.5 text-sm font-semibold text-muted-foreground sm:shrink-0 cursor-default">
          Em breve
        </span>
      ) : (
        <button
          onClick={() => setConnected((v) => !v)}
          className={`rounded-lg px-5 py-2.5 text-sm font-semibold transition sm:shrink-0 ${
            connected
              ? "bg-moss/12 text-moss hover:bg-invasive/10 hover:text-invasive"
              : "bg-moss text-moss-foreground hover:opacity-90"
          }`}
          title={connected ? "Clique para desconectar" : "Clique para conectar"}
        >
          {connected ? "Conectado ✓" : "Conectar"}
        </button>
      )}
    </div>
  );
}
