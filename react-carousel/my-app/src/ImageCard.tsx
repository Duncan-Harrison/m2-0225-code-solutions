import type { Image } from './Carousel';
import './ImageCard.css';

export type Imaging = {
  sources: Image[];
  index: number;
};

export function ImageCards({ sources, index }: Imaging) {
  const i = sources[index];
  return (
    <div className="image-card">
      <img className="card" src={i.src} alt={i.alt} />
    </div>
  );
}
