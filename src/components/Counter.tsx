import { useState } from 'react';

export const Counter: React.FC = () => {
  const [counter, setCounter] = useState(0);

  const handleIncrement = (): void => {
    setCounter(counter + 1);
  };

  const handleDecrement = (): void => {
    if (counter <= 0) return;
    setCounter(counter - 1);
  };

  const handleIncrementBy = (number: number): void => {
    setCounter(counter + number);
  };

  return (
    <>
      <div className="flex flex-column">
        <h2>Counter: useState</h2>
        <span>Valor: {counter}</span>
        <div className="flex">
          <button onClick={handleIncrement}>+1</button>
          <button onClick={handleDecrement}>-1</button>
          <button onClick={() => handleIncrementBy(5)}>5</button>
          <button onClick={() => setCounter(0)}>Reset</button>
        </div>
      </div>
    </>
  );
};
