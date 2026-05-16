import { useState } from 'react';
import { createPortal } from 'react-dom';

export const ModalForm = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted');
    setIsOpen(false);
  };

  return (
    <>
      <button style={styles.openButton} onClick={() => setIsOpen(true)}>
        Open Form Modal
      </button>


      {isOpen && createPortal(
        <div style={styles.overlay} onClick={() => setIsOpen(false)}>
          <div style={styles.modal} onClick={(e) => e.stopPropagation()}>
            <div style={styles.header}>
              <h2 style={styles.title}>Submit Request</h2>
              <button style={styles.closeButton} onClick={() => setIsOpen(false)}>
                &times;
              </button>

            </div>
            <form onSubmit={handleSubmit} style={styles.content}>
              <div style={styles.formGroup}>
                <label style={styles.label}>Name</label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  style={styles.input}
                  required
                />
              </div>
              <div style={styles.formGroup}>
                <label style={styles.label}>Message</label>
                <textarea
                  placeholder="Your message..."
                  style={{ ...styles.input, ...styles.textarea }}
                  rows={4}
                  required
                />
              </div>
              <div style={styles.footer}>
                <button
                  type="button"
                  style={styles.cancelButton}
                  onClick={() => setIsOpen(false)}
                >
                  Cancel
                </button>
                <button type="submit" style={styles.submitButton}>
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>,
        document.body
      )}
    </>
  );
};



const styles: Record<string, React.CSSProperties> = {
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
    animation: 'fadeIn 0.2s ease-out',
  },
  modal: {
    backgroundColor: '#0f172a',
    borderRadius: '28px',
    width: '90%',
    maxWidth: '480px',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
    overflow: 'hidden',
    animation: 'slideUp 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
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
    transition: 'color 0.2s',
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
    transition: 'border-color 0.2s, background-color 0.2s',
  },
  textarea: {
    resize: 'none',
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
    transition: 'color 0.2s',
  },
  submitButton: {
    padding: '10px 24px',
    borderRadius: '12px',
    backgroundColor: '#6366f1',
    color: 'white',
    border: 'none',
    fontWeight: 600,
    cursor: 'pointer',
    transition: 'transform 0.2s, background-color 0.2s',
  },
};