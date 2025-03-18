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

  const handleOpenChange = (open: boolean) => {
    if (!open) {
      store.reset();
    }
  };

  return (
    <Popover open={isOpen} onOpenChange={handleOpenChange}>
      <PopoverTrigger />
      <PopoverContent
        side="right"
        align="start"
        sideOffset={30}
        alignOffset={10}
      >
        <div>하이</div>
      </PopoverContent>
    </Popover>
  );
}
