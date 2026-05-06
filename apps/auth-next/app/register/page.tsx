import { AuthCard } from '../../components/auth-card'
import { AuthFrame } from '../../components/auth-frame'
import { registerAction } from '../actions'

export default async function RegisterPage() {
  return (
    <AuthFrame
      eyebrow="Auth Zone"
      title="Register"
      description="A dedicated signup route owned by auth-next."
    >
      <AuthCard
        title="Create your account"
        subtitle="Join the lab with a creator or buyer profile."
        fields={[
          { label: 'Full name', type: 'text', placeholder: 'Your full name' },
          { label: 'Email', type: 'email', placeholder: 'you@example.com' },
          { label: 'Password', type: 'password', placeholder: 'Create a password' },
        ]}
        action="Register"
        formAction={registerAction}
        footer={{ label: 'Already registered? Login', href: '/login' }}
      />
    </AuthFrame>
  )
}
