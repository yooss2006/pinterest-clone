"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { ChevronDown, Search } from "lucide-react";
import React from "react";

export function SearchForm() {
  return (
    <form>
      <div className="h-12 flex items-center group">
        <div
          className={cn(
            "h-full pl-4 flex items-center rounded-l-xl bg-gray-100",
            "group-hover:bg-gray-200"
          )}
        >
          <Search strokeWidth={4} size={16} className="text-gray-500" />
        </div>
        <Input
          placeholder="내 핀 검색"
          className={cn(
            "w-full h-full bg-gray-100 border-none shadow-none rounded-none",
            "placeholder:text-base placeholder:text-gray-900",
            "group-hover:bg-gray-200"
          )}
        />
        <div
          className={cn(
            "h-full flex items-center rounded-r-xl bg-gray-100 relative",
            "group-hover:bg-gray-200",
            "after:w-0.5 after:h-7 after:-left-1 after:absolute after:bg-gray-300"
          )}
        >
          <Button
            variant="ghost"
            className="h-full ml-1 px-8 font-bold hover:bg-gray-200 cursor-pointer"
            type="button"
          >
            내 핀 <ChevronDown />
          </Button>
        </div>
      </div>
    </form>
  );
}
