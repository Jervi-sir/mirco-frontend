import { PropsWithChildren, MouseEventHandler } from "react"

type ButtonProps = PropsWithChildren<{
  href?: string
  onClick?: MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>
}>

export function LabButton({ children, href, onClick }: ButtonProps) {
  const className =
    'inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/20 cursor-pointer'

  if (href) {
    return (
      <a className={className} href={href} onClick={onClick as MouseEventHandler<HTMLAnchorElement>}>
        {children}
      </a>
    )
  }

  return (
    <button className={className} onClick={onClick as MouseEventHandler<HTMLButtonElement>}>
      {children}
    </button>
  )
}