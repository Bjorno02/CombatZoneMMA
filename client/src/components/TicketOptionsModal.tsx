import { useState } from "react";
import { Ticket, Crown, MonitorPlay, ChevronRight } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { PPVPurchaseModal } from "@/components/PPVPurchaseModal";
import { TICKETMASTER_EVENT_URL, TICKETMASTER_VIP_URL, PPV_LIVE_EVENT_NAME } from "@/lib/constants";

interface TicketOptionsModalProps {
  /** The clickable trigger (e.g. a "Get Tickets" Button). Becomes the dialog trigger. */
  children: React.ReactNode;
}

interface TicketOption {
  /** External checkout link. Omitted for the PPV option, which opens the embedded checkout. */
  href?: string;
  label: string;
  description: string;
  icon: typeof Ticket;
}

const OPTIONS: TicketOption[] = [
  {
    href: TICKETMASTER_EVENT_URL,
    label: "General Admission",
    description: "Standard seating on Ticketmaster",
    icon: Ticket,
  },
  {
    href: TICKETMASTER_VIP_URL,
    label: "VIP Experience",
    description: "Premium seating, hospitality & more",
    icon: Crown,
  },
  {
    label: "Pay-Per-View",
    description: "Stream the fights live from anywhere",
    icon: MonitorPlay,
  },
];

/**
 * Wraps any trigger element so that clicking it opens a modal letting the user
 * choose between General Admission, the VIP Experience, or the live PPV stream.
 * Ticketmaster options link out in a new tab; the PPV option opens the embedded
 * TicketSpice checkout (PPVPurchaseModal) in place.
 */
export function TicketOptionsModal({ children }: TicketOptionsModalProps) {
  const [optionsOpen, setOptionsOpen] = useState(false);
  const [ppvOpen, setPpvOpen] = useState(false);

  const optionClasses =
    "group flex items-center gap-4 border-2 border-neutral-800 bg-neutral-900 px-5 py-4 transition-all hover:border-primary hover:bg-neutral-900/80";

  return (
    <>
      <Dialog open={optionsOpen} onOpenChange={setOptionsOpen}>
        <DialogTrigger asChild>{children}</DialogTrigger>
        <DialogContent className="max-w-md w-[95vw] bg-neutral-950 border border-neutral-800 text-white sm:rounded-none [&>button]:opacity-100 [&>button]:text-neutral-400 [&>button:hover]:text-white">
          <DialogTitle className="text-white text-xl font-bold uppercase tracking-wider font-[Chakra_Petch]">
            Get {PPV_LIVE_EVENT_NAME} Tickets
          </DialogTitle>
          <DialogDescription className="text-neutral-400">
            Choose your experience. You'll be redirected to complete your purchase.
          </DialogDescription>

          <div className="mt-2 flex flex-col gap-3">
            {OPTIONS.map((option) => {
              const Icon = option.icon;
              const content = (
                <>
                  <Icon className="text-primary shrink-0" size={28} />
                  <div className="flex-1 min-w-0 text-left">
                    <div className="text-white font-bold uppercase tracking-wider font-[Chakra_Petch]">
                      {option.label}
                    </div>
                    <div className="text-sm text-neutral-400">{option.description}</div>
                  </div>
                  <ChevronRight
                    className="text-neutral-500 shrink-0 transition-transform group-hover:translate-x-1 group-hover:text-primary"
                    size={20}
                  />
                </>
              );
              return option.href ? (
                <a
                  key={option.label}
                  href={option.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={optionClasses}
                >
                  {content}
                </a>
              ) : (
                <button
                  key={option.label}
                  type="button"
                  className={optionClasses}
                  onClick={() => {
                    setOptionsOpen(false);
                    setPpvOpen(true);
                  }}
                >
                  {content}
                </button>
              );
            })}
          </div>
        </DialogContent>
      </Dialog>

      <PPVPurchaseModal open={ppvOpen} onOpenChange={setPpvOpen} />
    </>
  );
}
