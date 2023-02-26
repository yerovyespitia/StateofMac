import Link from "next/link"
import Image from "next/image"
import moment from "moment"
import { motion } from "framer-motion"
import GameState from "./GameState"

const Card = ({ games }) => {
  return (
    <motion.div whileHover={{ scale: 1.013 }} whileTap={{ scale: 0.9 }}>
      <Link href={`/games/${games.title}`} passHref>
        <div className="mt-3 flex cursor-pointer flex-col items-center rounded-lg bg-[#292929] hover:bg-[#363636] md:flex-row">
          <div className="mx-0 mt-6 mb-2 px-3 md:m-5 md:h-auto md:w-auto md:px-0">
            <Image
              src={games.wallpaper}
              width={374}
              height={221}
              className="rounded-lg"
              alt={games.title}
            />
          </div>
          <div className="flex flex-col items-center justify-center text-center md:mr-4 md:block md:text-left">
            <p className="my-1 text-2xl font-bold text-white">{games.title}</p>
            <p className="my-1 mx-0 text-lg font-bold text-[#52a2d5]">
              Updated {moment(games.updatedAt).format("ll")}
            </p>
            <p className="my-1 mx-0 text-lg font-bold text-[#b358bf]">
              Reports {games.reports}
            </p>
            <GameState game={games.state} />
          </div>
        </div>
      </Link>
    </motion.div>
  )
}

export default Card
