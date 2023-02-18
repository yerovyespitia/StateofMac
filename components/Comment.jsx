import moment from "moment"
import { motion } from "framer-motion"

const Comment = ({ comment }) => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 1 } }}
        className="mt-4 mb-4 flex flex-col justify-center rounded-lg bg-[#292929] p-12"
      >
        <div className="mb-3 flex flex-col">
          <p className="my-1 mr-3 text-2xl font-medium text-[#52a2d5]">
            {comment.comment.username}
          </p>
          <time className="text-lg font-medium text-[#b7b7b7]">
            {moment(comment.comment.date).format("ll")}
          </time>
        </div>
        <p className="mt-0 mr-0 mb-3 ml-0 text-2xl font-bold text-white">
          {comment.comment.title}
        </p>
        <article className="mb-1 text-lg font-medium text-[#e6e6e6]">
          {comment.comment.description}
        </article>
        <article className="mt-4 flex flex-col font-medium md:flex-row">
          <p className="mr-2 text-lg text-[#dbdbdb]">
            ● {comment.comment.runThrough}
          </p>
          <p className="mr-2 text-lg text-[#dbdbdb]">
            ● {comment.comment.state}
          </p>
          <p className="mr-2 text-lg text-[#dbdbdb]">
            ● {comment.comment.launcher}
          </p>
          <p className="mr-2 text-lg text-[#dbdbdb]">
            ● {comment.comment.macUsed}
          </p>
        </article>
      </motion.div>
    </>
  )
}

export default Comment
