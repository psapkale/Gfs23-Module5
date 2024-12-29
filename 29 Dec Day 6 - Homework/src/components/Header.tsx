import { useCart } from "../context/CartProvider";
import CartIcon from "./CartIcon";

const Header = () => {
   const { getTotalQuantity } = useCart();

   return (
      <div className="bg-blue-500 py-10 px-24 flex items-center justify-center">
         <div className="w-[60%] flex items-center justify-between">
            <h1 className="text-white text-2xl">UseReducer</h1>
            <CartIcon count={getTotalQuantity()} />
         </div>
      </div>
   );
};

export default Header;
