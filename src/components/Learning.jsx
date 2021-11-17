import React, { Component } from 'react'
import './Learning.css';

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
    // console.log('Hello Easy Learning')
    // alert('Welcome Udemy')
    // this.state.fruits[0] = 'samsung';
    this.setState({
        fruits: [
                { name: 'Samsung', weight: '120gm' },
                { name: 'Apple', weight: '20gm' },
                { name: 'Nokia', weight: '60gm' },
            ],
        })
    }

    render() {
        const style = {
            backgroundColor: 'orange',
            font: 'inherit',
            border: '2px solid maroon',
            padding: '10px',
            cursor: 'pointer'
        }

        return (
        <div>
            <button style={style} onClick={this.clickHandler}>Click Me</button>
            <h1 className="Card">Fruit name is {this.state.fruits[0].name}</h1>
            <h1 className="Card">Fruit name is {this.state.fruits[1].name}</h1>
            <h1 className="Card">Fruit name is {this.state.fruits[2].name}</h1>
        </div>
        )
    }
}

export default Learning
