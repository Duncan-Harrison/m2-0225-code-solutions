import './App.css';
import { RotatingBanner } from './RotatingBanner';

const items = [
  'Aardvark',
  'Bengal',
  'Caterpillar',
  'Dromedary',
  'Elephant',
  'Ferret',
];

function App() {
  return (
    <>
      <RotatingBanner text={items} index={0} />
    </>
  );
}

export default App;
