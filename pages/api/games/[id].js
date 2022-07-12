import { connectToDatabase } from "../../../utils/mongodb"
import Game from "../../../models/Game"

connectToDatabase()

export default async (req, res) => {
  const {
    method,
    query: { id },
  } = req

  switch (method) {
    // Find a game
    case "GET":
      try {
        const game = await Game.findOne({ title: id })
        if (!game) return res.status(400).json({ msg: "Game not found" })
        return res.status(200).json(game)
      } catch (err) {
        return res.status(500).json(err)
      }
    default:
      return res.status(400).json({ msg: "This method is not supported" })
  }
}

// Update a game
export const updateGame = async (conditions, set, options) => {
  return Game.findOneAndUpdate(conditions, set, options)
}
