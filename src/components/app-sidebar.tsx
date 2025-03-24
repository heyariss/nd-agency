"use client"

import * as React from "react";
import Image from "next/image";
import { usePathname } from "next/navigation"; // Ganti useRouter dengan usePathname

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarRail,
} from "@/components/ui/sidebar";

// Sample data
const data = {
  navMain: [
    {
      title: "Getting Started",
      url: "#",
      items: [
        {
          title: "Dashboard",
          url: "/dashboard",
        },
        {
          title: "Management Portal",
          url: "/dashboard/management-portal",
        },
      ],
    },
    {
      title: "Setting Up",
      url: "#",
      items: [
        {
          title: "Portal Management",
          url: "/dashboard/portal-management",
        },
        {
          title: "User Management",
          url: "/dashboard/user-management",
        },
      ],
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const pathname = usePathname(); // Ambil path URL saat ini

  // Fungsi untuk mengecek apakah menu aktif
  const isActive = (url: string) => pathname === url;

  return (
    <Sidebar {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <a href="/dashboard">
                <Image
                  className="dark:invert w-32 md:w-40 lg:w-48"
                  src="/logo-nyambidigi.svg"
                  alt="Nyambi Digital Agency Logo"
                  width={180}
                  height={38}
                  priority
                />
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarMenu>
            {data.navMain.map((item) => (
              <SidebarMenuItem key={item.title}>
                <SidebarMenuButton asChild isActive={isActive(item.url)} className={isActive(item.url) ? "bg-orange-500 text-white" : "text-gray-700"}>
                  <a href={item.url} className="font-medium">
                    {item.title}
                  </a>
                </SidebarMenuButton>
                {item.items?.length ? (
                  <SidebarMenuSub>
                    {item.items.map((subItem) => (
                      <SidebarMenuSubItem key={subItem.title}>
                        <SidebarMenuSubButton
                          asChild
                          isActive={isActive(subItem.url)}
                          className={isActive(item.url) ? "bg-orange-500 text-white" : "text-gray-700"}
                        >
                          <a href={subItem.url}>{subItem.title}</a>
                        </SidebarMenuSubButton>
                      </SidebarMenuSubItem>
                    ))}
                  </SidebarMenuSub>
                ) : null}
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
}