import { BrowserRouter } from 'react-router-dom';
import { Navigation } from './router/Navigation';

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Navigation />
    </BrowserRouter>
  );
}

export default App;
