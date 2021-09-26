import React, { PureComponent } from 'react';
import Home from "../home";
import Profile from "../profile"
import  styled from"./style.module.css"

export default class App extends PureComponent {
    render() {
        return (
            <div>
                <h2 className={styled.title}>app</h2>
                <Home/>
                <Profile/>
            </div>
        )
    }
}
