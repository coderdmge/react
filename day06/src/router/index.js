import Home from "../page/home.js"
import About from "../page/about.js"
import Profile from "../page/profile.js"
import User from "../page/user.js"
import Detail from "../page/detail.js"
import Detail1 from "../page/detail1.js"
import Product from "../page/product.js"
import {AboutHistory,AboutCulture,AboutCcontant} from "../page/about"
import Join from "../page/join"

const routes = [
    {
        path: "/",
        exact: true,
        component: Home
    },
    {
        path: "/about",
        component: About,
        routes: [
            {
                path: "/about",
                component: AboutHistory,
                exact: true
            },
            {
                path: "/about/culture",
                component: AboutCulture
            },
            {
                path: "/about/contant",
                component: AboutCcontant
            },
            {
                path: "/about/join",
                component: Join
            }
            
        ]
    },
    {
        path: "/profile",
        component: Profile
    },
    {
        path: "/user",
        component: User
    },
    {
        path: "/detail",
        component: Detail
    },
    {
        path: "/detail1",
        component: Detail1
    },
    {
        path: "/product",
        component: Product
    }
]
export default routes