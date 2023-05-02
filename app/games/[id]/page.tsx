import AddReport from 'components/AddReport'
import Comments from '../../components/Comments'
import GameCard from './GameCard'
import ButtonReport from 'components/ButtonReport'

interface Games {
  _id: string
  title: string
  state: string
  reports: number
  wallpaper: string
  createdAt: Date
  updatedAt: Date
  __v: number
}

export interface Comments {
  _id: string
  comment: Comment
}

export interface Comment {
  username: string
  title: string
  description: string
  runThrough: string
  state: string
  launcher: string
  macUsed: string
  date: Date
  _id: string
}

async function getGames(id: string) {
  const res = await fetch(`${process.env.API_URL}api/games/${id}`)

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return res.json()
}

async function getComments(id: string) {
  const res = await fetch(
    `${process.env.API_URL}api/comments/${id}?page=1&limit=25`
  )

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return res.json()
}

const GameName = async ({ params: { id } }) => {
  const title = decodeURIComponent(id)
  const games: Games[] = await getGames(title)
  const comments: Comments[] = await getComments(title)

  return (
    <main className='mx-auto my-0 max-w-6xl px-4 py-1'>
      <GameCard games={games} />
      <ButtonReport />
      <AddReport title={title} />
      {comments[0]._id != null &&
        comments.map((comment, i) => <Comments {...comment} key={i} />)}
    </main>
  )
}

export default GameName
