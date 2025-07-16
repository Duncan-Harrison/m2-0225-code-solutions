type Props = {
  captions: string[];
  index: number;
};
export function Caption({ captions, index }: Props) {
  return <h3>{captions[index]}</h3>;
}
