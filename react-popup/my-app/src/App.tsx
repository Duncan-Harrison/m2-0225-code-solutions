import './App.css';
import { Popup } from './Popup';
import { useState, useRef } from 'react';

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  function toggle() {
    isOpen ? setIsOpen(false) : setIsOpen(true);
  }

  return (
    <>
      <button ref={buttonRef} onClick={() => setIsOpen(!isOpen)}>
        Pop up!
      </button>
      <p>This exercise teaches how to create a popup menu.</p>
      <Popup
        open={isOpen}
        positionTo={buttonRef.current}
        opacity={0.1}
        closeOut={() => toggle()}>
        <div className="menu-wrapper">
          <ul className="menu">
            <li>Menu Item 1</li>
            <li>Menu Item 2</li>
            <li>Menu Item 3</li>
            <li>Menu Item 4</li>
          </ul>
        </div>
      </Popup>
      <p>It also discusses ways to generalize a component for maximum reuse.</p>
    </>
  );
}

export default App;
