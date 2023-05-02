'use client'

import { useUserStore } from '../store/userStore'
import { useReportStore } from 'store/reportStore'

const ButtonReport = () => {
  const { user } = useUserStore()
  const { setReportToggle } = useReportStore()

  return (
    <>
      {user && (
        <div
          className='flex h-14 cursor-pointer items-center justify-center rounded-md bg-[#292929] hover:bg-[#363636]'
          onClick={setReportToggle}
        >
          <h2 className='text-lg font-bold text-white'>Add a new report</h2>
        </div>
      )}
    </>
  )
}

export default ButtonReport
