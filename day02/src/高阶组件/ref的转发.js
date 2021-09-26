import React, { PureComponent,createRef,forwardRef } from 'react'
const Home = forwardRef(function(props, ref) {
    return(
        <div ref={ref} >
            我是div
        </div>
    )
})

export default class App extends PureComponent {
    constructor() {
        super()
        this.pref = createRef()
        this.href = createRef()
    }
    render() {
        return (
            <div>
                <h2 ref="title">我是h2</h2>
                <p ref={this.pref}>我是p</p>
                <Home ref={this.href}/>
                <button onClick={() => this.btnClick()}>打印ref</button>
            </div>
        )
    }
    btnClick() {
        console.log(this.pref.current)
        console.log(this.refs.title)
        console.log(this.href.current)
    }
}
