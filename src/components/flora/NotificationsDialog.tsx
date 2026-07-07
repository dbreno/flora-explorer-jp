import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import type { NotificationItem } from "@/lib/flora-data";

export function NotificationsDialog({
  open,
  onOpenChange,
  notifications,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  notifications: NotificationItem[];
}) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Notificações</DialogTitle>
          <DialogDescription>Avisos e lembretes</DialogDescription>
        </DialogHeader>
        <ul className="space-y-3">
          {notifications.map((n) => (
            <li
              key={n.id}
              className="rounded-xl border border-border bg-card p-3 text-left"
            >
              <p className="text-sm font-semibold text-foreground">{n.title}</p>
              <p className="mt-0.5 text-sm text-muted-foreground">{n.body}</p>
              <p className="mt-1 text-[10px] uppercase tracking-wider text-muted-foreground">
                {n.time}
              </p>
            </li>
          ))}
        </ul>
      </DialogContent>
    </Dialog>
  );
}
