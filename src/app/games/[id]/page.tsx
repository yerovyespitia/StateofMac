import { Comments } from '@/components/Comments'
import { AddReport } from '@/components/GameInfo/AddReport'
import { ButtonReport } from '@/components/GameInfo/ButtonReport'
import { GameCard } from '@/components/GameInfo/GameCard'
import { IComments } from '@/types/comments'
import { IGames } from '@/types/games'
import { IGameInfoParams } from '@/types/params'
import { getComments } from '@/utils/comments'
import { getGames } from '@/utils/games'

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
