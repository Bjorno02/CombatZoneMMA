import { Link2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export function LinkPlaceholder() {
  return (
    <section className="py-16 bg-white border-y-2 border-slate-200">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6">
            <Link2 className="w-8 h-8 text-primary" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 font-[Chakra_Petch] uppercase mb-4">
            PPV Link Placeholder
          </h2>
          <p className="text-slate-600 mb-8 text-lg">
            PaperView link in progress. (Can probably be prettier)
          </p>
          <Button 
            size="lg" 
            className="bg-slate-200 text-slate-600 hover:bg-slate-300 font-bold uppercase px-8 py-6 rounded-none cursor-not-allowed opacity-60"
            disabled
          >
            Link Coming Soon
          </Button>
        </div>
      </div>
    </section>
  );
}

