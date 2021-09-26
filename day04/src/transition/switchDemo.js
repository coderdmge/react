import React, { PureComponent } from 'react'
import {SwitchTransition, CSSTransition} from "react-transition-group"
import "./sstyle.css"

export default class switchDemo extends PureComponent {
    constructor() {
        super()
        this.state = {
            isOn: true
        }
    }
    render() {
        let {isOn} = this.state
        return (
            <div>
                <SwitchTransition mode="out-in">
                    <CSSTransition  key= {isOn? "on": "off"}
                                    classNames="btn"
                                    timeout={400}
                    >
                    <button onClick={() => this.setState({isOn: !isOn})}>{isOn? "on":"off"}</button>
                    </CSSTransition>
                </SwitchTransition>
            </div>
        )
    }
}
