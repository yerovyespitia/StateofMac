import { useState, useEffect } from "react"
import axios from "axios"
import { useSearchStore } from "../store/searchStore"
import { useLoadingStore } from "../store/loadingStore"

const useFetchingGames = (url) => {
  const loading = useLoadingStore((state) => state.loading)
  const search = useSearchStore((state) => state.search)
  const [games, setGames] = useState([])
  const [page, setPage] = useState(1)
  const [prevSearchGame, setPrevSearchGame] = useState("")
  const [loadMore, setLoadMore] = useState(false)

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
          searchGame: search,
        },
      })
      .then((res) => {
        if (search === "") setGames([...games, ...res.data])

        setPrevSearchGame(search)
        setLoadMore(false)

        if (!loadMore) {
          setGames(res.data)
          setPage(1)
        } else {
          setGames([...games, ...res.data])
        }

        if (prevSearchGame != "" && search === "") {
          setGames(res.data)
          setPrevSearchGame("")
          setPage(1)
        }
        loading(true)
      })
  }, [page, search])

  return {
    games,
    loadMoreGames,
  }
}

export default useFetchingGames
