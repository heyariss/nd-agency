import Link from "next/link";
import Image from "next/image";
import { Instagram, Linkedin } from 'lucide-react';


const navigationItems = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Layanan",
    description: "Solusi Digital All-in-One: Desain, Development, Maintenance!",
    items: [
      { title: "Website Development", href: "/layanan" },
      { title: "UI/UX Design", href: "/layanan" },
      { title: "Maintenance & Support", href: "/layanan" },
      { title: "SEO Optimization", href: "/layanan" },
    ],
  },
  {
    title: "Perusahaan",
    description: "Solusi Digital All-in-One: Desain, Development, Maintenance!",
    items: [
      { title: "About us", href: "/about" },
      { title: "Visi & Misi", href: "/about" },
      { title: "Portfolio", href: "/insight" },
      { title: "Contact us", href: "/contact" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="w-full py-16 lg:py-20 bg-primary text-background">
      <div className="container max-w-7xl mx-auto sm:px-2 md:px-4 px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          {/* Logo & Info */}
          <div className="flex flex-col gap-8">
            <Image src={"../logo-white.svg"} alt={"Nyambi Digital"} width={"300"} height={"55"} priority/>
            <p className="text-lg max-w-lg leading-relaxed text-background/75">
                Solusi Digital All-in-One: Desain, Development, Maintenance!
            </p>
            <div className="flex space-x-4">
                <Link href="https://instagram.com/nyambidigital.id" target="_blank" className="text-white hover:text-orange-500 text-2xl">
                    <Instagram />
                </Link>
                <Link href="https://linkedin.com/company/nyambidigital" target="_blank" className="text-white hover:text-orange-500 text-2xl">
                <Linkedin />
                 </Link>
            </div>
            <div className="flex gap-20">
              <div className="text-sm text-background/75">
                <p>©2025 Nyambi Digital Agency All Rights Reserved.</p>
              </div>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="grid lg:grid-cols-3 gap-10">
            {navigationItems.map((item) => (
              <div key={item.title} className="flex flex-col gap-2">
                {item.href ? (
                  <Link href={item.href} className="text-xl font-medium">
                    {item.title}
                  </Link>
                ) : (
                  <p className="text-xl font-medium">{item.title}</p>
                )}
                {item.items?.map((subItem) => (
                  <Link key={subItem.title} href={subItem.href} className="text-background/75">
                    {subItem.title}
                  </Link>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
