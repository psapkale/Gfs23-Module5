interface Props {
   isCorrects: Boolean[];
}

const Results = ({ isCorrects }: Props) => {
   const score = isCorrects.reduce((acc, curr) => {
      if (curr) {
         acc++;
      }
      return acc;
   }, 0);

   return (
      <div className="text-center flex items-center justify-center flex-col gap-10">
         <h1 className="text-4xl font-bold">Quiz ended</h1>
         <span className="text-lg">
            Your Score: {score}/{isCorrects.length}
         </span>
      </div>
   );
};

export default Results;
