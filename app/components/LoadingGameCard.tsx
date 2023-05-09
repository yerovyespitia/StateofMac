'use client'

const LoadingGameCard = () => {
  return (
    <div className='mx-auto my-0 max-w-6xl px-4 py-1'>
      <div className='mt-3'>
        <div className='aspect-[4/3] w-full animate-pulse rounded-lg bg-[#363636] md:h-[720px]' />
      </div>

      <div className='text-center'>
        <div className='flex flex-col items-center justify-center'>
          <div className='mt-2 h-[15px] w-[340px] animate-pulse rounded-lg bg-[#363636] md:mt-5 md:w-[550px]' />
          <div className='mt-2 h-[15px] w-[340px] animate-pulse rounded-lg bg-[#363636] md:mt-5 md:w-[550px]' />
        </div>
      </div>
    </div>
  )
}

export default LoadingGameCard
