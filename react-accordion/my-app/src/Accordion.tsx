import './Accordion.css';
import { useState } from 'react';
import { Topics } from './TopicCard';

export type Topic = {
  id: number;
  title: string;
  content: string;
};

type Props = {
  g: Topic[];
};

export function Accordion({ g }: Props) {
  const [active, setActive] = useState<Topic>();

  return (
    <div className="parent">
      <Topics onClick={setActive} items={g} currentTopic={active} />
    </div>
  );
}
