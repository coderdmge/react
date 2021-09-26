import React, { Component, createContext } from 'react'
const User = createContext({
    name: "deng",
    age: 23
})
function wheel(Component) {
    return props => {
       return(
        <User.Consumer>
        {
            value => 
            {
                return <Component {...props} {...value}/>
            }
        }
</User.Consumer>
       )  
    }
}

class Home extends Component {
    render() {
        return(
                       <div>home{`姓名：${this.props.name} 年龄：${this.props.age}`}</div>
         
        )
    }
}
class About extends Component {
    render() {
        return(
                        <div>about{`姓名：${this.props.name} 年龄：${this.props.age}`}</div>
            
         
        )
    }
}
function List(props){
    return(
        <ul>
            <li>{props.name}</li>
            <li>{props.age}</li>
        </ul>
    )
}
export default class App extends Component {
    render() {
        return (
            <div>
                <User.Provider value= {{name: "deng", age: 23}}>
                    <Whome/>
                    <Wabout/>
                    <Wlist/>
                </User.Provider>
                
            </div>
        )
    }
}
const Whome = wheel(Home)
const Wabout = wheel(About)
const Wlist = wheel(List)