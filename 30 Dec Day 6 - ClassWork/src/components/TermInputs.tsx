import { LoanDataType } from "./LoanCalculator";
import InputTab from "./InputTab";
import TenureTab from "./TenureTab";

interface Props {
   loanData: LoanDataType;
   setLoanData: (prev: LoanDataType) => void;
}

const TermInputs = ({ loanData, setLoanData }: Props) => {
   function handleChange(property: keyof LoanDataType, newValue: number) {
      if (property === "homeValue") {
         const newData = {
            ...loanData,
            [property]: newValue,
            downPayment: (20 / 100) * newValue,
            loanAmount: (80 / 100) * newValue,
         };
         setLoanData(newData);
         return;
      }
      if (property === "downPayment" || property === "loanAmount") {
         const counterPart =
            property === "downPayment" ? "loanAmount" : "downPayment";
         const newData = {
            ...loanData,
            [property]: newValue,
            [counterPart]: loanData.homeValue - newValue,
         };
         setLoanData(newData);
         return;
      }
      setLoanData({ ...loanData, [property]: newValue });
   }

   return (
      <div className="w-full lg:w-[70%] my-10 flex items-center justify-center lg:items-start lg:justify-between gap-3 flex-col">
         <InputTab
            title="Home Value"
            property="homeValue"
            value={loanData.homeValue}
            lowerLimit={1000}
            upperLimit={10000}
            step={100}
            handleChange={handleChange}
         />
         <InputTab
            title="Down Payment"
            property="downPayment"
            value={loanData.downPayment}
            lowerLimit={0}
            upperLimit={loanData.homeValue}
            step={100}
            handleChange={handleChange}
         />
         <InputTab
            title="Loan Amount"
            property="loanAmount"
            value={loanData.loanAmount}
            lowerLimit={0}
            upperLimit={loanData.homeValue}
            step={100}
            handleChange={handleChange}
         />
         <InputTab
            title="Interest Rate"
            property="interestRate"
            value={loanData.interestRate}
            lowerLimit={2}
            upperLimit={18}
            step={1}
            handleChange={handleChange}
         />
         <TenureTab
            title="Tenure"
            value={loanData.tenure}
            handleChange={handleChange}
            property="tenure"
         />
      </div>
   );
};

export default TermInputs;
