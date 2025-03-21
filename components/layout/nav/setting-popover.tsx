import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import React from "react";
import { SquareArrowOutUpRight } from "lucide-react";

const commonStyle =
  "w-full h-fit px-4 py-3 justify-between font-semibold text-base/5";

export default function SettingPopover() {
  return (
    <section>
      <h2 className="sr-only">설정</h2>
      <ul className="mb-4">
        {["설정", "홈피드 조정"].map((text) => (
          <li key={`setting-${text}`}>
            <Button className={cn(commonStyle)} variant="ghost">
              {text}
            </Button>
          </li>
        ))}
      </ul>
      <ul>
        {[
          "외부 계정 소유권 표시",
          "Chrome 앱 설치",
          "신고 및 위반 센터",
          "개인정보 보호권",
        ].map((text) => (
          <li key={`setting-${text}`}>
            <Button className={cn(commonStyle)} variant="ghost">
              {text}
            </Button>
          </li>
        ))}
      </ul>
      <ul>
        {[
          "도움말 센터",
          "서비스 약관",
          "개인정보처리방침",
          "베타 테스터 되기",
        ].map((text) => (
          <li key={`setting-${text}`}>
            <Button className={cn(commonStyle)} variant="ghost">
              <span>{text}</span> <SquareArrowOutUpRight />
            </Button>
          </li>
        ))}
      </ul>
    </section>
  );
}
