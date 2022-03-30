import logo from './logo.svg';
import './App.css';
import { Button } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          diVino-Front
        </p>
        <Button variant="primary">Soy un Botón</Button>{' '}
      </header>
    </div>
  );
}

export default App;