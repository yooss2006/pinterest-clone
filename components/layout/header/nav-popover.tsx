'use client';
import MessagePopover from '@/components/layout/header/message-popover';
import SettingPopover from '@/components/layout/header/setting-popover';
import UpdatePopover from '@/components/layout/header/update-popover';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { useNavPopoverStore } from '@/store/useNavPopoverStore';

export function NavPopover() {
  const store = useNavPopoverStore();

  const isOpen = store.isUpdateOpen || store.isMessageOpen || store.isSettingOpen;

  return (
    <Popover open={isOpen}>
      <PopoverTrigger />
      <PopoverContent
        side="right"
        align="start"
        sideOffset={20}
        className="w-[392px] max-w-[392px] translate-y-[-16px] rounded-2xl border-none p-0 shadow-xl inset-shadow-2xs"
        onPointerDownOutside={(event) => {
          const target = event.target as HTMLElement;
          if (!target.dataset.isNavButton) {
            store.reset();
          }
        }}
      >
        {(() => {
          if (store.isUpdateOpen) return <UpdatePopover />;
          if (store.isMessageOpen) return <MessagePopover />;
          if (store.isSettingOpen) return <SettingPopover />;
        })()}
      </PopoverContent>
    </Popover>
  );
}
