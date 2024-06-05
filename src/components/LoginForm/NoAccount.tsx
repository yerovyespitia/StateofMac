'use client'
import Link from 'next/link'
import { motion } from 'framer-motion'

export const NoAccount = () => {
  return (
    <motion.span
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 1.6 } }}
    >
      <Link href={'/register'}>Register if you don't have an account.</Link>
    </motion.span>
  )
}
