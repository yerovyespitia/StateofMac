import Link from "next/link"
import Router from "next/router"
import { NextSeo } from "next-seo"
import { useEffect, useRef } from "react"
import { useDispatch, useSelector } from "react-redux"
import { userLogin } from "../redux/userSlice"
import axios from "axios"
import { motion } from "framer-motion"

const Login = () => {
  const user = useSelector((state) => state.user.value)
  const dispatch = useDispatch()
  const useUserRef = useRef()
  const usePasswordRef = useRef()

  const handleSubmit = async (e) => {
    e.preventDefault()
    dispatch(userLogin({ user: null, isFetching: true, error: false }))
    try {
      const res = await axios.post(`${process.env.API_URL}api/auth/login`, {
        username: useUserRef.current.value,
        password: usePasswordRef.current.value,
      })
      dispatch(
        userLogin({
          user: res.data,
          isFetching: false,
          error: false,
          login: true,
        })
      )
      res.data && Router.push("/")
    } catch (error) {
      dispatch(
        userLogin({ user: null, isFetching: false, error: true, login: false })
      )
    }
  }

  useEffect(() => {
    if (user.user) Router.push("/")
  }, [])

  return (
    <div>
      <NextSeo title={"Login | State of Mac"} />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 0.8 } }}
        className="my-[200px] mx-0 flex flex-col items-center justify-center"
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
              className="mb-4 h-14 w-[80vw] rounded-md bg-[#292929] pl-4 text-lg text-[#dbdbdb] focus:outline-none md:w-[460px]"
              type="text"
              placeholder="Username"
              ref={useUserRef}
              required
            />
            <input
              className="mb-4 h-14 w-[80vw] rounded-md bg-[#292929] pl-4 text-lg text-[#dbdbdb] focus:outline-none md:w-[460px]"
              type="password"
              placeholder="Password"
              ref={usePasswordRef}
              required
            />
            <button
              className="h-14 cursor-pointer rounded-md bg-[#292929] text-lg font-bold text-[#dbdbdb]"
              type="submit"
              disabled={user.isFetching}
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
    </div>
  )
}

export default Login
