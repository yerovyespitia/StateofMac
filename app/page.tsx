import LatestGames from 'components/LatestGames'

interface LatestGames {
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
  const res = await fetch(`${process.env.API_URL}api/games?limit=15`)

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return res.json()
}

const Page = async () => {
  const games: LatestGames[] = await getGames()

  return (
    <main className='flex w-full items-center justify-center'>
      <div className='mx-3 mt-1 mb-5 grid grid-cols-1 gap-4 md:mt-0 md:grid-cols-2 lg:max-w-6xl lg:grid-cols-3'>
        {games.map((game, i) => (
          <LatestGames {...game} key={i} />
        ))}
      </div>
    </main>
  )
}

export default Page
