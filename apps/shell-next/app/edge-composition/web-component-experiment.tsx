'use client';

import React, { useState, useEffect, useRef } from 'react';
import Script from 'next/script';
import { Surface } from '@dropjdid/ui';

// Add type definition for the custom element to avoid TS errors
declare global {
  namespace JSX {
    interface IntrinsicElements {
      'remote-modal': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement> & {
        title?: string;
        open?: string;
      }, HTMLElement>;
    }
  }
}

export const WebComponentExperiment = () => {
  const [isOpen, setIsOpen] = useState(false);
  const modalRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const modal = modalRef.current;
    if (!modal) return;

    const handleClose = (event: any) => {
      console.log('Received close event from remote modal:', event.detail);
      setIsOpen(false);
    };

    // Listen for the custom event emitted by the Web Component
    modal.addEventListener('close', handleClose);

    return () => {
      modal.removeEventListener('close', handleClose);
    };
  }, []);

  const remoteScriptUrl = process.env.NODE_ENV === 'production'
    ? 'https://mfe.react.products.jervi.dev/remote-modal.js'
    : 'http://localhost:14101/remote-modal.js';

  return (
    <>
      <Script
        src={remoteScriptUrl}
        strategy="afterInteractive"
        onLoad={() => console.log('Remote Modal script loaded')}
      />

      <Surface title="Web Component Experiment" >
        <div className="flex flex-col gap-6 mt-4">
          <p className="text-sm leading-7 text-slate-300">
            This experiment loads a <strong>Web Component</strong> from a remote MFE.
            The host communicates with it via <strong>attributes</strong> (props) and
            listens for <strong>custom events</strong>.
          </p>

          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsOpen(true)}
              className="px-6 py-3 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl font-semibold transition-all shadow-lg shadow-indigo-500/20"
            >
              Open Remote Web Component Modal
            </button>

            <div className="flex items-center gap-2">
              <div className={`w-3 h-3 rounded-full ${isOpen ? 'bg-green-500 animate-pulse' : 'bg-slate-600'}`} />
              <span className="text-xs font-mono text-slate-400">
                HOST STATE: {isOpen ? 'OPEN' : 'CLOSED'}
              </span>
            </div>
          </div>

          <div className="p-4 bg-slate-900/50 rounded-lg border border-slate-800">
            <p className="text-xs font-mono text-slate-500 mb-2 uppercase tracking-wider">Usage in code:</p>
            <pre className="text-[11px] text-indigo-300 overflow-x-auto">
              {`<remote-modal 
  title="Micro-Frontend Modal" 
  open="${isOpen}"
></remote-modal>`}
            </pre>
          </div>
        </div>
      </Surface>

      {/* Render the custom element */}
      <remote-modal
        ref={modalRef as any}
        title="Micro-Frontend Modal"
        open={isOpen ? "true" : "false"}
      ></remote-modal>
    </>
  );
};
