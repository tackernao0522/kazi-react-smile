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
