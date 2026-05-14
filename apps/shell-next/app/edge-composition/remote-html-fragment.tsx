'use client'

import { createElement, useMemo, useState, useEffect, type ReactNode } from 'react'

function styleStringToObject(style: string) {
  return style.split(';').reduce<Record<string, string>>((acc, rule) => {
    const [rawKey, ...rawValueParts] = rule.split(':')

    if (!rawKey || rawValueParts.length === 0) {
      return acc
    }

    const key = rawKey
      .trim()
      .replace(/-([a-z])/g, (_, char: string) => char.toUpperCase())

    acc[key] = rawValueParts.join(':').trim()
    return acc
  }, {})
}

function domNodeToReact(node: Node, key: string): ReactNode {
  if (node.nodeType === Node.TEXT_NODE) {
    return node.textContent
  }

  if (node.nodeType !== Node.ELEMENT_NODE) {
    return null
  }

  const element = node as HTMLElement
  const props: Record<string, unknown> = { key }

  for (const attribute of Array.from(element.attributes)) {
    if (attribute.name === 'class') {
      props.className = attribute.value
      continue
    }

    if (attribute.name === 'for') {
      props.htmlFor = attribute.value
      continue
    }

    if (attribute.name === 'style') {
      props.style = styleStringToObject(attribute.value)
      continue
    }

    props[attribute.name] = attribute.value
  }

  const children = Array.from(element.childNodes).map((child, index) =>
    domNodeToReact(child, `${key}-${index}`),
  )

  return createElement(element.tagName.toLowerCase(), props, ...children)
}

function htmlToReact(html: string) {
  const documentFragment = new DOMParser().parseFromString(html, 'text/html')

  return Array.from(documentFragment.body.childNodes).map((node, index) =>
    domNodeToReact(node, `remote-node-${index}`),
  )
}

export function RemoteHtmlFragment({ html }: { html: string }) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const content = useMemo(() => {
    if (typeof window === 'undefined') return null
    return htmlToReact(html)
  }, [html])

  if (!mounted) {
    return (
      <div
        dangerouslySetInnerHTML={{ __html: html }}
        style={{ display: 'contents' }}
      />
    )
  }

  return <>{content}</>
}
