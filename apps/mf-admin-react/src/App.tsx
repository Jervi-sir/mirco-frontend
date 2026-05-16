import AdminStats from './exposes/AdminStats'
import LatestOrders from './exposes/LatestOrders'
import './App.css'
import { ModalFormFragment } from './fragments/ModalFormFragment'

function App() {
  return (
    <main className="remote-shell">
      <p className="section-label">mf-admin-react</p>
      <h1>Admin analytics remote</h1>
      <p className="body-copy">This standalone app also exposes dashboard slices to the host.</p>
      <ModalFormFragment />
      <AdminStats />
      <LatestOrders />
    </main>
  )
}

export default App
