interface Props {
   count: number;
}

const CartIcon = ({ count }: Props) => {
   return (
      <div className="relative">
         <img src="/cart.svg" className="w-[2em]" />
         {/* cart count */}
         <div className="w-6 h-6 absolute -top-2 -right-2 bg-gray-400 rounded-full text-white flex items-center justify-center">
            {count}
         </div>
      </div>
   );
};

export default CartIcon;
