import { useContext } from 'react';
import { CartContext, type CartValue } from './CartContext';

export function useCart(): CartValue {
  const values = useContext(CartContext);
  if (!values)
    throw new Error('useCart can only be used inside of CartProvider.');
  return values;
}
