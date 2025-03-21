"use client";
import SettingPopover from "@/components/layout/nav/setting-popover";
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
        {(() => {
          if (store.isUpdateOpen) return <div>업데이트</div>;
          if (store.isMessageOpen) return <div>메시지</div>;
          if (store.isSettingOpen) return <SettingPopover />;
        })()}
      </PopoverContent>
    </Popover>
  );
}
