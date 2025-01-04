import { useState, useEffect } from "react";

interface Props {
   value: number;
}

const Timer = ({ value }: Props) => {
   // ! improve logic
   const [val, setVal] = useState(value);
   const [time, setTime] = useState(0);

   useEffect(() => {
      setInterval(() => {
         setVal(val - 1);
      }, 1000);
   }, []);

   useEffect(() => {
      // setTime(val);

      setTime(Math.floor(Math.min(Math.max(val, 0), 5)));
   }, [value]);

   return <span>Time left: {time} seconds</span>;
};

export default Timer;
