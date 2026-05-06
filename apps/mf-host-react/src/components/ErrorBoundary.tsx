import { Component, type ErrorInfo, type ReactNode } from 'react'

type Props = {
  children: ReactNode
  onRetry?: () => void
}

type State = {
  hasError: boolean
}

export class ErrorBoundary extends Component<Props, State> {
  state: State = { hasError: false }

  static getDerivedStateFromError() {
    return { hasError: true }
  }

  componentDidCatch(_error: Error, _errorInfo: ErrorInfo) {}

  render() {
    if (this.state.hasError) {
      return (
        <div className="panel fallback-panel">
          <h3>Remote component failed</h3>
          <p>The remote rendered an error. Retry to request a fresh module instance.</p>
          <button
            className="ghost-button"
            onClick={() => {
              this.setState({ hasError: false })
              this.props.onRetry?.()
            }}
            type="button"
          >
            Retry remote
          </button>
        </div>
      )
    }

    return this.props.children
  }
}
