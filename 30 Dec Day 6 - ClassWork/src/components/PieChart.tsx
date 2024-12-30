import {
   ArcElement,
   Chart,
   ChartData,
   ChartOptions,
   Legend,
   Tooltip,
} from "chart.js";
import { LoanDataType } from "./LoanCalculator";
import { Pie } from "react-chartjs-2";

interface Props {
   loanData: LoanDataType;
}

Chart.register(ArcElement, Tooltip, Legend);

const PieChart = ({ loanData }: Props) => {
   let n = loanData.homeValue,
      r = loanData.loanAmount,
      i = 12 * loanData.tenure,
      a = loanData.interestRate / 100 / 12,
      o = (r * a * Math.pow(1 + a, i)) / (Math.pow(1 + a, i) - 1);

   const monthlyPayment = (loanData.loanAmount * a) / (1 - Math.pow(1 + a, -i));

   const data: ChartData<"pie", number[], string> = {
      labels: ["Principle", "Interest"],
      datasets: [
         {
            label: "Values",
            data: [n, o * i - r],
            backgroundColor: [
               "rgba(255, 99, 132, 0.2)",
               "rgba(54, 162, 235, 0.2)",
            ],
            borderColor: ["rgba(255, 99, 132, 1)", "rgba(54, 162, 235, 1)"],
            borderWidth: 1,
         },
      ],
   };

   const options: ChartOptions<"pie"> = {
      responsive: true,
      plugins: {
         legend: {
            position: "top",
         },
         tooltip: {
            callbacks: {
               label: function (tooltipItem) {
                  return `Ratio of Principle and Interest: ${tooltipItem.raw}`;
               },
            },
         },
      },
   };

   return (
      <div className="w-[30%] flex items-center justify-center flex-col gap-2">
         <h1 className="text-xl">
            Monthly Payment: ${monthlyPayment.toFixed(2)}
         </h1>
         <div>
            <Pie data={data} options={options} />
         </div>
      </div>
   );
};

export default PieChart;
