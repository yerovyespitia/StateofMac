import { create } from "zustand"
import { persist } from "zustand/middleware"

export const useUserStore = create(
  persist(
    (set) => ({
      user: null,
      fetched: false,
      error: false,
      userLogged: (string) => set({ user: string }),
      fetching: (bool) => set({ fetched: bool }),
      throwError: (bool) => set({ error: bool }),
    }),
    { name: "manage-login" }
  )
)
