"use client";

import { navItemClasses } from "@/components/layout/nav/nav-styles";
import { useNavPopoverStore } from "@/store/useNavPopoverStore";
import Image from "next/image";
import { ButtonHTMLAttributes, useCallback, useMemo } from "react";

type NavButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  icon: string;
  label: string;
  keyword: string;
};

export function NavButton({ label, icon, keyword, ...props }: NavButtonProps) {
  const store = useNavPopoverStore();

  const isPopoverOpen = useMemo(() => {
    switch (keyword) {
      case "update":
        return store.isUpdateOpen;
      case "message":
        return store.isMessageOpen;
      case "setting":
        return store.isSettingOpen;
      default:
        return false;
    }
  }, [keyword, store.isMessageOpen, store.isSettingOpen, store.isUpdateOpen]);

  const handleClick = useCallback(() => {
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
  }, [keyword, store]);

  return (
    <button
      {...props}
      className={navItemClasses}
      data-label={label}
      data-is-nav-button={true}
      onClick={handleClick}
    >
      <Image
        src={isPopoverOpen ? `${icon.split(".svg")[0]}-fill.svg` : icon}
        width={20}
        height={20}
        alt={label}
        className="pointer-events-none"
        unoptimized
      />
    </button>
  );
}
