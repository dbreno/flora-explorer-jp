import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  Home,
  BookOpen,
  Camera,
  User,
  Trophy,
  Sparkles,
  ChevronRight,
  Bell,
  Shield,
  LogOut,
  ArrowLeft,
  X,
  AlertTriangle,
  Leaf,
  CheckCircle2,
  Award,
  ImageIcon,
  Loader2,
  CircleHelp,
  HelpCircle,
} from "lucide-react";
import {
  plants,
  ranking,
  missoes,
  assets,
  getStudentPlants,
  getStudentStats,
  getAchievements,
  FAQ_STUDENT,
  getStudentNotifications,
  type Plant,
  type Mission,
} from "@/lib/flora-data";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { HelpDialog } from "@/components/flora/HelpDialog";
import { NotificationsDialog } from "@/components/flora/NotificationsDialog";

export const Route = createFileRoute("/app")({
  component: AppMobile,
});

type Screen =
  | "home"
  | "catalog"
  | "catalog-plants"
  | "catalog-invasive"
  | "catalog-achievements"
  | "profile"
  | "capture";

type CaptureContext = {
  missionId?: string;
  missionTitle?: string;
  preferInvasive?: boolean;
};

function AppMobile() {
  const [screen, setScreen] = useState<Screen>("home");
  const [missions, setMissions] = useState<Mission[]>(() =>
    missoes.map((m) => ({ ...m })),
  );
  const [captureContext, setCaptureContext] = useState<CaptureContext | null>(null);

  const startCapture = (context: CaptureContext = {}) => {
    setCaptureContext(context);
    setScreen("capture");
  };

  const incrementMission = (missionId: string) => {
    setMissions((prev) =>
      prev.map((m) =>
        m.id === missionId ? { ...m, progress: Math.min(m.progress + 1, m.total) } : m,
      ),
    );
  };

  const catalogActive =
    screen === "catalog" ||
    screen === "catalog-plants" ||
    screen === "catalog-invasive" ||
    screen === "catalog-achievements";

  return (
    <div className="min-h-screen bg-cream sm:bg-sage/20">
      <div className="mx-auto hidden max-w-5xl items-center justify-between px-6 py-4 sm:flex">
        <Link to="/" className="flex items-center gap-2 text-sm text-moss">
          <ArrowLeft className="h-4 w-4" />
          Voltar
        </Link>
        <span className="text-base font-semibold text-foreground">App — Visão Aluno</span>
        <Link
          to="/web"
          className="rounded-full border border-moss/30 px-3 py-1 text-xs font-medium text-moss hover:bg-moss hover:text-moss-foreground"
        >
          Ver versão Professora →
        </Link>
      </div>

      <div className="mx-auto w-full max-w-[420px] sm:my-6 sm:rounded-[3rem] sm:border-[10px] sm:border-moss sm:shadow-2xl sm:bg-background">
        <div className="relative h-[100dvh] overflow-hidden bg-background sm:h-[820px] sm:rounded-[2.4rem]">
          <div className="hidden h-6 items-center justify-center sm:flex">
            <div className="h-1.5 w-20 rounded-full bg-moss/30" />
          </div>

          <div className="flex h-full flex-col sm:h-[794px]">
            <div className="flex-1 overflow-y-auto pb-24">
              {screen === "home" && (
                <HomeScreen
                  missions={missions}
                  onStartCapture={startCapture}
                />
              )}
              {screen === "catalog" && (
                <CatalogScreen
                  missions={missions}
                  onOpenPlants={() => setScreen("catalog-plants")}
                  onOpenInvasive={() => setScreen("catalog-invasive")}
                  onOpenAchievements={() => setScreen("catalog-achievements")}
                />
              )}
              {screen === "catalog-plants" && (
                <MyPlantsScreen onBack={() => setScreen("catalog")} />
              )}
              {screen === "catalog-invasive" && (
                <InvasiveSpeciesScreen onBack={() => setScreen("catalog")} />
              )}
              {screen === "catalog-achievements" && (
                <AchievementsScreen
                  missions={missions}
                  onBack={() => setScreen("catalog")}
                />
              )}
              {screen === "profile" && <ProfileScreen />}
              {screen === "capture" && (
                <CaptureFlow
                  captureContext={captureContext}
                  missions={missions}
                  onClose={() => {
                    setCaptureContext(null);
                    setScreen("home");
                  }}
                  onMissionProgress={incrementMission}
                />
              )}
            </div>

            {screen !== "capture" && (
              <BottomNav
                current={screen}
                catalogActive={catalogActive}
                onChange={setScreen}
                onCapture={() => startCapture()}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ---------------- PLANT DETAIL ---------------- */

function PlantDetailDialog({
  plant,
  open,
  onOpenChange,
}: {
  plant: Plant | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  if (!plant) return null;
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-h-[90vh] overflow-y-auto p-0 sm:max-w-md">
        <div className="aspect-[4/3] w-full bg-secondary">
          <img src={plant.image} alt={plant.popular} className="h-full w-full object-cover" />
        </div>
        <div className="space-y-3 p-5">
          <DialogHeader className="text-left">
            <DialogTitle>{plant.popular}</DialogTitle>
            <DialogDescription className="italic">{plant.scientific}</DialogDescription>
          </DialogHeader>
          <div className="flex flex-wrap gap-1.5">
            {plant.tags.map((t) => (
              <span
                key={t}
                className={`rounded-full px-2.5 py-1 text-xs font-medium ${
                  plant.invasive ? "bg-invasive/12 text-invasive" : "bg-moss/10 text-moss"
                }`}
              >
                {t}
              </span>
            ))}
          </div>
          <p className="text-sm leading-relaxed text-foreground/80">{plant.description}</p>
          <div className="rounded-lg bg-secondary/60 p-3">
            <p className="text-xs font-semibold text-moss">Curiosidade</p>
            <p className="mt-1 text-sm text-foreground/80">{plant.curiosity}</p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

/* ---------------- HOME ---------------- */

function HomeScreen({
  missions,
  onStartCapture,
}: {
  missions: Mission[];
  onStartCapture: (ctx: CaptureContext) => void;
}) {
  const [helpOpen, setHelpOpen] = useState(false);
  const [notifOpen, setNotifOpen] = useState(false);

  return (
    <>
      <div className="space-y-5 px-5 pt-8">
        <div className="flex items-center gap-4">
          <div className="relative shrink-0">
            <div
              className="grid h-16 w-16 place-items-center rounded-full p-[3.5px]"
              style={{
                background: `conic-gradient(var(--color-moss) 64%, var(--color-secondary) 64%)`,
              }}
            >
              <div className="h-full w-full overflow-hidden rounded-full border-[2.5px] border-background bg-card">
                <img src={assets.paulo} alt="Paulo" className="h-full w-full object-cover" />
              </div>
            </div>
            <div className="absolute -bottom-1 -right-1 grid h-6 w-6 place-items-center rounded-full border-[2.5px] border-background bg-moss text-xs font-bold text-moss-foreground shadow-sm">
              4
            </div>
          </div>
          <div className="min-w-0 flex-1">
            <p className="text-xs uppercase tracking-widest text-muted-foreground">Olá,</p>
            <h1 className="text-2xl font-bold leading-tight text-foreground">Paulo S.</h1>
          </div>
          <button
            type="button"
            onClick={() => setHelpOpen(true)}
            className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-border bg-card text-muted-foreground shadow-sm hover:text-foreground transition"
            aria-label="Ajuda"
          >
            <CircleHelp className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={() => setNotifOpen(true)}
            className="relative grid h-12 w-12 shrink-0 place-items-center rounded-full border border-border bg-card text-muted-foreground shadow-sm hover:text-foreground transition"
            aria-label="Notificações"
          >
            <Bell className="h-5 w-5" />
            <span className="absolute right-[11px] top-[11px] h-2 w-2 rounded-full bg-terracotta ring-2 ring-card" />
          </button>
        </div>

        <div className="rounded-2xl border border-moss/15 bg-card p-5 shadow-sm shadow-moss/5">
          <div className="flex items-center justify-between">
            <span className="flex items-center gap-1.5 text-sm font-semibold text-moss">
              <Sparkles className="h-4 w-4 text-xp" /> XP da semana
            </span>
            <span className="rounded-full bg-moss/10 px-3 py-0.5 text-sm font-bold text-moss">
              320 / 500
            </span>
          </div>
          <div className="mt-3 h-3 overflow-hidden rounded-full bg-secondary">
            <div className="h-full rounded-full bg-moss shadow-sm" style={{ width: "64%" }} />
          </div>
          <p className="mt-2 text-sm text-muted-foreground">
            Faltam <span className="font-bold text-moss">180 XP</span> para o nível 5
          </p>
        </div>

        <Section
          icon={<Trophy className="h-4 w-4" />}
          title="Ranking"
          subtitle="1º Ano · você está em 2º lugar"
        >
          <div className="space-y-1">
            {ranking.slice(0, 3).map((r) => (
              <div
                key={r.pos}
                className={`flex items-center gap-3 rounded-xl px-3 py-3 text-sm ${
                  r.you ? "bg-moss/8 ring-1 ring-moss/20" : ""
                }`}
              >
                <span
                  className={`grid h-8 w-8 place-items-center rounded-lg text-xs font-bold ${
                    r.pos === 1
                      ? "bg-xp/20 text-yellow-700"
                      : r.pos === 2
                        ? "bg-sage/20 text-moss"
                        : "bg-secondary text-muted-foreground"
                  }`}
                >
                  {r.pos}
                </span>
                <span className="flex-1 truncate font-medium text-foreground">
                  {r.name}
                  {r.you && " (você)"}
                </span>
                <span className="font-bold text-moss">{r.xp} XP</span>
              </div>
            ))}
          </div>
        </Section>

        <Section
          icon={<Leaf className="h-4 w-4" />}
          title="Missões Ativas"
          subtitle="Da Profª Eliana"
        >
          <div className="space-y-2.5">
            {missions.map((m) => (
              <button
                key={m.id}
                type="button"
                onClick={() =>
                  onStartCapture({ missionId: m.id, missionTitle: m.title })
                }
                className="block w-full rounded-xl bg-secondary/60 p-4 text-left transition hover:bg-secondary"
              >
                <div className="flex items-start justify-between gap-2">
                  <p className="text-sm font-semibold leading-snug text-foreground">{m.title}</p>
                  <span className="shrink-0 rounded-full bg-moss/10 px-2.5 py-0.5 text-xs font-bold text-moss">
                    {m.deadline}
                  </span>
                </div>
                <div className="mt-2.5 flex items-center gap-2.5">
                  <div className="h-2 flex-1 overflow-hidden rounded-full bg-black/6">
                    <div
                      className="h-full rounded-full bg-moss"
                      style={{ width: `${(m.progress / m.total) * 100}%` }}
                    />
                  </div>
                  <span className="text-xs font-semibold text-muted-foreground">
                    {m.progress}/{m.total}
                  </span>
                </div>
              </button>
            ))}
          </div>
        </Section>

        <div className="rounded-2xl border border-invasive/25 bg-invasive/6 p-5">
          <div className="flex items-start gap-3">
            <div className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-invasive/15">
              <AlertTriangle className="h-4 w-4 text-invasive" />
            </div>
            <div className="min-w-0">
              <p className="text-sm font-bold text-invasive">+50 XP Bônus essa semana</p>
              <p className="mt-0.5 text-sm text-muted-foreground">
                Registre 1 espécie invasora no bairro do Bessa.
              </p>
            </div>
          </div>
        </div>
      </div>

      <HelpDialog
        open={helpOpen}
        onOpenChange={setHelpOpen}
        items={FAQ_STUDENT}
        title="Ajuda — Flora Explorer"
        description="Perguntas frequentes para alunos"
      />
      <NotificationsDialog
        open={notifOpen}
        onOpenChange={setNotifOpen}
        notifications={getStudentNotifications(missions)}
      />
    </>
  );
}

function Section({
  icon,
  title,
  subtitle,
  children,
}: {
  icon: React.ReactNode;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-2xl border border-border bg-card p-5 shadow-sm shadow-black/[0.04]">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="flex items-center gap-2 text-base font-bold text-foreground">
          {icon} {title}
        </h2>
        {subtitle && (
          <span className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
            {subtitle}
          </span>
        )}
      </div>
      {children}
    </div>
  );
}

/* ---------------- CATALOG ---------------- */

function CatalogScreen({
  missions,
  onOpenPlants,
  onOpenInvasive,
  onOpenAchievements,
}: {
  missions: Mission[];
  onOpenPlants: () => void;
  onOpenInvasive: () => void;
  onOpenAchievements: () => void;
}) {
  const stats = getStudentStats();
  const studentPlants = getStudentPlants();
  const achievements = getAchievements(undefined, missions);
  const unlockedCount = achievements.filter((a) => a.unlocked).length;
  const [detailPlant, setDetailPlant] = useState<Plant | null>(null);
  const [detailOpen, setDetailOpen] = useState(false);

  const openPlantDetail = (plant: Plant) => {
    setDetailPlant(plant);
    setDetailOpen(true);
  };

  const items = [
    {
      icon: Leaf,
      label: "Minhas Plantas",
      count: `${stats.species} espécie${stats.species !== 1 ? "s" : ""} descoberta${stats.species !== 1 ? "s" : ""}`,
      onClick: onOpenPlants,
      tone: "moss" as const,
    },
    {
      icon: AlertTriangle,
      label: "Espécies Exóticas Invasoras",
      count: `${stats.invasive} registrada${stats.invasive !== 1 ? "s" : ""}`,
      onClick: onOpenInvasive,
      tone: "invasive" as const,
    },
    {
      icon: Award,
      label: "Conquistas e Medalhas",
      count: `${unlockedCount} conquistada${unlockedCount !== 1 ? "s" : ""}`,
      onClick: onOpenAchievements,
      tone: "terracotta" as const,
    },
  ];

  const nativeRegistered = studentPlants.filter((p) => !p.invasive).length;

  return (
    <>
      <div className="space-y-4 px-5 pt-6">
        <div>
          <p className="text-xs uppercase tracking-wider text-muted-foreground">Catálogo</p>
          <h1 className="text-2xl font-bold text-foreground">Sua coleção</h1>
        </div>

        <div className="space-y-3">
          {items.map((it) => (
            <button
              key={it.label}
              type="button"
              onClick={it.onClick}
              className="flex w-full items-center gap-4 rounded-2xl border border-border bg-card p-4 text-left transition hover:border-moss/40"
            >
              <div
                className={`grid h-12 w-12 shrink-0 place-items-center rounded-xl ${
                  it.tone === "moss"
                    ? "bg-moss/10 text-moss"
                    : it.tone === "invasive"
                      ? "bg-invasive/10 text-invasive"
                      : "bg-terracotta/15 text-terracotta"
                }`}
              >
                <it.icon className="h-5 w-5" />
              </div>
              <div className="min-w-0 flex-1">
                <p className="font-medium text-foreground">{it.label}</p>
                <p className="text-xs text-muted-foreground">{it.count}</p>
              </div>
              <ChevronRight className="h-4 w-4 text-muted-foreground" />
            </button>
          ))}
        </div>

        <div className="mt-6 rounded-2xl bg-moss p-5 text-moss-foreground shadow-sm shadow-moss/10">
          <p className="text-base font-semibold leading-snug">Guardião da Mata Atlântica</p>
          <p className="mt-1 text-sm opacity-80">
            Registre 10 espécies nativas para desbloquear esta conquista.{" "}
            <strong>Faltam {Math.max(0, 10 - nativeRegistered)}.</strong>
          </p>
          <div className="mt-3 h-2 overflow-hidden rounded-full bg-moss-foreground/20">
            <div
              className="h-full rounded-full bg-xp"
              style={{ width: `${Math.min(100, (nativeRegistered / 10) * 100)}%` }}
            />
          </div>
        </div>

        <div className="mt-8">
          <h2 className="mb-4 text-xs font-bold uppercase tracking-widest text-muted-foreground">
            Guia da Flora de João Pessoa
          </h2>
          <div className="grid grid-cols-2 gap-3">
            {plants.map((p) => {
              const isRegistered = studentPlants.some((sp) => sp.id === p.id);
              return (
                <button
                  key={p.id}
                  type="button"
                  onClick={() => openPlantDetail(p)}
                  className={`overflow-hidden rounded-2xl border border-border bg-card text-left transition hover:border-moss/30 hover:shadow-sm ${
                    isRegistered ? "" : "grayscale-[0.8] opacity-70"
                  }`}
                >
                  <img src={p.image} alt={p.popular} className="h-28 w-full object-cover" />
                  <div className="p-3">
                    <p className="truncate text-sm font-semibold text-foreground">{p.popular}</p>
                    <p className="truncate text-xs text-muted-foreground">{p.scientific}</p>
                    <div className="mt-2 flex flex-wrap items-center gap-1.5">
                      {p.invasive ? (
                        <span className="inline-block rounded border border-invasive/30 bg-invasive/10 px-1.5 py-0.5 text-[10px] font-bold uppercase text-invasive">
                          Invasora
                        </span>
                      ) : (
                        <span className="inline-block rounded border border-moss/30 bg-moss/10 px-1.5 py-0.5 text-[10px] font-bold uppercase text-moss">
                          Nativa
                        </span>
                      )}
                      {isRegistered ? (
                        <span className="inline-block rounded border border-moss/30 bg-moss px-1.5 py-0.5 text-[10px] font-bold uppercase text-moss-foreground">
                          ✓ Registrada
                        </span>
                      ) : (
                        <span className="inline-block rounded border border-border bg-secondary px-1.5 py-0.5 text-[10px] font-bold uppercase text-muted-foreground">
                          A descobrir
                        </span>
                      )}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      <PlantDetailDialog plant={detailPlant} open={detailOpen} onOpenChange={setDetailOpen} />
    </>
  );
}

function MyPlantsScreen({ onBack }: { onBack: () => void }) {
  const studentPlants = getStudentPlants();
  return (
    <div className="space-y-4 px-5 pt-6">
      <button type="button" onClick={onBack} className="flex items-center gap-1 text-sm text-moss">
        <ArrowLeft className="h-4 w-4" /> Catálogo
      </button>
      <h1 className="text-2xl font-bold text-foreground">Minhas Plantas</h1>
      {studentPlants.length === 0 ? (
        <p className="text-sm text-muted-foreground">
          Nenhuma espécie registrada ainda. Use a câmera para começar!
        </p>
      ) : (
        <div className="grid grid-cols-2 gap-3">
          {studentPlants.map((p) => (
            <div key={p.id} className="overflow-hidden rounded-2xl border border-border bg-card">
              <div className="aspect-square bg-secondary">
                <img
                  src={p.image}
                  alt={p.popular}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="p-2.5">
                <p className="truncate text-sm font-medium">{p.popular}</p>
                <p className="truncate text-xs italic text-muted-foreground">{p.scientific}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function InvasiveSpeciesScreen({ onBack }: { onBack: () => void }) {
  const studentPlants = getStudentPlants().filter((p) => p.invasive);
  const catalogInvasive = plants.filter((p) => p.invasive);

  return (
    <div className="space-y-4 px-5 pt-6">
      <button type="button" onClick={onBack} className="flex items-center gap-1 text-sm text-moss">
        <ArrowLeft className="h-4 w-4" /> Catálogo
      </button>
      <h1 className="text-2xl font-bold text-foreground">Espécies Exóticas Invasoras</h1>
      <p className="text-sm text-muted-foreground">
        Espécies não nativas que se espalham na cidade. Registrar ajuda na educação ambiental.
      </p>

      <Section icon={<AlertTriangle className="h-4 w-4" />} title="Suas invasoras registradas">
        {studentPlants.length === 0 ? (
          <p className="text-sm text-muted-foreground">Nenhuma invasora registrada ainda.</p>
        ) : (
          <ul className="space-y-2">
            {studentPlants.map((p) => (
              <li
                key={p.id}
                className="flex items-center gap-3 rounded-xl border border-invasive/20 bg-invasive/5 p-3"
              >
                <img src={p.image} alt="" className="h-12 w-12 rounded-lg object-cover" />
                <div>
                  <p className="text-sm font-semibold">{p.popular}</p>
                  <p className="text-xs italic text-muted-foreground">{p.scientific}</p>
                </div>
              </li>
            ))}
          </ul>
        )}
      </Section>

      <Section icon={<Leaf className="h-4 w-4" />} title="Guia de invasoras comuns">
        <ul className="space-y-2">
          {catalogInvasive.map((p) => (
            <li key={p.id} className="rounded-xl bg-secondary/50 p-3 text-sm">
              <p className="font-medium">{p.popular}</p>
              <p className="mt-1 text-xs text-muted-foreground">{p.description.slice(0, 100)}…</p>
            </li>
          ))}
        </ul>
      </Section>
    </div>
  );
}

function AchievementsScreen({
  missions,
  onBack,
}: {
  missions: Mission[];
  onBack: () => void;
}) {
  const achievements = getAchievements(undefined, missions);

  return (
    <div className="space-y-4 px-5 pt-6">
      <button type="button" onClick={onBack} className="flex items-center gap-1 text-sm text-moss">
        <ArrowLeft className="h-4 w-4" /> Catálogo
      </button>
      <h1 className="text-2xl font-bold text-foreground">Conquistas e Medalhas</h1>
      <div className="space-y-3">
        {achievements.map((a) => (
          <div
            key={a.id}
            className={`rounded-2xl border p-4 ${
              a.unlocked
                ? "border-moss/30 bg-moss/5"
                : "border-border bg-card"
            }`}
          >
            <div className="flex items-start gap-3">
              <div
                className={`grid h-10 w-10 shrink-0 place-items-center rounded-xl ${
                  a.unlocked ? "bg-moss text-moss-foreground" : "bg-secondary text-muted-foreground"
                }`}
              >
                {a.unlocked ? (
                  <CheckCircle2 className="h-5 w-5" />
                ) : (
                  <Award className="h-5 w-5" />
                )}
              </div>
              <div className="min-w-0 flex-1">
                <p className="font-semibold text-foreground">{a.title}</p>
                <p className="text-xs text-muted-foreground">{a.description}</p>
                <div className="mt-2 h-2 overflow-hidden rounded-full bg-secondary">
                  <div
                    className="h-full rounded-full bg-moss"
                    style={{
                      width: `${Math.min(100, (a.progress / a.total) * 100)}%`,
                    }}
                  />
                </div>
                <p className="mt-1 text-[10px] font-semibold text-muted-foreground">
                  {a.progress}/{a.total}
                  {a.unlocked && " · Desbloqueada!"}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ---------------- PROFILE ---------------- */

function ProfileScreen() {
  const stats = getStudentStats();
  const [helpOpen, setHelpOpen] = useState(false);

  return (
    <>
      <div className="space-y-4 px-5 pt-6">
        <h1 className="text-2xl font-bold text-foreground">Meu Perfil</h1>

        <div className="rounded-2xl border border-border bg-card p-5 text-center">
          <img
            src={assets.paulo}
            alt="Paulo"
            className="mx-auto h-20 w-20 rounded-2xl object-cover ring-2 ring-moss/20"
          />
          <h2 className="mt-3 text-xl font-bold text-foreground">Paulo S.</h2>
          <p className="text-sm text-muted-foreground">Nível 4 · 320 XP · 1º Ano</p>
          <button
            type="button"
            className="mt-4 w-full rounded-xl bg-moss px-4 py-2.5 text-sm font-medium text-moss-foreground"
          >
            Editar Perfil
          </button>
        </div>

        <div className="grid grid-cols-3 gap-2">
          <Stat label="Espécies" value={String(stats.species)} />
          <Stat label="Invasoras" value={String(stats.invasive)} />
          <Stat label="Medalhas" value={String(stats.medals)} />
        </div>

        <div className="space-y-1 rounded-2xl border border-border bg-card p-1">
          <SettingRow
            icon={HelpCircle}
            label="Ajuda"
            onPress={() => setHelpOpen(true)}
          />
          <SettingRow icon={Bell} label="Avisos e Notificações" toggle defaultOn />
          <SettingRow icon={Shield} label="Privacidade e Permissões" />
          <SettingRow icon={LogOut} label="Sair da Conta" danger />
        </div>
      </div>

      <HelpDialog
        open={helpOpen}
        onOpenChange={setHelpOpen}
        items={FAQ_STUDENT}
        title="Ajuda — Flora Explorer"
        description="Perguntas frequentes para alunos"
      />
    </>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-border bg-card p-3 text-center">
      <div className="text-xl font-bold text-foreground">{value}</div>
      <div className="text-[10px] uppercase tracking-wider text-muted-foreground">{label}</div>
    </div>
  );
}

function SettingRow({
  icon: Icon,
  label,
  toggle,
  defaultOn,
  danger,
  onPress,
}: {
  icon: React.ElementType;
  label: string;
  toggle?: boolean;
  defaultOn?: boolean;
  danger?: boolean;
  onPress?: () => void;
}) {
  const [on, setOn] = useState(!!defaultOn);
  return (
    <button
      type="button"
      onClick={() => {
        if (toggle) setOn(!on);
        else onPress?.();
      }}
      className={`flex w-full items-center gap-3 rounded-xl px-3 py-3 text-left transition hover:bg-secondary ${
        danger ? "text-invasive" : "text-foreground"
      }`}
    >
      <Icon className="h-4 w-4" />
      <span className="flex-1 text-sm">{label}</span>
      {toggle ? (
        <div
          className={`flex h-6 w-10 items-center rounded-full transition ${
            on ? "bg-moss" : "bg-secondary"
          }`}
        >
          <div
            className={`h-5 w-5 rounded-full bg-card transition ${
              on ? "translate-x-[18px]" : "translate-x-0.5"
            }`}
          />
        </div>
      ) : (
        <ChevronRight className="h-4 w-4 text-muted-foreground" />
      )}
    </button>
  );
}

/* ---------------- CAPTURE FLOW ---------------- */

type CaptureStep = "camera" | "analyzing" | "confirm" | "registered" | "mission";

function resolveSuggestedPlant(context: CaptureContext | null): Plant {
  if (context?.preferInvasive) return plants.find((p) => p.invasive) ?? plants[1];
  if (context?.missionId === "solon") return plants[0];
  if (context?.missionId === "orla") return plants[1];
  return plants[0];
}

function CaptureFlow({
  captureContext,
  missions,
  onClose,
  onMissionProgress,
}: {
  captureContext: CaptureContext | null;
  missions: Mission[];
  onClose: () => void;
  onMissionProgress: (missionId: string) => void;
}) {
  const [step, setStep] = useState<CaptureStep>("camera");
  const [suggestedPlant, setSuggestedPlant] = useState<Plant>(() =>
    resolveSuggestedPlant(captureContext),
  );
  const [confirmedPlant, setConfirmedPlant] = useState<Plant | null>(null);

  const activeMission = captureContext?.missionId
    ? missions.find((m) => m.id === captureContext.missionId)
    : missions.find((m) => m.id === "solon");

  const missionBanner = captureContext?.missionTitle ?? activeMission?.title;

  const handleAnalyze = () => {
    const plant = resolveSuggestedPlant(captureContext);
    setSuggestedPlant(plant);
    setStep("analyzing");
    setTimeout(() => setStep("confirm"), 1800);
  };

  const handleConfirm = () => {
    setConfirmedPlant(suggestedPlant);
    setStep("registered");
  };

  const handleRetry = () => {
    setSuggestedPlant(resolveSuggestedPlant(captureContext));
    setStep("camera");
  };

  const handleMissionUpdate = () => {
    if (captureContext?.missionId) {
      onMissionProgress(captureContext.missionId);
    } else if (activeMission) {
      onMissionProgress(activeMission.id);
    }
    setStep("mission");
  };

  return (
    <div className="relative flex h-full flex-col bg-foreground/95 text-cream">
      {missionBanner && step !== "mission" && (
        <div className="absolute left-0 right-0 top-0 z-10 bg-moss/95 px-4 py-2 text-center text-xs font-semibold text-moss-foreground backdrop-blur-sm">
          Missão: {missionBanner}
        </div>
      )}

      <button
        type="button"
        onClick={onClose}
        className="absolute right-4 top-4 z-20 grid h-9 w-9 place-items-center rounded-full bg-cream/15 text-cream backdrop-blur-sm"
      >
        <X className="h-4 w-4" />
      </button>

      {step === "camera" && (
        <div className="relative flex h-full flex-col items-center justify-between py-10 pt-14">
          <p className="text-xs uppercase tracking-[0.2em] opacity-70">Aponte para a planta</p>
          <div className="relative grid h-64 w-64 place-items-center">
            <div className="absolute inset-0 rounded-3xl border-2 border-dashed border-sage/60" />
            <div className="absolute left-1/2 top-1/2 h-12 w-12 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-sage/80" />
            <ImageIcon className="h-10 w-10 text-sage/40" />
            <span className="absolute -top-3 left-3 rounded-full bg-moss px-2 py-0.5 text-[10px] font-medium">
              Parque Solon de Lucena
            </span>
          </div>
          <button
            type="button"
            onClick={handleAnalyze}
            className="grid h-20 w-20 place-items-center rounded-full bg-cream"
          >
            <div className="grid h-16 w-16 place-items-center rounded-full bg-moss text-moss-foreground">
              <Camera className="h-6 w-6" />
            </div>
          </button>
        </div>
      )}

      {step === "analyzing" && (
        <div className="flex h-full flex-col items-center justify-center gap-5 px-8 pt-10 text-center">
          <Loader2 className="h-12 w-12 animate-spin text-sage" />
          <div>
            <p className="text-xl font-bold">Analisando com IA…</p>
            <p className="mt-1 text-sm opacity-70">
              Comparando com 2.400 espécies da Mata Atlântica
            </p>
          </div>
        </div>
      )}

      {step === "confirm" && (
        <PlantSheet
          plant={suggestedPlant}
          mode="confirm"
          onConfirm={handleConfirm}
          onRetry={handleRetry}
        />
      )}

      {step === "registered" && confirmedPlant && (
        <PlantSheet
          plant={confirmedPlant}
          mode="registered"
          onContinue={handleMissionUpdate}
        />
      )}

      {step === "mission" && activeMission && (
        <MissionUpdated mission={activeMission} onClose={onClose} />
      )}
    </div>
  );
}

function PlantSheet({
  plant,
  mode,
  onConfirm,
  onRetry,
  onContinue,
}: {
  plant: Plant;
  mode: "confirm" | "registered";
  onConfirm?: () => void;
  onRetry?: () => void;
  onContinue?: () => void;
}) {
  const [bonusClaimed, setBonusClaimed] = useState(false);

  return (
    <div className="relative h-full overflow-y-auto bg-background pt-10 text-foreground">
      {plant.invasive && (
        <div className="sticky top-0 z-10 flex items-center gap-2 bg-invasive px-4 py-2.5 text-sm font-semibold text-invasive-foreground">
          <AlertTriangle className="h-4 w-4" />
          ESPÉCIE EXÓTICA INVASORA
        </div>
      )}

      <div className="aspect-[4/3] w-full bg-secondary">
        <img src={plant.image} alt={plant.popular} className="h-full w-full object-cover" />
      </div>

      <div className="space-y-4 px-5 py-5">
        {mode === "confirm" && (
          <p className="text-sm font-medium text-moss">
            A IA sugere esta espécie. Confirme ou tente novamente.
          </p>
        )}
        {mode === "registered" && !plant.invasive && (
          <div className="inline-flex items-center gap-1.5 rounded-full bg-xp/20 px-2.5 py-1 text-xs font-semibold text-moss">
            <Sparkles className="h-3 w-3" /> NOVA ESPÉCIE DESCOBERTA!
          </div>
        )}

        <div>
          <h1 className="text-2xl font-bold leading-tight text-foreground">{plant.popular}</h1>
          <p className="text-sm italic text-muted-foreground">{plant.scientific}</p>
        </div>

        <div className="flex flex-wrap gap-1.5">
          {plant.tags.map((t) => (
            <span
              key={t}
              className={`rounded-full px-2.5 py-1 text-[11px] font-medium ${
                plant.invasive ? "bg-invasive/12 text-invasive" : "bg-moss/10 text-moss"
              }`}
            >
              {t}
            </span>
          ))}
        </div>

        <p className="text-sm leading-relaxed text-foreground/80">{plant.description}</p>

        {mode === "confirm" && (
          <div className="flex gap-2">
            <button
              type="button"
              onClick={onRetry}
              className="flex-1 rounded-2xl border border-border py-3 text-sm font-medium text-foreground"
            >
              Tentar novamente
            </button>
            <button
              type="button"
              onClick={onConfirm}
              className="flex-1 rounded-2xl bg-moss py-3 text-sm font-medium text-moss-foreground"
            >
              Confirmar espécie
            </button>
          </div>
        )}

        {mode === "registered" && (
          <>
            <div className="rounded-2xl border border-xp/40 bg-xp/12 p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="grid h-9 w-9 place-items-center rounded-full bg-xp text-foreground">
                    <Sparkles className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-lg font-bold leading-none text-moss">+10 XP</p>
                    <p className="text-[11px] text-muted-foreground">por captura</p>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => setBonusClaimed(true)}
                  disabled={bonusClaimed}
                  className={`flex items-center gap-1.5 rounded-full px-3 py-2 text-xs font-semibold transition ${
                    bonusClaimed
                      ? "bg-moss/15 text-moss"
                      : "bg-moss text-moss-foreground hover:bg-moss/90"
                  }`}
                >
                  {bonusClaimed ? (
                    <>
                      <CheckCircle2 className="h-3.5 w-3.5" /> +5 XP coletado
                    </>
                  ) : (
                    <>Ler curiosidades · +5 XP Bônus</>
                  )}
                </button>
              </div>
              {bonusClaimed && (
                <p className="mt-3 rounded-lg bg-card p-3 text-xs leading-relaxed text-foreground/80">
                  💡 {plant.curiosity}
                </p>
              )}
            </div>

            <button
              type="button"
              onClick={onContinue}
              className="w-full rounded-2xl bg-moss py-3 font-medium text-moss-foreground"
            >
              Atualizar missão
            </button>
          </>
        )}
      </div>
    </div>
  );
}

function MissionUpdated({
  mission,
  onClose,
}: {
  mission: Mission;
  onClose: () => void;
}) {
  return (
    <div className="flex h-full flex-col items-center justify-center bg-background px-6 pt-10 text-center text-foreground">
      <div className="grid h-20 w-20 place-items-center rounded-full bg-moss text-moss-foreground">
        <CheckCircle2 className="h-9 w-9" />
      </div>
      <h2 className="mt-5 text-2xl font-bold text-foreground">Missão atualizada!</h2>
      <p className="mt-1 text-sm text-muted-foreground">{mission.title}</p>

      <div className="mt-6 w-full max-w-xs">
        <div className="flex justify-between text-xs text-muted-foreground">
          <span>Progresso</span>
          <span className="font-medium text-moss">
            {mission.progress} / {mission.total} espécies
          </span>
        </div>
        <div className="mt-1.5 h-2.5 overflow-hidden rounded-full bg-secondary">
          <div
            className="h-full rounded-full bg-moss"
            style={{ width: `${(mission.progress / mission.total) * 100}%` }}
          />
        </div>
      </div>

      <p className="mt-6 text-sm text-foreground">
        +15 XP <span className="text-muted-foreground">(10 captura + 5 bônus)</span>
      </p>

      <button
        type="button"
        onClick={onClose}
        className="mt-8 w-full max-w-xs rounded-2xl bg-moss py-3 font-medium text-moss-foreground"
      >
        Voltar à Home
      </button>
    </div>
  );
}

/* ---------------- BOTTOM NAV ---------------- */

function BottomNav({
  current,
  catalogActive,
  onChange,
  onCapture,
}: {
  current: Screen;
  catalogActive: boolean;
  onChange: (s: Screen) => void;
  onCapture: () => void;
}) {
  const items: { key: Screen; label: string; icon: React.ElementType; active?: boolean }[] = [
    { key: "home", label: "Início", icon: Home },
    { key: "catalog", label: "Catálogo", icon: BookOpen, active: catalogActive },
  ];
  const right: { key: Screen; label: string; icon: React.ElementType }[] = [
    { key: "profile", label: "Perfil", icon: User },
  ];

  return (
    <div className="absolute bottom-0 left-0 right-0 z-10 border-t border-border bg-card/95 backdrop-blur-lg">
      <div className="grid grid-cols-4 items-end px-2 pb-3 pt-2">
        {items.map((it) => {
          const { key, active, ...rest } = it;
          return (
            <NavBtn
              key={key}
              {...rest}
              active={active ?? current === key}
              onClick={() => onChange(key)}
            />
          );
        })}
        <button
          type="button"
          onClick={onCapture}
          className="-mt-8 mx-auto grid h-16 w-16 place-items-center rounded-full bg-moss text-moss-foreground ring-4 ring-background shadow-lg"
        >
          <Camera className="h-6 w-6" />
        </button>
        {right.map((it) => {
          const { key, ...rest } = it;
          return (
            <NavBtn key={key} {...rest} active={current === key} onClick={() => onChange(key)} />
          );
        })}
      </div>
    </div>
  );
}

function NavBtn({
  label,
  icon: Icon,
  active,
  onClick,
}: {
  label: string;
  icon: React.ElementType;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`flex flex-col items-center gap-0.5 py-1 text-[10px] font-medium transition ${
        active ? "text-moss" : "text-muted-foreground"
      }`}
    >
      <Icon className="h-5 w-5" />
      {label}
    </button>
  );
}
