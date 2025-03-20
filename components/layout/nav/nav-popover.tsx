"use client";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useNavPopoverStore } from "@/store/useNavPopoverStore";

export function NavPopover() {
  const store = useNavPopoverStore();

  const isOpen =
    store.isUpdateOpen || store.isMessageOpen || store.isSettingOpen;

  return (
    <Popover open={isOpen}>
      <PopoverTrigger />
      <PopoverContent
        side="right"
        align="start"
        sideOffset={30}
        className="w-[392px] max-w-[392px] translate-y-[-16px]"
        onPointerDownOutside={(event) => {
          const target = event.target as HTMLElement;
          if (!target.dataset.isNavButton) {
            store.reset();
          }
        }}
      >
        <div>하이</div>
      </PopoverContent>
    </Popover>
  );
}
