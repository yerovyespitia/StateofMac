import { LoginForm } from '@/components/LoginForm'
import { NoAccount } from '@/components/LoginForm/NoAccount'

export default async function Login() {
  return (
    <section className='flex h-[50vh] md:h-[calc(100vh-192px)] flex-col items-center justify-center'>
      <h1 className='mb-5 text-center text-3xl font-bold text-white'>Login</h1>
      <section className='flex flex-col justify-center'>
        <LoginForm />
      </section>
      <section className='mt-5 text-center text-lg text-[#b358bf]'>
        <NoAccount />
      </section>
    </section>
  )
}
