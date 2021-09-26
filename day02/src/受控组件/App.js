import React, {Component} from "react"
export default class App extends Component {
    constructor() {
        super()
        this.state = {
            username: ""
        }
    }
    
    render() {
        return (
            <div>
                <form onSubmit={e => this.handleSubmit(e)}>
                    <label htmlFor="user">
                       姓名: <input type="text" id="user" onChange={e => this.handelChange(e)} value={this.setState.username}/>
                        <input type="submit"/>
                    </label>
                   
                </form>
            </div>
        )
    }
    handleSubmit(e) {
        e.preventDefault()
        console.log(this.state.username)
    }
    handelChange(e) {
        this.setState({
            username: e.target.value
        })
    }
}