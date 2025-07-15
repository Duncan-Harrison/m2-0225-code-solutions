type Props = {
  captions: string[];
  index: number;
  onCaptionClick: () => void;
};
export function Caption({ captions, index, onCaptionClick }: Props) {
  return <h3 onClick={onCaptionClick}>{captions[index]}</h3>;
}
