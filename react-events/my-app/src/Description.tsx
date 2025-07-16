type Props = {
  texts: string[];
  index: number;
};
export function Description({ texts, index }: Props) {
  return <p>{texts[index]}</p>;
}
