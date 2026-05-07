import { PropsWithChildren } from "react"

type ButtonProps = PropsWithChildren<{
  href?: string
}>

export function LabButton({ children, href }: ButtonProps) {
  const className =
    'inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/20'

  if (href) {
    return (
      <a className={className} href={href}>
        {children}
      </a>
    )
  }

  return <span className={className}>{children}</span>
}