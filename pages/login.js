import Link from "next/link"
import Router from "next/router"
import { NextSeo } from "next-seo"
import { useEffect, useRef } from "react"
import axios from "axios"
import { motion } from "framer-motion"
import { useUserStore } from "../store/userStore"

const Login = () => {
  const { user, fetched, userLogged, fetching, throwError } = useUserStore(
    (state) => state
  )
  const useUserRef = useRef()
  const usePasswordRef = useRef()

  const handleLogin = (string, bool1, bool2) => {
    userLogged(string)
    fetching(bool1)
    throwError(bool2)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    handleLogin(null, true, false)
    try {
      const res = await axios.post(`${process.env.API_URL}api/auth/login`, {
        username: useUserRef.current.value,
        password: usePasswordRef.current.value,
      })
      handleLogin(res.data, false, false)
      res.data && Router.push("/")
    } catch (error) {
      handleLogin(null, false, true)
    }
  }

  useEffect(() => {
    if (user) Router.push("/")
  }, [user])

  return (
    <>
      <NextSeo title={"Login | State of Mac"} />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 0.8 } }}
        className="flex h-[calc(100vh-192px)] w-screen flex-col items-center justify-center"
      >
        <h1 className="mb-5 text-center text-3xl font-bold text-white">
          Login
        </h1>
        <div className="flex flex-col justify-center">
          <form
            className="flex flex-col justify-center"
            onSubmit={handleSubmit}
          >
            <input
              className="mb-4 h-14 w-[94vw] rounded-md bg-[#292929] pl-4 text-lg text-[#dbdbdb] focus:outline-none md:w-[460px]"
              type="text"
              placeholder="Username"
              ref={useUserRef}
              required
            />
            <input
              className="mb-4 h-14 w-[94vw] rounded-md bg-[#292929] pl-4 text-lg text-[#dbdbdb] focus:outline-none md:w-[460px]"
              type="password"
              placeholder="Password"
              ref={usePasswordRef}
              required
            />
            <button
              className="h-14 cursor-pointer rounded-md bg-[#292929] text-lg font-bold text-[#dbdbdb]"
              type="submit"
              disabled={fetched}
            >
              Login
            </button>
          </form>
        </div>
        <div className="mt-5 text-center text-lg text-[#b358bf]">
          <Link href={"/register"}>
            Register if you don&apos;t have an account.
          </Link>
        </div>
      </motion.div>
    </>
  )
}

export default Login
