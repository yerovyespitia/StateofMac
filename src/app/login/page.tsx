import { AuthSection } from '@/components/AuthSection'
import { LoginForm } from '@/components/LoginForm'
import { NoAccount } from '@/components/LoginForm/NoAccount'

export default async function Login() {
  return (
    <AuthSection
      title='Login'
      children={<LoginForm />}
      extraSection={<NoAccount />}
    />
  )
}
