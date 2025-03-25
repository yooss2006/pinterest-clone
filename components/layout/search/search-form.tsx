"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { ChevronDown, Search } from "lucide-react";
import React, { useState } from "react"; // useState 추가

const hoverBgClass = "bg-gray-200";

export function SearchForm() {
  const [isHovered, setIsHovered] = useState(false);

  const handleHover = (hover: boolean) => () => setIsHovered(hover);

  return (
    <form>
      <div className="h-12 flex items-center">
        {/* 왼쪽 아이콘 영역 */}
        <div
          className={cn(
            "h-full pl-4 flex items-center rounded-l-xl bg-gray-100 transition-colors duration-150",
            isHovered && hoverBgClass
          )}
          onMouseEnter={handleHover(true)}
          onMouseLeave={handleHover(false)}
        >
          <Search strokeWidth={4} size={16} className="text-gray-500" />
        </div>

        {/* 인풋 영역 */}
        <Input
          placeholder="내 핀 검색"
          className={cn(
            "w-full h-full bg-gray-100 border-none shadow-none rounded-none transition-colors duration-150",
            "placeholder:text-base placeholder:text-gray-900",
            "focus:outline-none focus:ring-0 focus-visible:ring-0",
            isHovered && hoverBgClass
          )}
          onMouseEnter={handleHover(true)}
          onMouseLeave={handleHover(false)}
        />

        {/* 버튼을 감싸는 영역 */}
        <div
          className={cn(
            "h-full flex items-center rounded-r-xl bg-gray-100 relative transition-colors duration-150",
            "after:w-0.5 after:h-7 after:-left-1 after:absolute after:bg-gray-300",
            isHovered && hoverBgClass
          )}
        >
          <Button
            variant="ghost"
            className={cn(
              "h-full ml-1 px-8 font-bold cursor-pointer rounded-r-lg",
              "hover:bg-gray-300"
            )}
            type="button"
          >
            내 핀 <ChevronDown />
          </Button>
        </div>
      </div>
    </form>
  );
}
