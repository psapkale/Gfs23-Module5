import { createContext, useContext, useState } from "react";
import { CartItemType, data } from "../assets/utils";

const CartContext = createContext<{
   cartItems: CartItemType[];
   setCartItems: (items: CartItemType[]) => void;
   getTotalPrice: () => number;
   getTotalQuantity: () => number;
}>({
   cartItems: data,
   setCartItems: () => {},
   getTotalPrice: () => 0,
   getTotalQuantity: () => 0,
});

const useCart = () => useContext(CartContext);

const CartProvider = ({ children }: { children: React.ReactNode }) => {
   const [cartItems, setCartItems] = useState<CartItemType[]>(data);

   function getTotalPrice() {
      return cartItems.reduce((acc, curr) => {
         return acc + curr.price * curr.quantity;
      }, 0);
   }

   function getTotalQuantity() {
      return cartItems.reduce((acc, curr) => {
         return acc + curr.quantity;
      }, 0);
   }

   return (
      <CartContext.Provider
         value={{ cartItems, setCartItems, getTotalPrice, getTotalQuantity }}
      >
         {children}
      </CartContext.Provider>
   );
};

export { useCart, CartProvider };
