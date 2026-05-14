import { RoutePillLink, Surface } from '@dropjdid/ui'

export const runtime = 'edge'

function getRemoteHeaderUrl() {
  const baseUrl = process.env.NODE_ENV === 'production'
    ? 'https://mfe.react.products.jervi.dev'
    : 'http://localhost:14101'

  const remoteUrl = new URL('/fragments/header', baseUrl)
  remoteUrl.searchParams.set('title', 'React header fetched over the network')
  remoteUrl.searchParams.set('subtitle', 'This markup is rendered by the React app, fetched by a Next.js edge route, then inserted into the page as a remote fragment.')
  remoteUrl.searchParams.set('source', 'mf-products-react /fragments/header')

  return remoteUrl.toString()
}

export default async function EdgeCompositionPage() {
  const fragmentUrl = getRemoteHeaderUrl()
  const fragmentResponse = await fetch(fragmentUrl, { cache: 'no-store' })
  const fragmentHtml = await fragmentResponse.text()

  return (
    <main className="mx-auto flex min-h-screen w-full max-w-6xl flex-col gap-8 px-5 py-10 md:px-8">
      <div dangerouslySetInnerHTML={{ __html: fragmentHtml }} />
      <Surface title="How it works">
        <div className="space-y-4 text-sm leading-7 text-slate-300">
          <p>
            1. The React app exposes <code>/fragments/header</code> and renders the header to HTML.
          </p>
          <p>
            2. This Next.js page runs with <code>runtime = 'edge'</code>.
          </p>
          <p>
            3. The page calls <code>fetch(fragmentUrl)</code> and injects the returned markup.
          </p>
          <p>
            This is real network composition: the header comes from another app over HTTP instead of a local import.
          </p>
        </div>
      </Surface>

      <Surface title="Use it in Next.js" aside={<RoutePillLink href="/">Back home</RoutePillLink>}>
        <pre className="overflow-x-auto rounded-2xl border border-white/10 bg-black/20 p-4 text-sm text-cyan-100">
          {`export const runtime = 'edge'

export default async function Page() {
  const html = await fetch('http://localhost:14101/fragments/header').then((res) =>
    res.text(),
  )

  return (
    <div dangerouslySetInnerHTML={{ __html: html }} />
  )
}`}
        </pre>
        <p className="mt-4 text-sm leading-7 text-slate-300">
          Remote URL: <code>{fragmentUrl}</code>
        </p>
      </Surface>
    </main>
  )
}
