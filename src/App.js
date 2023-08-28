import logo from './logo.svg';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './App.css';
import { Nav } from './components/Nav/Nav';
import Hamburguer from './components/Nav/hamburguer';

function App() {
  return (
    <Router>
      <Nav></Nav>

      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p className="underline">
            Se tudo der certo, esse vai ser o site da gente teste tailwind
          </p>
        </header>
      </div>
    </Router>
  );
}

export default App;
