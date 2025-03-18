"use client";

import { navItemClasses } from "@/components/layout/nav/nav-styles";
import { useNavPopoverStore } from "@/store/useNavPopoverStore";
import Image from "next/image";
import { ButtonHTMLAttributes, MouseEvent } from "react";

type NavButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  icon: string;
  label: string;
  keyword: string;
};

export function NavButton({ label, icon, keyword, ...props }: NavButtonProps) {
  const store = useNavPopoverStore();

  const handleClick = () => {
    console.log(keyword);
    switch (keyword) {
      case "update":
        store.toggleUpdate();
        break;
      case "message":
        store.toggleMessage();
        break;
      case "setting":
        store.toggleSetting();
        break;
    }
  };

  return (
    <button
      {...props}
      className={navItemClasses}
      data-label={label}
      onClick={handleClick}
    >
      <Image src={icon} width={20} height={20} alt={label} unoptimized />
    </button>
  );
}
