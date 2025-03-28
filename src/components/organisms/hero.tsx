import Link from "next/link";
import { Badge } from "../ui/badge";
import { buttonVariants } from "../ui/button";
import Image from 'next/image';


export function HeroSection() {

  return (
    <section className="mx-auto px-16 py-10 sm:py-16 lg:py-20">
    <div className="px-8 max-w-7xl sm:px-2 md:px-4 grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
      <div>
      <div className="flex mb-4 w-fit items-center justify-center border-opacity-50 border rounded-lg py-1 px-2 lg:gap-4 sm:gap-2">
        <Badge className=" text-md sm:text-xs">NEW</Badge>
        <span className="text-xs lg:text-base font-semibold text-gray-700">No.1 Digital Agency of 2025</span>
      </div>
        <h1 className="text-4xl font-bold text-neutral-800 sm:text-6xl lg:text-5xl text-left leading-relaxed">
        Bikin Bisnismu Makin 🚀 Nyala 🔥 di Dunia Digital!
        </h1>
        <p className="mt-8 text-base text-muted-foreground sm:text-xl text-left">
          Jangan biarkan website bermasalah menghambat bisnismu. Kami siap membantu maintenance dan pengembangan website agar selalu optimal.
        </p>
        <div className="mt-10 flex flex-col gap-2 sm:gap-4 lg:flex-row md:flex-row sm:flex-col sm:w-full">
          <Link className={buttonVariants({ variant: "outline" })} href="/profile">Tentang Kami</Link>
          <Link className={buttonVariants({ variant: "default" })} href="/kontak">Gratis Konsultasi</Link>
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
