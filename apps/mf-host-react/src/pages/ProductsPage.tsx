import { lazy, Suspense, useEffect, useMemo, useState } from 'react'
import { ErrorBoundary } from '../components/ErrorBoundary'
import { getRemoteHealth, withRetry } from '../lib/remote'

const ProductList = lazy(() => withRetry(() => import('products/ProductList')))

export function ProductsPage() {
  const [retryKey, setRetryKey] = useState(0)
  const [health, setHealth] = useState('checking')
  const [failMode, setFailMode] = useState(false)

  useEffect(() => {
    getRemoteHealth('https://mfe.react.products.jervi.dev/health.json').then(setHealth)
  }, [retryKey])

  const healthLabel = useMemo(() => health.toUpperCase(), [health])

  return (
    <section className="page-grid">
      <div className="panel">
        <div className="panel-header">
          <div>
            <p className="section-label">Products remote</p>
            <h2>React remote served from :4101</h2>
          </div>
          <span className={`status-chip status-${health}`}>{healthLabel}</span>
        </div>
        <div className="controls-row">
          <button className="ghost-button" onClick={() => setRetryKey((value) => value + 1)} type="button">
            Retry remote load
          </button>
          <label className="toggle-row">
            <input checked={failMode} onChange={(event) => setFailMode(event.target.checked)} type="checkbox" />
            Simulate remote render failure
          </label>
        </div>
        <ErrorBoundary onRetry={() => setRetryKey((value) => value + 1)}>
          <Suspense fallback={<div className="panel fallback-panel">Loading ProductList from remote...</div>}>
            <ProductList key={retryKey} failMode={failMode} />
          </Suspense>
        </ErrorBoundary>
      </div>
    </section>
  )
}
