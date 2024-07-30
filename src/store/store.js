import { create } from "zustand";

export const useStore = create((set) => ({
    // 상태 선언
    bears:0,
    // 함수를 사용하여 set 사용시 상태 가져와 변경 가능
    increasePopulation: () => set((state) => ({bears: state.bears + 1})),
    removeAllBears: () => set({ bears: 0 })
}));