'use client'

import { motion } from 'framer-motion'
import { useSearchStore } from '../store/searchStore'
import Card from '../components/Card'

interface Games {
  _id: string
  title: string
  state: string
  reports: number
  wallpaper: string
  createdAt: Date
  updatedAt: Date
  __v: number
}

const getFilteredGames = (games: Games[], search: string) => {
  return games.filter((game) => game.title.toLowerCase().includes(search))
}

const SearchCards = ({ games }) => {
  const { searching, search } = useSearchStore((state) => state)
  return (
    <>
      <motion.input
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 0.6 } }}
        className='text-md h-14 w-full rounded-md bg-[#292929] text-center font-bold text-gray-400 focus:outline-none md:w-[896px] md:rounded-full'
        type='text'
        name='search'
        placeholder='Search games'
        value={search}
        onChange={(e) => searching(e.target.value)}
      />

      <div className='mx-auto my-0 max-w-4xl'>
        {search.length > 0 &&
          getFilteredGames(games, search).map((game, i) => (
            <Card {...game} key={i} />
          ))}
      </div>

      <div className='mx-auto my-0 text-2xl font-bold text-white'>
        {games?.length < 1 && (
          <h1 className='mt-3 flex justify-center'>No games found</h1>
        )}
      </div>
    </>
  )
}

export default SearchCards
