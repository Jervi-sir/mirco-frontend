import { createElement, Fragment, type CSSProperties } from 'react'

const styles = {
  openButton: {
    padding: '12px 22px',
    borderRadius: '14px',
    backgroundColor: '#6366f1',
    color: '#ffffff',
    border: 'none',
    fontWeight: 600,
    fontSize: '0.95rem',
    cursor: 'pointer',
    boxShadow: '0 10px 25px rgba(99, 102, 241, 0.35)',
    transition: 'transform 0.2s, background-color 0.2s',
    display: 'inline-block',
  },
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(2, 6, 23, 0.85)',
    backdropFilter: 'blur(12px)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1000,
    opacity: 0,
    visibility: 'hidden',
    pointerEvents: 'none',
    transition: 'all 0.3s ease-out',
  },
  modal: {
    backgroundColor: '#0f172a',
    borderRadius: '28px',
    width: '90%',
    maxWidth: '480px',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
    overflow: 'hidden',
    transform: 'scale(0.95) translateY(20px)',
    transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
  },
  header: {
    padding: '24px 32px',
    borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    margin: 0,
    fontSize: '1.25rem',
    fontWeight: 600,
    color: '#f8fafc',
  },
  closeButton: {
    background: 'transparent',
    border: 'none',
    color: '#94a3b8',
    fontSize: '1.5rem',
    cursor: 'pointer',
    padding: '4px',
    lineHeight: 1,
  },
  content: {
    padding: '32px',
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
  },
  formGroup: {
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
  },
  label: {
    fontSize: '0.875rem',
    fontWeight: 500,
    color: '#94a3b8',
  },
  input: {
    backgroundColor: 'rgba(255, 255, 255, 0.03)',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    borderRadius: '12px',
    padding: '12px 16px',
    color: '#f8fafc',
    fontSize: '0.95rem',
    outline: 'none',
  },
  footer: {
    marginTop: '12px',
    display: 'flex',
    justifyContent: 'flex-end',
    gap: '12px',
  },
  cancelButton: {
    padding: '10px 20px',
    borderRadius: '12px',
    backgroundColor: 'transparent',
    color: '#94a3b8',
    border: 'none',
    fontWeight: 500,
    cursor: 'pointer',
  },
  submitButton: {
    padding: '10px 24px',
    borderRadius: '12px',
    backgroundColor: '#6366f1',
    color: 'white',
    border: 'none',
    fontWeight: 600,
    cursor: 'pointer',
  },
} satisfies Record<string, CSSProperties>

export function ModalFormFragment() {
  const modalId = `admin-modal-${Math.random().toString(36).substring(2, 9)}`

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
      #${modalId}-toggle:checked ~ .modal-overlay .modal-container { 
        transform: scale(1) translateY(0) !important;
      }
    `,
    ),
    createElement('input', {
      type: 'checkbox',
      id: `${modalId}-toggle`,
    }),
    createElement(
      'label',
      {
        htmlFor: `${modalId}-toggle`,
        style: styles.openButton,
      },
      'Open Admin Modal',
    ),
    createElement(
      'div',
      { className: 'modal-overlay', style: styles.overlay },
      createElement(
        'div',
        { style: styles.modal, className: 'modal-container' },
        createElement(
          'div',
          { style: styles.header },
          createElement('h2', { style: styles.title }, 'Admin Request'),
          createElement(
            'label',
            { htmlFor: `${modalId}-toggle`, style: styles.closeButton },
            '×',
          ),
        ),
        createElement(
          'form',
          { 
            style: styles.content, 
            id: `${modalId}-form`,
            onSubmit: `
              event.preventDefault();
              console.log('Form submitted from remote fragment:', {
                name: this.querySelector('input').value,
                message: this.querySelector('textarea').value
              });
              alert('Form submitted successfully!');
              document.getElementById('${modalId}-toggle').checked = false;
              return false;
            `
          },
          createElement(
            'div',
            { style: styles.formGroup },
            createElement('label', { style: styles.label }, 'Name'),
            createElement('input', {
              placeholder: 'Enter your name',
              style: styles.input,
              required: true,
            }),
          ),
          createElement(
            'div',
            { style: styles.formGroup },
            createElement('label', { style: styles.label }, 'Message'),
            createElement('textarea', {
              placeholder: 'Your message...',
              style: { ...styles.input, height: '100px', resize: 'none' },
              required: true,
            }),
          ),
          createElement(
            'div',
            { style: styles.footer },
            createElement(
              'label',
              {
                htmlFor: `${modalId}-toggle`,
                style: styles.cancelButton,
              },
              'Cancel',
            ),
            createElement(
              'button',
              { type: 'submit', style: styles.submitButton },
              'Send Message',
            ),
          ),
        ),
      ),
    ),
    createElement('script', {
      dangerouslySetInnerHTML: {
        __html: `
          (function() {
            const form = document.getElementById('${modalId}-form');
            if (form) {
              form.addEventListener('submit', function(e) {
                e.preventDefault();
                const formData = new FormData(e.target);
                console.log('Form submitted (via listener):', Object.fromEntries(formData));
                alert('Request sent to admin!');
                document.getElementById('${modalId}-toggle').checked = false;
              });
            }
          })();
        `
      }
    })
  )
}
