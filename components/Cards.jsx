import { useSelector } from "react-redux"
import styles from "../styles/cards.module.scss"
import InfiniteScroll from "react-infinite-scroll-component"
import Card from "./Card"
import SortButton from "./SortButton"
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
    <main className={styles.cardsContainer}>
      <SortButton />
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
      <div className={styles.notFound}>
        {loading == true && games.length < 1 && <h1>No games found...</h1>}
      </div>
    </main>
  )
}

export default Cards
