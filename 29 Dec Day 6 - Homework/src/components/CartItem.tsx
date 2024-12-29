import { CartItemType } from "../assets/utils";

interface Props {
   item: CartItemType;
   handleRemoveItem: (id: number) => void;
   handleQuantityIncrement: (id: number) => void;
   handleQuantityDecrement: (id: number) => void;
}

const CartItem = ({
   item,
   handleRemoveItem,
   handleQuantityIncrement,
   handleQuantityDecrement,
}: Props) => {
   return (
      <div className="w-full flex items-center justify-between">
         <img src={item.imgUrl} alt={item.title} className="w-36" />
         <div className="flex w-[70%] items-start justify-start flex-col">
            <h1 className="text-2xl text-slate-800">{item.title}</h1>
            <h2 className="text-slate-600">${item.price}</h2>
            <button
               className="text-blue-400 text-sm cursor-pointer"
               onClick={() => handleRemoveItem(item.id)}
            >
               remove
            </button>
         </div>
         <div className="flex items-center justify-center flex-col">
            <button
               className="cursor-pointer"
               onClick={() => handleQuantityIncrement(item.id)}
            >
               <img src="/up-arrow.svg" alt="" />
            </button>
            <h2>{item.quantity}</h2>
            <button
               className="cursor-pointer"
               onClick={() => handleQuantityDecrement(item.id)}
            >
               <img src="/down-arrow.svg" alt="" />
            </button>
         </div>
      </div>
   );
};

export default CartItem;
