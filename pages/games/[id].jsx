import Image from "next/image"
import { NextSeo } from "next-seo"
import { useSelector, useDispatch } from "react-redux"
import { search } from "../../redux/gamesSlice"
import styles from "../../styles/games.module.scss"
import axios from "axios"
import { motion } from "framer-motion"
// import settingsIcon from "../../public/images/settings-icon.svg"
import Comment from "../../components/Comment"
import GameState from "../../components/GameState"
import { NewReport } from "./../../components/NewReport"
import useSubmitComment from "../../hooks/useSubmitComment"

const GameName = ({ game, comments }) => {
  const user = useSelector((state) => state.user.value)
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
  const dispatch = useDispatch()
  dispatch(search({ searchGame: "" }))

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
    <main className={styles.gamesContainer}>
      <NextSeo
        title={game.title + " - State of Mac"}
        description={`Find out if ${game.title} runs on Apple Silicon.`}
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 1 } }}
        whileHover={{ scale: 1.013 }}
        className={styles.gamesImgContainer}
      >
        {game.wallpaper && (
          <Image
            src={game.wallpaper}
            width={1454}
            height={813}
            className={styles.gamesImg}
            alt={game.title}
          />
        )}
      </motion.div>
      <motion.div
        initial={{ translateX: -1000, translateY: -700 }}
        animate={{ translateX: 0, translateY: 0 }}
        className={styles.gamesContactContainer}
      >
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 1 } }}
        >
          {game.title}
        </motion.h1>
        <GameState game={game.state} />
      </motion.div>
      <div className={styles.gamesCommentsContainer}>
        {/* <div className={styles.gamesCommentsButtonsContainer}>
          <button className={styles.filterButton}>
            Filter
            <span>
              <Image className={styles.iconColor} src={settingsIcon} />
            </span>
          </button>
        </div> */}
        {user.user && (
          <div
            className={styles.addNewReportButton}
            onClick={reportStateToggle}
          >
            <h2>Add a New Report</h2>
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
      </div>
    </main>
  )
}

export default GameName

export const getStaticPaths = async () => {
  const res = await fetch(`${process.env.API_URL}api/games?page=1&limit=0`)
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
