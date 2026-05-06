type AuthCardProps = {
  title: string
  subtitle: string
  fields: Array<{ label: string; type: string; placeholder: string }>
  action: string
  footer: { label: string; href: string }
  formAction: (formData: FormData) => void | Promise<void>
}

export function AuthCard({ title, subtitle, fields, action, footer, formAction }: AuthCardProps) {
  return (
    <section className="mx-auto w-full max-w-xl rounded-[2rem] border border-white/10 bg-slate-950/70 p-8 shadow-[0_20px_80px_rgba(15,23,42,0.45)]">
      <h2 className="text-2xl font-semibold text-white">{title}</h2>
      <p className="mt-2 text-sm text-slate-300">{subtitle}</p>
      <form action={formAction} className="mt-6 grid gap-4">
        {fields.map((field) => (
          <label key={field.label} className="grid gap-2 text-sm text-slate-300">
            <span>{field.label}</span>
            <input
              className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none ring-0 placeholder:text-slate-500"
              name={field.label.toLowerCase().replace(/\s+/g, '-')}
              type={field.type}
              placeholder={field.placeholder}
              required={field.type !== 'password' || field.label === 'Password'}
            />
          </label>
        ))}
        <button className="rounded-full bg-pink-400 px-5 py-3 text-sm font-semibold text-slate-950" type="submit">
          {action}
        </button>
      </form>
      <a className="mt-5 inline-flex text-sm text-pink-300" href={footer.href}>
        {footer.label}
      </a>
    </section>
  )
}
