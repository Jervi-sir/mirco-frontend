import { createRoot } from 'react-dom/client';
import { ModalForm } from '../exposes/ModalForm';

class ModalFormElement extends HTMLElement {
  private root: any;

  connectedCallback() {
    const mountPoint = document.createElement('div');
    this.appendChild(mountPoint);

    this.root = createRoot(mountPoint);
    this.root.render(<ModalForm />);
  }

  disconnectedCallback() {
    if (this.root) {
      this.root.unmount();
    }
  }
}

if (!customElements.get('admin-modal-form')) {
  customElements.define('admin-modal-form', ModalFormElement);
}
