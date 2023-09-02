import logo from './logo.svg';

import './App.css';
import { Nav } from './components/Nav/Nav';

function App() {
  return (
    <div>
      <Nav></Nav>

      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p className="underline">
            Se tudo der certo, esse vai ser o site da gente teste tailwind
          </p>
        </header>
      </div>
    </div>
  );
}

export default App;
