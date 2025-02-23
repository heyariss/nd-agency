import { Badge } from "@/components/ui/badge";


export function AboutSection() {
  return (
    <div className="px-20 w-full py-20 lg:py-40">
    <div className="container mx-auto">
      <div className="flex flex-col lg:flex-row gap-10 lg:items-center">
        <div className="flex gap-4 flex-col flex-1">
          <div>
          <Badge variant="outline">About Us</Badge>
          </div>
          <div className="flex gap-4 flex-col">
            <h2 className="text-xl md:text-3xl md:text-5xl leading-relaxed tracking-normal lg:max-w-xl font-semibold text-left">
              Mengenal Nyambi Digital Agency Lebih Dekat
            </h2>
            <p className="text-lg max-w-xl lg:max-w-xl leading-relaxed tracking-tight text-muted-foreground text-left">
             Merupakan Agency yang mengedepankan inovasi dalam dunia digital, menyediakan solusi teknologi yang fungsional dan berkelanjutan. 
              Kami mengutamakan kolaborasi erat dengan klien untuk menciptakan pengalaman digital yang optimal dan memnuhi Kebutuhan pasar.
            </p>
          </div>
        </div>
        <div className="bg-muted rounded-md w-full aspect-video h-full flex-1"></div>
      </div>
    </div>
  </div>
  );
}
