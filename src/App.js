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
    let myValue = e.target.value // Gettin value (name属性の値)
    this.setState({ [val]: myValue }); // value set on the state (name="myValue")
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
