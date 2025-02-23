import Image from "next/image";
import { Button } from "@/components/ui/button";


export function HeroSection() {
  return (
    <section className="px-20 py-10 sm:py-16 lg:py-20">
      <div className="px-2 max-w-7xl sm:px-6 lg:px-8 grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
        <div>
          <h1 className="text-4xl font-bold text-black sm:text-6xl lg:text-7xl text-left">
            Ubur-ubur Ikan Lele, Nyambi Digital Aja Le!
          </h1>
          <p className="mt-8 text-base text-muted-foreground sm:text-xl text-left">
            Jangan biarkan website bermasalah menghambat bisnismu. Kami siap membantu maintenance dan pengembangan website agar selalu optimal.
          </p>
          <div className="mt-10 gap-2 sm:flex sm:items-center sm:space-x-8">
            <Button variant="secondary">Tentang Kami</Button>
            <Button className=" py-2 px-4">Gratis Konsultasi</Button>
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
