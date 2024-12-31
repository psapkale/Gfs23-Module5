interface Props {
   arrLength: number;
   index: number;
   offset: number;
   setIndex: (index: number) => void;
   setOffset: (offset: number) => void;
}

const Pagination = ({
   arrLength,
   index,
   setIndex,
   offset,
   setOffset,
}: Props) => {
   const handlePrev = () => {
      if (index === 0) return;

      setIndex(index - 1);
   };

   const handleNext = () => {
      if (index === Math.ceil(arrLength / offset) - 1) return;

      setIndex(index + 1);
   };

   return (
      <div className="w-[50vw] mx-auto flex items-center justify-between">
         <button
            onClick={handlePrev}
            className="border-2 border-black font-[600] py-1 px-3 rounded-lg transition-all duration-150 disabled:cursor-not-allowed disabled:border-none"
            disabled={index === 0}
         >
            Prev
         </button>

         <div className="flex items-center gap-2">
            {Array(Math.ceil(arrLength / offset))
               .fill("")
               .map((_, i) => (
                  <button
                     key={i}
                     onClick={() => setIndex(i)}
                     className="bg-black text-white py-1 px-3 rounded-lg disabled:bg-white disabled:text-black"
                     disabled={index === i}
                  >
                     {i + 1}
                  </button>
               ))}
         </div>
         <button
            onClick={handleNext}
            className="border-2 border-black font-[600] py-1 px-3 rounded-lg transition-all duration-150 disabled:cursor-not-allowed disabled:border-none"
            disabled={index === Math.ceil(arrLength / offset) - 1}
         >
            Next
         </button>
      </div>
   );
};

export default Pagination;
