'use client'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { useSearchStore } from '@/libs/store/searchStore'
import { useUserStore } from '@/libs/store/userStore'
import { getMenuItems } from './navigationMenu'
import { useUseractions } from './userActions'

export const Navigation = () => {
  const { searching } = useSearchStore()
  const { user } = useUserStore()
  const { handleLogOut } = useUseractions()

  const menuItems = getMenuItems(user, handleLogOut, searching)

  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className='mx-3 mt-3 flex flex-col items-center justify-center md:mb-3 md:flex-row border-b border-b-[#252525] pb-2'
    >
      {menuItems.map(({ href, label }) => (
        <ul
          className='mb-2 flex w-full text-center md:mr-3 md:w-[140px]'
          key={label}
        >
          <Link href={href} className='w-full'>
            <motion.li
              className='text-md h-14 rounded-md bg-[#292929] pt-4 font-bold text-[#dbdbdb] hover:bg-[#363636] md:w-[140px] md:rounded-full'
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
            </motion.li>
          </Link>
        </ul>
      ))}
    </motion.nav>
  )
}
