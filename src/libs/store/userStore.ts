import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface User {
  user: string | null
  fetched: boolean
  error: boolean
  userLogged: (string: string) => void
  fetching: (bool: boolean) => void
  throwError: (bool: boolean) => void
}

export const useUserStore = create(
  persist<User>(
    (set) => ({
      user: null,
      fetched: false,
      error: false,
      userLogged: (string) => set({ user: string }),
      fetching: (bool) => set({ fetched: bool }),
      throwError: (bool) => set({ error: bool }),
    }),
    { name: 'manage-login' }
  )
)
