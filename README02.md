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

## Props

+ `App.js`を編集<br>

```
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
```

+ `src/components/Hello.jsx`を編集<br>

```
function Hello(props) {
    return <h1>I love {props.name} and weight is {props.weight}</h1>
}

export default Hello;
```

## State

+ `App.js`を編集<br>

```
import './App.css';
import logo from './logo.svg';
import Learn from './components/Hello'
import Learning from './components/Learning';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Learning />
      </header>
    </div>

  );
}

export default App;
```

+ `src/components/Learning.jsx`を編集<br>

```
import React, { Component } from "react";

class Learning extends Component {
    state = {
        fruits: [
            {name: 'Mango', weight: '120gm'},
            {name: 'Apple', weight: '20gm'},
            {name: 'Orange', weight: '60gm'},
        ]
    }
    render() {
        return (
            <div>
                <h1>Fruit name is {this.state.fruits[0].name}</h1>
                <h1>Fruit name is {this.state.fruits[1].name}</h1>
                <h1>Fruit name is {this.state.fruits[2].name}</h1>
            </div>
        )
    }
}

export default Learning
```

+ `src/components/Learning.jsx`を再編集<br>

```
import React, { Component } from "react";

class Learning extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fruits: [
                {name: 'Mango', weight: '120gm'},
                {name: 'Apple', weight: '20gm'},
                {name: 'Orange', weight: '60gm'},
            ]
        }
    }
        render() {
        return (
            <div>
                <h1>Fruit name is {this.state.fruits[0].name}</h1>
                <h1>Fruit name is {this.state.fruits[1].name}</h1>
                <h1>Fruit name is {this.state.fruits[2].name}</h1>
            </div>
        )
    }
}

export default Learning
```

## イベントハンドラー

+ `src/components/Learning.jsx`を編集<br>

```
import React, { Component } from 'react'

class Learning extends Component {
    constructor(props) {
        super(props)
        this.state = {
        fruits: [
            { name: 'Mango', weight: '120gm' },
            { name: 'Apple', weight: '20gm' },
            { name: 'Orange', weight: '60gm' },
        ],
        }
    }

    clickHandler = () => {
        console.log('Hello Easy Learning')
        alert('Welcome Udemy')
    }

    render() {
        return (
        <div>
            <button onClick={this.clickHandler}>Click Me</button>
            <h1>Fruit name is {this.state.fruits[0].name}</h1>
        </div>
        )
    }
}

export default Learning
```