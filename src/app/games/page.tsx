import type { Metadata } from 'next'
import { IGames } from '@/types/games'
import { Card } from '@/components/Card'

export const metadata: Metadata = {
  title: 'Games',
}

const getGames = async () => {
  try {
    const res = await fetch(`https://stateofmacapi.onrender.com/api/games`)
    return res.json()
  } catch (error) {
    console.log('Failed to fetch data', error)
  }
}

export default async function Games() {
  const games: IGames[] = await getGames()

  return (
    <main className='mx-3 md:mx-auto md:my-0 md:max-w-fit'>
      {games.map((game, i) => (
        <Card {...game} key={i} />
      ))}
    </main>
  )
}
