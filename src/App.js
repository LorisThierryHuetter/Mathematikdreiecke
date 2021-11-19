import logo from './bbw.svg';
import Dreieckidentifizierung from './Components/Dreieckidentifizierung';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="bbw-logo" />
        <Dreieckidentifizierung/>
      </header>
    </div>
  );
}

export default App;
