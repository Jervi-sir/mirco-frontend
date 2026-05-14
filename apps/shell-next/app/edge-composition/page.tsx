import { RoutePillLink, Surface } from '@dropjdid/ui'
import { RemoteHtmlFragment } from './remote-html-fragment'

export const runtime = 'edge'

function getRemoteHeaderUrls() {
  const baseUrl = process.env.NODE_ENV === 'production'
    ? 'https://mfe.react.products.jervi.dev'
    : 'http://localhost:14101'

  const domFragmentUrl = new URL('/fragments/header', baseUrl)
  domFragmentUrl.searchParams.set('title', 'DOM string fragment fetched over the network')
  domFragmentUrl.searchParams.set('subtitle', 'This markup is rendered as a plain HTML string in the React app, fetched by a Next.js edge route, then converted into React nodes in the shell.')
  domFragmentUrl.searchParams.set('source', 'mf-products-react /fragments/header')

  const createElementFragmentUrl = new URL('/fragments/header-react', baseUrl)
  createElementFragmentUrl.searchParams.set('title', 'createElement fragment fetched over the network')
  createElementFragmentUrl.searchParams.set('subtitle', 'This markup is rendered with createElement in the React app, fetched by a Next.js edge route, then converted into React nodes in the shell.')
  createElementFragmentUrl.searchParams.set('source', 'mf-products-react /fragments/header-react')

  return {
    domFragmentUrl: domFragmentUrl.toString(),
    createElementFragmentUrl: createElementFragmentUrl.toString(),
  }
}

export default async function EdgeCompositionPage() {
  const { domFragmentUrl, createElementFragmentUrl } = getRemoteHeaderUrls()
  const [domFragmentHtml, createElementFragmentHtml] = await Promise.all([
    fetch(domFragmentUrl, { cache: 'no-store' }).then((res) => res.text()),
    fetch(createElementFragmentUrl, { cache: 'no-store' }).then((res) => res.text()),
  ])

  return (
    <main className="mx-auto flex min-h-screen w-full max-w-6xl flex-col gap-8 px-5 py-10 md:px-8">
      <RemoteHtmlFragment html={domFragmentHtml} />
      <Surface title="url called from" >
        <p className="mt-4 text-sm leading-7 text-slate-300">
          DOM URL: <code>{domFragmentUrl}</code>
        </p>
      </Surface>
      <RemoteHtmlFragment html={createElementFragmentHtml} />
      <Surface title="url called from" >

        <p className="mt-2 text-sm leading-7 text-slate-300">
          createElement URL: <code>{createElementFragmentUrl}</code>
        </p>
      </Surface>


    </main>
  )
}
