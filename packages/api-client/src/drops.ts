import type { Drop } from '@dropjdid/types'

const drops: Drop[] = [
  {
    id: 'drop-neo-summer',
    title: 'Neo Summer Capsule',
    launchAt: '2026-05-12T19:00:00.000Z',
    audience: 'VIP waitlist',
  },
  {
    id: 'drop-studio-atlas',
    title: 'Studio Atlas Collab',
    launchAt: '2026-05-19T17:00:00.000Z',
    audience: 'Public launch',
  },
]

export async function listDrops() {
  return Promise.resolve(drops)
}
