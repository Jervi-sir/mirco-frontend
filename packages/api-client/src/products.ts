import type { Product } from '@dropjdid/types'

const products: Product[] = [
  {
    id: 'prod-1',
    name: 'Midnight Utility Vest',
    price: 180,
    creator: 'DropJdid Core',
    dropDate: '2026-05-09T18:00:00.000Z',
    inventory: 42,
    status: 'live',
  },
  {
    id: 'prod-2',
    name: 'Signal Runner',
    price: 220,
    creator: 'Studio Atlas',
    dropDate: '2026-05-14T16:30:00.000Z',
    inventory: 18,
    status: 'soon',
  },
  {
    id: 'prod-3',
    name: 'Archive Sling',
    price: 96,
    creator: 'Nadir Works',
    dropDate: '2026-05-01T11:00:00.000Z',
    inventory: 0,
    status: 'sold-out',
  },
]

export async function listProducts() {
  return Promise.resolve(products)
}

export async function getProduct(id: string) {
  return Promise.resolve(products.find((product) => product.id === id) ?? null)
}
