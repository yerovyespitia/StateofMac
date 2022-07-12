import { Schema, model, models } from "mongoose"

const commentSchema = new Schema(
  {
    titleGame: {
      type: String,
      required: [true, "Please add an game title"],
      unique: true,
    },
    reports: {
      type: Number,
      required: true,
      default: 0,
    },
    comments: [
      {
        username: {
          type: String,
          required: true,
        },
        title: {
          type: String,
          required: true,
          default: "",
        },
        description: {
          type: String,
          required: true,
          default: "",
        },
        runThrough: {
          type: String,
          enum: [
            "A Native Port",
            "Rosetta 2",
            "Crossover",
            "Parallels",
            "VMware",
            "PlayCover",
            "A Console Emulator",
            "Other",
          ],
          required: true,
          default: "Other",
        },
        state: {
          type: String,
          enum: ["Perfect", "Playable", "Unplayable"],
          required: true,
        },
        launcher: {
          type: String,
          enum: [
            "Steam Launcher",
            "Epic Games Launcher",
            "Heroic Game Launcher",
            "Rockstar Games Launcher",
            "Riot Client",
            "Battle.net",
            "None",
            "Other",
          ],
          required: true,
          default: "Other",
        },
        macUsed: {
          type: String,
          enum: [
            "MacBook Pro M1 2020",
            "MacBook Air M1 2020",
            "Mac mini M1 2020",
            "iMac M1 2021",
            "MacBook Pro M1 Pro 2021",
            "MacBook Pro M1 Max 2021",
            "Mac Studio M1 Max 2022",
            "Mac Studio M1 Ultra 2022",
            "MacBook Air M2 2022",
            "Macbook Pro M2 2022",
          ],
          required: true,
        },
        date: {
          type: Date,
          required: true,
        },
      },
    ],
  },
  { timestamps: true }
)

export default models.Comment || model("Comment", commentSchema)
