import Link from "next/link"
import { motion } from "framer-motion"
import { useRouter } from "next/router"
import { useSearchStore } from "../store/searchStore"
import { useUserStore } from "../store/userStore"

const Navbar = () => {
  const { user, userLogged, fetching, throwError } = useUserStore(
    (state) => state
  )
  const { searching, search } = useSearchStore((state) => state)
  const router = useRouter()

  const handleLogOut = (string, bool1, bool2) => {
    userLogged(string)
    fetching(bool1)
    throwError(bool2)
  }

  const handleOnKeyDown = (e) => {
    if (e.key === "Enter") router.replace(`/?searchGame=${search}`)
  }

  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="mx-3 mt-3 flex flex-col items-center justify-center md:flex-row"
      onKeyDown={handleOnKeyDown}
    >
      <div className="w-full md:w-[140px]">
        <Link href={"/"} passHref>
          <motion.button
            className="text-md h-14 w-full rounded-md bg-[#292929] font-bold text-[#dbdbdb] hover:bg-[#363636] md:w-[140px] md:rounded-full"
            whileTap={{ scale: 0.9 }}
            onClick={() => searching("")}
          >
            Home
          </motion.button>
        </Link>
      </div>
      <div className="m-3 w-full md:ml-4 md:mr-4 md:w-[450px]">
        <input
          className="text-md h-14 w-full rounded-md bg-[#292929] pt-1 pr-0 pb-0 pl-4 text-center font-bold text-[#555555] focus:outline-none md:w-[450px] md:rounded-full"
          type="text"
          name="search"
          placeholder="Search games"
          value={search}
          onChange={(e) => searching(e.target.value)}
        />
      </div>
      {user ? (
        <div className="w-full md:w-[140px]">
          <motion.button
            className="text-md h-14 w-full rounded-md bg-[#292929] font-bold text-[#dbdbdb] hover:bg-[#363636] md:w-[140px] md:rounded-full"
            whileTap={{ scale: 0.9 }}
            onClick={() => handleLogOut(null, false, false)}
            suppressHydrationWarning={true}
          >
            Logout
          </motion.button>
        </div>
      ) : (
        <div className="w-full md:w-[140px]">
          <Link href={"/login"} passHref>
            <motion.button
              className="text-md h-14 w-full rounded-md bg-[#292929] font-bold text-[#dbdbdb] hover:bg-[#363636] md:w-[140px] md:rounded-full"
              whileTap={{ scale: 0.9 }}
              onClick={() => searching("")}
              suppressHydrationWarning={true}
            >
              Login
            </motion.button>
          </Link>
        </div>
      )}
    </motion.nav>
  )
}

export default Navbar
