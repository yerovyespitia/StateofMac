import { LatestGames } from '@/components/LatestGames'
import { IGames } from '@/types/games'

const getGames = async () => {
  try {
    const res = await fetch(
      `https://stateofmacapi.onrender.com/api/games?limit=15`
    )
    return res.json()
  } catch (error) {
    console.log('Failed to fetch data', error)
  }
}

const localAPI = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/hello`)
    return res.json()
  } catch (error) {
    console.log(error)
  }
}

export default async function Home() {
  const games: IGames[] = await getGames()
  const local = await localAPI()

  console.log('local', local.message)

  return (
    <main className='flex w-full items-center justify-center'>
      <section className='mx-3 mt-1 mb-5 grid grid-cols-1 gap-4 md:mt-0 md:grid-cols-2 lg:max-w-6xl lg:grid-cols-3'>
        {games.map((game, i) => (
          <LatestGames {...game} key={i} />
        ))}
        <p>{local.message}</p>
      </section>
    </main>
  )
}
