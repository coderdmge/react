import React, { PureComponent } from 'react'
import Home from "./page/home5.js"
import About from "./page/about3.js"
// import { storeContext } from "./utils/context";
import store from "./store"
import {Provider} from "react-redux"

export default class App extends PureComponent {
  render() {
    return (
    
           <Provider store={store}>
              <Home/>
              <About/>
           </Provider>
      
    )
  }
}
