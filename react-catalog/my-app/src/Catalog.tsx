import { useEffect, useState } from 'react';
import { readCatalog, type Product, toDollars } from '../lib/index';
import { ProductDetails } from './ProductDetails';
import { Link } from 'react-router-dom';
import './Catalog.css';

export function Catalog() {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<unknown>();

  useEffect(() => {
    async function loadProducts() {
      try {
        const values = await readCatalog();
        setProducts(values);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    }
    loadProducts();
  }, []);

  if (isLoading) return <div>Loading...</div>;

  if (error)
    return (
      <div>
        Error! {error instanceof Error ? error.message : 'Unknown Error'}
      </div>
    );

  return (
    <div>
      <h1>Catalog</h1>
      <hr />
      <div className="flex">
        {products.map((product) => (
          <Link
            to={`/details/${product.productId}`}
            key={product.productId}
            className="Card"
            onClick={ProductDetails}>
            <img className="card-picture" src={product.imageUrl} />
            <h3>{product.name}</h3>
            <h4>{toDollars(product.price)}</h4>
            <p>{product.shortDescription}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
