import { create } from 'zustand'

interface Search {
  search: string
  searching: (e: string) => void
}

export const useSearchStore = create<Search>((set) => ({
  search: '',
  searching: (e) => set(() => ({ search: e })),
}))
