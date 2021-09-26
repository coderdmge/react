import React, { PureComponent } from 'react'
import { NavLink} from 'react-router-dom'
// import Join from './join'
import {renderRoutes} from "react-router-config"
import routes from '../router'
// import routes from "../router"
// import { renderRoutes } from 'react-router-config'
 export function AboutHistory(props) {
    return (
        <div>
            企业创建于23444年
        </div>
    )
}
 export function AboutCulture(props) {
    return(
        <div>
            构建 共赢 合作
        </div>
    )
}
 export function AboutCcontant(props) {
    return(
        <div>
            1234444455555
        </div>
    )
}
export default class about extends PureComponent {
    render() {
        console.log(this.props.route)
        return (
            <div>
               <NavLink exact to="/about" activeClassName="about-active">企业历史</NavLink>
               <NavLink to="/about/culture" activeClassName="about-active">企业文化</NavLink>
               <NavLink to="/about/contant" activeClassName="about-active">联系我们</NavLink>
                <button onClick={() => this.props.history.push("/about/join")}>join us</button>
                {/* <Switch>
                <Route exact path="/about" component={AboutHistory}/>
                <Route path="/about/culture" component={AboutCulture}/>
                <Route path="/about/contant " component={AboutCcontant}/>
                <Route path="/about/join" component={Join}/>
                </Switch> */}
                {/* {renderRoutes(this.props.route.routes)} */}
                {renderRoutes(routes[1].routes)}
            </div>
               
        )
    }
}
