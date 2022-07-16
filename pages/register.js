import Router from "next/router"
import { NextSeo } from "next-seo"
import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import styles from "../styles/signin.module.scss"
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
  }, [])

  return (
    <div>
      <NextSeo title={"Register | State of Mac"} />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 0.8 } }}
        className={styles.container}
      >
        <h1>Register</h1>
        <div className={styles.containerForm}>
          <form className={styles.containerForm} onSubmit={handleSubmit}>
            <input
              className={styles.containerInput}
              type="text"
              placeholder="Username"
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            <input
              className={styles.containerInput}
              type={"email"}
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              className={styles.containerInput}
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button className={styles.containerButton} type="submit">
              Register
            </button>
          </form>
        </div>
        {error && <span className={styles.error}>Something must be wrong</span>}
      </motion.div>
    </div>
  )
}

export default Register
