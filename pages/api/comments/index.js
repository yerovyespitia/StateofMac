import { connectToDatabase } from "../../../utils/mongodb"
import Comment from "../../../models/Comment"

connectToDatabase()

const handler = async (req, res) => {
  const { method } = req

  switch (method) {
    // Add a comment section for a game
    case "POST":
      try {
        const newComment = new Comment({
          titleGame: req.body.titleGame,
        })
        const comment = await newComment.save()
        return res.status(200).json(comment)
      } catch (err) {
        return res.status(500).json(err)
      }
    default:
      return res.status(400).json({ msg: "This method is not supported" })
  }
}

export default handler
