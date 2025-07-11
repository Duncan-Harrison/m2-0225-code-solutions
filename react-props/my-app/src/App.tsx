import { Header } from './Header';
import { Image } from './Image';
import { Caption } from './Caption';
import { Description } from './Description';
import { Button } from './Button';
import './App.css';

const source: string = '/starry-sky.jpeg';
const classN: string = 'image-fill';
const alternative: string = 'space-image';

const cap: string = 'A beautiful Image of Space';
const describe: string = `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam incidunt
      sit dolorum accusantium sapiente reiciendis maxime dolores ullam delectus,
      commodi placeat eveniet, quam voluptates facere et magnam architecto
      quaerat velit voluptas rerum quos asperiores quis in! Nemo aut aliquam
      quas dolore quaerat, error numquam odio modi eos vero. Modi nisi eos
      autem? Iusto hic impedit aspernatur labore quos nesciunt? Ad dolore
      pariatur aperiam nemo, maiores laboriosam quam quod nisi ipsum, dicta sunt
      laborum similique repellat?`;

export default function App() {
  return (
    <>
      <Header text="React Image Bank" />
      <Image src={source} className={classN} alt={alternative} />
      <Caption text={cap} />
      <Description text={describe} />
      <Button text="Click For Next Image" />
    </>
  );
}
