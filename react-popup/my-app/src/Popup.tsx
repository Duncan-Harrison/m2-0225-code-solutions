import './Popup.css';
import { createPortal } from 'react-dom';
import { type ReactNode } from 'react';

type Prop = {
  open: boolean;
  positionTo: HTMLElement | null;
  opacity?: number;
  closeOut?: () => void;
  children: ReactNode;
};

export function Popup({ open, positionTo, opacity, closeOut, children }: Prop) {
  if (!open) return null;
  const r = positionTo?.getBoundingClientRect();
  const top = r ? r.bottom : '50%';
  const left = r ? r.left : '50%';

  return createPortal(
    <>
      <div onClick={closeOut} style={{ opacity }} className={`menu ${open}`} />
      <div style={{ top, left, position: 'absolute' }}>{children}</div>
    </>,
    document.body
  );
}
