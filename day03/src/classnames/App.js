import React, { PureComponent } from 'react'
import name from "classnames"

export default class App extends PureComponent {
    constructor() {
        super()
        this.state = {
            isActive: true
        }
    }
    render() {
        const {isActive} = this.state
        return (
            <div>
                <p className={name({active: isActive }, "aaa")}>1</p>
                
            </div>
        )
    }
}
