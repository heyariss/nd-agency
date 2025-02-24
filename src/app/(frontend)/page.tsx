"use client"

import { Footer } from "@/components/organisms/footer";
import { CtaSection } from "@/components/organisms/cta";
import { FaqSection } from "@/components/organisms/faq";
import { KelebihanSection } from "@/components/organisms/kelebihan";
import { TechStack } from "@/components/organisms/stack";
import { ServicesSection } from "@/components/organisms/services";
import { AboutSection } from "@/components/organisms/about";
import { Navbar } from "@/components/moleculs/navbar";
import { HeroSection } from "@/components/organisms/hero";




export default function Home() {

  return (
    <div className="bg-white z-1">
      <Navbar />
      <main className="flex pt-16 lg:pt-20 flex-col row-start-2 items-center sm:items-start">
      <HeroSection />
        <TechStack />
        <AboutSection />
        <ServicesSection />
        <KelebihanSection />
        <FaqSection />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
}