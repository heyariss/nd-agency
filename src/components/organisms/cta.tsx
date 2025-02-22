import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { PhoneCall } from "lucide-react";

export function CtaSection() {
  return (
    <section className="w-full py-20 lg:py-40 bg-muted">
      <div className="container">
        <div className="flex flex-col text-center py-14 gap-4 items-center">
          <div>
            <Badge>Get started</Badge>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="text-3xl md:text-5xl tracking-tighter max-w-xl font-semibold">
              Bangun Website, Naikkan Omzet, Tanpa Ribet!
            </h3>
            <p className="text-lg leading-relaxed tracking-tight text-muted-foreground max-w-xl">
              Hindari kehilangan pelanggan hanya karena website yang nggak perform. Kami bantu dari desain, 
              development, hingga maintenance!
            </p>
          </div>
          <div className="flex flex-row gap-4">
            <Button className="gap-4">
              <PhoneCall className="w-4 h-4" /> Fast Response 24/7!
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
