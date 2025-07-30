import { NextButton, PrevButton } from './MoveButtons';
import { IndexButtons } from './IndexButtons';
import { Banner } from './Banner';
import { useState } from 'react';

export type Props = {
  text: string[];
  index: number;
  newClick?: (num: number) => void;
};

export function RotatingBanner({ text }: Props) {
  const [activeIndex, setActiveIndex] = useState(0);

  function handleClickNext() {
    if (activeIndex < text.length - 1) {
      setActiveIndex(activeIndex + 1);
    }
  }

  function handleClickPrev() {
    if (activeIndex > 0) {
      setActiveIndex(activeIndex - 1);
    }
  }

  function handleClickIndex(num: number) {
    setActiveIndex(num);
  }

  return (
    <>
      <Banner text={text} index={activeIndex} newClick={handleClickIndex} />
      <PrevButton onClick={handleClickPrev} />
      <IndexButtons
        items={text}
        click={handleClickIndex}
        isActive={activeIndex}
      />
      <NextButton onClick={handleClickNext} />
    </>
  );
}
