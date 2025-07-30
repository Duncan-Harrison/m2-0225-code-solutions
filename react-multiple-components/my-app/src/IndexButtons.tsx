import type { Props } from './RotatingBanner';

type IndexProp = {
  items: Props['text'];
  isActive: number;
  click: (num: number) => void;
};

export function IndexButtons({ items, click, isActive }: IndexProp) {
  const buttons = [];

  for (let i = 0; i < items.length; i++) {
    buttons.push(
      <button
        key={i}
        onClick={() => click(i)}
        style={{ backgroundColor: i === isActive ? 'darkgray' : 'lightgray' }}>
        {i}
      </button>
    );
  }

  return <div>{buttons}</div>;
}
