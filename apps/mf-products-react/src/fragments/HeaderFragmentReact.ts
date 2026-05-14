import { createElement, type CSSProperties } from 'react'

type HeaderFragmentReactProps = {
  title: string
  subtitle: string
  source: string
}

const styles = {
  shell: {
    border: '1px solid rgba(59, 130, 246, 0.24)',
    background: 'linear-gradient(135deg, rgba(30, 41, 59, 0.96), rgba(30, 64, 175, 0.92))',
    borderRadius: '32px',
    padding: '32px',
    boxShadow: '0 20px 80px rgba(30, 64, 175, 0.22)',
    color: '#ffffff',
    fontFamily: 'Inter, Arial, sans-serif',
  },
  badges: {
    display: 'flex',
    flexWrap: 'wrap' as const,
    gap: '12px',
    alignItems: 'center',
  },
  badge: {
    border: '1px solid rgba(147, 197, 253, 0.22)',
    background: 'rgba(96, 165, 250, 0.12)',
    borderRadius: '999px',
    padding: '8px 12px',
    fontSize: '12px',
    letterSpacing: '0.28em',
    textTransform: 'uppercase' as const,
    color: '#dbeafe',
  },
  source: {
    border: '1px solid rgba(255, 255, 255, 0.12)',
    background: 'rgba(255, 255, 255, 0.06)',
    borderRadius: '999px',
    padding: '8px 12px',
    fontSize: '12px',
    color: '#e2e8f0',
  },
  title: {
    marginTop: '20px',
    marginBottom: '0',
    fontSize: 'clamp(2.2rem, 5vw, 3.4rem)',
    lineHeight: 1.05,
    fontWeight: 700,
  },
  subtitle: {
    marginTop: '16px',
    marginBottom: '0',
    maxWidth: '760px',
    fontSize: '16px',
    lineHeight: 1.7,
    color: 'rgba(239, 246, 255, 0.86)',
  },
} satisfies Record<string, CSSProperties>

export function HeaderFragmentReact({
  title,
  subtitle,
  source,
}: HeaderFragmentReactProps) {
  return createElement(
    'header',
    { style: styles.shell },
    createElement(
      'div',
      { style: styles.badges },
      createElement('span', { style: styles.badge }, 'Remote createElement fragment'),
      createElement('span', { style: styles.source }, `Source: ${source}`),
    ),
    createElement('h1', { style: styles.title }, title),
    createElement('p', { style: styles.subtitle }, subtitle),
  )
}
