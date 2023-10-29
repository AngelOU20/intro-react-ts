import { useCounter } from '../hooks/useCounter';

interface Props {
  initialValue?: number;
  title: string;
}

export const CounterHook: React.FC<Props> = ({ initialValue = 5, title }) => {
  const { counter, elementToAnimate, handleClick } = useCounter({
    initialValue,
    maxCount: 15,
  });

  return (
    <>
      <h2>{title}:</h2>
      <h3 ref={elementToAnimate}>{counter}</h3>
      <button onClick={handleClick}>+1</button>
    </>
  );
};
