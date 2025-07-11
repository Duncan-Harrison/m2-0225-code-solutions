import './Image.css';

type Props = {
  className: string;
  src: string;
  alt: string;
};

export function Image(props: Props) {
  return (
    <div className="d-flex justify-content-center">
      <div className="width-50 ">
        <img className={props.className} src={props.src} alt={props.alt} />
      </div>
    </div>
  );
}
