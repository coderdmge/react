import React, {Component} from "react"
let Usercontext = React.createContext({
    name: "ming",
    age: 23
});
const Theme =React.createContext()
function Person () {
    return (
        <Usercontext.Consumer>
        {
        value => {
            return (
                <Theme.Consumer>
                    {
                    theme => {
                        return (
                                <div>
                                    <div style= {{color: theme.color}}>{value.name}</div>
                                    <div>{value.age}</div>
                                </div>
                            
                        )
                    }
                }
                </Theme.Consumer>
            )
        }
    }
    
    </Usercontext.Consumer>)
    
}
       
  
function Profile () {

    return (
        <div>
        <Person />
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    </div>
       )
}
        
  
    


export default class App extends Component {
    constructor() {
        super()
        this.state = {
            name: "deng",
            age: 12
        }
    }
    render() {
        return (
            <div>
                <Usercontext.Provider value={this.state}>
                    <Theme.Provider value={{color: "red"}}>
                        <Profile />
                    </Theme.Provider>

                     
                </Usercontext.Provider>
            </div>
        )
    }
}
