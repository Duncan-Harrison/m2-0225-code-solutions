import './TopicCard.css';
import type { Topic } from './Accordion';

export type Subjects = {
  items: Topic[];
  currentTopic: Topic | undefined;
  onClick: (object: Topic) => void;
};

export function Topics({ items, currentTopic, onClick }: Subjects) {
  return (
    <div className="accordion">
      {items.map((item) => {
        const isActive = item.id === currentTopic?.id;
        return (
          <div id={`${item.id}`} onClick={() => onClick(item)} key={item.id}>
            <div className="title">{item.title}</div>
            {isActive ? <div className="content">{item.content}</div> : null}
          </div>
        );
      })}
    </div>
  );
}
