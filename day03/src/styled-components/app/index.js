import React, { PureComponent } from 'react'
import {ThemeProvider} from "styled-components"
import Home from "../home"

export default class App extends PureComponent {
    render() {
        return (
           <ThemeProvider theme={{color: "pink", fontSize: "100px"}}>
                <h2>我是app</h2>
                <Home/>
           </ThemeProvider>
               
            )
         }
     }