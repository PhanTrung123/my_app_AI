"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavLink({
  href,
  children,
  className,
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  const pathName = usePathname();
  const isActive =
    pathName === href || (href !== "/" && pathName.startsWith(href));
  return (
    <Link
      href={href}
      className={cn(
        "px-2 py-1 text-sm font-medium text-gray-700 hover:text-black transition-colors duration-200 rounded-md",
        className,
        isActive && "text-black"
      )}
    >
      {children}
    </Link>
  );
}
