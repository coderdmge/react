import React, {Component} from "react"
class Child extends Component {
    render() {
        const {left, center, right} = this.props
        return (
            <div className="item">
                {/* <div className="left">{this.props.children[0]}</div>
                <div className="center">{this.props.children[1]}</div>
                 <div className="right">{this.props.children[2]}</div> */}
                 <div className="left" >{left}</div>
                <div className="center">{center}</div>
                <div className="right">{right}</div>
            </div>
        )
    }
}
export default class App extends Component {
    render () {
        return (
            <div>
                <Child>
                    <h2>我是文字</h2>
                    <a href="http://www.baidu.com">百度</a>
                    <input type="text"/>
                </Child>
                <Child left={<h2>我是文字</h2>}
                    center={<a href="/#">baidu</a>}
                    right={<input type="text"/>}
                />
            </div>
        )
    }
}