import { useState } from 'react';
type Props = {
  texts: string[];
};
export function Description({ texts }: Props) {
  const [index, setIndex] = useState(0);
  function handleClick() {
    if (index >= texts.length - 1) {
      setIndex(0);
      console.log(index);
    } else {
      setIndex(index + 1);
      console.log(index);
    }
  }
  return <p onClick={handleClick}>{texts[index]}</p>;
}
