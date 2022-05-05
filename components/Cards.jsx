import Image from "next/image"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { load } from "../redux/loadingSlice"
import styles from "../styles/cards.module.scss"
import { nanoid } from "nanoid"
import { motion } from "framer-motion"
import axios from "axios"
import InfiniteScroll from "react-infinite-scroll-component"
import expand from "../public/images/expand.svg"
import Card from "./Card"
import NotFound from "./NotFound"
import ReactLoading from "react-loading"
import WelcomeUser from "./WelcomeUser"

const Cards = () => {
  const user = useSelector((state) => state.user.value)
  const loading = useSelector((state) => state.loading.value)
  const gamesFiltered = useSelector((state) => state.games.value)
  const [games, setGames] = useState([])
  const [showButtons, setShowButtons] = useState(false)
  const [selected, setSelected] = useState("All Games")
  const [page, setPage] = useState(1)
  const [prevSearchGame, setPrevSearchGame] = useState("")
  const [loadMore, setLoadMore] = useState(false)
  const options = ["All Games"]
  const dispatch = useDispatch()

  // Filter game cards
  const handleFilterButtons = () => {
    setShowButtons(!showButtons)
  }

  // Show more game cards
  const loadMoreGames = async () => {
    setPage((page += 1))
    setLoadMore(true)
  }

  // Fetch game cards and search games
  useEffect(() => {
    axios
      .get(`${process.env.API_URL}api/games?`, {
        params: {
          page,
          limit: 60,
          searchGame: gamesFiltered.searchGame,
        },
      })
      .then((res) => {
        if (gamesFiltered.searchGame != "") {
          setPrevSearchGame(gamesFiltered.searchGame)
          if (!loadMore) {
            setGames(res.data)
            setPage(1)
          } else {
            setGames([...games, ...res.data])
          }
          setLoadMore(false)
        } else if (prevSearchGame != "" && gamesFiltered.searchGame === "") {
          setGames(res.data)
          setPrevSearchGame("")
          setPage(1)
        } else {
          setGames([...games, ...res.data])
        }
        dispatch(load({ loaded: true }))
      })
  }, [page, gamesFiltered])

  return (
    <main className={styles.cardsContainer}>
      <div className={styles.cardsFilterButton}>
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={handleFilterButtons}
        >
          {selected}
          <span className={styles.expandIcon}>
            <Image src={expand} alt="expand icon" />
          </span>
        </motion.button>

        {showButtons && (
          <>
            {options.map((option) => (
              <button
                onClick={() => {
                  setSelected(option)
                  setShowButtons(!showButtons)
                }}
              >
                {option}
              </button>
            ))}
          </>
        )}
      </div>

      {loading.loaded ? (
        <InfiniteScroll
          style={{ overflow: "visible" }}
          dataLength={games.length}
          next={loadMoreGames}
          hasMore={gamesFiltered.searchGame != "" ? false : true}
        >
          {games.map((g) => (
            <Card game={g} key={nanoid()} />
          ))}
        </InfiniteScroll>
      ) : (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <ReactLoading type={"spin"} color={"white"} height={50} width={50} />
        </div>
      )}
      {(loading.loaded === true && user.user) && <WelcomeUser />}
      {(loading.loaded === true && games.length < 1) && <NotFound />}
    </main>
  )
}

export default Cards
