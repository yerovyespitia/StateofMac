import Link from "next/link"
import { useDispatch, useSelector } from "react-redux"
import { search } from "../redux/gamesSlice"
import { userLogin } from "../redux/userSlice"
import { motion } from "framer-motion"
import { useRouter } from "next/router"

const Navbar = () => {
  const games = useSelector((state) => state.games.value)
  const user = useSelector((state) => state.user.value)
  const dispatch = useDispatch()
  const router = useRouter()

  const handleOnChange = (e) => {
    dispatch(search({ searchGame: e.target.value }))
  }

  const handleLogOut = () => {
    dispatch(
      userLogin({ user: null, isFetching: false, error: false, login: false })
    )
  }

  const handleOnClick = () => {
    dispatch(search({ searchGame: "" }))
  }

  const handleOnKeyDown = (e) => {
    if (e.key === "Enter") {
      router.replace(`/?searchGame=${games.searchGame}`)
    }
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
            onClick={handleOnClick}
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
          value={games.searchGame}
          onChange={handleOnChange}
        />
      </div>
      {user.user ? (
        <div className="w-full md:w-[140px]">
          <motion.button
            className="text-md h-14 w-full rounded-md bg-[#292929] font-bold text-[#dbdbdb] hover:bg-[#363636] md:w-[140px] md:rounded-full"
            whileTap={{ scale: 0.9 }}
            onClick={handleLogOut}
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
              onClick={handleOnClick}
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
