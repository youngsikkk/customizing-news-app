import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useMenuStore = create((set) => ({
    // 상태 선언
    menu:false,
    // 함수를 사용하여 set 사용시 상태 가져와 변경 가능
    setMenu: () => set((state) => ({menu: !state.menu})),
    closeMenu:() => set({ menu: false })
}));

export const useDarkStore = create(persist((set) => ({
    isDark: false,
    setDark: () => set((state) => ({isDark: !state.isDark}))
}), {
    name: "dark-mode-storage"
}))