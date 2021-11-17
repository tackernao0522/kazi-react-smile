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

## State Manipulating

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
    // console.log('Hello Easy Learning')
    // alert('Welcome Udemy')
    // this.state.fruits[0] = 'samsung';
    this.setState({
        fruits: [
                { name: 'Samsung', weight: '120gm' },
                { name: 'Apple', weight: '20gm' },
                { name: 'Nokia', weight: '60gm' },
            ],
        })
    }

    render() {
        return (
        <div>
            <button onClick={this.clickHandler}>Click Me</button>
            <h1>Fruit name is {this.state.fruits[0].name}</h1>
            <h1>Fruit name is {this.state.fruits[1].name}</h1>
            <h1>Fruit name is {this.state.fruits[2].name}</h1>
        </div>
        )
    }
}

export default Learning
```

## UseState Hook(関数コンポーネントで使用)

+ `src/components/Hook.jsx`コンポーネントを作成<br>

```
import React, { useState } from 'react'

const Hook = (props) => {
    const [fruitState, setFruiteState] = useState({
        fruits: [
            { name: 'Mango', weight: '120gm' },
            { name: 'Apple', weight: '20gm' },
            { name: 'Orange', weight: '60gm' },
        ],
    })
    return (
        <div>
            <button>Change Me</button>
            <h1>Fruit name is {fruitState.fruits[0].name}</h1>
            <h1>Fruit name is {fruitState.fruits[1].name}</h1>
            <h1>Fruit name is {fruitState.fruits[2].name}</h1>
        </div>
    )
}

export default Hook
```

+ `App.js`を編集<br>

```
import './App.css';
// import logo from './logo.svg';
// import Learn from './components/Hello'
// import Learning from './components/Learning';
import Hook from './components/Hook';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Hook />
      </header>
    </div>

  );
}

export default App;
```

## 変更時のデータバインディング

+ `src/components/Check.jsx`コンポーネントを作成<br>

```
import { Component } from "react";

class Check extends Component {
    render() {
        return (
            <div>
                <h1>Hello Easy Learning</h1>
            </div>
        )
    }
}

export default Check
```

+ `App.js`を編集<br>

```
import './App.css';
import Check from './components/Check';
// import logo from './logo.svg';
// import Learn from './components/Hello'
// import Learning from './components/Learning';
// import Hook from './components/Hook';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Check />
      </header>
    </div>

  );
}

export default App;
```

+ `src/components/Check.jsx`を編集(一つ目の方法)<br>

```
import { Component } from "react";

class Check extends Component {
    constructor (props) {
        super(props);
        this.state = {
            men: [
                {name: 'Kazi Ariyan'}
            ]
        }
    }
    render() {
        return (
            <div>
                <input type="text" />
                <h1>Hello {this.state.men[0].name}</h1>
            </div>
        )
    }
}

export default Check
```

+ `src/components/Check.jsx`を編集(二つ目の方法)<br>

```
import { Component } from "react";

class Check extends Component {
    // constructor (props) {
    //     super(props);
    //     this.state = {
    //         men: [
    //             {name: 'Kazi Ariyan'}
    //         ]
    //     }
    // }

    state = {
        name: 'Kazi Ariyan New'
    }

    render() {
        return (
            <div>
                <input type="text" />
                <h1>Hello {this.state.name}</h1>
            </div>
        )
    }
}

export default Check
```

+ `src/components/Check.jsx`を編集<br>

```
import { Component } from "react";

class Check extends Component {
    // constructor (props) {
    //     super(props);
    //     this.state = {
    //         men: [
    //             {name: 'Kazi Ariyan'}
    //         ]
    //     }
    // }

    state = {
        name: 'Kazi Ariyan New'
    }

    changeName = (event) => {
        this.setState({
            name: event.target.value
        })
    }

    render() {
        return (
            <div>
                <input type="text" onChange={this.changeName} value={this.state.name} />
                <h1>Hello {this.state.name}</h1>
            </div>
        )
    }
}

export default Check
```

## Stylesheet & Inline Style in Component

+ `src/components/Learning.css`ファイルを作成<br>

```
.Card {
    width: 80%;
    margin: auto;
    border: 1px solid wheat;
    padding: 20px;
    text-align: center;
    margin: 10px;
}
```

+ `src/components/Learning.jsx`を編集<br>

```
import React, { Component } from 'react'
import './Learning.css';

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
    // console.log('Hello Easy Learning')
    // alert('Welcome Udemy')
    // this.state.fruits[0] = 'samsung';
    this.setState({
        fruits: [
                { name: 'Samsung', weight: '120gm' },
                { name: 'Apple', weight: '20gm' },
                { name: 'Nokia', weight: '60gm' },
            ],
        })
    }

    render() {
        return (
        <div>
            <button onClick={this.clickHandler}>Click Me</button>
            <h1 className="Card">Fruit name is {this.state.fruits[0].name}</h1>
            <h1 className="Card">Fruit name is {this.state.fruits[1].name}</h1>
            <h1 className="Card">Fruit name is {this.state.fruits[2].name}</h1>
        </div>
        )
    }
}

export default Learning
```

+ `src/components/Learning.jsx`を編集(Inline style)<br>

```
import React, { Component } from 'react'
import './Learning.css';

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
    // console.log('Hello Easy Learning')
    // alert('Welcome Udemy')
    // this.state.fruits[0] = 'samsung';
    this.setState({
        fruits: [
                { name: 'Samsung', weight: '120gm' },
                { name: 'Apple', weight: '20gm' },
                { name: 'Nokia', weight: '60gm' },
            ],
        })
    }

    render() {
        const style = {
            backgroundColor: 'orange',
            font: 'inherit',
            border: '2px solid maroon',
            padding: '10px',
            cursor: 'pointer'
        }

        return (
        <div>
            <button style={style} onClick={this.clickHandler}>Click Me</button>
            <h1 className="Card">Fruit name is {this.state.fruits[0].name}</h1>
            <h1 className="Card">Fruit name is {this.state.fruits[1].name}</h1>
            <h1 className="Card">Fruit name is {this.state.fruits[2].name}</h1>
        </div>
        )
    }
}

export default Learning
```

## Single Input

`App.js`を編集<br>

```
import React from "react";

class App extends React.Component {
  render () {
    return (
      <div className="App">
        <h1>Hello Easy Learning</h1>
        <div>
          <form>
            <div class="form-group">
              <label>User Name:</label><br />
              <input type="text" name="username"></input>
              <button type="submit">Submit</button>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

export default App;
```

## OnChange

`App.js`を編集<br>

```
import React from "react";

class App extends React.Component {
  state = {
    nema: ""
  }

  ChangeData = (e) => {
    let val = e.target.value;
    this.setState({ name: val });
  }

  render() {
    return (
      <div className="App">
        <h1>Hello {this.state.name}</h1>
        <div>
          <form>
            <div class="form-group" style={{ marginLeft: 200 }}>
              <label>User Name:</label>
              <br />
              <input type="text" name="username" onChange={this.ChangeData}></input>
              <br />
              <button type="submit">Submit</button>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

export default App;
```

