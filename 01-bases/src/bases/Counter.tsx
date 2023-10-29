import { useState } from 'react';

interface Props {
  initialValue?: number;
  title: string;
}

export const Counter: React.FC<Props> = ({ initialValue = 10, title }) => {
  const [counter, setCounter] = useState(initialValue);

  const handleClick = () => {
    setCounter(counter + 1);
  };

  return (
    <>
      <h2>
        {title}: {counter}
      </h2>
      <button onClick={handleClick}>+1</button>
    </>
  );
};
