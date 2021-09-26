import React, { PureComponent } from 'react'
import { Redirect } from 'react-router-dom'

export default class user extends PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            isLogin: true
        }
    }
    render() {
        return this.state.isLogin? (
            <div>
                <h2>user</h2>
                <h2>deng ming gui</h2>
            </div>
        ): <Redirect to="/login"/>
    }
}
