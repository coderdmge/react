import React, { PureComponent } from 'react'
import { TransitionGroup,  CSSTransition} from "react-transition-group"
import "./tstyle.css"

export default class transitionGroup extends PureComponent {
    constructor() {
        super()
        this.state = {
            arr: ["aaa", "bbb", "ccc", "ddd"]
        }
    }
    render() {
        const {arr} = this.state
        return (
                <TransitionGroup>
                    <ul>
               
               {
                  
                   arr.map((item, index) => {
                       return (
                          <CSSTransition timeout={300}
                          classNames="g"
                          in={true}
                          >
                        
                             
                           <li>{item}</li>
                           </CSSTransition>
                       )
                   })
                   
               }
                 <button onClick={() => this.setState({
              arr: [...arr, "deng"]
          })}>添加</button>
            
          </ul>
          
        
                </TransitionGroup>
                
               
            
        )
    }
}
