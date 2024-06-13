import { AuthSection } from '@/components/AuthSection'
import { RegisterForm } from '@/components/RegisterForm'

export default async function Register() {
  return <AuthSection title='Register' children={<RegisterForm />} />
}
