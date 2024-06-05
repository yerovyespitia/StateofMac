import { useUserStore } from '@/libs/store/userStore'

export const useUseractions = () => {
  const { userLogged, fetching, throwError } = useUserStore()

  const handleLogOut = (string: any, bool1: boolean, bool2: boolean) => {
    userLogged(string)
    fetching(bool1)
    throwError(bool2)
  }

  return { handleLogOut }
}
