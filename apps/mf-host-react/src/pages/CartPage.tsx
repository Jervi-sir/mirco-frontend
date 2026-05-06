import { useEffect, useState } from 'react'
import { CartWidgetSlot } from '../components/CartWidgetSlot'
import { getRemoteHealth } from '../lib/remote'

export function CartPage() {
  const [retryKey, setRetryKey] = useState(0)
  const [health, setHealth] = useState('checking')

  useEffect(() => {
    getRemoteHealth('http://localhost:4102/health.json').then(setHealth)
  }, [retryKey])

  return (
    <section className="page-grid">
      <div className="panel">
        <div className="panel-header">
          <div>
            <p className="section-label">Cart remote</p>
            <h2>Vue widget mounted inside the React shell</h2>
          </div>
          <span className={`status-chip status-${health}`}>{health.toUpperCase()}</span>
        </div>
        <p className="body-copy">
          This route demonstrates the cross-framework case from the tutorial: a Vue remote shipped
          independently, then mounted into a React host through Module Federation.
        </p>
        <button className="ghost-button" onClick={() => setRetryKey((value) => value + 1)} type="button">
          Remount Vue widget
        </button>
        <CartWidgetSlot retryKey={retryKey} />
      </div>
    </section>
  )
}
