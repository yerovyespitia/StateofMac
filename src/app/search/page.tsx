import { SearchCards } from '@/components/SearchCards'
import { IGames } from '@/types/games'
import { getGames } from '@/utils/games'

export default async function Search() {
  const games: IGames[] = await getGames()

  return (
    <section className='mx-3'>
      <SearchCards games={games} />
    </section>
  )
}
