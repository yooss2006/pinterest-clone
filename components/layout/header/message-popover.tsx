"use client";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { useNavPopoverStore } from "@/store/useNavPopoverStore";
import { Ellipsis, X } from "lucide-react";
import React from "react";

const commonButtonClasses = cn(
  "p-2 rounded-full cursor-pointer",
  "duration-75 hover:bg-gray-100"
);

function CloseButton() {
  const store = useNavPopoverStore();

  return (
    <button className={commonButtonClasses} onClick={store.reset}>
      <X size={24} strokeWidth={3} />
    </button>
  );
}

function MeatballMenuButton() {
  const buttonRef = React.useRef<HTMLButtonElement>(null);

  const handleOpenChange = (open: boolean) => {
    if (open) {
      buttonRef.current?.focus();
    }
  };

  return (
    <Popover onOpenChange={handleOpenChange}>
      <PopoverTrigger asChild>
        <button className={commonButtonClasses}>
          <Ellipsis size={24} strokeWidth={3} />
        </button>
      </PopoverTrigger>
      <PopoverContent
        sideOffset={5}
        align="end"
        alignOffset={10}
        className="p-1 w-fit"
      >
        <Button
          ref={buttonRef}
          variant="ghost"
          className="focus:bg-gray-100 focus-visible:shadow-none"
        >
          모두 읽음으로 표시
        </Button>
      </PopoverContent>
    </Popover>
  );
}

export default function MessagePopover() {
  return (
    <section className="h-[calc(100vh-32px)] flex pb-5 flex-col">
      <header className="flex justify-between items-center">
        <div className="ml-2 flex items-center">
          <CloseButton />
          <h2 className="py-5 text-xl font-semibold">메세지</h2>
        </div>
        <MeatballMenuButton />
      </header>
      <div className="h-full overflow-y-scroll"></div>
    </section>
  );
}
