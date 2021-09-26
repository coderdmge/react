import React, { Component, createContext } from 'react'
const User = createContext({
    name: "deng",
    age: 23
})
class Home extends Component {
    render() {
        return(
            <User.Consumer>
                {
                    value => {
                       return <div>home{`姓名：${value.name} 年龄：${value.age}`}</div>
                    }
                }
            </User.Consumer>
         
        )
    }
}
class About extends Component {
    render() {
        return(
            <User.Consumer>
                {
                    value => {
                       return <div>about{`姓名：${value.name} 年龄：${value.age}`}</div>
                    }
                }
            </User.Consumer>
         
        )
    }
}
export default class App extends Component {
    render() {
        return (
            <div>
                <User.Provider value= {{name: "deng", age: 23}}>
                    <Home/>
                    <About/>
                </User.Provider>
                
            </div>
        )
    }
}
