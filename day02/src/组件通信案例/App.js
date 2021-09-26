import React, {Component} from "react"
import TabControl from "./TabControl"

export default class App extends Component {
    constructor() {
        super()
        this.state = {
            arr: ["流行", "精品", "女装", "化妆品"],
            currentIndex: 0
        }
    }
    render() {
        const {arr, currentIndex} =this.state
        return (
            <div>
                <TabControl title={arr} itemClick= {(index) => this.itemClick(index)}/>
                <h2>{arr[currentIndex]}</h2>
            </div>
        )
    }
    itemClick(index) {
        this.setState({
            currentIndex: index
        })
    }
}