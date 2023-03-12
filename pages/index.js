import { motion } from "framer-motion"
import Link from "next/link"

export default function Home({ games }) {
  return (
    <main className="flex h-auto flex-col items-center justify-center lg:h-[calc(100vh-76px)]">
      <div className="mx-3 mt-1 grid grid-cols-1 gap-4 md:mt-0 md:grid-cols-2 lg:max-w-6xl lg:grid-cols-3">
        {games.map((game, i) => (
          <Link href={`/games/${game.title}`} key={i} passHref>
            <motion.img
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.9 }}
              transition={{ duration: 0.5 }}
              src={game.wallpaper}
              className="cursor-pointer rounded-lg"
            />
          </Link>
        ))}
      </div>
    </main>
  )
}

export async function getStaticProps() {
  const res = await fetch(`${process.env.API_URL}api/games?limit=15`)
  const games = await res.json()

  return {
    props: {
      games,
    },
  }
}
