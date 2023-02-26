import { useEffect, useState } from "react"
import { useSearchStore } from "../../store/searchStore"
import { useLoadingStore } from "../../store/loadingStore"
import Card from "../../components/Card"
import axios from "axios"

const Search = () => {
  const [games, setGames] = useState([])
  const { loaded, loading } = useLoadingStore((state) => state)
  const { searching, search } = useSearchStore((state) => state)

  useEffect(() => {
    axios
      .get(`${process.env.API_URL}api/games?searchGame=${search}`)
      .then((res) => {
        setGames(res.data)
        loading(true)
      })
  }, [search])

  return (
    <div className="mx-3 text-center md:pt-3">
      <input
        className="text-md h-14 w-full rounded-md bg-[#292929] pt-1 pr-0 pb-0 pl-4 text-center font-bold text-gray-400 focus:outline-none"
        type="text"
        name="search"
        placeholder="Search games"
        value={search}
        onChange={(e) => searching(e.target.value)}
      />
      {loaded && search.length > 0
        ? games.map((game, i) => <Card games={game} key={i} />)
        : ""}
      <div className="my-0 mx-auto text-2xl font-bold text-white">
        {loaded && games?.length < 1 && (
          <h1 className="mt-3 flex justify-center">No games found</h1>
        )}
      </div>
    </div>
  )
}

export default Search
