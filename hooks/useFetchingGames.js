import { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { load } from "../redux/loadingSlice"
import axios from "axios"

const useFetchingGames = (url) => {
  const gamesFiltered = useSelector((state) => state.games.value.searchGame)
  const [games, setGames] = useState([])
  const [page, setPage] = useState(1)
  const [prevSearchGame, setPrevSearchGame] = useState("")
  const [loadMore, setLoadMore] = useState(false)
  const dispatch = useDispatch()

  // Show more game cards
  const loadMoreGames = async () => {
    setPage((page += 1))
    setLoadMore(true)
  }

  useEffect(() => {
    axios
      .get(url, {
        params: {
          page,
          limit: 40,
          searchGame: gamesFiltered,
        },
      })
      .then((res) => {
        if (gamesFiltered === "") setGames([...games, ...res.data])

        setPrevSearchGame(gamesFiltered)
        setLoadMore(false)

        if (!loadMore) {
          setGames(res.data)
          setPage(1)
        } else {
          setGames([...games, ...res.data])
        }

        if (prevSearchGame != "" && gamesFiltered === "") {
          setGames(res.data)
          setPrevSearchGame("")
          setPage(1)
        }

        dispatch(load({ loaded: true }))
      })
  }, [page, gamesFiltered])

  return {
    games,
    loadMoreGames,
  }
}

export default useFetchingGames
