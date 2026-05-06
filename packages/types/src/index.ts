export type Product = {
  id: string
  name: string
  price: number
  creator: string
  dropDate: string
  inventory: number
  status: 'live' | 'soon' | 'sold-out'
}

export type Drop = {
  id: string
  title: string
  launchAt: string
  audience: string
}

export type Order = {
  id: string
  customer: string
  total: number
  state: 'paid' | 'packed' | 'flagged'
}

export type AdminMetric = {
  label: string
  value: string
  delta: string
}
