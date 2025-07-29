import './Stopwatch.css';
import { useState } from 'react';
import { FaPlay, FaPause } from 'react-icons/fa';

export function Stopwatch() {
  const [seconds, setSeconds] = useState(0);
  const [activeInterval, setActiveInterval] = useState<NodeJS.Timeout>();
  const isPlaying = activeInterval;

  const icon = isPlaying ? (
    <FaPause size="2rem" className="start-stop" />
  ) : (
    <FaPlay size="2rem" className="start-stop" />
  );

  function countUp() {
    setSeconds((seconds) => seconds + 1);
  }

  function changeIcon() {
    if (!isPlaying) {
      const myIntervalID = setInterval(() => countUp(), 1000);
      setActiveInterval(myIntervalID);
    } else {
      clearInterval(activeInterval);
      setActiveInterval(undefined);
    }
  }

  function clearField() {
    if (seconds !== 0 && !isPlaying) {
      setSeconds(0);
    } else {
      changeIcon();
    }
  }

  return (
    <div className="watch">
      <div className="border">
        <span onClick={clearField}>{seconds}</span>
      </div>
      <span onClick={changeIcon}>{icon}</span>
    </div>
  );
}
