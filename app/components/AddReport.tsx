'use client'

import axios from 'axios'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useUserStore } from 'store/userStore'
import { useReportStore } from 'store/reportStore'
import { macs, runThrough, launchers, states } from '../../data/data'
import SelectOptions from './SelectOptions'

const AddReport = ({ title }) => {
  const router = useRouter()
  const { user } = useUserStore()
  const { reportToggle, setReportToggle } = useReportStore()
  const [comment, setComment] = useState({
    username: user !== null && user,
    title: '',
    description: '',
    runThrough: '',
    state: '',
    launcher: '',
    macUsed: '',
  })

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault()

    try {
      await axios.post(`${process.env.API_URL}api/comments/${title}`, comment)
      router.push('/')
    } catch (error) {
      console.log(error)
    }
  }

  const cancelSubmit = () => {
    setReportToggle()

    setComment({
      username: '',
      title: '',
      description: '',
      runThrough: '',
      state: '',
      launcher: '',
      macUsed: '',
    })
  }

  return (
    <>
      {reportToggle && (
        <form className='mt-4' onSubmit={handleSubmit}>
          <div className='text-lg text-white'>
            <input
              className='h-14 w-full rounded-lg bg-[#292929] pb-0 pl-4 pr-0 pt-1 focus:outline-none'
              type='text'
              name='search'
              placeholder='Title'
              onChange={(e) =>
                setComment({ ...comment, title: e.target.value })
              }
            />
          </div>

          <div className='mt-5 flex flex-col items-center justify-center md:flex-row'>
            <SelectOptions
              onChange={(e: { target: { value: string } }) =>
                setComment({ ...comment, runThrough: e.target.value })
              }
              title={'Game Run Through'}
              options={runThrough}
            />

            <SelectOptions
              onChange={(e: { target: { value: string } }) =>
                setComment({ ...comment, state: e.target.value })
              }
              title={'State of the Game'}
              options={states}
            />

            <SelectOptions
              onChange={(e: { target: { value: string } }) =>
                setComment({ ...comment, launcher: e.target.value })
              }
              title={'Launcher'}
              options={launchers}
            />

            <SelectOptions
              onChange={(e: { target: { value: string } }) =>
                setComment({ ...comment, macUsed: e.target.value })
              }
              title={'Mac'}
              options={macs}
            />
          </div>

          <div className='mt-3'>
            <textarea
              className='w-full rounded-lg bg-[#292929] pb-0 pl-5 pr-5 pt-5 text-lg text-white focus:outline-none'
              name='description'
              id='textarea'
              cols={30}
              rows={10}
              placeholder='Description'
              onChange={(e) =>
                setComment({ ...comment, description: e.target.value })
              }
            />
          </div>

          <div className='mt-3 flex flex-col items-center justify-center md:flex-row'>
            <button
              type='submit'
              className='mb-3 h-14 w-full cursor-pointer rounded-lg bg-[#292929] text-lg font-bold text-[#dbdbdb] md:mr-2 md:w-1/2'
            >
              Send
            </button>

            <button
              className='mb-3 h-14 w-full cursor-pointer rounded-lg bg-[#292929] text-lg font-bold text-[#dbdbdb] md:ml-2 md:w-1/2'
              onClick={cancelSubmit}
            >
              Cancel
            </button>
          </div>
        </form>
      )}
    </>
  )
}

export default AddReport
