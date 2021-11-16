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
