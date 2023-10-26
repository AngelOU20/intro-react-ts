import { useState } from 'react';

function App(): JSX.Element {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Vite + React + TypeScript</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </>
  );
}

export default App;
