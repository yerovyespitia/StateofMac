'use client'

import { motion } from 'framer-motion'
import GameState from '../../components/GameState'
import Image from 'next/image'

const GameCard = ({ games }) => {
  return (
    <>
      <div className='mt-3'>
        <Image
          className='w-full rounded-lg'
          src={games.wallpaper}
          alt={games.title}
          width={1280}
          height={720}
        />
      </div>
      <div className='text-center'>
        <motion.h1
          className='mt-3 mb-3 text-3xl font-bold text-white'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
        >
          {games.title}
        </motion.h1>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
        >
          <GameState state={games.state} />
        </motion.div>
      </div>
    </>
  )
}

export default GameCard
