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
    name: ""
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

## Another Way OnChange

+ `App.js`を編集<br>

```
import React from "react";

class App extends React.Component {
  state = {
    username: ""
  }

  ChangeData = (e) => {
    let val = e.target.name; // Username
    let myValue = e.target.value // Gettin value
    this.setState({ [val]: myValue }); // value set on the state
  }

  render() {
    return (
      <div className="App">
        <h1>Hello {this.state.username}</h1>
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

## OnSubmit

+ `App.js`を編集<br>

```
import React from "react";

class App extends React.Component {
  state = {
    username: ""
  }

  ChangeData = (e) => {
    let val = e.target.name; // Username
    let myValue = e.target.value // Gettin value
    this.setState({ [val]: myValue }); // value set on the state
  }

  formSubmit = (event) => {
    event.preventDefault(); // リロードされないようにする
    console.log(this.state.username);
  }

  render() {
    return (
      <div className="App">
        <h1>Hello {this.state.username}</h1>
        <div>
          <form onSubmit={this.formSubmit}>
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

## Multiple Input

+ `App.js`を編集<br>

```
import React from "react";

class App extends React.Component {
  state = {
    username: "",
    phonenumber: "",
    email: "",
    city: ""
  }

  ChangeData = (e) => {
    let val = e.target.name; // Username, phonenumber, email (e.target.nameのnameはname属性)
    let myValue = e.target.value // Gettin value
    this.setState({ [val]: myValue }); // value set on the state
  }

  render() {
    return (
      <div className="App">
        <h1>{ this.state.username}</h1>
        <h1>{ this.state.phonenumber}</h1>
        <h1>{ this.state.email}</h1>
        <h1>{ this.state.city}</h1>
        <div>
          <form>
            <div class="form-group" style={{ marginLeft: 200 }}>
              <label>User Name:</label>
              <br />
              <input type="text" name="username" onChange={this.ChangeData}></input>
              <br />
              <input type="text" name="phonenumber" onChange={this.ChangeData}></input>
              <br />
              <input type="text" name="email" onChange={this.ChangeData}></input>
              <br />
              <input type="text" name="city" onChange={this.ChangeData}></input>
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

## Set Data to State in One Line

+ `App.js`を編集<br>

```
import React from "react";

class App extends React.Component {
  state = {
    email: "",
    password: "",
  }

  formSumbit = (e) => {
    e.preventDefault();
    console.log(this.state.email, this.state.password);
  }

  render() {
    return (
      <div className="App">
        <h1>{ this.state.email}</h1>
        <h1>{ this.state.password}</h1>
        <div>
          <form onSubmit={this.formSumbit}>
            <div class="form-group" style={{ marginLeft: 200 }}>
              <label>User Name:</label>
              <br />
              <input type="email" name="email" onChange={(event) => {this.setState({email: event.target.value})}}></input>
              <br />
              <input type="passoword" name="password" onChange={(event) => {this.setState({password: event.target.value})}}></input>
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

## Form Validation

+ `App.js`を編集<br>

```
import React from "react";

class App extends React.Component {
  state = {
    email: "",
    password: "",
    emailError: '',
    passwordError: ''
  }

  validate() {
    if () {

    } else if () {

    } else {
      return true;
    }
  }

  formSumbit = (e) => {
    e.preventDefault();
    if (this.validate()) {
      alert("Form Submit Done");
    }
  }

  render() {
    return (
      <div className="App">
        <h1>Login Panel</h1>
        <div>
          <form onSubmit={this.formSumbit}>
            <div class="form-group" style={{ marginLeft: 200 }}>
              <label>Email:</label>
              <br />
              <input type="email" name="email" onChange={(event) => { this.setState({ email: event.target.value }) }}></input>
              <br />
              <strong style={{ color: 'red' }}>Email and Password Invalid</strong>
              <br />
              <label>Password:</label>
              <br />
              <input type="passoword" name="password" onChange={(event) => { this.setState({ password: event.target.value }) }}></input>
              <br />
              <strong style={{ color: 'red' }}>Email and Password Invalid</strong>
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

## Error Showing

+ `App.js`を編集<br>

```
import React from "react";

class App extends React.Component {
  state = {
    email: "",
    password: "",
    emailError: '',
    passwordError: ''
  }

  validate() {
    if (!this.state.email > 0 && !this.state.password > 0) {
      this.setState({ emailError: "Email and Password Required" });
    } else if (!this.state.email > 0) {
      this.setState({ emailError: "Email Required" });
    } else if (!this.state.password > 0) {
      this.setState({ passwordError: "Password Required" });
    } else {
      return true;
    }
  }

  formSumbit = (e) => {
    e.preventDefault();
    if (this.validate()) {
      alert("Form Submit Done");
    }
  }

  render() {
    return (
      <div className="App">
        <h1>Login Panel</h1>
        <div>
          <form onSubmit={this.formSumbit}>
            <div class="form-group" style={{ marginLeft: 200 }}>
              <label>Email:</label>
              <br />
              <input type="email" name="email" onChange={(event) => { this.setState({ email: event.target.value }) }}></input>
              <br />
              <strong style={{ color: 'red' }}>{this.state.emailError}</strong>
              <br />
              <label>Password:</label>
              <br />
              <input type="passoword" name="password" onChange={(event) => { this.setState({ password: event.target.value }) }}></input>
              <br />
              <strong style={{ color: 'red' }}>{this.state.passwordError}</strong>
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

## Textarea

+ `App.js`を編集<br>

```
import React from "react";

class App extends React.Component {
  state = {
    email: "",
    details: ""
  }

  formSumbit = (e) => {
    e.preventDefault();
  }

  render() {
    return (
      <div className="App">
        <h1>Login Panel</h1>
        <div>
          <form onSubmit={this.formSumbit}>
            <div class="form-group" style={{ marginLeft: 200 }}>
              <label>Email:</label>
              <br />
              <input type="email" name="email" onChange={(event) => { this.setState({ email: event.target.value }) }}></input>
              <br />
              <label>Details:</label>
              <br />
              <textarea onChange={(event)=>{this.setState({details: event.target.value})}}>Write on Here</textarea>
              <h6>{this.state.details}</h6>
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

## Select Option

+ `App.js`を編集<br>

```
import React from "react";

class App extends React.Component {
  state = {
    age: ""
  }

  formSumbit = (e) => {
    e.preventDefault();
  }

  render() {
    return (
      <div className="App">
        <h1>Select Option</h1>
        <div>
          <form onSubmit={this.formSumbit}>
            <div class="form-group" style={{ marginLeft: 200 }}>
              <label>Your Age:</label>
              <br />
              <select onChange={(event) => {this.setState({age: event.target.value})}}>
                <option value="" selected disabled>Select Your Age</option>
                <option value="15 - 20">15 - 20</option>
                <option value="21 - 30">21 - 30</option>
                <option value="31 - 40">31 - 40</option>
              </select>
              <br />
              <h6>My Age : {this.state.age}</h6>
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
## Lists

+ `App.js`を編集<br>

```
import React from "react";

class App extends React.Component {

  render() {
    const names = ['AA', 'BB', 'CC', 'DD', 'EE']
    const items = names.map((item, idx) => <li key={idx}>{idx}-{item}</li>)

    return (
      <div className="App">
        <h1>Student List</h1>
        <div>
          {items}
        </div>
      </div>
    )
  }
}

export default App;
```
 ## JSON Array List

+ `App.js`を編集<br>

```
import React from "react";

class App extends React.Component {

  render() {
    const names = [
      {name: 'Kazi', age: 20, grade: 3.50},
      {name: 'Ariyan', age: 30, grade: 3.20},
      {name: 'Khan', age: 25, grade: 4.50}
    ]
    const items = names.map((item, idx) => {
      return <li key={idx}>
        Name : {item.name}, Age : {item.age}, Grade : {item.grade}
        <button>Edit</button> | <button>Delete</button>
      </li>
    })

    return (
      <div className="App">
        <h1>Student List</h1>
        <div>
          {items}
        </div>
      </div>
    )
  }
}

export default App;
```
## Use Bootstrap(CDN)

+ `public/index.html`を編集<br>

```
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="utf-8" />
  <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <meta name="theme-color" content="#000000" />
  <meta name="description" content="Web site created using create-react-app" />
  <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />
  <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
  <title>React App</title>
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
    integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">
</head>

<body>
  <noscript>You need to enable JavaScript to run this app.</noscript>
  <div id="root"></div>

  <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"
    integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj"
    crossorigin="anonymous"></script>
  <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js"
    integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo"
    crossorigin="anonymous"></script>
  <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js"
    integrity="sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI"
    crossorigin="anonymous"></script>
</body>

</html>
```

+ `App.js`を編集<br>

```
import React from "react";

class App extends React.Component {

  render() {
    const names = [
      { name: 'Kazi', age: 20, grade: 3.50 },
      { name: 'Ariyan', age: 30, grade: 3.20 },
      { name: 'Khan', age: 25, grade: 4.50 }
    ]
    const items = names.map((item, idx) => {
      return <li class="list-item" key={idx}>
        Name : {item.name}, Age : {item.age}, Grade : {item.grade}
        <button class="btn btn-sm btn-info">Edit</button> | <button class="btn btn-sm btn-danger">Delete</button>
      </li>
    })

    return (
      <div className="App">
        <h1>Student List</h1>
        <ul class="list">
          {items}
        </ul>
        <div>
        </div>
      </div>
    )
  }
}

export default App;
```

## React Bootstrap

`public/index.html`を編集<br>

```
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="utf-8" />
  <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <meta name="theme-color" content="#000000" />
  <meta name="description" content="Web site created using create-react-app" />
  <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />
  <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
  <title>React App</title>
</head>

<body>
  <noscript>You need to enable JavaScript to run this app.</noscript>
  <div id="root"></div>
</body>

</html>
```

+ `$ npm install react-bootstrap bootstrap@4.6.0`を実行<br>

+ `App.js`を編集<br>

```
import React from "react";
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import Breadcrumb from "react-bootstrap/Breadcrumb";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";

class App extends React.Component {

  render() {
    return (
      <div className="App">
        <Navbar bg="light" expand="lg">
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Form style={{ display: "inherit" }}>
              <FormControl type="text" placeholder="Search" className="mr-sm-2" />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Navbar>

        <div>
          <Breadcrumb>
            <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
            <Breadcrumb.Item href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">
              Library
            </Breadcrumb.Item>
            <Breadcrumb.Item active>Data</Breadcrumb.Item>
          </Breadcrumb>

          <Button variant="primary">Primary</Button>{' '}
          <Button variant="secondary">Secondary</Button>{' '}
          <Button variant="success">Success</Button>{' '}
          <Button variant="warning">Warning</Button>{' '}
          <Button variant="danger">Danger</Button> <Button variant="info">Info</Button>{' '}
          <Button variant="light">Light</Button> <Button variant="dark">Dark</Button>{' '}
          <Button variant="link">Link</Button>
        </div>
      </div>
    )
  }
}

export default App;
```

## Routing

+ `App.js`を編集<br>

```
import React from "react";
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import Breadcrumb from "react-bootstrap/Breadcrumb";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";

class App extends React.Component {

  render() {
    return (
      <div className="App">
        <Navbar bg="light" expand="lg">
          <Navbar.Brand href="#home">Easy Learning</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#home">About Us</Nav.Link>
              <Nav.Link href="#link">Contact Us</Nav.Link>
              <Nav.Link href="#link">Blog</Nav.Link>
              <Nav.Link href="#link">Profile</Nav.Link>
            </Nav>
            <Form style={{ display: "inherit" }}>
              <FormControl type="text" placeholder="Search" className="mr-sm-2" />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Navbar>

        <div>
          <Breadcrumb>
            <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
            <Breadcrumb.Item href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">
              Library
            </Breadcrumb.Item>
            <Breadcrumb.Item active>Data</Breadcrumb.Item>
          </Breadcrumb>
        </div>
      </div>
    )
  }
}

export default App;
```

## React Router DOM

+ `$ npm install react-router-dom@5.2.0`を実行<br>

+ `src/components`ディレクトリ内のファイルを一旦全て削除<br>

+ `src/components/About.jsx`コンポーネントを作成<br>

+ `src/components/Blog.jsx`コンポーネントを作成<br>

+ `src/components/Contact.jsx`コンポーネントを作成<br>

+ `src/components/Profile.jsx`コンポーネントを作成<br>

## Router Link Load Component

+ `src/Header.jsx`コンポーネントを作成<br>

```
import { Component } from 'react'
import { Nav, Navbar } from 'react-bootstrap'

export default class Header extends Component {
  render() {
    return (
      <div>
        <Navbar bg="light" expand="lg">
          <Navbar.Brand href="#home">Easy Learning</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#home">About Us</Nav.Link>
              <Nav.Link href="#link">Contact Us</Nav.Link>
              <Nav.Link href="#link">Blog</Nav.Link>
              <Nav.Link href="#link">Profile</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    )
  }
}
```

+ `src/index.js`を編集<br>

```
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Header from './Header';

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
```

+ `App.js`を編集<br>

```
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {

  render() {
    return (
      <div className="App">
        <h1>This is our Home Component</h1>
      </div>
    )
  }
}

export default App;
```

+ `src/Header.jsx`を編集<br>

```
import { Component } from 'react'
import { Nav, Navbar } from 'react-bootstrap'
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'
import App from './App'
import About from './components/About'
import Blog from './components/Blog'
import Contact from './components/Contact'
import Profile from './components/Profile'

export default class Header extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar bg="light" expand="lg">
            <Navbar.Brand><Link to="/">Easy Learning</Link></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link><Link to="/about">About Us</Link></Nav.Link>
                <Nav.Link><Link to="/contact">Contact Us</Link></Nav.Link>
                <Nav.Link><Link to="/blog">Blog</Link></Nav.Link>
                <Nav.Link><Link to="/profile">Profile</Link></Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </div>

        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/blog">
            <Blog />
          </Route>
          <Route path="/profile">
            <Profile />
          </Route>
          <Route path="/">
            <App />
          </Route>
        </Switch>
      </Router>
    )
  }
}
```

+ `src/components/About.jsx`を編集<br>

```
import { Component } from 'react'

export default class About extends Component {
  render() {
    return (
      <div>
        <h1>This is About Component</h1>
      </div>
    )
  }
}
```

+ `src/components/Blog.jsx`を編集<br>

```
import { Component } from 'react'

export default class Blog extends Component {
  render() {
    return (
      <div>
        <h1>This is Blog Component</h1>
      </div>
    )
  }
}
```

+ `src/components/Contact.jsx`を編集<br>

```
import { Component } from 'react'

export default class Contact extends Component {
  render() {
    return (
      <div>
        <h1>This is Contact Component</h1>
      </div>
    )
  }
}
```

+ `src/components/Contact.jsx`を編集<br>

```
import { Component } from 'react'

export default class Profile extends Component {
  render() {
    return (
      <div>
        <h1>This is Profile Component</h1>
      </div>
    )
  }
}
```

+ `src/index.js`を編集<br>

```
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Header from './Header';

ReactDOM.render(
  <React.StrictMode>
    <Header />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
```

## Axios Lifecycle Methods

+ `$ npm install axios`を実行<br>

## Fetch Data From API

+ `src/components/Blog.jsx`を編集<br>

```
import axios from 'axios'
import { Component } from 'react'

export default class Blog extends Component {
  state = {
    posts: [],
  }

  componentDidMount() {
    axios
      .get('https://jsonplaceholder.typicode.com/posts')
      .then((response) => {
        this.setState({ posts: response.data })
      })
      .catch((error) => {
        console.log(error)
      })
  }

  render() {
    const posts = this.state.posts
    const allPosts = posts.map((post, idx) => (
      <div>
        <a href="" key={idx}>{post.title}</a>
        <br />
        <p>{post.body}</p>
      </div>
    ))

    return (
      <div>
        <h1>This is Blog Component</h1>
        <div class="media">
          <div class="media-body text-center">{allPosts}</div>
        </div>
      </div>
    )
  }
}
```

## Link Load Component

+ `src/components/Blog.jsx`を編集<br>

```
import axios from 'axios'
import { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Blog extends Component {
  state = {
    posts: [],
  }

  componentDidMount() {
    axios
      .get('https://jsonplaceholder.typicode.com/posts')
      .then((response) => {
        this.setState({ posts: response.data })
      })
      .catch((error) => {
        console.log(error)
      })
  }

  render() {
    const posts = this.state.posts
    const allPosts = posts.map((post, idx) => (
      <div>
        <a href="" key={idx}>{post.title}</a>
        <br />
        <p>{post.body}</p>
      </div>
    ))

    return (
      <div>
        <h1>This is Blog Component</h1>
          <Link to="/writePost">Add New</Link>
        <div class="media">
          <div class="media-body text-center">{allPosts}</div>
        </div>
      </div>
    )
  }
}
```

+ `src/compoents/WritePost.jsx`コンポーネントを作成<br>

```
import { Component } from 'react'

export default class WritePost extends Component {
  render() {
    return (
      <div>
        <h1>This is Write Post Component</h1>
      </div>
    )
  }
}
```

+ `src/Header.jsx`を編集<br>

```
import { Component } from 'react'
import { Nav, Navbar } from 'react-bootstrap'
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'
import App from './App'
import About from './components/About'
import Blog from './components/Blog'
import Contact from './components/Contact'
import Profile from './components/Profile'
import WritePost from './components/WritePost'

export default class Header extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar bg="light" expand="lg">
            <Navbar.Brand><Link to="/">Easy Learning</Link></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link><Link to="/about">About Us</Link></Nav.Link>
                <Nav.Link><Link to="/contact">Contact Us</Link></Nav.Link>
                <Nav.Link><Link to="/blog">Blog</Link></Nav.Link>
                <Nav.Link><Link to="/profile">Profile</Link></Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </div>

        <Switch>
          <Route path="/writePost">
            <WritePost />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/blog">
            <Blog />
          </Route>
          <Route path="/profile">
            <Profile />
          </Route>
          <Route path="/">
            <App />
          </Route>
        </Switch>
      </Router>
    )
  }
}
```

## Form Component

+ `src/components/WritePost.jsx`を編集<br>

```
import { Component } from 'react'

export default class WritePost extends Component {
  render() {
    return (
      <center>
        <div>
          <div class="jumbotron col-lg-4">
            <form>
              <div class="form-group">
                <label for="title">Title</label>
                <input
                  type="text"
                  class="form-control"
                  id="title"
                  name="title"
                  required
                />
              </div>
              <div class="form-group">
                <label for="body">Details</label>
                <textarea class="form-control" id="body" name="body">Write Here</textarea>
              </div>
              <button type="submit" class="btn btn-primary">
                Publish
              </button>
            </form>
          </div>
        </div>
      </center>
    )
  }
}
```

## Http Post Data

+ `src/components/WritePost.jsx`を編集<br>

```
import axios from 'axios'
import { Component } from 'react'

export default class WritePost extends Component {
  state = {
    title: '',
    body: '',
  }

  formSubmit = (e) => {
    e.preventDefault()
    axios
      .post('/user', { // Where this url will be redirect
        title: this.state.title, // All that value its will take
        body: this.state.body,
      })
      .then((response) => { // use for success
        console.log(response)
      })
      .catch((error) => { // use for error
        console.log(error)
      })
  }

  render() {
    return (
      <center>
        <div>
          <div class="jumbotron col-lg-4">
            <form onSubmit={this.formSubmit}>
              <div class="form-group">
                <label for="title">Title</label>
                <input
                  type="text"
                  class="form-control"
                  id="title"
                  name="title"
                  required
                  onChange={(event) =>
                    this.setState({ title: event.target.value })
                  }
                />
              </div>
              <div class="form-group">
                <label for="body">Details</label>
                <textarea
                  class="form-control"
                  id="body"
                  name="body"
                  onChange={(event) =>
                    this.setState({ body: event.target.value })
                  }
                >
                  Write Here
                </textarea>
              </div>
              <button type="submit" class="btn btn-primary">
                Publish
              </button>
            </form>
          </div>
        </div>
      </center>
    )
  }
}
```

## ActiveLink

+ `src/Header.jsx`を編集<br>

```
import { Component } from 'react'
import { Nav, Navbar } from 'react-bootstrap'
import { BrowserRouter as Router, NavLink, Route, Switch } from 'react-router-dom'
import App from './App'
import About from './components/About'
import Blog from './components/Blog'
import Contact from './components/Contact'
import Profile from './components/Profile'
import WritePost from './components/WritePost'

export default class Header extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar bg="light" expand="lg">
            <Navbar.Brand><NavLink exact activeStyle={{color: 'orange'}} to="/">Easy Learning</NavLink></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link><NavLink activeStyle={{color: 'orange'}} to="/about">About Us</NavLink></Nav.Link>
                <Nav.Link><NavLink activeStyle={{color: 'orange'}} to="/contact">Contact Us</NavLink></Nav.Link>
                <Nav.Link><NavLink activeStyle={{color: 'orange'}} to="/blog">Blog</NavLink></Nav.Link>
                <Nav.Link><NavLink activeStyle={{color: 'orange'}} to="/profile">Profile</NavLink></Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </div>

        <Switch>
          <Route path="/writePost">
            <WritePost />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/blog">
            <Blog />
          </Route>
          <Route path="/profile">
            <Profile />
          </Route>
          <Route path="/">
            <App />
          </Route>
        </Switch>
      </Router>
    )
  }
}
```

## useState, Class Component to Functional Component

`App.js`を編集<br>

```
import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

export const App = () => {
  const [count, incCount] = useState(0);

  const onClickCountUp = () => incCount(count + 1)

  return (
    <div>
      <h1>Clicking Me {count}</h1>
      <button onClick={onClickCountUp}>Click Me</button>
    </div>
  )
}

export default App;
```

## Functional Component to Class Component

+ `App.js`を編集<br>

```
import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  state = {
    count: 0
  }

  onlickCountUp = () => [
    this.setState({count: this.state.count + 1})
  ]

  render() {
    return (
      <div>
        <h1>Clicking Me {this.state.count}</h1>
        <button onClick={ this.onlickCountUp }>Click Me</button>
      </div>
    )
  }
}

export default App;
```
