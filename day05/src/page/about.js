import React, { PureComponent } from 'react'
import store from "../store/index"
import {addNumber} from "../store/actionCreators"

export default class home extends PureComponent {
    constructor() {
        super()
        this.state = {
            counter: store.getState().counter
        }
    }
    componentDidMount() {
        this.cancle = store.subscribe(() => {
            this.setState({
                counter: store.getState().counter
            })
        })
    }
    componentWillUnmount() {
        this.cancle()
    }
    render() {
        return (
            <div>
                <h1>about</h1>
                <h2>当前计数{this.state.counter}</h2>
                <button onClick={() => {store.dispatch(addNumber(1))}}>+1</button>
                <button onClick={() => {store.dispatch(addNumber(5))}}>+5</button>
            </div>
        )
    }
}
