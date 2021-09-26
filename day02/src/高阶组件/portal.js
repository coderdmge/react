import React, { PureComponent } from 'react'
import ReactDom from "react-dom"


 function Modal (props) {
    return (
        ReactDom.createPortal(props.children, document.getElementById("modal"))
    )
 }

class Home extends PureComponent {
    render() {
        return (
            <div>
                <h2>home</h2>
                <Modal>
                    <div>title</div>
                </Modal>
            </div>
        )
    }
}
export default class App extends PureComponent {
    render() {
        return (
            <div>
                <Home/>
            </div>
        )
    }
}
