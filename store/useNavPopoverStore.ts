import { create } from "zustand";
import { combine } from "zustand/middleware";

const INITIAL_VALUE = {
  isUpdateOpen: false,
  isMessageOpen: false,
  isSettingOpen: false,
};

export const useNavPopoverStore = create(
  combine(INITIAL_VALUE, (set) => ({
    toggleUpdate: () =>
      set((state) => ({ ...INITIAL_VALUE, isUpdateOpen: !state.isUpdateOpen })),
    toggleMessage: () =>
      set((state) => ({
        ...INITIAL_VALUE,
        isMessageOpen: !state.isMessageOpen,
      })),
    toggleSetting: () =>
      set((state) => ({
        ...INITIAL_VALUE,
        isSettingOpen: !state.isSettingOpen,
      })),
    reset: () => set(INITIAL_VALUE),
  }))
);
