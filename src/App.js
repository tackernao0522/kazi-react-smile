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
