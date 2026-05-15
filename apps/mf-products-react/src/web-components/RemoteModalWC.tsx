import ReactDOM from 'react-dom/client';
import { RemoteModal } from '../components/RemoteModal';

class RemoteModalWC extends HTMLElement {
  private root: ReactDOM.Root | null = null;
  private mountPoint: HTMLDivElement | null = null;

  static get observedAttributes() {
    return ['title', 'open'];
  }

  connectedCallback() {
    this.mountPoint = document.createElement('div');
    const shadowRoot = this.attachShadow({ mode: 'open' });
    
    // Add styles for animations
    const style = document.createElement('style');
    style.textContent = `
      @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
      }
      @keyframes slideUp {
        from { transform: scale(0.95) translateY(20px); opacity: 0; }
        to { transform: scale(1) translateY(0); opacity: 1; }
      }
    `;
    shadowRoot.appendChild(style);
    shadowRoot.appendChild(this.mountPoint);
    
    this.root = ReactDOM.createRoot(this.mountPoint);
    this.render();
  }

  attributeChangedCallback() {
    this.render();
  }

  disconnectedCallback() {
    if (this.root) {
      this.root.unmount();
    }
  }

  private render() {
    if (!this.root) return;

    const title = this.getAttribute('title') || undefined;
    const open = this.getAttribute('open') === 'true';

    this.root.render(
      <RemoteModal
        title={title}
        open={open}
        onClose={() => {
          this.dispatchEvent(new CustomEvent('close', {
            bubbles: true,
            composed: true,
            detail: { source: 'remote-modal' }
          }));
        }}
      />
    );
  }
}

if (!customElements.get('remote-modal')) {
  customElements.define('remote-modal', RemoteModalWC);
}
