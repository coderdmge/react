import React, { PureComponent } from 'react'
import {Home, Btn} from "./style"

export default class Hrome extends PureComponent {
    constructor() {
        super()
        this.state = {
            color: "red"
        }
    }
    render() {
        return (
           <Home>
               <h2>我是home</h2>
                <div className="lbt">
                    <span>我是录播图</span>
                </div>
                <Btn color={this.state.color}/>
           </Home>
                
        )
    }
}
