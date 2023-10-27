import { useReducer } from 'react';

const initialState = {
  counter: 0,
};

type ActionType =
  | { type: 'INCREMENT' }
  | { type: 'DECREMENT' }
  | { type: 'RESET' }
  | { type: 'CUSTOM'; payload: number };

const counterReducer = (state: typeof initialState, action: ActionType) => {
  switch (action.type) {
    case 'INCREMENT':
      return {
        ...state,
        counter: state.counter + 1,
      };

    case 'DECREMENT':
      if (state.counter <= 0) return state;
      return {
        ...state,
        counter: state.counter - 1,
      };

    case 'RESET':
      return {
        ...state,
        counter: 0,
      };

    case 'CUSTOM':
      return {
        ...state,
        counter: state.counter + action.payload,
      };

    default:
      return state;
  }
};

export const CounterRed: React.FC = () => {
  const [{ counter }, dispatch] = useReducer(counterReducer, initialState);

  const handleIncrement = () => {
    dispatch({ type: 'INCREMENT' });
  };

  const handleDecrement = () => {
    dispatch({ type: 'DECREMENT' });
  };

  const handleReset = () => {
    dispatch({ type: 'RESET' });
  };

  const handleCustom = () => {
    dispatch({ type: 'CUSTOM', payload: 100 });
  };

  return (
    <div className="flex flex-column">
      <h3>Contador con reducer: {counter}</h3>

      <div className="flex">
        <button onClick={handleIncrement}>+1</button>
        <button onClick={handleDecrement}>-1</button>
        <button onClick={handleCustom}>+100</button>
        <button onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
};
