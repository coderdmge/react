import React, { PureComponent } from 'react'
import  styled from"./style.module.css"

export default class Profile extends PureComponent {
    render() {
        return (
            <div className="profile">
                <h2 className={styled.title}>我是profile</h2>
                <ul>
                    <li>1</li>
                    <li>2</li>
                    <li>3</li>
                    <li>4</li>
                </ul>
            </div>
        )
    }
}
