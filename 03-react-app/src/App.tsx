import { BrowserRouter } from 'react-router-dom';
import { AppRouter } from './router/AppRouter';

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  );
}

export default App;
