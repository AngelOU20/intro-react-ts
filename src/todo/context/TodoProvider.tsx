import { useReducer } from 'react';
import { TodoState } from '../interfaces/interfaces';
import { TodoContext } from './TodoContext';
import { todoReducer } from './todoReducer';

const INITIAL_STATE: TodoState = {
  todoCount: 0,
  todos: [
    {
      id: '1',
      desc: 'Estudiar React con typescript',
      completed: false,
    },
    {
      id: '2',
      desc: 'Lavar la ropa',
      completed: false,
    },
  ],
  completed: 0,
  pending: 2,
};

interface Props {
  children?: React.ReactNode | JSX.Element | JSX.Element[];
}

export const TodoProvider: React.FC<Props> = ({ children }) => {
  const [todoState, dispatch] = useReducer(todoReducer, INITIAL_STATE);

  const toggleTodo = (id: string): void => {
    dispatch({ type: 'TOGGLE_TODO', payload: { id } });
  };
  return (
    <>
      <TodoContext.Provider value={{ todoState, toggleTodo }}>
        {children}
      </TodoContext.Provider>
    </>
  );
};
