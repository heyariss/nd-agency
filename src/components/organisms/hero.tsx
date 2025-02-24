import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import Image from 'next/image';

export function HeroSection() {
  return (
    <section className="mx-auto px-16 py-10 sm:py-16 lg:py-20">
    <div className="px-2 max-w-7xl sm:px-6 lg:px-8 grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
      <div>
      <div className="flex mb-4 w-fit items-center justify-center border-opacity-50 border rounded-lg py-1 px-2 lg:gap-4 sm:gap-2">
        <Badge className="text-xs lg:text-md">NEW</Badge>
        <span className="text-xs lg:text-base font-semibold text-gray-700">No.1 Digital Agency of 2025</span>
      </div>
        <h1 className="text-4xl font-bold text-neutral-800 sm:text-6xl lg:text-5xl text-left leading-relaxed">
        Bikin Bisnismu Makin 🚀 Nyala 🔥 di Dunia Digital!
        </h1>
        <p className="mt-8 text-base text-muted-foreground sm:text-xl text-left">
          Jangan biarkan website bermasalah menghambat bisnismu. Kami siap membantu maintenance dan pengembangan website agar selalu optimal.
        </p>
        <div className="mt-10 flex flex-col gap-2 sm:flex-col sm:gap-4 md:flex-col md:w-full">
          <Button variant="outline" className="py-2 px-4">Tentang Kami</Button>
          <Button className="py-2 px-4">Gratis Konsultasi</Button>
        </div>
      </div>
      <div>
        <Image
          className="dark:invert"
          src="/photoheadline.svg"
          alt="Nyambi Digital Agency Logo"
          width={800}
          height={800}
          priority
        />
      </div>
    </div>
  </section>
  );
}
