import React, { PureComponent } from 'react'
import {Button, Input} from "antd"

export default class input extends PureComponent {
    constructor () {
        super()
        this.state = {
            content: ""
        }
    }
    render() {
        return (
            <div>
               <Input.TextArea rows={6} value={this.state.content} onChange={(e) => this.handleChange(e)} onKeyDown={(e) =>this.handleKeyDown(e)}>

               </Input.TextArea> 
               <Button type={"primary"} style={{ marginTop: "10px"}} onClick={() => this.btnClick()}>添加文本</Button>
            </div>
        )
    }
    handleChange(e) {
        this.setState({
            content: e.target.value
        })
    }
    btnClick() {
        const obj = {
            id: Date.now(),
            content: this.state.content,
            nickname: "小明",
            avatar: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
        }
        this.props.childEvent(obj)
        this.setState({
            content: ""
        })
    }
    handleKeyDown(e) {
        if(e.keyCode === 13) {
            this.btnClick()
        e.preventDefault()

        }
    }
}
