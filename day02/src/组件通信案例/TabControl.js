import React, {Component} from "react"
export default class TabControl extends Component {
    constructor() {
        super()
        this.state = {
            currentIndex: 0
        }
    }
    render () {

        const {title} = this.props
        const {currentIndex} = this.state
        return (
            <ul className="tab-control">
                {
                    title.map((item, index) => {
                        return <li className={"tab-item "+ (currentIndex === index? "active" :"")} onClick={() => this.btnClick(index)}><span>{item}</span></li>
                    })
                }
            </ul>
        )
    }
    btnClick(index) {
        const {itemClick} = this.props

        this.setState({
            currentIndex: index
        })
        itemClick(index)
    }

}