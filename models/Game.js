import { Schema, model, models } from "mongoose"

const gameSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, "Please add a title"],
      unique: true,
    },
    state: {
      type: String,
      required: true,
      enum: ["Unknown", "Perfect", "Playable", "Unplayable", "Tied"],
      default: "Unknown",
    },
    reports: {
      type: Number,
      required: true,
      default: 0,
    },
    wallpaper: {
      type: String,
      required: [true, "Please add a wallpaper"],
      unique: true,
    },
  },
  { timestamps: true }
)

export default models.Game || model("Game", gameSchema)
