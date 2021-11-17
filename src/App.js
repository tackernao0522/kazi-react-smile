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
