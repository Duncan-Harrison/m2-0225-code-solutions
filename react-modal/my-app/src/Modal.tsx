import { type ReactNode, useRef, useEffect } from 'react';

/*
const modal = useRef<HTMLDialogElement>(null);
  function deletion() {
    alert('You have deleted me!');
    modal.current?.close();
}

<button onClick={() => modal.current?.showModal()}>Delete Me!</button>
<dialog ref={modal}>
<p>Do you really want to delete me?</p>
        <button onClick={() => modal.current?.close()}>Cancel</button>
        <button onClick={() => deletion()}>Delete</button>
</dialog>
*/

type Work = {
  children: ReactNode;
  modalOpen: boolean;
  closeOut: () => void;
};

export function Modal({ children, modalOpen, closeOut }: Work) {
  const modal = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    if (modalOpen) {
      modal.current?.showModal();
    } else {
      modal.current?.close();
    }
  }, [modalOpen]);

  return (
    <dialog ref={modal} onClose={closeOut}>
      {children}
    </dialog>
  );
}
