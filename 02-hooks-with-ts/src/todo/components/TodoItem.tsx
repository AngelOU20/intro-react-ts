import { useTodos } from '../hooks/useTodos';

interface Props {
  id: string;
  desc: string;
  completed: boolean;
}

export const TodoItem: React.FC<Props> = ({ id, desc, completed }) => {
  const { toggleTodo } = useTodos();

  const handleDbClick = () => {
    toggleTodo(id);
  };

  return (
    <>
      <li
        style={{
          cursor: 'pointer',
          textDecoration: completed ? 'line-through' : '',
        }}
        onDoubleClick={handleDbClick}
      >
        {desc}
      </li>
    </>
  );
};
