import { Counter, User } from './components';

function App(): JSX.Element {
  return (
    <>
      <h1>Vite + React + TypeScript</h1>
      <hr />
      {/* UseState */}
      <Counter />
      <User />
    </>
  );
}

export default App;
