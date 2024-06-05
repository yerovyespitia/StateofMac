import { SearchCards } from '@/components/SearchCards'
import { IGames } from '@/types/games'

const getGames = async () => {
  try {
    const res = await fetch(`https://stateofmacapi.onrender.com/api/games`)
    return res.json()
  } catch (error) {
    console.log('Failed to fetch data', error)
  }
}

export default async function Search() {
  const games: IGames[] = await getGames()

  return (
    <section className='mx-3'>
      <SearchCards games={games} />
    </section>
  )
}
