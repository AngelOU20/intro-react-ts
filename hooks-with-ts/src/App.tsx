import {
  Counter,
  CounterRed,
  User,
  TimerFather,
  Form,
  Form2,
} from './app/components';
import { Todo } from './todo';

function App(): JSX.Element {
  return (
    <>
      <h1>React + Hooks + TypeScript</h1>
      <hr />
      {/* useContext */}
      <div className="container-hook">
        <h2 className="title-hook" style={{ color: '#ffc72d' }}>
          useContext
        </h2>
        <Todo />
      </div>

      {/* Custom Hooks */}
      <div className="container-hook">
        <h2 className="title-hook" style={{ color: '#ea728b' }}>
          Custom Hooks
        </h2>
        <div className="flex flex-space-around align-start">
          <Form />
          <Form2 />
        </div>
      </div>

      {/* useReduce */}
      <div className="container-hook">
        <h2 className="title-hook" style={{ color: '#87f962' }}>
          useReducer
        </h2>
        <CounterRed />
      </div>

      {/* useEffect - useRef */}
      <div className="container-hook">
        <h2 className="title-hook" style={{ color: '#06dfc0' }}>
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
