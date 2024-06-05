'use client'
import { useUserStore } from '@/libs/store/userStore'
import { motion } from 'framer-motion'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import axios from 'axios'

export const LoginForm = () => {
  const router = useRouter()
  const [getUser, setGetUser] = useState('')
  const [getPass, setGetPass] = useState('')
  const { user, fetched, userLogged, fetching, throwError } = useUserStore()

  const handleLogin = (string: any, bool1: boolean, bool2: boolean) => {
    userLogged(string)
    fetching(bool1)
    throwError(bool2)
  }

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault()
    handleLogin(null, true, false)
    try {
      const res = await axios.post(
        `https://stateofmacapi.onrender.com/api/auth/login`,
        {
          username: getUser,
          password: getPass,
        }
      )
      handleLogin(res.data, false, false)
      res.data && router.push('/')
    } catch (error) {
      handleLogin(null, false, true)
    }
  }

  useEffect(() => {
    if (user) router.push('/')
  }, [])

  return (
    <motion.form
      action='submit'
      className='flex flex-col justify-center'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.7 } }}
      onSubmit={handleSubmit}
    >
      <input
        type='text'
        placeholder='Username'
        className='mb-4 h-14 w-[94vw] rounded-md bg-[#292929] pl-4 text-lg text-[#dbdbdb] focus:outline-none md:w-[460px]'
        required
        onChange={(e) => setGetUser(e.target.value)}
      />
      <input
        type='password'
        placeholder='Password'
        className='mb-4 h-14 w-[94vw] rounded-md bg-[#292929] pl-4 text-lg text-[#dbdbdb] focus:outline-none md:w-[460px]'
        required
        onChange={(e) => setGetPass(e.target.value)}
      />
      <button
        type='submit'
        className='h-14 cursor-pointer rounded-md bg-[#292929] text-lg font-bold text-[#dbdbdb]'
        disabled={fetched}
      >
        Login
      </button>
    </motion.form>
  )
}
