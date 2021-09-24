import logo from './logo.svg';
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
        <Sinus/>
        <Cosinus/>
        <Tangenz/>
        <Pythagoras/>
        <Dreieckidentifizierung/>
      </header>
    </div>
  );
}

export default App;
