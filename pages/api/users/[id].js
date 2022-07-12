import { connectToDatabase } from "../../../utils/mongodb"
import bcryptjs from "bcryptjs"
import mongoose from "mongoose"
import User from "../../../models/User"

connectToDatabase()

export default async (req, res) => {
  const {
    method,
    query: { id },
  } = req

  switch (method) {
    // Update a user
    case "PUT":
      if (req.body.userId != id)
        return res.status(401).json("You can only update your account")
      if (req.body.password) {
        const salt = await bcryptjs.genSalt(10)
        req.body.password = await bcryptjs.hash(req.body.password, salt)
      }
      try {
        const user = await updateUser(
          {
            _id: mongoose.Types.ObjectId(id),
          },
          { $set: req.body },
          { new: true }
        )
        return res.status(200).json(user)
      } catch (err) {
        return res.status(500).json(err)
      }
    default:
      return res.status(400).json({ msg: "This method is not supported" })
  }
}

export const updateUser = async (conditions, set, options) => {
  return User.findOneAndUpdate(conditions, set, options)
}
