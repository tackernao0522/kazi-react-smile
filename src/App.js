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
