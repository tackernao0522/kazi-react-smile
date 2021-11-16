import './App.css';
import logo from './logo.svg';
import Learn from './components/Hello'
import Learning from './components/Learning';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Learn name="Mango" weight="20gm" />
        <Learn name="Orange" weight="120gm" />
        <Learn name="Apple" weight="50gm" />
      </header>
    </div>

  );
}

export default App;
