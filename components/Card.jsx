import Link from "next/link"
import Image from "next/image"
import moment from "moment"
import { motion } from "framer-motion"
import GameState from "./GameState"

const Card = ({ game }) => {
  return (
    <motion.div whileHover={{ scale: 1.013 }} whileTap={{ scale: 0.9 }}>
      <Link href={`/games/${game.title}`} passHref>
        <div className="m-3 flex cursor-pointer flex-col items-center rounded-lg bg-[#292929] hover:bg-[#363636] md:flex-row">
          <div className="mx-0 mt-12 mb-4 px-3 md:m-5 md:h-auto md:w-auto md:px-0">
            <Image
              src={game.wallpaper}
              width={374}
              height={221}
              className="rounded-lg"
              alt={game.title}
            />
          </div>
          <div className="flex flex-col items-center justify-center text-center md:mr-4 md:block md:text-left">
            <p className="my-1 text-2xl font-bold text-white">{game.title}</p>
            <p className="my-1 mx-0 text-lg font-bold text-[#52a2d5]">
              Updated {moment(game.updatedAt).format("ll")}
            </p>
            <p className="my-1 mx-0 text-lg font-bold text-[#b358bf]">
              Reports {game.reports}
            </p>
            <GameState game={game.state} />
          </div>
        </div>
      </Link>
    </motion.div>
  )
}

export default Card
