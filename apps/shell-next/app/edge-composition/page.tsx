import { RoutePillLink, Surface } from '@dropjdid/ui'
import { RemoteHtmlFragment } from './remote-html-fragment'
import { WebComponentExperiment } from './web-component-experiment'

export const runtime = 'edge'

function getRemoteHeaderUrls() {
  const baseUrl = process.env.NODE_ENV === 'production'
    ? 'https://mfe.react.products.jervi.dev'
    : 'http://localhost:14101'

  const domFragmentUrl = new URL('/fragments/header', baseUrl)
  domFragmentUrl.searchParams.set('title', 'Static DOM Fragment')
  domFragmentUrl.searchParams.set('subtitle', 'This component is called a "Static HTML String Fragment". It`s rendered as a plain HTML string in the React app, fetched by a Next.js edge route, then converted into React nodes in the shell.')
  domFragmentUrl.searchParams.set('source', 'mf-products-react /fragments/header')

  const createElementFragmentUrl = new URL('/fragments/header-react', baseUrl)
  createElementFragmentUrl.searchParams.set('title', 'Headless React Fragment')
  createElementFragmentUrl.searchParams.set('subtitle', 'This component is called a "Headless CreateElement Fragment". It`s rendered with createElement in the React app, fetched by a Next.js edge route, then converted into React nodes in the shell.')
  createElementFragmentUrl.searchParams.set('source', 'mf-products-react /fragments/header-react')

  const modalFragmentUrl = new URL('/fragments/modal-form', baseUrl)
  modalFragmentUrl.searchParams.set('buttonText', 'Open Product Form')
  modalFragmentUrl.searchParams.set('title', 'Add New Product')
  modalFragmentUrl.searchParams.set('description', 'This modal is served as a remote HTML fragment from the products MFE.')
  modalFragmentUrl.searchParams.set('source', 'mf-products-react /fragments/modal-form')

  return {
    domFragmentUrl: domFragmentUrl.toString(),
    createElementFragmentUrl: createElementFragmentUrl.toString(),
    modalFragmentUrl: modalFragmentUrl.toString(),
  }
}

