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
