import { Badge } from "@/components/ui/badge";
import { Check} from "lucide-react";

export function ServicesSection() {
  return (
    <div className="mx-auto p-20 w-full lg:pt-40">
    <div className="container mx-auto">
      <div className="grid container py-8 grid-cols-1 gap-8 items-center lg:grid-cols-2">
        <div className="flex gap-10 flex-col">
          <div className="flex gap-4 flex-col">
            <div>
              <Badge>Layanan</Badge>
           </div>
            <div className="flex gap-2 flex-col">
              <h2 className="text-3xl lg:text-5xl tracking-tighter max-w-xl text-left font-semibold">
               Layanan Kami
             </h2>
             <p className="text-lg leading-relaxed tracking-tight text-muted-foreground max-w-xl text-left">
             Solusi Digital untuk Bisnis Lebih Cepat & Cerdas
             Kami bantu brand Anda tumbuh dengan strategi berbasis data & teknologi.
            </p>
            </div>
          </div>
          <div className="grid lg:pl-6 grid-cols-1 sm:grid-cols-3 items-start lg:grid-cols-1 gap-6">
            <div className="flex flex-row gap-6 items-start">
            <Check className="w-4 h-4 mt-2 text-primary" />
              <div className="flex flex-col gap-1">
                <p>UI/UX Design</p>
                <p className="text-muted-foreground text-sm">
                  Desain intuitif yang meningkatkan pengalaman dan konversi pengguna.
                </p>
             </div>
            </div>
            <div className="flex flex-row gap-6 items-start">
                <Check className="w-4 h-4 mt-2 text-primary" />
              <div className="flex flex-col gap-1">
                <p>Web Development & maintenance</p>
                <p className="text-muted-foreground text-sm">
                Bangun website cepat, responsif, SEO-friendly dan up-to-date.
                </p>
              </div>
           </div>
        <div className="flex flex-row gap-6 items-start">
                <Check className="w-4 h-4 mt-2 text-primary" />
              <div className="flex flex-col gap-1">
                <p>Performance Marketing & SEO</p>
                <p className="text-muted-foreground text-sm">
                  Optimasi website & iklan digital untuk hasil maksimal.
                </p>
              </div>
            </div>
          </div>
       </div>
        <div className="bg-muted rounded-md aspect-square"></div>
      </div>
    </div>
  </div>
  );
}
