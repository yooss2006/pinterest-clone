"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import React, { useEffect, useRef } from "react";
import { SquareArrowOutUpRight } from "lucide-react";

const commonStyle =
  "w-full h-fit px-4 py-3 justify-between font-semibold text-base/5 focus:bg-gray-100 focus-visible:shadow-none";

const SettingList = ({
  items,
  withIcon = false,
}: {
  items: string[];
  withIcon?: boolean;
}) => (
  <ul className="mb-4 last:mb-0">
    {items.map((text) => (
      <li key={`setting-${text}`}>
        <Button className={cn(commonStyle)} variant="ghost" title={text}>
          <span>{text}</span>
          {withIcon && <SquareArrowOutUpRight />}
        </Button>
      </li>
    ))}
  </ul>
);

export default function SettingPopover() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const button = sectionRef.current?.querySelector("ul button");
    if (button) {
      (button as HTMLButtonElement).focus();
    }
  }, []);

  return (
    <section className="p-2" ref={sectionRef}>
      <h2 className="sr-only">설정</h2>
      <SettingList items={["설정", "홈피드 조정"]} />
      <SettingList
        items={[
          "외부 계정 소유권 표시",
          "Chrome 앱 설치",
          "신고 및 위반 센터",
          "개인정보 보호권",
        ]}
      />
      <SettingList
        items={[
          "도움말 센터",
          "서비스 약관",
          "개인정보처리방침",
          "베타 테스터 되기",
        ]}
        withIcon
      />
    </section>
  );
}
