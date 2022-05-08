import Image from "next/image"
import { useState } from "react"
import { useSelector } from "react-redux"
import styles from "../styles/cards.module.scss"
import { nanoid } from "nanoid"
import { motion } from "framer-motion"
import InfiniteScroll from "react-infinite-scroll-component"
import expand from "../public/images/expand.svg"
import Card from "./Card"
import NotFound from "./NotFound"
import ReactLoading from "react-loading"
import WelcomeUser from "./WelcomeUser"
import useFetchingGames from "../hooks/useFetchingGames"

const Cards = () => {
  const user = useSelector((state) => state.user.value)
  const loading = useSelector((state) => state.loading.value)
  const gamesFiltered = useSelector((state) => state.games.value)
  const [showOptions, setShowOptions] = useState(false)
  const [selected, setSelected] = useState("All Games")
  const options = ["All Games"]

  // Fetching Games with useFetchingGames
  const { games, loadMoreGames } = useFetchingGames(
    `${process.env.API_URL}api/games?`
  )

  // Sort Game Cards
  const handleSortButton = () => {
    setShowOptions(!showOptions)
  }

  // Set Sort Option
  const sortOption = (option) => {
    setSelected(option)
    setShowOptions(!showOptions)
  }

  return (
    <main className={styles.cardsContainer}>
      <div className={styles.cardsSortButton}>
        {/* Sort button */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={handleSortButton}
        >
          {selected}
          <span className={styles.expandIcon}>
            <Image src={expand} alt="expand icon" />
          </span>
        </motion.button>
        {/* Sort button options */}
        {showOptions && (
          <>
            {options.map((option) => (
              <button
                onClick={() => {
                  sortOption(option)
                }}
              >
                {option}
              </button>
            ))}
          </>
        )}
      </div>

      {/* Showing Games with Infinite Scroll */}
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
      {loading.loaded === true && games.length < 1 && <NotFound />}
      {loading.loaded === true && user.user && <WelcomeUser />}
    </main>
  )
}

export default Cards
