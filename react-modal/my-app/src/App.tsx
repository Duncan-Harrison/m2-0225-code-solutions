import { Modal } from './Modal';
import './App.css';
import { useState } from 'react';

function App() {
  const [isDeleting, setIsDeleting] = useState(false);

  function handleDelete(): void {
    alert('You deleted me!');
    setIsDeleting(false);
  }

  return (
    <>
      <button onClick={() => setIsDeleting(true)}>Delete Me!</button>
      <Modal modalOpen={isDeleting} closeOut={() => setIsDeleting(false)}>
        <p>Are you sure you want to delete?</p>
        <button onClick={() => setIsDeleting(false)}>Cancel</button>
        <button onClick={handleDelete} autoFocus>
          Delete!
        </button>
      </Modal>
    </>
  );
}

export default App;

/*
const [isOpen, setIsOpen] = useState(false);

  const modal = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    async function swap() {
      try {
        const current = modal.current ? true : false;
        if (current) {
          setIsOpen(true);
          modal.current?.showModal();
        } else {
          setIsOpen(false);
          modal.current?.close();
        }
      } catch (error) {
        alert(`${error}, isOpen: ${isOpen}`);
      }
    }
    swap();
  }, [modal, isOpen]);

  function deletion() {
    alert('You have deleted me!');
    modal.current?.close();
  }

  return (
    <>
      <button onClick={() => swap()}>Delete Me!</button>
      <Dialog ref={modal}>
        <p>Do you really want to delete me?</p>
        <button onClick={() => modal.current?.close()}>Cancel</button>
        <button onClick={() => deletion()}>Delete</button>
      </Dialog>
    </>
  );
*/
