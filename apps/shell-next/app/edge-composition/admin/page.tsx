import { Surface } from '@dropjdid/ui'
import { RemoteHtmlFragment } from '../remote-html-fragment'

export const runtime = 'edge'

function getAdminRemoteUrl() {
  const adminBaseUrl = process.env.NODE_ENV === 'production'
    ? 'https://mfe.react.admin.jervi.dev'
    : 'http://localhost:14103'

  const adminModalUrl = new URL('/fragments/modal-form', adminBaseUrl)
  return adminModalUrl.toString()
}

export default async function AdminEdgeCompositionPage() {
  const adminModalUrl = getAdminRemoteUrl()
  const adminModalHtml = await fetch(adminModalUrl, { cache: 'no-store' }).then((res) => res.text())

  return (
    <main className="mx-auto flex min-h-screen w-full max-w-6xl flex-col gap-8 px-5 py-10 md:px-8">
      <h1 className="text-3xl font-bold text-white mb-4">Admin Edge Composition</h1>

      <RemoteHtmlFragment html={adminModalHtml} />

      <Surface title="Admin Remote Modal Source" >
        <p className="mt-2 text-sm leading-7 text-slate-300">
          This fragment is not working since it is missing a bundling from React side. and its not using the Wrapper in NextJS side
        </p>
        <p className="mt-2 text-xs font-mono text-indigo-400 break-all">
          URL: {adminModalUrl}
        </p>
      </Surface>
    </main>
  )
}
