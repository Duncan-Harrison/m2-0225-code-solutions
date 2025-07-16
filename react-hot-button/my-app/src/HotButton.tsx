import './HotButton.css';
type Props = {
  className: string[];
  label: string;
  index: number;
  onButtonClick: () => void;
};

export function HotButton({ className, label, index, onButtonClick }: Props) {
  return (
    <>
      <button className={className[index]} onClick={onButtonClick}>
        Hot Button
      </button>
      <p>{label}</p>
    </>
  );
}
