import { cleanup } from "@testing-library/react";
import { useState, useEffect } from "react";

const DateTime = () => {
  const [date, setDate] = useState(new Date(), 1000);
//   const [time, setTime] = useState(new Date(), 1000);
//   const [day, setDay] = useState(new Date(), 1000);
//   const [month, setMonth] = useState(new Date(), 1000);
//   const [year, setYear] = useState(new Date(), 1000);

  return function cleanup() {
    clearInterval(timer);
  };

  return (
    <>
      <div>
        <p>Time: {date.toLocaleTimeString}</p>
      </div>
    </>
  );
};

export default DateTime;
