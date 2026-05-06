import { useEffect, useState } from 'react'
import { withRetry } from '../lib/remote'

export function CartWidgetSlot({ retryKey }: { retryKey: number }) {
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    let dispose: undefined | (() => void)
    const node = document.getElementById('cart-widget-slot')

    setError(null)

    if (!node) {
      return
    }

    withRetry(() => import('cart/CartWidget'))
      .then((module) => {
        dispose = module.mount(node)
      })
      .catch((loadError) => {
        setError(loadError instanceof Error ? loadError.message : 'Unknown remote load error')
      })

    return () => dispose?.()
  }, [retryKey])

  if (error) {
    return (
      <div className="panel fallback-panel">
        <h3>Vue remote unavailable</h3>
        <p>{error}</p>
      </div>
    )
  }

  return <div id="cart-widget-slot" />
}
