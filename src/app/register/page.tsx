import { RegisterForm } from '@/components/RegisterForm'

export default async function Register() {
  return (
    <section className='flex h-[50vh] md:h-[calc(100vh-192px)] flex-col items-center justify-center'>
      <h1 className='mb-5 text-center text-3xl font-bold text-white'>
        Register
      </h1>
      <section className='flex flex-col justify-center'>
        <RegisterForm />
      </section>
    </section>
  )
}
