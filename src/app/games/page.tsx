import type { Metadata } from 'next'
import { IGames } from '@/types/games'
import { Card } from '@/components/Card'
import { getGames } from '@/utils/games'

export const metadata: Metadata = {
  title: 'Games',
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
