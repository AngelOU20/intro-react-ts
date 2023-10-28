import { Timer } from './Timer';
import { useState } from 'react';

export const TimerFather = () => {
  const [milliSeconds, setMilliSeconds] = useState(1000);

  return (
    <div className="flex flex-column">
      <span>Milisegundos {milliSeconds}</span>
      <div className="flex">
        <button onClick={() => setMilliSeconds(1000)}>1000</button>
        <button onClick={() => setMilliSeconds(2000)}>2000</button>
        <button onClick={() => setMilliSeconds(5000)}>5000</button>
      </div>
      <Timer milliseconds={milliSeconds} />
    </div>
  );
};
