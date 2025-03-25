"use client";

import { navItemClasses } from "@/components/layout/header/nav-styles";
import { useNavPopoverStore } from "@/store/useNavPopoverStore";
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
  const store = useNavPopoverStore();
  const isPopoverOpen =
    store.isUpdateOpen || store.isMessageOpen || store.isSettingOpen;

  const currentIcon =
    checked && isCheckable && !isPopoverOpen
      ? `${icon.split(".svg")[0]}-fill.svg`
      : icon;

  return (
    <Link href={href} className={navItemClasses} data-label={label}>
      <Image src={currentIcon} width={20} height={20} alt={label} unoptimized />
    </Link>
  );
}
