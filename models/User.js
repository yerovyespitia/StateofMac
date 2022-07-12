import { Schema, model, models } from "mongoose"

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: [true, "Please add an username"],
      unique: true,
    },
    email: {
      type: String,
      required: [true, "Please add an email"],
      unique: true,
    },
    password: {
      type: String,
      required: [true, "Please add a password"],
    },
    reports: {
      type: Number,
      required: true,
      default: 0,
    },
  },
  { timestamps: true }
)

export default models.User || model("User", userSchema)
