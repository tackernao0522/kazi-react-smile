## Functional Components(関数コンポーネント)

`App.js`<br>

```
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello Ariyan</h1>
      </header>
    </div>
  );
}

export default App;
```

+ `src/componets`ディレクトリを作成<br>

+ `src/Components/Hello.jsx`コンポーネントを作成<br>

```
function Hello() {
    return <h1>Hello Easy Learning</h1>
}

export default Hello;
```

+ `App.js`を編集<br>

```
import './App.css';
import Learn from './components/Hello'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Learn />
      </header>
    </div>
  );
}

export default App;
```