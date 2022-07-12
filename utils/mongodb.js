import { connect, connection } from "mongoose"

const conn = {
  isConnected: false,
}

export async function connectToDatabase() {
  if (conn.isConnected) return
  const db = await connect(process.env.MONGO_URI)
  conn.isConnected = db.connections[0].readyState
}

connection.on("connected", () => {
  console.log("MongoDB is connected")
})

connection.on("err", (err) => {
  console.log(err)
})
