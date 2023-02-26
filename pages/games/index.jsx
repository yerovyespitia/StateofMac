import Card from "../../components/Card"

const Games = ({ games }) => {
  return (
    <div className="mx-3 md:my-0 md:mx-auto md:max-w-fit">
      {games.map((game, i) => (
        <Card games={game} key={i} />
      ))}
    </div>
  )
}

export default Games

export async function getStaticProps() {
  const res = await fetch(`${process.env.API_URL}api/games`)
  const games = await res.json()

  return {
    props: {
      games,
    },
  }
}
