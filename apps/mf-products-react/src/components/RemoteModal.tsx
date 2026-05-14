import React, { useEffect, useState } from 'react';

interface RemoteModalProps {
  title?: string;
  open?: boolean;
  onClose?: () => void;
}

export const RemoteModal: React.FC<RemoteModalProps> = ({
  title = 'Remote Modal',
  open = false,
  onClose,
}) => {
  const [isVisible, setIsVisible] = useState(open);

  useEffect(() => {
    setIsVisible(open);
  }, [open]);

  if (!isVisible) return null;

  return (
    <div style={styles.overlay} onClick={onClose}>
      <div style={styles.modal} onClick={(e) => e.stopPropagation()}>
        <div style={styles.header}>
          <h2 style={styles.title}>{title}</h2>
          <button style={styles.closeButton} onClick={onClose}>
            &times;
          </button>
        </div>
        <div style={styles.content}>
          <p style={styles.text}>
            This modal is rendered by a <strong>React Micro-Frontend</strong> but behaves like a 
            native <strong>Web Component</strong>.
          </p>
          <div style={styles.infoCard}>
            <div style={styles.infoIcon}>i</div>
            <div style={styles.infoText}>
              Communication is handled via props and custom events.
            </div>
          </div>
        </div>
        <div style={styles.footer}>
          <button style={styles.button} onClick={onClose}>
            Close Modal
          </button>
        </div>
      </div>
    </div>
  );
};

const styles: Record<string, React.CSSProperties> = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    backdropFilter: 'blur(8px)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 10000,
    animation: 'fadeIn 0.3s ease-out',
  },
  modal: {
    backgroundColor: '#1e293b',
    borderRadius: '24px',
    width: '90%',
    maxWidth: '500px',
    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    overflow: 'hidden',
    color: '#f8fafc',
    animation: 'slideUp 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
  },
  header: {
    padding: '24px 32px',
    borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    margin: 0,
    fontSize: '1.5rem',
    fontWeight: 700,
    background: 'linear-gradient(to right, #fff, #94a3b8)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  },
  closeButton: {
    background: 'transparent',
    border: 'none',
    color: '#94a3b8',
    fontSize: '2rem',
    cursor: 'pointer',
    padding: '0 8px',
    lineHeight: 1,
    transition: 'color 0.2s',
  },
  content: {
    padding: '32px',
  },
  text: {
    fontSize: '1.1rem',
    lineHeight: 1.6,
    color: '#cbd5e1',
    marginBottom: '24px',
  },
  infoCard: {
    display: 'flex',
    gap: '16px',
    padding: '16px',
    backgroundColor: 'rgba(56, 189, 248, 0.1)',
    borderRadius: '16px',
    border: '1px solid rgba(56, 189, 248, 0.2)',
  },
  infoIcon: {
    width: '24px',
    height: '24px',
    borderRadius: '50%',
    backgroundColor: '#0ea5e9',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '14px',
    fontWeight: 'bold',
    color: 'white',
    flexShrink: 0,
  },
  infoText: {
    color: '#7dd3fc',
    fontSize: '0.9rem',
    lineHeight: 1.4,
  },
  footer: {
    padding: '24px 32px',
    display: 'flex',
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
  },
  button: {
    padding: '12px 24px',
    borderRadius: '12px',
    backgroundColor: '#fff',
    color: '#0f172a',
    border: 'none',
    fontWeight: 600,
    fontSize: '1rem',
    cursor: 'pointer',
    transition: 'transform 0.2s, background-color 0.2s',
  },
};
