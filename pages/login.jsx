import Link from "next/link"
import Router from "next/router"
import { NextSeo } from "next-seo"
import { useEffect, useRef } from "react"
import { useDispatch, useSelector } from "react-redux"
import { userLogin } from "../redux/userSlice"
import styles from "../styles/signin.module.scss"
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
    user.user && Router.push("/")
  }, [])

  return (
    <div>
      <NextSeo title={"Login | State of Mac"} />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 0.8 } }}
        className={styles.container}
      >
        <h1>Login</h1>
        <div className={styles.containerForm}>
          <form className={styles.containerForm} onSubmit={handleSubmit}>
            <input
              className={styles.containerInput}
              type="text"
              placeholder="Username"
              ref={useUserRef}
              required
            />
            <input
              className={styles.containerInput}
              type="password"
              placeholder="Password"
              ref={usePasswordRef}
              required
            />
            <button
              className={styles.containerButton}
              type="submit"
              disabled={user.isFetching}
            >
              Login
            </button>
          </form>
        </div>
        <div className={styles.register}>
          <Link href={"/register"}>
            Register if you don&apos;t have an account.
          </Link>
        </div>
      </motion.div>
    </div>
  )
}

export default Login
