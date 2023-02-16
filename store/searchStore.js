import { create } from "zustand"

export const useSearchStore = create((set) => ({
  search: "",
  searching: (e) => set(() => ({ search: e.target.value })),
  cleanSearch: () => set(() => ({ search: "" })),
}))
