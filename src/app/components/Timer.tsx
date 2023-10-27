import { useState, useEffect, useRef } from 'react';

type TimerArgs = {
  milliseconds: number;
  seconds?: number;
};

export const Timer: React.FC<TimerArgs> = ({ milliseconds }: TimerArgs) => {
  const [seconds, setSeconds] = useState(0);

  const ref = useRef<number>();

  useEffect(() => {
    ref.current && clearInterval(ref.current);

    ref.current = setInterval(() => {
      setSeconds((s) => s + 1);
    }, milliseconds);

    // return () => {
    //   // Limpia el intervalo al desmontar el componente
    //   clearInterval(interval);
    // };
  }, [milliseconds]);

  return (
    <h3>
      Timer: <small>{seconds}</small>
    </h3>
  );
};
