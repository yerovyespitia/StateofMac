'use client'
import { useReportStore } from '@/libs/store/reportStore'
import { useUserStore } from '@/libs/store/userStore'

export const ButtonReport = () => {
  const { user } = useUserStore()
  const { setReportToggle } = useReportStore()

  return (
    <>
      {user && (
        <section
          className='flex h-14 cursor-pointer items-center justify-center rounded-md bg-[#292929] hover:bg-[#363636]'
          onClick={setReportToggle}
        >
          <h2 className='text-lg font-bold text-white'>Add a new report</h2>
        </section>
      )}
    </>
  )
}
