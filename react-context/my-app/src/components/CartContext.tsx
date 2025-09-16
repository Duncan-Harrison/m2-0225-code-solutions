import { type Product } from '../lib';
import React, { createContext } from 'react';
import { useState } from 'react';

export type CartValue = {
  cartContent: Product[];
  addToCart: (product: Product) => void;
};

export const CartContext = createContext<CartValue>({
  cartContent: [],
  addToCart: () => undefined,
});

type Props = {
  children: React.ReactNode;
};

export function CartProvider({ children }: Props) {
  const [cartContent, setCartContent] = useState<Product[]>([]);

  function addToCart(prod: Product): void {
    const newBasket: Product[] = [...cartContent, prod];
    setCartContent(newBasket);
  }

  const cartContextValues = { cartContent, addToCart };
  return (
    <CartContext.Provider value={cartContextValues}>
      {children}
    </CartContext.Provider>
  );
}
