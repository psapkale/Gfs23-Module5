import { LoanDataType } from "./LoanCalculator";

interface Props {
   title: string;
   value: number;
   handleChange: (property: keyof LoanDataType, newValue: number) => void;
   property: keyof LoanDataType;
}

const TenureTab = ({ title, value, handleChange, property }: Props) => {
   return (
      <div className="w-[70%] relative mt-2">
         <h1 className="absolute -top-3 left-2 bg-white px-1">{title}</h1>
         <select
            name=""
            id=""
            onChange={(e) => handleChange(property, +e.target.value)}
            className="border border-black w-full py-2 px-4 pl-2 rounded-md cursor-pointer"
         >
            <option value={5} selected={value === 5}>
               5 Years
            </option>
            <option value={10} selected={value === 10}>
               10 Years
            </option>
            <option value={15} selected={value === 15}>
               15 Years
            </option>
            <option value={20} selected={value === 20}>
               20 Years
            </option>
            <option value={25} selected={value === 25}>
               25 Years
            </option>
         </select>
      </div>
   );
};

export default TenureTab;
