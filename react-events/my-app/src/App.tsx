import { Header } from './Header';
import { Image } from './Image';
import { Caption } from './Caption';
import { Description } from './Description';
import { Button } from './Button';
import './App.css';
import { useState } from 'react';

const srcs = ['/starry-sky.jpeg', '/cool-kitty.jpg', '/cool-car.jpg'];
const captions = ['A Beautiful Image of Space', 'A Cool Cat', 'A Cool Car'];
const descriptions = [
  'This is a wonderful sky full of stars!',
  'This is a picture of a very cool cat!',
  'This is a picture of a very cool car!',
];

export function App() {
  const [captionIndex, setCaptionIndex] = useState(0);
  const [imageIndex, setImageIndex] = useState(0);
  const [textIndex, setTextIndex] = useState(0);

  function handleDescriptionClick() {
    if (textIndex >= descriptions.length - 1) {
      setTextIndex(0);
    } else {
      setTextIndex(textIndex + 1);
    }
  }
  function handleCaptionClick() {
    if (captionIndex >= captions.length - 1) {
      setCaptionIndex(0);
    } else {
      setCaptionIndex(captionIndex + 1);
    }
  }

  function handleImageClick() {
    if (imageIndex >= srcs.length - 1) {
      setImageIndex(0);
    } else {
      setImageIndex(imageIndex + 1);
    }
  }

  function handleButtonClick() {
    handleDescriptionClick();
    handleCaptionClick();
    handleImageClick();
  }

  return (
    <>
      <Header text="React Image Bank" />
      <Image onImageClick={handleImageClick} srcs={srcs} index={imageIndex} />
      <Caption
        onCaptionClick={handleCaptionClick}
        captions={captions}
        index={captionIndex}
      />
      <Description
        onDescriptionClick={handleDescriptionClick}
        texts={descriptions}
        index={textIndex}
      />
      <Button onButtonClick={handleButtonClick} label="Click for Next Image" />
    </>
  );
}
