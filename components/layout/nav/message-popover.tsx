"use client";
import { cn } from "@/lib/utils";
import { useNavPopoverStore } from "@/store/useNavPopoverStore";
import { Ellipsis, X } from "lucide-react";
import React from "react";

const commonButtonClasses = cn(
  "p-2 rounded-full",
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
  return (
    <button className={commonButtonClasses}>
      <Ellipsis size={24} strokeWidth={3} />
    </button>
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
