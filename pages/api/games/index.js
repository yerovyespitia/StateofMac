import { connectToDatabase } from "../../../utils/mongodb"
import Game from "../../../models/Game"

connectToDatabase()

const handler = async (req, res) => {
  const { method } = req

  switch (method) {
    // Find all games
    case "GET":
      try {
        let options = {}
        if (req.query.searchGame && req.query.searchGame != "") {
          options = {
            title: { $regex: req.query.searchGame, $options: "i" },
          }
        }
        const games = await findAllGames(
          options,
          { createdAt: -1 },
          +req.query.page,
          +req.query.limit,
          +req.query.isCount === "true" ? true : false
        )
        return res.status(200).json(games)
      } catch (err) {
        return res.status(500).json(err)
      }
    // Add a game
    case "POST":
      try {
        const newGame = new Game({
          title: req.body.title,
          wallpaper: req.body.wallpaper,
        })
        const game = await newGame.save()
        return res.status(200).json(game)
      } catch (err) {
        return res.status(500).json(err)
      }
    default:
      return res.status(400).json({ msg: "This method is not supported" })
  }
}

// Find all games and a limit of games sorted by newest to oldest added
const findAllGames = async (options, sort, page, limit, isCount) => {
  if (isCount) {
    return Game.count(options)
  } else {
    return Game.find(options)
      .skip((page - 1) * limit)
      .limit(limit)
      .sort(sort)
  }
}

export default handler
