import { motion } from "framer-motion"
import Link from "next/link"

export default function Home({ games }) {
  return (
    <main className="mx-3 mb-5 md:mx-6 md:mt-3">
      <div className="grid max-w-full grid-cols-app items-center justify-center gap-5">
        {games.map((game, i) => (
          <Link href={`/games/${game.title}`} key={i} passHref>
            <motion.img
              whileHover={{ scale: 1.013 }}
              whileTap={{ scale: 0.9 }}
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
