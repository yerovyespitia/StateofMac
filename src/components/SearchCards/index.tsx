'use client'
import { motion } from 'framer-motion'
import { useSearchStore } from '@/libs/store/searchStore'
import { Card } from '@/components/Card'
import { IGames } from '@/types/games'

const getFilteredGames = (games: IGames[], search: string) => {
  return games.filter((game) => game.title.toLowerCase().includes(search))
}

export const SearchCards = ({ games }: any) => {
  const { searching, search } = useSearchStore((state) => state)

  return (
    <section className='w-full'>
      <section className='max-w-[896px] text-center mx-auto'>
        <motion.input
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 0.6 } }}
          className='text-md h-14 w-full rounded-md bg-[#292929] text-center font-bold text-gray-400 focus:outline-none md:rounded-full'
          type='text'
          name='search'
          placeholder='Search games'
          value={search}
          onChange={(e) => searching(e.target.value)}
        />
      </section>

      <section className='mx-auto my-0 max-w-4xl'>
        {search.length > 0 &&
          getFilteredGames(games, search).map((game, i) => (
            <Card {...game} key={i} />
          ))}
      </section>

      <article className='mx-auto my-0 text-2xl font-bold text-white'>
        {games?.length < 1 && (
          <h1 className='mt-3 flex justify-center'>No games found</h1>
        )}
      </article>
    </section>
  )
}
