import { useEffect, useState } from "react";

interface Props {
   value: number;
   success: boolean;
   onSuccess: () => void;
}

const ProgressBar = ({ value, success, onSuccess }: Props) => {
   const [percent, setPercent] = useState(value);

   useEffect(() => {
      setPercent(Math.min(Math.max(value, 0), 100));

      if (value >= 100) {
         onSuccess();
      }
   }, [value]);

   return (
      <div className="flex items-center flex-col">
         <h1 className="text-xl">Progress Bar</h1>
         <div className="relative w-[35vw] mx-auto h-[22px] rounded-xl bg-slate-200 border border-slate-300 flex items-center">
            <div
               style={{
                  width: `${percent}%`,
               }}
               className="absolute top-0 left-0 h-full bg-green-500 rounded-xl z-10"
            />
            <span
               className="mx-auto z-20"
               style={{
                  color: percent > 49 ? "white" : "black",
               }}
            >
               {percent.toFixed(0)}%
            </span>
         </div>
         <span className="text-xl">{success ? "Complete!" : "Loading..."}</span>
      </div>
   );
};

export default ProgressBar;
