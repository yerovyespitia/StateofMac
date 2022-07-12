import { connectToDatabase } from "../../../utils/mongodb"
import User from "../../../models/User"
import bcryptjs from "bcryptjs"

connectToDatabase()

export default async (req, res) => {
  const { method } = req

  switch (method) {
    // Register with a new account
    case "POST":
      try {
        // Encrypted password
        const hashPass = await hassedPass(req.body)
        // Add new user
        const newUser = new User({
          username: req.body.username,
          email: req.body.email,
          password: hashPass,
        })
        const user = await newUser.save()
        return res.status(200).json(user)
      } catch (err) {
        return res.status(500).json(err)
      }
    default:
      return res.status(400).json({ msg: "This method is not supported" })
  }
}

// Encrypt password
const hassedPass = async (conditions) => {
  const salt = await bcryptjs.genSalt(10)
  return bcryptjs.hash(conditions.password, salt)
}
