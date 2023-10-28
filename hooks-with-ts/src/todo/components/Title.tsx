import { useTodos } from '../hooks/useTodos';

export const Title: React.FC = () => {
  const { pendingTodos } = useTodos();

  return (
    <>
      <h2>Todo: {pendingTodos}</h2>
    </>
  );
};
