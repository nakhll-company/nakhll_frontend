// node libraries
import { useEffect, useState } from "react";

function Timer({ date }) {
  const calculateTimeLeft = () => {
    const difference = +new Date(date) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        روز: Math.floor(difference / (1000 * 60 * 60 * 24)),
        ساعت: Math.floor((difference / (1000 * 60 * 60)) % 24),
        دقیقه: Math.floor((difference / 1000 / 60) % 60),
        ثانیه: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
  });

  const timerComponents = [];

  Object.keys(timeLeft).forEach((interval) => {
    if (!timeLeft[interval]) {
      return;
    }

    timerComponents.push(
      <span>
        {timeLeft[interval]} {interval}{" "}
      </span>
    );
  });
  return (
    <div>
      {timerComponents.length ? timerComponents : <span>Times up!</span>}
    </div>
  );
}
// export
export default Timer;
