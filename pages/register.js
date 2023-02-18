import Router from "next/router"
import { NextSeo } from "next-seo"
import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import axios from "axios"
import { motion } from "framer-motion"

const Register = () => {
  const user = useSelector((state) => state.user.value)
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState(false)
  const handleSubmit = async (e) => {
    e.preventDefault()
    setError(false)
    try {
      const res = await axios.post(`${process.env.API_URL}api/auth/register`, {
        username,
        email,
        password,
      })
      res.data && window.location.replace("/login")
    } catch (error) {
      setError(true)
    }
  }

  useEffect(() => {
    if (user.user) Router.push("/")
  }, [user.user])

  return (
    <>
      <NextSeo title={"Register | State of Mac"} />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 0.8 } }}
        className="flex h-[calc(100vh-192px)] w-screen flex-col items-center justify-center"
      >
        <h1 className="mb-5 text-center text-3xl font-bold text-white">
          Register
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
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            <input
              className="mb-4 h-14 w-[94vw] rounded-md bg-[#292929] pl-4 text-lg text-[#dbdbdb] focus:outline-none md:w-[460px]"
              type={"email"}
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              className="mb-4 h-14 w-[94vw] rounded-md bg-[#292929] pl-4 text-lg text-[#dbdbdb] focus:outline-none md:w-[460px]"
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button
              className="h-14 cursor-pointer rounded-md bg-[#292929] text-lg font-bold text-[#dbdbdb]"
              type="submit"
            >
              Register
            </button>
          </form>
        </div>
        {error && (
          <span className="mt-5 text-lg text-[#b358bf]">
            Something must be wrong
          </span>
        )}
      </motion.div>
    </>
  )
}

export default Register
