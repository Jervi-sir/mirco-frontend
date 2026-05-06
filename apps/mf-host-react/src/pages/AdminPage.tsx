import { lazy, Suspense, useEffect, useState } from 'react'
import { ErrorBoundary } from '../components/ErrorBoundary'
import { getRemoteHealth, withRetry } from '../lib/remote'

const AdminStats = lazy(() => withRetry(() => import('admin/AdminStats')))

export function AdminPage() {
  const [retryKey, setRetryKey] = useState(0)
  const [health, setHealth] = useState('checking')

  useEffect(() => {
    getRemoteHealth('http://localhost:4103/health.json').then(setHealth)
  }, [retryKey])

  return (
    <section className="page-grid">
      <div className="panel">
        <div className="panel-header">
          <div>
            <p className="section-label">Admin remote</p>
            <h2>Operational insights exposed by a separate React app</h2>
          </div>
          <span className={`status-chip status-${health}`}>{health.toUpperCase()}</span>
        </div>
        <ErrorBoundary onRetry={() => setRetryKey((value) => value + 1)}>
          <Suspense fallback={<div className="panel fallback-panel">Loading AdminStats from remote...</div>}>
            <AdminStats key={retryKey} />
          </Suspense>
        </ErrorBoundary>
      </div>
    </section>
  )
}
