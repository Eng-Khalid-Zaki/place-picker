import { useEffect, useState } from "react";

export default function ProgressBar({ timer }) {
  const [remainingTime, setRemainigTime] = useState(timer);
  useEffect(() => {
    const progress = setInterval(() => {
      setRemainigTime((prevTime) => prevTime - 10);
    }, 10);
    return () => clearInterval(progress);
  }, []);
  return <progress vlaue={remainingTime} max={timer} />;
}
