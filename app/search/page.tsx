import SearchCards from './SearchCards'

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

const Search = async () => {
  const games: Games[] = await getGames()

  return (
    <div className='mx-3 text-center'>
      <SearchCards games={games} />
    </div>
  )
}

export default Search
