import { createElement, Fragment, type CSSProperties } from 'react'

type ModalFormFragmentProps = {
  buttonText: string
  title: string
  description: string
  source: string
}

const styles = {
  container: {
    padding: '24px',
    background: 'rgba(30, 41, 59, 0.4)',
    borderRadius: '24px',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    backdropFilter: 'blur(12px)',
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
    alignItems: 'flex-start',
  },
  trigger: {
    padding: '12px 24px',
    background: 'linear-gradient(135deg, #6366f1 0%, #a855f7 100%)',
    border: 'none',
    borderRadius: '12px',
    color: 'white',
    fontSize: '16px',
    fontWeight: 600,
    cursor: 'pointer',
    transition: 'all 0.2s ease',
    boxShadow: '0 4px 20px rgba(99, 102, 241, 0.3)',
  },
  modalWrapper: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    background: 'rgba(15, 23, 42, 0.8)',
    backdropFilter: 'blur(12px)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 9999,
    opacity: 0,
    visibility: 'hidden',
    pointerEvents: 'none',
    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
  },
  modalContent: {
    width: '90%',
    maxWidth: '480px',
    background: 'linear-gradient(180deg, #1e293b 0%, #0f172a 100%)',
    borderRadius: '24px',
    padding: '40px',
    position: 'relative',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
    transform: 'scale(0.95) translateY(20px)',
    transition: 'all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)',
  },
  closeBtn: {
    position: 'absolute',
    top: '20px',
    right: '20px',
    background: 'rgba(255, 255, 255, 0.05)',
    border: 'none',
    borderRadius: '50%',
    width: '32px',
    height: '32px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    cursor: 'pointer',
    fontSize: '20px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
  },
  inputGroup: {
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
  },
  label: {
    fontSize: '14px',
    fontWeight: 500,
    color: '#94a3b8',
  },
  input: {
    padding: '12px 16px',
    background: 'rgba(255, 255, 255, 0.05)',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    borderRadius: '8px',
    color: 'white',
    fontSize: '15px',
    outline: 'none',
  },
  submitBtn: {
    marginTop: '12px',
    padding: '14px',
    background: 'white',
    color: '#0f172a',
    border: 'none',
    borderRadius: '12px',
    fontSize: '16px',
    fontWeight: 700,
    cursor: 'pointer',
  },
  badge: {
    background: 'rgba(139, 92, 246, 0.15)',
    color: '#c4b5fd',
    padding: '4px 12px',
    borderRadius: '999px',
    fontSize: '12px',
    fontWeight: 500,
    border: '1px solid rgba(139, 92, 246, 0.2)',
  }
} satisfies Record<string, CSSProperties>

export function ModalFormFragment({
  buttonText,
  title,
  description,
  source,
}: ModalFormFragmentProps) {
  const modalId = `modal-${Math.random().toString(36).substring(2, 9)}`

  return createElement(
    Fragment,
    null,
    createElement(
      'style',
      null,
      `
      #${modalId}-toggle { display: none; }
      #${modalId}-toggle:checked ~ .modal-overlay { 
        opacity: 1 !important;
        visibility: visible !important;
        pointer-events: auto !important;
      }
      #${modalId}-toggle:checked ~ .modal-overlay .modal-content-container { 
        transform: scale(1) translateY(0) !important;
      }
      .modal-trigger:hover { transform: translateY(-2px); filter: brightness(1.1); }
      .modal-input:focus { border-color: #6366f1 !important; box-shadow: 0 0 0 2px rgba(99, 102, 241, 0.2); }
    `,
    ),
    createElement('input', {
      type: 'checkbox',
      id: `${modalId}-toggle`,
      style: { display: 'none' },
    }),
    createElement(
      'div',
      { style: styles.container },
      createElement(
        'div',
        { style: { display: 'flex', gap: '8px', alignItems: 'center' } },
        createElement('span', { style: styles.badge }, 'Interactive Fragment'),
        createElement(
          'span',
          {
            style: {
              ...styles.badge,
              background: 'rgba(255,255,255,0.05)',
              color: '#94a3b8',
              borderColor: 'rgba(255,255,255,0.1)',
            },
          },
          source,
        ),
      ),
      createElement(
        'label',
        {
          htmlFor: `${modalId}-toggle`,
          style: styles.trigger,
          className: 'modal-trigger',
        },
        buttonText,
      ),
    ),
    createElement(
      'div',
      { className: 'modal-overlay', style: styles.modalWrapper },
      createElement(
        'div',
        { style: styles.modalContent, className: 'modal-content-container' },
        createElement(
          'label',
          { htmlFor: `${modalId}-toggle`, style: styles.closeBtn },
          '×',
        ),
        createElement(
          'h2',
          { style: { fontSize: '24px', marginBottom: '8px', color: 'white' } },
          title,
        ),
        createElement(
          'p',
          { style: { color: '#94a3b8', marginBottom: '32px', fontSize: '15px' } },
          description,
        ),
        createElement(
          'form',
          { style: styles.form, action: '#', method: 'POST' },
          createElement(
            'div',
            { style: styles.inputGroup },
            createElement('label', { style: styles.label }, 'Product Name'),
            createElement('input', {
              className: 'modal-input',
              style: styles.input,
              placeholder: 'e.g. Premium Coffee Beans',
            }),
          ),
          createElement(
            'div',
            { style: styles.inputGroup },
            createElement('label', { style: styles.label }, 'Price (USD)'),
            createElement('input', {
              className: 'modal-input',
              style: styles.input,
              type: 'number',
              placeholder: '0.00',
            }),
          ),
          createElement(
            'button',
            { type: 'submit', style: styles.submitBtn },
            'Add Product',
          ),
        ),
      ),
    ),
  )
}
