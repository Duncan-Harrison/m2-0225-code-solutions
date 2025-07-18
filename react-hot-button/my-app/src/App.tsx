import { useState } from 'react';
import './App.css';
import './HotButton.css';
import { HotButton } from './HotButton.tsx';

function App() {
  const [index, setIndex] = useState(0);
  const [clicks, setClicks] = useState(0);
  const classes = [
    'zero-clicks',
    'three-clicks',
    'six-clicks',
    'nine-clicks',
    'twelve-clicks',
    'fifteen-clicks',
    'eighteen-clicks',
  ];

  function handleButtonClick() {
    setClicks(clicks + 1);
    handleIndex();
  }
  function handleIndex() {
    if (clicks < 2) {
      setIndex(0);
    } else if (clicks < 5) {
      setIndex(1);
    } else if (clicks < 8) {
      setIndex(2);
    } else if (clicks < 11) {
      setIndex(3);
    } else if (clicks < 14) {
      setIndex(4);
    } else if (clicks < 17) {
      setIndex(5);
    } else {
      setIndex(6);
    }
    return index;
  }

  return (
    <>
      <HotButton
        className={classes}
        label={clicks === 0 ? 'start' : `clicks: ${clicks}`}
        index={index}
        onButtonClick={handleButtonClick}
      />
    </>
  );
}

export default App;
