import { AuthSectionProps } from '@/types/params'

export const AuthSection = ({
  title,
  children,
  extraSection,
}: AuthSectionProps) => {
  return (
    <section className='flex h-[50vh] md:h-[calc(100vh-192px)] flex-col items-center justify-center'>
      <h1 className='mb-5 text-center text-3xl font-bold text-white'>
        {title}
      </h1>
      <section className='flex flex-col justify-center'>{children}</section>
      {extraSection && (
        <section className='mt-5 text-center text-lg text-[#b358bf]'>
          {extraSection}
        </section>
      )}
    </section>
  )
}
