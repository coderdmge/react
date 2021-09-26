import React, {PureComponent} from "react"

export default class App extends PureComponent {
    constructor() {
        super()
        this.state = {
            user: [
                {name: "mike", age:34},
                {naem: "lihua", age: 32},
                {name: "lili", age: 13}
            ]
        }
    }
    render() {
        return (
            <div>
                 <ul>
                {this.state.user.map((item ,index) => {
                    return <li key={item}>{item.name + item.age}</li>
                })}
            </ul>
            <button onClick={()=> this.addDate()}>添加</button>
            </div>
           
        )
    }
    addDate() {
            const arr = [...this.state.user]
            arr.push({name: "ming", age: 23})
             this.setState({
            user: arr
        })
    }
}