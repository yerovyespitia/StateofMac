'use client'

const LoadingCard = () => {
  return (
    <div className='mb-4'>
      <div className='mx-3 md:mx-auto md:my-0 md:max-w-fit'>
        {Array.from({ length: 10 }).map((_, i) => (
          <div
            key={i}
            className='mt-3 flex flex-col items-center rounded-lg bg-[#292929] md:flex-row'
          >
            <div className='mx-0 mb-2 mt-6 px-3 md:m-5 md:h-auto md:w-auto md:px-0'>
              <div className='h-[221px] w-[374px] animate-pulse rounded-lg bg-[#363636]' />
            </div>

            <div className='flex flex-col items-center justify-center text-center md:mr-4 md:block md:text-left'>
              <div className='my-2 h-[15px] w-[250px] animate-pulse rounded-lg bg-[#363636] md:my-4 md:w-[350px]' />
              <div className='my-2 h-[15px] w-[250px] animate-pulse rounded-lg bg-[#363636] md:my-4 md:w-[350px]' />
              <div className='my-2 h-[15px] w-[250px] animate-pulse rounded-lg bg-[#363636] md:my-4 md:w-[350px]' />
              <div className='my-2 h-[15px] w-[250px] animate-pulse rounded-lg bg-[#363636] md:my-4 md:w-[350px]' />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default LoadingCard
