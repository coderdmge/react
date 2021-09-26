import React, {Component,createRef} from "react"
export default class App extends Component {
    constructor() {
        super()
        this.message = createRef()
        this.message2 = null
    }
    render() {
        return(
            <div>
            <h2 ref="mes">hello world</h2>
            <h2 ref={this.message}>hello world</h2>
            <h2 ref={(arg) => this.message2 = arg}>hello world</h2>
            <button onClick= {e=> this.changeText()}>改变文本</button>
        </div>
        )
       
    }
    changeText() {
       
        this.refs.mes.innerHTML = "hello react"
        this.message.current.innerHTML = "hello java"
        this.message2.innerHTML = "hello python"
    }
}