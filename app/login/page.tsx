'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import axios from 'axios'
import { motion } from 'framer-motion'
import { useUserStore } from '../store/userStore'

const Login = () => {
  const router = useRouter()
  const [getUser, setGetUser] = useState('')
  const [getPass, setGetPass] = useState('')
  const { user, fetched, userLogged, fetching, throwError } = useUserStore(
    (state) => state
  )

  const handleLogin = (string: any, bool1: boolean, bool2: boolean) => {
    userLogged(string)
    fetching(bool1)
    throwError(bool2)
  }

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault()
    handleLogin(null, true, false)
    try {
      const res = await axios.post(`${process.env.API_URL}api/auth/login`, {
        username: getUser,
        password: getPass,
      })
      handleLogin(res.data, false, false)
      res.data && router.push('/')
    } catch (error) {
      handleLogin(null, false, true)
    }
  }

  useEffect(() => {
    if (user) router.push('/')
  }, [user])

  return (
    <div className='flex h-[calc(100vh-192px)] w-screen flex-col items-center justify-center'>
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 0.4 } }}
        className='mb-5 text-center text-3xl font-bold text-white'
      >
        Login
      </motion.h1>
      <div className='flex flex-col justify-center'>
        <form className='flex flex-col justify-center' onSubmit={handleSubmit}>
          <motion.input
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 0.7 } }}
            className='mb-4 h-14 w-[94vw] rounded-md bg-[#292929] pl-4 text-lg text-[#dbdbdb] focus:outline-none md:w-[460px]'
            type='text'
            placeholder='Username'
            onChange={(e) => setGetUser(e.target.value)}
            required
          />
          <motion.input
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 1 } }}
            className='mb-4 h-14 w-[94vw] rounded-md bg-[#292929] pl-4 text-lg text-[#dbdbdb] focus:outline-none md:w-[460px]'
            type='password'
            placeholder='Password'
            onChange={(e) => setGetPass(e.target.value)}
            required
          />
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 1.3 } }}
            className='h-14 cursor-pointer rounded-md bg-[#292929] text-lg font-bold text-[#dbdbdb]'
            type='submit'
            disabled={fetched}
          >
            Login
          </motion.button>
        </form>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 1.6 } }}
        className='mt-5 text-center text-lg text-[#b358bf]'
      >
        <Link href={'/register'}>Register if you don't have an account.</Link>
      </motion.div>
    </div>
  )
}

export default Login
