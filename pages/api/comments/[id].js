import { connectToDatabase } from "../../../utils/mongodb"
import Comment from "../../../models/Comment"
import { updateUser } from "../users/[id]"
import { updateGame } from "../games/[id]"

connectToDatabase()

const handler = async (req, res) => {
  const {
    method,
    query: { id },
  } = req

  switch (method) {
    // Find comments from a game
    case "GET":
      try {
        const comments = await Comment.aggregate([
          {
            $match: { titleGame: id },
          },
          {
            $unwind: { path: "$comments", preserveNullAndEmptyArrays: true },
          },
          { $group: { _id: "$comments._id", comment: { $push: "$comments" } } },
          {
            $unwind: { path: "$comment", preserveNullAndEmptyArrays: true },
          },
          { $skip: (+req.query.page - 1) * +req.query.limit },
          { $limit: +req.query.limit },
          { $sort: { "comment.date": -1 } },
        ])
        return res.status(200).json(comments)
      } catch (err) {
        return res.status(500).json(err)
      }
    // Add a comment to a game
    case "POST":
      try {
        // Data to add a new comment to a game
        const newComment = {
          username: req.body.username,
          title: req.body.title,
          description: req.body.description,
          runThrough: req.body.runThrough,
          state: req.body.state,
          launcher: req.body.launcher,
          macUsed: req.body.macUsed,
          date: new Date(),
        }
        // Default count of the reports added to a game
        const states = { perfect: 0, playable: 0, unplayable: 0 }
        // Default value of the state of a game
        let state = "Unknown"
        // Add new comment to a game and update reports
        const comment = await Comment.findOneAndUpdate(
          { titleGame: id },
          { $push: { comments: newComment }, $inc: { reports: 1 } },
          { new: true }
        )
        // Update reports of the user
        await updateUser(
          { username: req.body.username },
          { $inc: { reports: 1 } },
          { new: true }
        )
        // Sum up reports for the game
        comment.comments.map((com) => {
          sumReport(com, states)
        })
        // Visible state for the game
        visibleState(states, state)
        // Set new state for the game & update reports
        await updateGame(
          { title: comment.titleGame },
          { $set: { state }, $inc: { reports: 1 } },
          { new: true }
        )
        return res.status(200).json(comment)
      } catch (err) {
        return res.status(500).json(err)
      }
    default:
      return res.status(400).json({ msg: "This method is not supported" })
  }
}

// Sump up reports
const sumReport = (com, states) => {
  if (com === "Perfect") states.perfect += 1
  else if (com === "Playable") states.playable += 1
  else if (com === "Unplayable") states.unplayable += 1
}

// Visible state of the game
const visibleState = (states, _state) => {
  if (states.perfect > states.playable && states.perfect > states.unplayable) {
    _state = "Perfect"
  } else if (
    states.playable > states.perfect &&
    states.playable > states.unplayable
  ) {
    _state = "Playable"
  } else if (
    states.unplayable > states.perfect &&
    states.unplayable > states.playable
  ) {
    _state = "Unplayable"
  } else if (
    states.unplayable === 0 &&
    states.perfect === 0 &&
    states.playable === 0
  ) {
    _state = "Unknown"
  } else {
    _state = "Tied"
  }
}

export default handler
