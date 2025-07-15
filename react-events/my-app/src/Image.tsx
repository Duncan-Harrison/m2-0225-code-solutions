import './Image.css';

type Props = {
  srcs: string[];
  index: number;
  onImageClick: () => void;
};
export function Image({ srcs, index, onImageClick }: Props) {
  return (
    <div className="d-flex justify-content-center">
      <div className="width-50 ">
        <img
          onClick={onImageClick}
          className="image-fill"
          src={srcs[index]}
          alt="space-image"
        />
      </div>
    </div>
  );
}
