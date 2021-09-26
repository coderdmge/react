import React, { Component } from 'react'
class Home extends Component {
    render() {
        return(
            <div>
                home
            </div>
        )
    }
}
class About extends Component {
    render() {
        return(
            <div>
                about
            </div>
        )
    }
}
function getTime(Com) {
    return class extends Component {
       
        componentWillMount() {
             this.start = Date.now()
        }
        componentDidMount() {
            this.end = Date.now()
            const interval = this.end - this.start
            console.log(`${Com.name}花费的时间：${interval}`)
        }
        render() {
            return <Com />
        }
    }
}
const Ghome = getTime(Home)
const Gabout= getTime(About)
export default class App extends Component {
    render() {
        console.log(App.name)
        return (
            <div>
                <Gabout/>
                <Ghome/>
            </div>
        )

    }
}