import { useState, useCallback, useEffect } from 'react';
import { ImageCards } from './ImageCard';
import { Dots } from './Dots';
import { LeftButton, RightButton } from './SideButtons';
import './Carousel.css';

export type Image = {
  src: string;
  alt: string;
};

export type Props = {
  sources: Image[];
};

export function Carousel({ sources }: Props) {
  const [activeIndex, setActiveIndex] = useState(0);

  function leftActive() {
    if (activeIndex === 0) {
      setActiveIndex(sources.length - 1);
    } else {
      setActiveIndex(activeIndex - 1);
    }
  }

  const rightActive = useCallback(() => {
    if (activeIndex === sources.length - 1) {
      setActiveIndex(0);
    } else {
      setActiveIndex(activeIndex + 1);
    }
  }, [sources, activeIndex]);

  useEffect(() => {
    const timeoutHandle = setTimeout(rightActive, 3000);
    return () => clearTimeout(timeoutHandle);
  }, [rightActive]);

  return (
    <div className="column">
      <div className="row">
        <LeftButton clicked={leftActive} />
        <ImageCards sources={sources} index={activeIndex} />
        <RightButton clicked={rightActive} />
      </div>
      <Dots
        props={sources.length}
        index={activeIndex}
        clicked={(i) => setActiveIndex(i)}
      />
    </div>
  );
}
