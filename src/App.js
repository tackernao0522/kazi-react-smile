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
