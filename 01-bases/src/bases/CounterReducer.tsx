import { useReducer } from 'react';

interface Props {
  title: string;
}

interface CounterState {
  counter: number;
  previous: number;
  changes: number;
}

const INITIAL_STATE: CounterState = {
  counter: 0,
  previous: 0,
  changes: 0,
};

type CounterAction =
  | { type: 'INCREASEBY'; payload: { value: number } }
  | { type: 'RESET' };

const counterReducer = (
  state: CounterState,
  action: CounterAction
): CounterState => {
  const { counter, changes } = state;

  switch (action.type) {
    case 'INCREASEBY':
      return {
        ...state,
        counter: counter + action.payload.value,
        previous: counter,
        changes: changes + 1,
      };

    case 'RESET':
      return {
        counter: 0,
        previous: 0,
        changes: 0,
      };

    default:
      return state;
  }
};

export const CounterReducerComponent: React.FC<Props> = ({ title }) => {
  const [counterState, dispatch] = useReducer(counterReducer, INITIAL_STATE);

  const { counter, previous, changes } = counterState;

  const handleClick = (value: number) => {
    dispatch({ type: 'INCREASEBY', payload: { value } });
  };

  const handleReset = () => {
    dispatch({ type: 'RESET' });
  };

  return (
    <>
      <h2>
        {title}: {counter}
        <br />
        Previous: {previous}
        <br />
        Changes: {changes}
      </h2>

      <pre>{JSON.stringify(counterState, null, 2)}</pre>

      <button onClick={() => handleClick(1)}>+1</button>
      <button onClick={() => handleClick(5)}>+5</button>
      <button onClick={() => handleClick(10)}>+10</button>
      <button onClick={handleReset}>Reset</button>
    </>
  );
};
