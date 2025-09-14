export type Product = {
  productId: number;
  name: string;
  imageUrl: string;
  price: number;
  shortDescription: string;
  longDescription: string;
};

export async function readCatalog(): Promise<Product[]> {
  const res = await fetch('/api/products', { method: 'GET' });
  if (!res.ok) throw new Error(`fetch error ${res.status}`);
  return (await res.json()) as Product[];
}

export async function readProduct(productId: number): Promise<Product> {
  const res = await fetch(`/api/products/${productId}`, { method: 'GET' });
  if (!res.ok) throw new Error(`Fetch error ${res.status}`);
  return (await res.json()) as Product;
}
