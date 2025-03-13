"use client";

import { navItemClasses } from "@/components/layout/nav/nav-styles";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

type NavLinkProps = {
  href: string;
  icon: string;
  label: string;
  isCheckable?: boolean;
};

export function NavLink({
  href,
  label,
  icon,
  isCheckable = true,
}: NavLinkProps) {
  const pathname = usePathname();
  const checked = href === pathname;
  const currentIcon =
    checked && isCheckable ? `${icon.split(".svg")[0]}-fill.svg` : icon;

  return (
    <Link href={href} className={navItemClasses} data-label={label}>
      <Image src={currentIcon} width={20} height={20} alt={label} unoptimized />
    </Link>
  );
}
