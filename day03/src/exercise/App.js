import React, { Component } from 'react'
import Cinput from "./components/input"
import Citem from "./components/item"

export default class App extends Component {
    constructor() {
        super()
        this.state= {
            list: []
        }
    }
    render() {
        console.log(this.state.list)
        return (
            <div style={{width: "500px", padding: "20px"}}>
                {
                    
                    this.state.list.map((item, index) => {
                           return  <Citem values={item} key={item.id} HandleremoveItem={() => this.removeItem(index)}/> 
                       })
    }
                <Cinput childEvent={p => {this.handleChild(p)}}/>

            </div>
        )
    }
    handleChild(p) {
        this.setState({
            list: [...this.state.list, p]
        })
    }
    removeItem(index) {
       
        this.setState({
            list:  [...this.state.list].filter((item, indexy) => {return index !== indexy})
        })
    }
}
