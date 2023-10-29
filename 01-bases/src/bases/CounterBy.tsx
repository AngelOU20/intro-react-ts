import { useState } from 'react';

interface Props {
  initialValue?: number;
  title: string;
}

interface CounterState {
  counter: number;
  clicks: number;
}

export const CounterBy: React.FC<Props> = ({ initialValue = 10, title }) => {
  const [{ counter, clicks }, setCounterState] = useState<CounterState>({
    counter: initialValue,
    clicks: 0,
  });

  const handleClick = (value: number): void => {
    setCounterState(({ counter, clicks }) => ({
      counter: counter + value,
      clicks: clicks + 1,
    }));
  };

  return (
    <>
      <h2>
        {title}: {counter}
      </h2>
      <h2>Clicks: {clicks}</h2>
      <button onClick={() => handleClick(1)}>+1</button>
      <button onClick={() => handleClick(5)}>+5</button>
    </>
  );
};
