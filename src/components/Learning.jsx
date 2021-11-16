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
