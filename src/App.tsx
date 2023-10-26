import { Counter, User } from './components';
import { TimerFather } from './components/TimerFather';

function App(): JSX.Element {
  return (
    <>
      <h1>React + Hooks + TypeScript</h1>
      <hr />
      {/* UseState */}
      <div className="container-hook">
        <h2 className="title-hook" style={{ color: '#646cff' }}>
          useState
        </h2>
        <Counter />
        <User />
      </div>

      {/* useEffect - useRef */}
      <div className="container-hook">
        <h2 className="title-hook" style={{ color: '#77ffff' }}>
          useEffect - useRef
        </h2>
        <TimerFather />
      </div>
    </>
  );
}

export default App;
