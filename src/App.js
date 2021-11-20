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
