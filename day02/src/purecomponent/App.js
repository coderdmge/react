import React, {Component, memo} from "react"
class Header extends Component {

    shouldComponentUpdate(newProps, newState) {
        return false
    }

    render() {
        console.log("我是header")

        return(
                <div>
                    <h2>我是header</h2>
                </div>
        )
    }
   
   
}
function Banner() {
    console.log("我是bannner")
    return (
        <div>
            <h3>我是banner</h3>
        </div>
    )
}
function Main() {
    console.log("我是main")
    return (
        <div>
            <Banner/>
        </div>
    )
}
export default class App extends Component {
    constructor() {
        super()
        this.state = {
            counter: 0
        }
    }
    render() {
        console.log("我是app")

        return(
              
        <div>
           <Header/>
           <Main/>
           <h2>{this.state.counter}</h2>
           <button onClick= {() => {this.increment()}}>+1</button>
           <MemoFooter/>
       </div>
        )
    }
    increment() {
        this.setState({
            counter: this.state.counter+1
        })
    }
}
const MemoFooter = memo(function Footer() {
    console.log("我是footer")
    return(
        <div> 
            <h3>我是footer</h3>
        </div>
    )
})
