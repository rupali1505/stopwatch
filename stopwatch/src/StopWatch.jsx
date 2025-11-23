import { useEffect, useState } from "react";


export default function StopWatch() {
  const [time, setTime] = useState(0); // time in seconds
  const [running, setRunning] = useState(false);

  
  useEffect(() => {
    let interval;
    if (running) {
      interval = setInterval(() => {
        setTime((prev) => prev + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [running]);

  const formatTime = () => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  const handleStartStop = () => setRunning((prev) => !prev);

  const handleReset = () => {
    setTime(0);
    setRunning(false);
  };

  return (
    <div >
      <h1>Stopwatch</h1>
      <p>Time: {formatTime()}</p>
      <button onClick={handleStartStop}>{running ? "Stop" : "Start"}</button>
      <button onClick={handleReset} >
        Reset
      </button>
    </div>
  );
}
