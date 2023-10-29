import reactLogo from './assets/react.svg';
import { Counter, CounterBy, CounterEffect, CounterHook } from './bases';
import { CounterReducerComponent } from './counter-reducer';

function App(): JSX.Element {
  return (
    <>
      <div className="header">
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <div className="container">
        <h1>React bases with TypeScript</h1>
        <hr />
        <CounterReducerComponent title="Counter Reducer" />
        <Counter title="Counter" />
        <CounterBy title="Counter By Number" />
        <CounterEffect title="Counter Effect" />
        <CounterHook title="Counter Hook" />
      </div>
    </>
  );
}

export default App;
