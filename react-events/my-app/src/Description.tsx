type Props = {
  texts: string[];
  index: number;
  onDescriptionClick: () => void;
};
export function Description({ texts, index, onDescriptionClick }: Props) {
  return <p onClick={onDescriptionClick}>{texts[index]}</p>;
}
