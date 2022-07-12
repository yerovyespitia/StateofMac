import { connectToDatabase } from "../../../utils/mongodb"
import User from "../../../models/User"

connectToDatabase()

const handler = async (req, res) => {
  const { method } = req

  switch (method) {
    // Find all users
    case "GET":
      try {
        const users = await User.find({}, { id_: 1, username: 1, reports: 1 })
        return res.status(200).json(users)
      } catch (err) {
        return res.status(500).json(err)
      }
    default:
      return res.status(400).json({ msg: "This method is not supported" })
  }
}

export default handler
