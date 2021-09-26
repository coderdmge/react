import React, { Component } from 'react'
class Home extends Component {
    render() {
        return(
            <div>
                {`姓名：${this.props.name} 年龄： ${this.props.age} 区域： ${this.props.region}`}
        </div>
        )
       
    }
}
class About extends Component {
    render() {
        return(
            <div>
            {`姓名：${this.props.name} 年龄： ${this.props.age} 区域： ${this.props.region}`}
        </div>
        )
      
    }
}
    function Common (Wrap) {
        return props => {
            return <Wrap {...props} region="china"/>
        }
}
const Chome = Common(Home)
const Cabout = Common(About)
export default class App extends Component {
    render() {
        return (
            <div>
                app
                <Chome name="deng" age={13}/>
                <Cabout name= "ming" age= {23}/>
            </div>
        )
    }
}
