import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import './SideButtons.css';

export type Adjuster = {
  clicked: () => void;
};

export function LeftButton({ clicked }: Adjuster) {
  return (
    <div className="arrow-container">
      <FaAngleLeft className="arrow" onClick={clicked} />
    </div>
  );
}

export function RightButton({ clicked }: Adjuster) {
  return (
    <div className="arrow-container">
      <FaAngleRight className="arrow" onClick={clicked} />
    </div>
  );
}
