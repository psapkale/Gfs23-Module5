import { useState } from "react";
import PieChart from "./PieChart";
import TermInputs from "./TermInputs";

export interface LoanDataType {
   homeValue: number;
   downPayment: number;
   loanAmount: number;
   interestRate: number;
   tenure: number;
}

const LoanCalculator = () => {
   const [loanData, setLoanData] = useState<LoanDataType>({
      homeValue: 3000,
      downPayment: 600,
      loanAmount: 2400,
      interestRate: 5,
      tenure: 5,
   });

   return (
      <div className="flex items-center flex-col lg:flex-row">
         <PieChart loanData={loanData} />
         <TermInputs loanData={loanData} setLoanData={setLoanData} />
      </div>
   );
};

export default LoanCalculator;
