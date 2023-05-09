'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

const LatestGames = ({ title, wallpaper }) => {
  return (
    <Link href={`/game/${title}`}>
      <motion.img
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.9 }}
        transition={{ duration: 0.5 }}
        src={wallpaper}
        className='cursor-pointer rounded-lg'
      />
    </Link>
  )
}

export default LatestGames
