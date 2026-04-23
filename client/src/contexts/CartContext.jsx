import { createContext, useState } from "react";

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [itemId, setItemId] = useState(0);
  const [loading, setLoading] = useState(true);

  const value = {
    cart,
    setCart,
    itemId,
    setItemId,
    loading,
    setLoading,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}
