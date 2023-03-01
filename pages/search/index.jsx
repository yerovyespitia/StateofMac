import { motion } from "framer-motion"
import { useSearchStore } from "../../store/searchStore"
import Card from "../../components/Card"

const getFilteredGames = (games, search) => {
  return games.filter((game) => game.title.toLowerCase().includes(search))
}

const Search = ({ games }) => {
  const { searching, search } = useSearchStore((state) => state)

  return (
    <div className="mx-3 text-center md:pt-3">
      <motion.input
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 0.6 } }}
        className="text-md h-14 w-full rounded-md bg-[#292929] text-center font-bold text-gray-400 focus:outline-none"
        type="text"
        name="search"
        placeholder="Search games"
        value={search}
        onChange={(e) => searching(e.target.value)}
      />
      {search.length > 0
        ? getFilteredGames(games, search).map((game, i) => (
            <Card games={game} key={i} />
          ))
        : ""}
      <div className="my-0 mx-auto text-2xl font-bold text-white">
        {games?.length < 1 && (
          <h1 className="mt-3 flex justify-center">No games found</h1>
        )}
      </div>
    </div>
  )
}

export default Search

export async function getStaticProps() {
  const res = await fetch(`${process.env.API_URL}api/games`)
  const games = await res.json()

  return {
    props: {
      games,
    },
  }
}
