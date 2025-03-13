"use client";

import { navItemClasses } from "@/components/layout/nav/nav-styles";
import Image from "next/image";

type NavButtonProps = {
  icon: string;
  label: string;
};

export function NavButton({ label, icon }: NavButtonProps) {
  return (
    <button className={navItemClasses} data-label={label}>
      <Image src={icon} width={20} height={20} alt={label} unoptimized />
    </button>
  );
}
