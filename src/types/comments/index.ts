export interface IComment {
  username: string
  title: string
  description: string
  runThrough: string
  state: string
  launcher: string
  macUsed: string
  date: Date
  _id: string
}

export interface IComments {
  _id: string
  comment: Comment
}
