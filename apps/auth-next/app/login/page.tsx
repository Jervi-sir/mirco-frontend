import { AuthCard } from '../../components/auth-card'
import { AuthFrame } from '../../components/auth-frame'
import { loginAction } from '../actions'

export default async function LoginPage() {
  return (
    <AuthFrame
      eyebrow="Auth Zone"
      title="Login"
      description="A route owned by auth-next and exposed publicly as /login through the shell."
    >
      <AuthCard
        title="Sign in to DropJdid"
        subtitle="Access orders, saved drops, and creator dashboards."
        fields={[
          { label: 'Email', type: 'email', placeholder: 'you@example.com' },
          { label: 'Password', type: 'password', placeholder: 'Enter your password' },
        ]}
        action="Login"
        formAction={loginAction}
        footer={{ label: 'No account yet? Register', href: '/register' }}
      />
    </AuthFrame>
  )
}
