import Link from "next/link"
import { motion } from "framer-motion"
import { useSearchStore } from "../store/searchStore"
import { useUserStore } from "../store/userStore"

const Navbar = () => {
  const searching = useSearchStore((state) => state.searching)
  const { user, userLogged, fetching, throwError } = useUserStore(
    (state) => state
  )

  const handleLogOut = (string, bool1, bool2) => {
    userLogged(string)
    fetching(bool1)
    throwError(bool2)
  }

  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="mx-3 mt-3 flex flex-col items-center justify-center md:flex-row"
    >
      <motion.div
        initial={{ x: -50 }}
        animate={{ x: 0 }}
        className="mb-2 w-full md:mr-3 md:w-[140px]"
      >
        <Link href={"/"} passHref>
          <motion.button
            className="text-md h-14 w-full rounded-md bg-[#292929] font-bold text-[#dbdbdb] hover:bg-[#363636] md:w-[140px] md:rounded-full"
            whileTap={{ scale: 0.9 }}
            onClick={() => searching("")}
          >
            Home
          </motion.button>
        </Link>
      </motion.div>
      <motion.div
        initial={{ y: -50 }}
        animate={{ y: 0 }}
        className="mb-2 w-full md:mr-3 md:w-[140px]"
      >
        <Link href={"/games"} passHref>
          <motion.button
            className="text-md h-14 w-full rounded-md bg-[#292929] font-bold text-[#dbdbdb] hover:bg-[#363636] md:w-[140px] md:rounded-full"
            whileTap={{ scale: 0.9 }}
            onClick={() => searching("")}
          >
            Games
          </motion.button>
        </Link>
      </motion.div>
      {user ? (
        <motion.div
          initial={{ y: -50 }}
          animate={{ y: 0 }}
          className="mb-2 w-full md:mr-3 md:w-[140px]"
        >
          <motion.button
            className="text-md h-14 w-full rounded-md bg-[#292929] font-bold text-[#dbdbdb] hover:bg-[#363636] md:w-[140px] md:rounded-full"
            whileTap={{ scale: 0.9 }}
            onClick={() => handleLogOut(null, false, false)}
            suppressHydrationWarning={true}
          >
            Logout
          </motion.button>
        </motion.div>
      ) : (
        <motion.div
          initial={{ y: -50 }}
          animate={{ y: 0 }}
          className="mb-2 w-full md:mr-3 md:w-[140px]"
        >
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
        </motion.div>
      )}
      <motion.div
        initial={{ x: 50 }}
        animate={{ x: 0 }}
        className="mb-2 w-full md:mr-3 md:w-[140px]"
      >
        <Link href={"/search"} passHref>
          <motion.button
            className="text-md h-14 w-full rounded-md bg-[#292929] font-bold text-[#dbdbdb] hover:bg-[#363636] md:w-[140px] md:rounded-full"
            whileTap={{ scale: 0.9 }}
            onClick={() => searching("")}
          >
            Search
          </motion.button>
        </Link>
      </motion.div>
    </motion.nav>
  )
}

export default Navbar
