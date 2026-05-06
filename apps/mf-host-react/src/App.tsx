import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import { Layout } from './components/Layout'
import { AdminPage } from './pages/AdminPage'
import { CartPage } from './pages/CartPage'
import { OverviewPage } from './pages/OverviewPage'
import { ProductsPage } from './pages/ProductsPage'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <OverviewPage /> },
      { path: 'products', element: <ProductsPage /> },
      { path: 'cart', element: <CartPage /> },
      { path: 'admin', element: <AdminPage /> },
    ],
  },
])

function App() {
  return <RouterProvider router={router} />
}

export default App
