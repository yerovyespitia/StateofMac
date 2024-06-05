'use client'
import { useUserStore } from '@/libs/store/userStore'
import { motion } from 'framer-motion'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import axios from 'axios'

export const RegisterForm = () => {
  const router = useRouter()
  const user = useUserStore((state) => state.user)
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(false)

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault()
    setError(false)
    try {
      const res = await axios.post(
        `https://stateofmacapi.onrender.com/api/auth/register`,
        {
          username,
          email,
          password,
        }
      )
      res.data && window.location.replace('/login')
    } catch (error) {
      setError(true)
    }
  }

  useEffect(() => {
    if (user) router.push('/')
  }, [user])

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
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type='email'
        placeholder='Email'
        className='mb-4 h-14 w-[94vw] rounded-md bg-[#292929] pl-4 text-lg text-[#dbdbdb] focus:outline-none md:w-[460px]'
        required
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type='password'
        placeholder='Password'
        className='mb-4 h-14 w-[94vw] rounded-md bg-[#292929] pl-4 text-lg text-[#dbdbdb] focus:outline-none md:w-[460px]'
        required
        onChange={(e) => setPassword(e.target.value)}
      />
      <button
        type='submit'
        className='h-14 cursor-pointer rounded-md bg-[#292929] text-lg font-bold text-[#dbdbdb]'
      >
        Register
      </button>
      {error && (
        <span className='mt-5 text-lg text-[#b358bf]'>
          Something must be wrong
        </span>
      )}
    </motion.form>
  )
}
