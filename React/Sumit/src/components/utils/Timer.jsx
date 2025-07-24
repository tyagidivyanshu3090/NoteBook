import { useEffect, useState } from "react";

const Timer = ({ onTimeout, timeLimit }) => {
  const [seconds, setSeconds] = useState(timeLimit);

  useEffect(() => {
    if (seconds === 0) {
      onTimeout();
      return;
    }

    const timerId = setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds - 1);
    }, 1000);

    return () => clearInterval(timerId);
  }, [seconds, onTimeout]);

  // Format as mm:ss
  const minutes = Math.floor(seconds / 60)
    .toString()
    .padStart(2, "0");
  const secs = (seconds % 60).toString().padStart(2, "0");

  return <span>{minutes}:{secs}</span>;
};

export default Timer;
