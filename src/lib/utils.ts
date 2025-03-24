import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"


export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const generateBreadcrumbs = (pathname: string) => {
  const paths = pathname.split("/").filter((path) => path !== ""); 
  const breadcrumbs = paths.map((path, index) => {
    const href = `/${paths.slice(0, index + 1).join("/")}`; 
    const title = path.replace(/-/g, " "); // 
    return { href, title };
  });
  return breadcrumbs;
};