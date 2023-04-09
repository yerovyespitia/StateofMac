import type { Metadata } from 'next'
import Card from '../components/Card'

export const metadata: Metadata = {
  title: 'Games',
}

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

async function getGames() {
  const res = await fetch(`${process.env.API_URL}api/games`)

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return res.json()
}

const Games = async () => {
  const games: Games[] = await getGames()

  return (
    <div className='mx-3 md:my-0 md:mx-auto md:max-w-fit'>
      {games.map((game, i) => (
        <Card {...game} key={i} />
      ))}
    </div>
  )
}

export default Games
