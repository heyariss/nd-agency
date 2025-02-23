import { useEffect, useState } from "react";
import { Carousel, CarouselApi, CarouselContent, CarouselItem } from "../ui/carousel";

// Data tech stack dengan logo yang berbeda
const techStacks = [
  { name: "React", logo: "/logo/reactjs.svg" },
  { name: "HTML5", logo: "/logo/html5.svg" },
  { name: "Node.js", logo: "/logo/nodejs.svg" },
  { name: "CSS", logo: "/logo/css.svg" },
  { name: "Javascript", logo: "/logo/js.svg" },
  { name: "Hotjar", logo: "/logo/hotjar.svg" },
  { name: "Vite", logo: "/logo/vitejs.svg" },
  { name: "Laravel", logo: "/logo/laravel.svg" },
  { name: "Wordpress", logo: "/logo/wordpress.svg" },
  { name: "Figma", logo: "/logo/figma.svg" },
  { name: "Postman", logo: "/logo/postman.svg" },
  { name: "PostgreSQL", logo: "/logo/postgresql.svg" },
  { name: "Git", logo: "/logo/git.svg" },
  { name: "TailwindCSS", logo: "/logo/tailwind.svg" },
  { name: "Next.js", logo: "/logo/nextjs.svg" },
  { name: "Vue.js", logo: "/logo/vuejs.svg" },
  { name: "Netlify", logo: "/logo/netlify.svg" },
];

export function TechStack() {
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
    <div className="p-20 container max-w-7x mx-auto">
      <div className="grid grid-cols-5 gap-10 items-center">
        <h2 className="text-xl tracking-tighter lg:max-w-xl font-bold text-left">
          Technology Stacks
        </h2>
        <div className="relative w-full col-span-4">
          <div className="bg-gradient-to-r from-background via-white/0 to-background z-10 absolute left-0 top-0 right-0 bottom-0 w-full h-full"></div>
          <Carousel setApi={setApi} className="w-full">
            <CarouselContent>
              {techStacks.map((tech, index) => (
                <CarouselItem className="basis-1/4 lg:basis-1/6" key={index}>
                  <div className="flex rounded-md aspect-square bg-muted items-center justify-center p-2">
                    <img
                      src={tech.logo}
                      alt={tech.name}
                      className="h-20 w-20 object-contain"
                      width={40}
                      height={40}
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </div>
  );
}