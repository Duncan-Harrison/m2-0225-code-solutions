import { FaCircle, FaRegCircle } from 'react-icons/fa';
import './Dots.css';

export type DotProp = {
  props: number;
  index: number;
  clicked: (index: number) => void;
};

export function Dots({ props, index, clicked }: DotProp) {
  const dotRow = [];
  for (let i = 0; i < props; i++) {
    if (i === index) {
      dotRow.push(<FaCircle key={i} id={`${i}`} onClick={() => clicked(i)} />);
    } else {
      dotRow.push(
        <FaRegCircle key={i} id={`${i}`} onClick={() => clicked(i)} />
      );
    }
  }
  return <div className="dot-row">{dotRow}</div>;
}
