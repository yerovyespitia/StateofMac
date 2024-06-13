export const getGames = async (id?: string) => {
  const url = id
    ? `https://stateofmacapi.onrender.com/api/games/${id}`
    : `https://stateofmacapi.onrender.com/api/games`
  try {
    const res = await fetch(url)
    return res.json()
  } catch (error) {
    console.log('Failed to fetch data', error)
  }
}
