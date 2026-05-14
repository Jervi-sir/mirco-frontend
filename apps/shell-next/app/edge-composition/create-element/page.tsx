import { RoutePillLink, Surface } from '@dropjdid/ui'
import { RemoteHtmlFragment } from '../remote-html-fragment'

export const runtime = 'edge'

function getRemoteHeaderUrl() {
  const baseUrl = process.env.NODE_ENV === 'production'
    ? 'https://mfe.react.products.jervi.dev'
    : 'http://localhost:14101'

  const remoteUrl = new URL('/fragments/header-react', baseUrl)
  remoteUrl.searchParams.set('title', 'createElement header fetched over the network')
  remoteUrl.searchParams.set('subtitle', 'This markup is rendered in the React app with createElement, fetched by a Next.js edge route, then converted back into React nodes in the shell.')
  remoteUrl.searchParams.set('source', 'mf-products-react /fragments/header-react')

  return remoteUrl.toString()
}

export default async function EdgeCompositionCreateElementPage() {
  const fragmentUrl = getRemoteHeaderUrl()
  const fragmentResponse = await fetch(fragmentUrl, { cache: 'no-store' })
  const fragmentHtml = await fragmentResponse.text()

  return (
    <main className="mx-auto flex min-h-screen w-full max-w-6xl flex-col gap-8 px-5 py-10 md:px-8">
      <RemoteHtmlFragment html={fragmentHtml} />

      <Surface title="How it works">
        <div className="space-y-4 text-sm leading-7 text-slate-300">
          <p>
            1. The React app exposes <code>/fragments/header-react</code> and builds the fragment with <code>createElement(...)</code>.
          </p>
          <p>
            2. The route runs with <code>runtime = 'edge'</code> and fetches the remote fragment over HTTP.
          </p>
          <p>
            3. The shell parses the returned HTML and renders it as React elements.
          </p>
        </div>
      </Surface>

      <Surface
        title="Compare examples"
        aside={<RoutePillLink href="/edge-composition">DOM string example</RoutePillLink>}
      >
        <pre className="overflow-x-auto rounded-2xl border border-white/10 bg-black/20 p-4 text-sm text-cyan-100">
{`export const runtime = 'edge'

import { RemoteHtmlFragment } from '../remote-html-fragment'

export default async function Page() {
  const html = await fetch('http://localhost:14101/fragments/header-react').then((res) =>
    res.text(),
  )

  return <RemoteHtmlFragment html={html} />
}`}
        </pre>
        <p className="mt-4 text-sm leading-7 text-slate-300">
          Remote URL: <code>{fragmentUrl}</code>
        </p>
      </Surface>
    </main>
  )
}
