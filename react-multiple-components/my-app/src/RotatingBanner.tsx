import { NextButton, PrevButton } from './MoveButtons';
import { IndexButtons } from './IndexButtons';
import { Banner } from './Banner';
import { useState } from 'react';

export type Props = {
  text: string[];
  index: number;
  newClick?: (num: number) => void;
};

export function RotatingBanner({ text, index }: Props) {
  const [activeIndex, setActiveIndex] = useState(0);

  function handleClickNext() {
    if (activeIndex < text.length - 2) {
      setActiveIndex(activeIndex + 1);
    }
  }

  function handleClickPrev() {
    if (activeIndex > 0) {
      setActiveIndex(activeIndex - 1);
    }
  }

  function handleClickIndex(num: number) {
    if (num === index) setActiveIndex(num);
    setActiveIndex(num);
  }

  return (
    <>
      <Banner text={text} index={activeIndex} newClick={handleClickIndex} />
      <PrevButton onClick={handleClickPrev} />
      <IndexButtons items={text} click={handleClickIndex} />
      <NextButton onClick={handleClickNext} />
    </>
  );
}
