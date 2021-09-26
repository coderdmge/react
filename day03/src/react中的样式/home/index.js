import React, { PureComponent } from 'react'
import  styled from"./style.module.css"

export default class Home  extends PureComponent {
    render() {
        return (
            <div>
                <h2 className={styled.title}>我是home</h2> 
                <div>
                    我是录播图
                </div>
            </div>
        )
    }
}
