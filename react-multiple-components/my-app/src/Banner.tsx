import type { Props } from './RotatingBanner';

export function Banner({ text, index }: Props) {
  const i = index;
  const title = text[i];
  return <p>{title}</p>;
}
