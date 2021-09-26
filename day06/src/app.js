import React, { PureComponent } from 'react'
import {
    // Route,
    NavLink,
    // Switch,
    withRouter,

} from "react-router-dom"
import "./app.css"
// import Home from './page/home'
// import About from './page/about'
// import Profile from './page/profile'
// import User from './page/user'
// import NoMathch from './page/noMathch'
// import Login from './page/login'
// import Product from './page/product'
// import Detail from "./page/detail"
// import Detail1 from "./page/detail1"
import routes from "./router"
import {renderRoutes} from "react-router-config"


class App extends PureComponent {
    render() {
        const id = "123"
        const obj = {
            name: "deng",
            age:  23,
            height: 134
        }
        return (
            <div>
                     {/* <Link to="/">首页</Link>
                    <Link to="/about">关于</Link>
                    <Link to="/profile">profile</Link> */}
                   <NavLink exact to="/" activeClassName="active-link">首页</NavLink>
                    <NavLink to="/about" activeClassName="active-link">关于</NavLink>
                    <NavLink to="/profile" activeClassName="active-link">profile</NavLink>
                    <NavLink to="/user" activeClassName="active-link">用户</NavLink>
                    <NavLink to={`/detail/${id}`} activeClassName="active-link">详情</NavLink>
                    <NavLink to= {{
                        pathname: "/detail1",
                        search: "?key=value",
                        state: obj
                    }}
                    
                     activeClassName="active-link">详情1</NavLink>
                    <button onClick={() => this.props.history.push("/product")}>product</button>
                    {/* <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route path="/about" component={About}/>
                    <Route path="/profile" component={Profile}/>
                    <Route path="/user" component={User}/>
                    <Route path="/login" component={Login}/>
                    <Route  path="/product" component={Product}/>
                    <Route path="/detail/:id" component={Detail}/>
                    <Route path="/detail1" component={Detail1}/>
                    <Route component={NoMathch}/>
                    </Switch> */}
                    {renderRoutes(routes)}
            </div>
        )
    }
}
export default withRouter(App)