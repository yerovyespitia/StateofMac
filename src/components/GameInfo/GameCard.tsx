'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { GameState } from '@/components/Card/GameState'
import { IGames } from '@/types/games'

export const GameCard = ({ wallpaper, title, state }: IGames) => {
  return (
    <section>
      <section className='mt-3'>
        <Image
          className='w-full rounded-lg'
          src={wallpaper}
          alt={title}
          width={1280}
          height={720}
        />
      </section>
      <motion.section
        className='text-center'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >
        <h1 className='mt-3 mb-3 text-3xl font-bold text-white'>{title}</h1>
        <GameState state={state} />
      </motion.section>
    </section>
  )
}
