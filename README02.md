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

## Class Components(クラスコンポーネント）

+ `src/components/Learning.jsx`コンポーネントを作成<br>

```
import React, { Component } from "react";

class Learning extends Component {
    render() {
        return <h1>Hello Udemy</h1>
    }
}

export default Learning
```

+ `App.js`を編集<br>

```
import './App.css';
import Learn from './components/Hello'
import Learning from './components/Learning';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Learn />
        <Learning />
      </header>
    </div>
  );
}

export default App;
```

## JSX

`App.js`を編集<br>

```
import './App.css';
import logo from './logo.svg';
import Learn from './components/Hello'
import Learning from './components/Learning';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello</p>
        <Learn />
        <Learning />
      </header>
    </div>
  );
}

export default App;
```