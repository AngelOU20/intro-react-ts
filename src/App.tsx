import { Counter, CounterRed, User, TimerFather } from './components';

function App(): JSX.Element {
  return (
    <>
      <h1>React + Hooks + TypeScript</h1>
      <hr />
      {/* useReduce */}
      <div className="container-hook">
        <h2 className="title-hook" style={{ color: '#87f962' }}>
          useReducer
        </h2>
        <CounterRed />
      </div>

      {/* useEffect - useRef */}
      <div className="container-hook">
        <h2 className="title-hook" style={{ color: '#77ffff' }}>
          useEffect - useRef
        </h2>
        <TimerFather />
      </div>

      {/* UseState */}
      <div className="container-hook">
        <h2 className="title-hook" style={{ color: '#646cff' }}>
          useState
        </h2>
        <Counter />
        <User />
      </div>
    </>
  );
}

export default App;
