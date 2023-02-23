import { create } from "zustand"

export const useLoadingStore = create((set) => ({
  loaded: false,
  loading: (bool) => set({ loaded: bool }),
}))
