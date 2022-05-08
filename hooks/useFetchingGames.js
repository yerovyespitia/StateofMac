import { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { load } from "../redux/loadingSlice"
import axios from "axios"

const useFetchingGames = (url) => {
  const gamesFiltered = useSelector((state) => state.games.value)
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

  return {
    games,
    loadMoreGames,
  }
}

export default useFetchingGames
