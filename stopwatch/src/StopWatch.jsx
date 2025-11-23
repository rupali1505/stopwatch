import { useEffect, useState } from "react";
export default function StopWatch() {
  const [toggle, setToggle] = useState(false);
  const [running, setRunning] = useState(false);
  const [time, setTime] = useState(0);

  useEffect(() => {
    let interval = null;
    if (running) {
      interval = setInterval(() => {
        setTime((prev) => prev + 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [running]);
  const handleClick = () => {
    setToggle((prev) => {
      const newToggle = !prev;
      setRunning(newToggle);
      return newToggle;
    });
  };

  const formatTime = () => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
   
    return `${minutes}.${seconds < 10 ? "0" : ""}${seconds}`;
  };

  return (
    <div>
      <h1>Stopwatch</h1>
      <p>{formatTime()}</p>
      <button onClick={handleClick}>{!toggle ? "Start" : "Stop"}</button>
      <button onClick={()=>{setTime(0)}}>Reset</button>
    </div>
  );
}
