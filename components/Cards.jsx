import { useSelector } from "react-redux"
import InfiniteScroll from "react-infinite-scroll-component"
import Card from "./Card"
import ReactLoading from "react-loading"
import useFetchingGames from "../hooks/useFetchingGames"

const Cards = () => {
  const loading = useSelector((state) => state.loading.value.loaded)
  const gamesFiltered = useSelector((state) => state.games.value.searchGame)

  // Fetching Games with useFetchingGames
  const { games, loadMoreGames } = useFetchingGames(
    `${process.env.API_URL}api/games?`
  )

  return (
    <main className="md:my-0 md:mx-auto md:max-w-fit">
      {loading ? (
        <InfiniteScroll
          style={{ overflow: "visible" }}
          dataLength={games.length}
          next={loadMoreGames}
          hasMore={gamesFiltered != "" ? false : true}
        >
          {games.map((game, i) => (
            <Card game={game} key={i} />
          ))}
        </InfiniteScroll>
      ) : (
        <div
          style={{
            margin: "0 auto",
          }}
        >
          <ReactLoading type={"spin"} color={"white"} height={50} width={50} />
        </div>
      )}
      <div className="my-0 mx-auto text-2xl font-bold text-white">
        {loading == true && games.length < 1 && <h1>No games found</h1>}
      </div>
    </main>
  )
}

export default Cards
