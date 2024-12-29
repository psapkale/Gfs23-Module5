import { useCart } from "../context/CartProvider";

interface Props {
   total: number;
}

const CartTotal = ({ total }: Props) => {
   const { setCartItems } = useCart();

   function handleClearCart() {
      setCartItems([]);
   }

   return (
      <div className="w-full flex items-center justify-center gap-2 flex-col">
         <div className="w-full flex items-center justify-between">
            <h1 className="text-2xl">Total</h1>
            <h1 className="bg-blue-600 py-1 px-2 text-white rounded-md text-xl">
               ${total}
            </h1>
         </div>
         <button
            className="bg-slate-200 text-slate-800 py-1 px-2 rounded-md cursor-pointer"
            onClick={handleClearCart}
         >
            Clear Cart
         </button>
      </div>
   );
};

export default CartTotal;
