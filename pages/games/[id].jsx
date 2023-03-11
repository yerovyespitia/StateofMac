import { NextSeo } from "next-seo"
import axios from "axios"
import { motion } from "framer-motion"
import Comment from "../../components/Comment"
import GameState from "../../components/GameState"
import NewReport from "./../../components/NewReport"
import useSubmitComment from "../../hooks/useSubmitComment"
import { useSearchStore } from "../../store/searchStore"
import { useUserStore } from "../../store/userStore"
import Image from "next/image"

const GameName = ({ game, comments }) => {
  const user = useUserStore((state) => state.user)
  const searching = useSearchStore((state) => state.searching)

  const {
    addReportState,
    addTitle,
    addDescription,
    addRunThrough,
    addState,
    addLauncher,
    addMacUsed,
    reportStateToggle,
    cancelSubmit,
    newComment,
  } = useSubmitComment()

  searching("")

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await axios.post(
        `${process.env.API_URL}api/comments/${game.title}`,
        newComment
      )
      reportStateToggle
      window.location.replace("/")
    } catch (error) {}
  }

  return (
    <main className="my-0 mx-auto max-w-max px-4 py-1">
      <NextSeo
        title={game.title + " - State of Mac"}
        description={`Find out if ${game.title} runs on Apple Silicon.`}
      />
      <motion.div
        className="mt-3"
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.5 }}
      >
        <Image
          className="w-full rounded-lg"
          src={game?.wallpaper}
          alt={game?.title}
          width={1315}
          height={765}
          layout="intrinsic"
        />
      </motion.div>
      <div className="text-center">
        <motion.h1
          className="mt-3 mb-3 text-3xl font-bold text-white"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
        >
          {game.title}
        </motion.h1>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
        >
          <GameState game={game.state} />
        </motion.div>
      </div>
      {user && (
        <div
          className="flex h-14 cursor-pointer items-center justify-center rounded-md bg-[#292929] hover:bg-[#363636]"
          onClick={reportStateToggle}
        >
          <h2 className="text-lg font-bold text-white">Add a new report</h2>
        </div>
      )}
      {addReportState && (
        <NewReport
          handleSubmit={handleSubmit}
          addTitle={addTitle}
          addRunThrough={addRunThrough}
          addState={addState}
          addLauncher={addLauncher}
          addMacUsed={addMacUsed}
          addDescription={addDescription}
          cancelSubmit={cancelSubmit}
        />
      )}
      {comments[0]._id != null &&
        comments.map((c, i) => <Comment comment={c} key={i} />)}
    </main>
  )
}

export default GameName

export const getStaticPaths = async () => {
  const res = await fetch(`${process.env.API_URL}api/games`)
  const data = await res.json()

  const paths = data.map((id) => {
    return {
      params: { id: id.title.toString() },
    }
  })

  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps = async (context) => {
  const id = context.params.id
  const gameRes = await fetch(`${process.env.API_URL}api/games/${id}`)
  const game = await gameRes.json()
  const commentRes = await fetch(
    `${process.env.API_URL}api/comments/${game.title}?page=1&limit=25`
  )
  const comments = await commentRes.json()

  return {
    props: {
      game,
      comments,
    },
  }
}
