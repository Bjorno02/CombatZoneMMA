import { Link } from "wouter";
import { Radio, Play } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { PPV_LIVE_TICKET_URL, PPV_LIVE_EVENT_NAME, PPV_LIVE_WATCH_PATH } from "@/lib/constants";

interface PPVPurchaseModalProps {
  /** Trigger element. Omit when controlling the modal via open/onOpenChange. */
  children?: React.ReactNode;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
}

export function PPVPurchaseModal({ children, open, onOpenChange }: PPVPurchaseModalProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      {children && <DialogTrigger asChild>{children}</DialogTrigger>}
      <DialogContent className="max-w-3xl w-[95vw] h-[92vh] p-0 bg-neutral-950 border border-neutral-800 flex flex-col overflow-hidden gap-0 sm:rounded-none">
        {/* Accessible title (visually hidden — header below provides visible label) */}
        <DialogTitle className="sr-only">Buy {PPV_LIVE_EVENT_NAME} PPV Access</DialogTitle>
        <DialogDescription className="sr-only">
          Complete your TicketSpice purchase to receive an order number you can use to stream the
          live event on Combat Zone.
        </DialogDescription>

        {/* Header */}
        <div className="relative bg-neutral-900 border-b border-neutral-800 px-4 py-3 flex items-center gap-2 shrink-0">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary"></span>
          </span>
          <h2 className="text-white text-sm font-bold uppercase tracking-wider font-[Chakra_Petch]">
            Buy {PPV_LIVE_EVENT_NAME} PPV
          </h2>
        </div>

        {/* TicketSpice checkout iframe */}
        <iframe
          src={PPV_LIVE_TICKET_URL}
          className="flex-1 w-full border-0 bg-white"
          title={`${PPV_LIVE_EVENT_NAME} ticket purchase`}
          allow="payment"
        />

        {/* Footer with manual fallback */}
        <div className="bg-neutral-900 border-t border-neutral-800 px-4 py-3 text-center shrink-0">
          <Link
            href={PPV_LIVE_WATCH_PATH}
            className="inline-flex items-center gap-1.5 text-neutral-400 hover:text-white text-xs uppercase tracking-wider transition-colors"
          >
            <Play size={12} />
            <span>Already purchased? Watch live</span>
          </Link>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export { Radio };
