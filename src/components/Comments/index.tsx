'use client'
import moment from 'moment'
import { motion } from 'framer-motion'
import { IComment } from '@/types/comments'

export const Comments = ({ comment }: any) => {
  console.log(comment)
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 1 } }}
      className='mb-4 mt-4 flex flex-col justify-center rounded-lg bg-[#292929] p-12'
    >
      <section className='mb-3 flex flex-col'>
        <p className='my-1 mr-3 text-2xl font-medium text-[#52a2d5]'>
          {comment.username}
        </p>
        <time className='text-lg font-medium text-[#b7b7b7]'>
          {moment(comment.date).format('ll')}
        </time>
      </section>
      <p className='mb-3 ml-0 mr-0 mt-0 text-2xl font-bold text-white'>
        {comment.title}
      </p>
      <section className='mb-1 text-lg font-medium text-[#e6e6e6]'>
        {comment.description}
      </section>
      <section className='mt-4 flex flex-col font-medium md:flex-row'>
        <p className='state'>● {comment.runThrough}</p>
        <p className='state'>● {comment.state}</p>
        <p className='state'>● {comment.launcher}</p>
        <p className='state'>● {comment.macUsed}</p>
      </section>
    </motion.section>
  )
}
