import logo from './bbw.svg';
import Sinus from './Components/Sinus';
import Cosinus from './Components/Cosinus';
import Tangenz from './Components/Tangenz';
import Pythagoras from './Components/Pythagoras';
import Dreieckidentifizierung from './Components/Dreieckidentifizierung';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="bbw-logo" />
        <Dreieckidentifizierung/>
        <Pythagoras/>
        <Sinus/>
        <Cosinus/>
        <Tangenz/>
      </header>
    </div>
  );
}

export default App;
