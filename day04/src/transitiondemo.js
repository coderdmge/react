import React, { PureComponent } from 'react'
import TransitionGroup from './transition/transitionGroup'
// import Csstransitondemo from './transition/csstransitondemo'
// import SwitchDemo from './transition/switchDemo'

export default class transition extends PureComponent {
    render() {
        return (
            // <div style={{textAlign: "center", padding: "20px"}}>
            //     {/* <Csstransitondemo/> */}
            //     {/* <SwitchDemo/> */}
            // </div>
            <TransitionGroup></TransitionGroup>
        )
    }
}
