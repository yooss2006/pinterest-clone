"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import React, { useEffect, useRef, useState } from "react";
import { SquareArrowOutUpRight } from "lucide-react";

const buttonOption = {
  setting: { options: ["설정", "홈피드 조정"], withIcon: false },
  governance: {
    options: [
      "외부 계정 소유권 표시",
      "Chrome 앱 설치",
      "신고 및 위반 센터",
      "개인정보 보호권",
    ],
    withIcon: false,
  },
  resources: {
    options: [
      "도움말 센터",
      "서비스 약관",
      "개인정보처리방침",
      "베타 테스터 되기",
    ],
    withIcon: true,
  },
};

const commonStyle =
  "w-full h-fit px-4 py-3 cursor-pointer justify-between font-semibold text-base/5 focus-visible:outline-none focus-visible:ring-0 focus-visible:shadow-none";

const SettingList = ({
  items,
  withIcon = false,
  active,
}: {
  items: string[];
  withIcon?: boolean;
  active: string;
}) => (
  <ul className="mb-4 last:mb-0">
    {items.map((text) => (
      <li key={`setting-${text}`}>
        <Button
          className={cn(commonStyle, active === text && "bg-gray-100")}
          variant="ghost"
          title={text}
          data-setting={text}
        >
          <span>{text}</span>
          {withIcon && <SquareArrowOutUpRight />}
        </Button>
      </li>
    ))}
  </ul>
);

export default function SettingPopover() {
  const [active, setActive] = useState(buttonOption.setting.options[0]);
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const section = sectionRef.current;

    const handleHover = (e: MouseEvent) => {
      const target = e.target as HTMLElement;

      const button = target.closest(
        "button[data-setting]"
      ) as HTMLElement | null;

      if (button) {
        const text = button.getAttribute("data-setting");
        if (text) setActive(text);
      }
    };

    if (section) {
      section.addEventListener("mouseover", handleHover, true);
    }

    return () => {
      section?.removeEventListener("mouseover", handleHover, true);
    };
  }, []);

  return (
    <section className="p-2" ref={sectionRef}>
      <h2 className="sr-only">설정</h2>
      {Object.values(buttonOption).map(({ options, withIcon }, index) => (
        <SettingList
          key={`setting-list-${index}`}
          items={options}
          withIcon={withIcon}
          active={active}
        />
      ))}
    </section>
  );
}
