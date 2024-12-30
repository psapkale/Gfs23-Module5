import { LoanDataType } from "./LoanCalculator";

interface Props {
   title: string;
   property: keyof LoanDataType;
   value: number;
   lowerLimit: number;
   upperLimit: number;
   step: number;
   handleChange: (property: keyof LoanDataType, newValue: number) => void;
}

const InputTab = ({
   title,
   property,
   value,
   lowerLimit,
   upperLimit,
   step,
   handleChange,
}: Props) => {
   return (
      <div className="w-full">
         <h1 className="text-lg">{title}</h1>
         <h1 className="text-4xl">${value}</h1>
         <input
            type="range"
            name=""
            id=""
            value={value}
            min={lowerLimit}
            max={upperLimit}
            step={step}
            onChange={(e) => handleChange(property, +e.target.value)}
            className="w-[70%]"
         />
         <div className="w-[70%] text-slate-800 flex items-center justify-between">
            <span>${lowerLimit}</span>
            <span>${upperLimit}</span>
         </div>
      </div>
   );
};

export default InputTab;
