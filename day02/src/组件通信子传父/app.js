import React ,{Component} from "react"
class Chirld extends Component {
    render() {
        const {btnClick} = this.props
        return (
            <div>
                <button onClick= {btnClick}>+1</button>
            </div>
        )
    }
}
export default class App extends Component {
    constructor() {
        super()
        this.state = {
            counter: 0
        }
    }
    render() {
        return (
            <div>
                <h2>{this.state.counter}</h2>
                <Chirld btnClick={e => this.increment()}></Chirld>
            </div>
        )
    }
    increment() {
        this.setState({
            counter: this.state.counter + 1
        })
    }
}