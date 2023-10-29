import { useReducer } from 'react';
import { CounterState } from './interfaces/interfaces';
import { counterReducer } from './state/counterReducer';
import * as CounterActions from './actions/actions';

interface Props {
  title: string;
}

const INITIAL_STATE: CounterState = {
  counter: 0,
  previous: 0,
  changes: 0,
};

export const CounterReducerComponent: React.FC<Props> = ({ title }) => {
  const [counterState, dispatch] = useReducer(counterReducer, INITIAL_STATE);

  const { counter, previous, changes } = counterState;

  const handleClick = (value: number) => {
    dispatch(CounterActions.doIncreaseBy(value));
  };

  const handleReset = () => {
    dispatch(CounterActions.doReset());
  };

  return (
    <>
      <h2 style={{ color: '#d2efed' }}>{title} Segmentado</h2>

      <p style={{ fontSize: '2em', fontWeight: 700, margin: 0 }}>
        Counter: {counter}
        <br />
        Previous: {previous}
        <br />
        Changes: {changes}
      </p>

      <pre>{JSON.stringify(counterState, null, 2)}</pre>

      <button onClick={() => handleClick(1)}>+1</button>
      <button onClick={() => handleClick(5)}>+5</button>
      <button onClick={() => handleClick(10)}>+10</button>
      <button onClick={handleReset}>Reset</button>
    </>
  );
};
