import { create } from "zustand"

export const useSearchStore = create((set) => ({
  search: "",
  searching: (e) => set(() => ({ search: e })),
}))
