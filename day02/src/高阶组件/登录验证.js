import React, { Component } from 'react'
function Category () {
    return(
        <div>登录成功</div>
    )
}
function Load() {
    return(
        <div>请登录</div>
    )
}
class View extends Component {
    render() {
        return(
            <div>
                app
            </div>
        )
    }
}
function justify (C) {
    return props => {
        const {isLogin} = props
            if(isLogin) {
                return <C/>
            }else {
                return <Load/>
            }
    }
}
const Jview = justify(View)
const Jcategory = justify(Category)
export default class App extends Component {
    render() {
        return (
            <div>
                <Jview isLogin={false}/>
                <Jcategory isLogin={true}/>
            </div>
        )
    }
}
