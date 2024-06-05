import { Comments } from '@/components/Comments'
import { AddReport } from '@/components/GameInfo/AddReport'
import { ButtonReport } from '@/components/GameInfo/ButtonReport'
import { GameCard } from '@/components/GameInfo/GameCard'
import { IComments } from '@/types/comments'
import { IGames } from '@/types/games'
import { IGameInfoParams } from '@/types/params'

const getGames = async (id: string) => {
  try {
    const res = await fetch(
      `https://stateofmacapi.onrender.com/api/games/${id}`
    )
    return res.json()
  } catch (error) {
    console.log('Failed to fetch data', error)
  }
}

const getComments = async (id: string) => {
  try {
    const res = await fetch(
      `https://stateofmacapi.onrender.com/api/comments/${id}?page=1&limit=25`
    )
    return res.json()
  } catch (error) {
    console.log('Failed to fetch data', error)
  }
}

export default async function GameInfo({ params: { id } }: IGameInfoParams) {
  const games: IGames = await getGames(decodeURIComponent(id))
  const comments: IComments[] = await getComments(decodeURIComponent(id))

  return (
    <main className='mx-auto my-0 max-w-6xl px-4 py-1'>
      <GameCard {...games} />
      <ButtonReport />
      <AddReport title={decodeURIComponent(id)} />
      {comments[0]._id != null &&
        comments.map((comment, i) => <Comments {...comment} key={i} />)}
    </main>
  )
}
