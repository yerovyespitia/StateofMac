import { connectToDatabase } from "../../../utils/mongodb"
import User from "../../../models/User"
import bcryptjs from "bcryptjs"

connectToDatabase()

export default async (req, res) => {
  const { method } = req

  switch (method) {
    // Login with an account
    case "POST":
      try {
        const user = await User.findOne({ username: req.body.username })
        if (!user) return res.status(400).json("It must be something wrong")

        const validate = await validated(req.body, user)
        if (!validate) return res.status(400).json("It must be something wrong")

        const { password, ...others } = user._doc

        return res.status(200).json(others)
      } catch (err) {
        return res.status(500).json(err)
      }
    default:
      return res.status(400).json({ msg: "This method is not supported" })
  }
}

const validated = async (conditions, options) => {
  return bcryptjs.compare(conditions.password, options.password)
}