export default async function EdgeCompositionPage() {
  const { domFragmentUrl, createElementFragmentUrl, modalFragmentUrl } = getRemoteHeaderUrls()
  const [domFragmentHtml, createElementFragmentHtml, modalFragmentHtml] = await Promise.all([
    fetch(domFragmentUrl, { cache: 'no-store' }).then((res) => res.text()),
    fetch(createElementFragmentUrl, { cache: 'no-store' }).then((res) => res.text()),
    fetch(modalFragmentUrl, { cache: 'no-store' }).then((res) => res.text()),
  ])

  return (
    <main className="mx-auto flex min-h-screen w-full max-w-6xl flex-col gap-12 px-5 py-12 md:px-8">
      <header className="flex flex-col gap-4 border-b border-slate-800 pb-8">
        <div className="flex justify-between items-end">
          <div className="space-y-1">
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
              Edge <span className="text-indigo-500">Composition</span>
            </h1>
            <p className="text-lg text-slate-400 max-w-2xl">
              Orchestrating micro-frontends using advanced edge-side rendering patterns and remote fragment injection.
            </p>
          </div>
          <RoutePillLink href="/edge-composition/admin">
            Admin Fragments →
          </RoutePillLink>
        </div>
      </header>

      <section className="space-y-6">
        <div className="flex flex-col gap-2">
          <h2 className="text-2xl font-bold text-white">Universal Web Components</h2>
          <p className="text-sm text-slate-400">
            Using the <span className="text-indigo-400 font-semibold italic">"Universal Wrapper"</span> pattern to bridge React components into standard HTML elements.
          </p>
        </div>
        <WebComponentExperiment />
      </section>

      <Surface title="Architecture Notes">
        <div className="mt-4 p-4 space-y-6">
          <div>
            <h3 className="text-sm font-semibold text-indigo-400 uppercase tracking-wider mb-2">The Flow</h3>
            <pre className="text-[11px] font-mono text-indigo-300 bg-slate-950/50 p-4 rounded-lg border border-slate-800 leading-relaxed overflow-x-auto">
              {`[Products MFE] React Component
    |-> [RemoteModalWC] Web Component Wrapper
      |-> [Vite] Bundles into "remote-modal.js" with pnpm build:modal
        |-> [Shell App] Next.js fetches <Script />
          |-> [Browser DOM] Renders <remote-modal>
            |-> [Events] User clicks Close ──▶ CustomEvent('close') ──▶ Shell: setIsOpen(false)`}
            </pre>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-indigo-400 uppercase tracking-wider mb-2">High level point of view</h3>
            <ul className="list-disc list-inside text-sm text-slate-300 space-y-1">
              <li>Using <strong>Web Components (Custom Elements)</strong> as a "universal wrapper" for React components.</li>
              <li>Allows the Shell to use Products MFE components as standard HTML tags without version mismatch.</li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-indigo-400 uppercase tracking-wider mb-2">Component exposed from MF-Products-React</h3>
            <p className="text-xs text-slate-500 mb-2 font-mono italic">file: apps/mf-products-react/src/fragments/ModalFormFragment.tsx</p>
            <ul className="list-disc list-inside text-sm text-slate-300 space-y-1">
              <li><strong>Component:</strong> must be written as createElement.</li>
              <li>This is called as <code>Headless Interactive Fragment</code>.</li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-indigo-400 uppercase tracking-wider mb-2">How it's built (The Bridge)</h3>
            <p className="text-xs text-slate-500 mb-2 font-mono italic">
              Entry point: apps/mf-products-react/src/remote-modal-entry.tsx<br />
              Logic: apps/mf-products-react/src/web-components/RemoteModalWC.tsx
            </p>
            <ul className="list-disc list-inside text-sm text-slate-300 space-y-1">
              <li><strong>Shadow DOM:</strong> Scopes styles so they don't leak between the MFE and the Shell.</li>
              <li><strong>React Integration:</strong> Uses <code>ReactDOM.createRoot</code> to mount React into the Web Component's node.</li>
              <li><strong>Communication:</strong> Syncs <code>observedAttributes</code> (props) and dispatches <code>CustomEvents</code> (callbacks).</li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-indigo-400 uppercase tracking-wider mb-2">Consumption (The Host)</h3>
            <p className="text-xs text-slate-500 mb-2 font-mono italic">file: apps/shell-next/app/edge-composition/web-component-experiment.tsx</p>
            <ul className="list-disc list-inside text-sm text-slate-300 space-y-1">
              <li><strong>JSX Declaration:</strong> Extended <code>JSX.IntrinsicElements</code> so TypeScript recognizes the custom <code>&lt;remote-modal&gt;</code> tag.</li>
              <li><strong>Dynamic Loading:</strong> Uses Next.js <code>&lt;Script /&gt;</code> to fetch the bundle from the MFE.</li>
              <li><strong>Event Bridge:</strong> Uses <code>useEffect</code> to attach a native <code>addEventListener('close')</code> to the component ref, syncing remote actions back to React state.</li>
              <li><strong>Attribute Binding:</strong> Passes host state to the component via the <code>open</code> attribute (e.g., <code>open=&#123;isOpen ? "true" : "false"&#125;</code>).</li>
            </ul>
          </div>
        </div>
      </Surface>

      <section className="space-y-6 border-t border-slate-800 pt-12">
        <div className="flex flex-col gap-2">
          <h2 className="text-2xl font-bold text-white">Static HTML Composition</h2>
          <p className="text-sm text-slate-400">
            Fetching and converting <span className="text-indigo-400 font-semibold italic">"DOM String Fragments"</span> into React VirtualDOM nodes.
          </p>
        </div>
        <RemoteHtmlFragment html={domFragmentHtml} />
        <Surface title="Endpoint Diagnostics" >
          <p className="mt-4 text-sm leading-7 text-slate-300">
            Source URL: <code className="text-indigo-300 font-mono text-xs break-all">{domFragmentUrl}</code>
          </p>
        </Surface>
      </section>

      <section className="space-y-6 border-t border-slate-800 pt-12">
        <div className="flex flex-col gap-2">
          <h2 className="text-2xl font-bold text-white">Functional React Composition</h2>
          <p className="text-sm text-slate-400">
            Executing <span className="text-indigo-400 font-semibold italic">"Headless CreateElement Fragments"</span> for full VirtualDOM compatibility.
          </p>
        </div>
        <RemoteHtmlFragment html={createElementFragmentHtml} />
        <Surface title="Endpoint Diagnostics" >
          <p className="mt-4 text-sm leading-7 text-slate-300">
            Source URL: <code className="text-indigo-300 font-mono text-xs break-all">{createElementFragmentUrl}</code>
          </p>
        </Surface>
      </section>



    </main>
  )
}
