export const getComments = async (id: string) => {
  try {
    const res = await fetch(
      `https://stateofmacapi.onrender.com/api/comments/${id}?page=1&limit=25`
    )
    return res.json()
  } catch (error) {
    console.log('Failed to fetch data', error)
  }
}
