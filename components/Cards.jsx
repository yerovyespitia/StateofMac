import InfiniteScroll from "react-infinite-scroll-component"
import Card from "./Card"
import useFetchingGames from "../hooks/useFetchingGames"
import { useSearchStore } from "../store/searchStore"
import { useLoadingStore } from "../store/loadingStore"

const Cards = () => {
  const search = useSearchStore((state) => state.search)
  const loaded = useLoadingStore((state) => state.loaded)

  // Fetching Games with useFetchingGames
  const { games, loadMoreGames } = useFetchingGames(
    `${process.env.API_URL}api/games?`
  )

  return (
    <main className="md:my-0 md:mx-auto md:max-w-fit">
      {loaded ? (
        <InfiniteScroll
          className="overflow-visible"
          dataLength={games.length}
          next={loadMoreGames}
          hasMore={search != "" ? false : true}
        >
          {games.map((game, i) => (
            <Card game={game} key={i} />
          ))}
        </InfiniteScroll>
      ) : (
        [...Array(10)].map((i) => (
          <div
            className="m-3 flex cursor-pointer flex-col items-center rounded-lg bg-[#292929] px-6 py-1 md:flex-row"
            style={{ animationDelay: `${i * 0.05}s`, animationDuration: "1s" }}
            key={i + 1}
          >
            <div className="mx-0 mt-5 mb-5 h-auto w-auto px-3 md:h-[221px] md:w-[374px] md:px-0">
              <div className="animate-pulse rounded-lg bg-[#363636] px-[170px] py-[110px]"></div>
            </div>
            <div className="flex flex-col items-center justify-center text-center md:ml-5 md:mr-4 md:block md:text-left">
              <p className="my-2 animate-pulse rounded-full bg-[#363636] py-2 px-44"></p>
              <p className="my-2 animate-pulse rounded-full bg-[#363636] py-2 px-44"></p>
              <p className="my-2 animate-pulse rounded-full bg-[#363636] py-2 px-44"></p>
              <p className="my-2 animate-pulse rounded-full bg-[#363636] py-2 px-44"></p>
            </div>
          </div>
        ))
      )}
      <div className="my-0 mx-auto text-2xl font-bold text-white">
        {loaded && games?.length < 1 && (
          <h1 className="mt-3 flex justify-center">No games found</h1>
        )}
      </div>
    </main>
  )
}

export default Cards
