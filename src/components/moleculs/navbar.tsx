"use client"
import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { Button } from "../ui/button"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuContent,
} from "../ui/navigation-menu"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "../ui/sheet"
import { Menu } from "lucide-react"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 inset-x-0 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-50 border-b">
      <div className="mx-auto px-4 sm:px-6 md:px-8 lg:px-12 max-w-7xl">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/">
              <Image
                className="dark:invert w-32 md:w-40 lg:w-48"
                src="/logo-nyambidigi.svg"
                alt="Nyambi Digital Agency Logo"
                width={180}
                height={38}
                priority
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            <NavigationMenu>
              <NavigationMenuList className="gap-4">
                <NavigationMenuItem>
                  <NavigationMenuLink href="/">Home</NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink href="/profil">Profil</NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink href="/layanan">Layanan</NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Insight</NavigationMenuTrigger>
                  <NavigationMenuContent className="flex flex-col p-4 gap-2 min-w-[200px] md:w-[200px] lg:w-[300px]">
                    <NavigationMenuLink href="/ui-ux" className="p-2 rounded-md hover:bg-secondary hover:text-neutral-800">UI/UX Design </NavigationMenuLink>
                    <NavigationMenuLink href="/landing-page" className="p-2 rounded-md hover:bg-secondary hover:text-neutral-800">Website Landing Pages </NavigationMenuLink>
                    <NavigationMenuLink href="/seo" className="p-2 rounded-md hover:bg-secondary hover:text-neutral-800">Search Engine Optimization</NavigationMenuLink>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink href="/kontak">Kontak</NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
            <Button className="ml-4">Ayo Kolaborasi</Button>
          </div>

          {/* Mobile Navigation */}
          <div className="lg:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger>
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <SheetHeader>
                    <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
                </SheetHeader>
                <div className="flex flex-col h-full">
                  <div className="flex justify-between items-center mb-8">
                    <Link href="/" onClick={() => setIsOpen(false)}>
                      <Image
                        className="dark:invert w-32"
                        src="/logo-nyambidigi.svg"
                        alt="Logo"
                        width={180}
                        height={38}
                      />
                    </Link>
                  </div>

                  <div className="flex flex-col space-y-4">
                    <Link href="/" onClick={() => setIsOpen(false)}>Home</Link>
                    <Link href="/profil" onClick={() => setIsOpen(false)}>Profil</Link>
                    <Link href="/layanan" onClick={() => setIsOpen(false)}>Layanan</Link>
                    
                    <div className="flex flex-col space-y-2">
                      <div className="font-medium">Insight</div>
                      <div className="flex flex-col pl-4 space-y-2">
                        <Link href="/ui-ux" onClick={() => setIsOpen(false)}>UI/UX Design</Link>
                        <Link href="/landing-page" onClick={() => setIsOpen(false)}>Website Landing Pages</Link>
                        <Link href="/seo" onClick={() => setIsOpen(false)}>SEO</Link>
                      </div>
                    </div>

                    <Link href="/kontak" onClick={() => setIsOpen(false)}>Kontak</Link>
                    <Button className="mt-4">Ayo Kolaborasi</Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  )
}