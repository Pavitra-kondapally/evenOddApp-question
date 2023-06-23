// Write your code here
import { Component } from "react";

import "./index.css"

class EvenOddApp extends Component {
    state = {count: 0}

    const randomNumberInRange = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    incrementing = () => {
        const {count} = this.state
        this.setState((prevState) => ({count: prevState.count + this.randomNumberInRange(0, 100)}))
    }

    render() {
        return (
            <div className = "container">
                <h1 className = "heading-styling">Count {count}</h1>
                {
                    count%2 === 0 ? <p className = "desc-styling">Count is Even</p> : <p className = "desc-styling">Count is Odd</p>
                }
                <button className= "button-styling" type = "button" onClick = {this.incrementing}>Increment</button>
                <p>
                    *Increase By Random Number Between 0 to 100
                </p>
            </div>
        )
    }
}

export default EvenOddApp