declare module 'products/ProductList' {
  import type { ComponentType } from 'react'

  const ProductList: ComponentType<{ failMode?: boolean }>
  export default ProductList
}

declare module 'admin/AdminStats' {
  import type { ComponentType } from 'react'

  const AdminStats: ComponentType
  export default AdminStats
}

declare module 'cart/CartWidget' {
  export function mount(el: HTMLElement): () => void
}
