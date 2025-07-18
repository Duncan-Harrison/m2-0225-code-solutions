import './ToggleSwitch.css';
import { useState } from 'react';

export function ToggleSwitch() {
  const [label, setLabel] = useState('ON');
  const [toggle, setToggle] = useState('toggle-switch is-on');

  function handleClick() {
    if (toggle === 'toggle-switch is-on') {
      setLabel('OFF');
      setToggle('toggle-switch');
    } else {
      setLabel('ON');
      setToggle('toggle-switch is-on');
    }
  }

  return (
    <div>
      <div className={toggle}>
        <div onClick={handleClick} className="slider">
          <div className="switch"></div>
        </div>
        <span className="state-label">{label}</span>
      </div>
    </div>
  );
}
