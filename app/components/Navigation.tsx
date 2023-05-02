'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { useSearchStore } from '../store/searchStore'
import { useUserStore } from '../store/userStore'

const Navigation = () => {
  const { searching } = useSearchStore()
  const { user, userLogged, fetching, throwError } = useUserStore()

  const handleLogOut = (string: any, bool1: boolean, bool2: boolean) => {
    userLogged(string)
    fetching(bool1)
    throwError(bool2)
  }

  const menuItems = [
    {
      label: 'Home',
      href: '/',
      function: '',
    },
    {
      label: 'Games',
      href: '/games',
      function: '',
    },
    {
      label: user ? 'Logout' : 'Login',
      href: user ? '/' : '/login',
    },
    {
      label: 'Search',
      href: '/search',
    },
  ]

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className='mx-3 mt-3 flex flex-col items-center justify-center md:mb-3 md:flex-row'
    >
      {menuItems.map(({ href, label }) => (
        <motion.div className='mb-2 w-full md:mr-3 md:w-[140px]' key={label}>
          <Link href={href}>
            <motion.button
              className='text-md h-14 w-full rounded-md bg-[#292929] font-bold text-[#dbdbdb] hover:bg-[#363636] md:w-[140px] md:rounded-full'
              whileTap={{ scale: 0.9 }}
              onClick={() =>
                label === 'Logout'
                  ? handleLogOut(null, false, false)
                  : label === 'Search'
                  ? searching('')
                  : null
              }
            >
              {label}
            </motion.button>
          </Link>
        </motion.div>
      ))}
    </motion.div>
  )
}

export default Navigation
