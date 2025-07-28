import type { Props } from './RotatingBanner';

type IndexProp = {
  items: Props['text'];
  click: (num: number) => void;
};

export function IndexButtons({ items, click }: IndexProp) {
  const buttons = [];

  for (let i = 0; i < items.length; i++) {
    buttons.push(<button onClick={() => click(i)}>{i}</button>);
  }

  return <div>{buttons}</div>;
}
