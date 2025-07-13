import { Header } from './Header';
import { Image } from './Image';
import { Caption } from './Caption';
import { Description } from './Description';
import { Button } from './Button';
import './App.css';

const srcs = [
  '/cool-car.jpg',
  '/cool-hiker.jpg',
  'cool-kitty.jpg',
  'cool-puppy.jpg',
  '/starry-sky.jpeg',
];
const captions = [
  'A very cool car',
  'A very cool hiking photographer',
  'A very cool cat',
  'A very cool dog',
  'A Beautiful Image of Space',
];
const descriptions = [
  `A racing car drives so fast that it creates sparks while evading the police.`,
  `A photographer hikes up a mountain.`,
  `A cat wears awesome sunglasses.`,
  `A beautiful dog looks at the camera with curiousity.`,
  `This beautiful view of space is only partly obscured by a few clouds.`,
];

export default function App() {
  return (
    <>
      <Header text="React Image Bank" />
      <Image srcs={srcs} />
      <Caption captions={captions} />
      <Description texts={descriptions} />
      <Button label="Click for Next Image" />
    </>
  );
}
