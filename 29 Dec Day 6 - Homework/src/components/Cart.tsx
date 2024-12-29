import { useCart } from "../context/CartProvider";
import CartItem from "./CartItem";
import CartTotal from "./CartTotal";

const Cart = () => {
   const { cartItems, getTotalPrice, setCartItems } = useCart();

   function handleRemoveItem(id: number) {
      setCartItems(
         [...cartItems.filter((x) => x.id !== id)].sort((a, b) => a.id - b.id)
      );
   }

   function handleQuantityIncrement(id: number) {
      const item = cartItems.find((x) => x.id === id);

      if (item && item.quantity > 0) {
         item.quantity++;
         setCartItems(
            [item, ...cartItems.filter((x) => x.id !== item.id)].sort(
               (a, b) => a.id - b.id
            )
         );
      }
   }

   function handleQuantityDecrement(id: number) {
      const item = cartItems.find((x) => x.id === id);

      if (item && item.quantity > 0) {
         if (item.quantity === 1) {
            handleRemoveItem(id);
            return;
         }

         item.quantity--;
         setCartItems(
            [item, ...cartItems.filter((x) => x.id !== item.id)].sort(
               (a, b) => a.id - b.id
            )
         );
      }
   }

   return (
      <div className="flex items-center justify-center">
         <div className="w-[60%] flex items-center justify-center my-10 flex-col gap-10">
            <h1 className="uppercase text-6xl">Your bag</h1>
            <div className="w-full flex items-center gap-4 flex-col">
               {cartItems.map((c) => (
                  <CartItem
                     key={c.id}
                     item={c}
                     handleQuantityIncrement={handleQuantityIncrement}
                     handleQuantityDecrement={handleQuantityDecrement}
                     handleRemoveItem={handleRemoveItem}
                  />
               ))}
            </div>
            <hr className="border border-slate-200 w-full" />
            <CartTotal total={getTotalPrice()} />
         </div>
      </div>
   );
};

export default Cart;
