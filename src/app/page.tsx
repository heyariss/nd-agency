"use client"

import Image from "next/image";
import { useEffect, useState } from "react";
import Link from 'next/link';
import { Button } from "@/components/ui/button";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu";
import { Carousel, CarouselApi, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { Badge } from "@/components/ui/badge"
import { Check, PhoneCall } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Footer } from "@/components/organisms/footer";
import { CtaSection } from "@/components/organisms/cta";



export default function Home() {
  const [api, setApi] = useState<CarouselApi>();
  const [, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) return;

    const interval = setInterval(() => {
      if (api.selectedScrollSnap() + 1 === api.scrollSnapList().length) {
        setCurrent(0);
        api.scrollTo(0);
      } else {
        api.scrollNext();
        setCurrent((prev) => prev + 1);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [api]);

  return (
    <div className="bg-white z-1">
      <nav className="px-20 mx-auto sm:px-6 lg:px-20">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <div className="flex-shrink-0">
            <Link href="/">
              <Image
                className="dark:invert"
                src="/logo-nyambidigi.svg"
                alt="Nyambi Digital Agency Logo"
                width={180}
                height={38}
                priority
              />
            </Link>
          </div>
          <NavigationMenu className="gap-8">
            <NavigationMenuList className="gap-4">
              <NavigationMenuItem>Home</NavigationMenuItem>
              <NavigationMenuItem>Profil</NavigationMenuItem>
              <NavigationMenuItem>Layanan</NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Insight</NavigationMenuTrigger>
                <NavigationMenuContent className="flex">
                  <NavigationMenuLink>UI/UX Design</NavigationMenuLink>
                  <NavigationMenuLink>Website Landing Pages</NavigationMenuLink>
                  <NavigationMenuLink>Search Engine Optimization</NavigationMenuLink>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>Kontak</NavigationMenuItem>
            </NavigationMenuList>
            <Button>Ayo Kolaborasi</Button>
          </NavigationMenu>
        </div>
      </nav>
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
      <main className="flex flex-col mx-auto px-14 gap-8 row-start-2 items-center sm:items-start">
        <div className="px-20container max-w-7x">
          <div className="grid grid-cols-5 gap-10 items-center">
            <h2 className="text-xl tracking-tighter lg:max-w-xl font-bold text-left">
              Technology Stacks
            </h2>
            <div className="relative w-full col-span-4">
              <div className="bg-gradient-to-r from-background via-white/0 to-background z-10 absolute left-0 top-0 right-0 bottom-0 w-full h-full"></div>
              <Carousel setApi={setApi} className="w-full">
                <CarouselContent>
                  {Array.from({ length: 25 }).map((_, index) => (
                    <CarouselItem className="basis-1/4 lg:basis-1/6" key={index}>
                      <div className="flex rounded-md aspect-square bg-muted items-center justify-center p-2">
                        <span className="text-sm">Logo {index + 1}</span>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
              </Carousel>
            </div>
          </div>
        </div>
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
      <div className="px-20 w-full pt-20 lg:pt-40">
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
      <div className=" px-20w-full pt-20 lg:pt-40">
      <div className="container mx-auto">
        <div className="flex flex-col gap-10">
          <div className="flex gap-4 flex-col items-start">
            <div>
             <Badge variant="outline">Your Growth</Badge>
            </div>
            <div className="flex gap-2 flex-col">
              <h2 className="text-3xl md:text-5xl tracking-tighter max-w-xl font-semibold text-left">
                No More Digital Hassles!
              </h2>
              <p className="text-lg max-w-xl lg:max-w-lg leading-relaxed tracking-tight text-muted-foreground  text-left">
                We Design, Build, and Maintain—So You Can Focus on Growth!
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="flex flex-col gap-2">
              <div className="bg-muted rounded-md aspect-video mb-2"></div>
              <h3 className="text-xl tracking-tight">Website Lemot & Tidak Optimal</h3>
              <p className="text-muted-foreground text-base">
              Pernah buka website tapi loading-nya kayak jalan santai? 
              Kami bantu bikin website yang cepat, responsif, dan SEO-friendly biar nggak bikin pengunjung kabur.
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <div className="bg-muted rounded-md aspect-video mb-2"></div>
              <h3 className="text-xl tracking-tight">Biaya Pengelolaan yang Tidak Terduga</h3>
              <p className="text-muted-foreground text-base">
              Hosting, maintenance, update—biaya bisa numpuk kalau nggak terencana. Dengan layanan kami, 
              semua sudah dihitung dalam satu paket, tanpa kejutan!
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <div className="bg-muted rounded-md aspect-video mb-2"></div>
              <h3 className="text-xl tracking-tight">Sulit Menemukan Tim Digital yang Bisa Diandalkan</h3>
              <p className="text-muted-foreground text-base">
              Nyari developer, desainer, dan tester yang paham kebutuhan bisnis itu PR besar. Tenang, kami punya tim yang solid buat urusan ini!
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <div className="bg-muted rounded-md aspect-video mb-2"></div>
             <h3 className="text-xl tracking-tight">Keamanan Website yang Rentan</h3>
              <p className="text-muted-foreground text-base">
              Serangan hacker atau website yang tiba-tiba down? Kami siap dengan solusi keamanan terbaik, jadi nggak perlu panik kalau ada masalah teknis.
             </p>
            </div>
            <div className="flex flex-col gap-2">
              <div className="bg-muted rounded-md aspect-video mb-2"></div>
              <h3 className="text-xl tracking-tight">Website Tidak Sesuai dengan Kebutuhan Bisnis</h3>
              <p className="text-muted-foreground text-base">
              Desainnya nggak representatif, fitur nggak sesuai, atau malah bikin user bingung? Kami pastikan website kamu bukan cuma keren, tapi juga berfungsi maksimal!
              </p>
           </div>
            <div className="flex flex-col gap-2">
             <div className="bg-muted rounded-md aspect-video mb-2"></div>
             <h3 className="text-xl tracking-tight">Kurangnya Support & Maintenance yang Cepat</h3>
             <p className="text-muted-foreground text-base">
             Error tengah malam? Ada bug pas lagi banyak pengunjung? Tim support kami siap 24/7 biar website kamu selalu jalan lancar!
              </p>
           </div>
         </div>
        </div>
      </div>
    </div>
    <div className="px-20 w-full py-20 lg:py-40">
    <div className="container mx-auto">
      <div className="grid lg:grid-cols-2 gap-10">
        <div className="flex gap-10 flex-col">
          <div className="flex gap-4 flex-col">
            <div>
              <Badge variant="outline">FAQ</Badge>
            </div>
            <div className="flex gap-2 flex-col">
              <h4 className="text-3xl md:text-5xl tracking-tighter max-w-xl text-left font-semibold">
                Almost Ready? Let’s Clear Up Your Questions
              </h4>
              <p className="text-lg max-w-xl lg:max-w-lg leading-relaxed tracking-tight text-muted-foreground  text-left">
                If you’re still wondering about a few things before subscribing, 
                here are the answers to what most clients ask us!
              </p>
            </div>
            <div className="">
              <Button className="gap-4" variant="outline">
                Any questions? Reach out <PhoneCall className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
        <Accordion type="single" collapsible className="w-full">
          {Array.from({ length: 8 }).map((_, index) => (
            <AccordionItem key={index} value={"index-" + index}>
              <AccordionTrigger>
                This is the start of something new
              </AccordionTrigger>
              <AccordionContent>
                Managing a small business today is already tough. Avoid further
                complications by ditching outdated, tedious trade methods. Our
                goal is to streamline SMB trade, making it easier and faster
                than ever.
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  </div>
      <CtaSection />
      </main>
      <Footer />
    </div>
  );
}