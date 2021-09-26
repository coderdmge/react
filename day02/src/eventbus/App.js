import React, {Component} from "react"
import {EventEmitter} from "events"
const eventBus = new EventEmitter()
class Header extends Component {
    render () {
        return (
            <div>
                我是header
            </div>
        )
    }
    componentDidMount() {
        eventBus.addListener("click",this.handelBlick)
    }
   componentWillUnmount() {
       eventBus.removeListener("click", this.handelBlick)
   }
   handelBlick(str,num) {
        console.log(str, num)
   }
   
}
class Main extends Component{
    render () {
        return(
            <div>
                我是main
                <Header/>
                <button onClick={e => this.emitClic()}>传递header数据</button>
            </div>
        )
    }
    emitClic () {
        eventBus.emit("click", "hello", 123)
    }
    
}
export default class App  extends Component {
    render() {
        return (
            <div>
                <Main/>
            </div>
        )
    }
}