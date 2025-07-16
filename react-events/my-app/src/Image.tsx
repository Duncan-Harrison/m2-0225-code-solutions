import './Image.css';

type Props = {
  srcs: string[];
  index: number;
};
export function Image({ srcs, index }: Props) {
  return (
    <div className="d-flex justify-content-center">
      <div className="width-50 ">
        <img className="image-fill" src={srcs[index]} alt="space-image" />
      </div>
    </div>
  );
}
