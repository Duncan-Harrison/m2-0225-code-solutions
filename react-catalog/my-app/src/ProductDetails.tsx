import { type Product, readProduct, toDollars } from '../lib/index';
import { useParams, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import './ProductDetails.css';

export function ProductDetails() {
  const { productId } = useParams();
  const [product, setProduct] = useState<Product>();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<unknown>();

  useEffect(() => {
    async function loadItem(productId: number) {
      try {
        const product = await readProduct(productId);
        setProduct(product);
      } catch (err) {
        setError(err);
      } finally {
        setIsLoading(false);
      }
    }
    if (productId) {
      setIsLoading(true);
      loadItem(+productId);
    }
  }, [productId]);

  if (isLoading) return <div>Loading...</div>;
  if (error || !product) {
    return (
      <div>
        Error Loading product {`${productId}`}:{' '}
        {error instanceof Error ? error.message : 'Unknown Error'}
      </div>
    );
  }
  const { name, imageUrl, price, shortDescription, longDescription } = product;
  return (
    <div>
      <div className="container">
        <div className="back">
          <Link to="/">&lt; Back to Catalog</Link>
        </div>
        <div className="row">
          <div className="image-box">
            <img src={imageUrl} alt={name} className="image" />
          </div>
          <div className="column">
            <h2>{name}</h2>
            <h3>{toDollars(price)}</h3>
            <p>{shortDescription}</p>
          </div>
        </div>
        <div className="text">
          <p>{longDescription}</p>
        </div>
      </div>
      <button
        onClick={() => {
          alert(`Added ${name} to cart.`);
        }}>
        Add to Cart
      </button>
    </div>
  );
}
