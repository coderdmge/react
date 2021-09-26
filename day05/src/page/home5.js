import React, { PureComponent }  from 'react'
import {addNumber} from "../store/counter/actionCreators"
import {fetchHomeMultidataAction} from "../store/home/actionCreators"
import {connect} from "react-redux"

 class Home extends PureComponent {
   constructor(props) {
       super(props)
       this.state = {

       }
   }
     componentDidMount() {
        this.props.getHomedata()
     }
     render() {
        return (
            <div>
                <h1>home</h1>
                <h2>当前计数{this.props.counter}</h2>
                <button onClick={() => {this.props.increment(1)}}>+1</button>
                <button onClick={() => {this.props.increment(5)}}>+5</button>
            </div>
        )
     }
     
}
const stateToProps = (state) => ({counter: state.counterInfo.counter})
const dispatchToProps = (dispatch) => ({
    increment: function(num) {
        dispatch(addNumber(num))
    },
    getHomedata: function() {
        dispatch(fetchHomeMultidataAction)
    }
  
})

export default connect(stateToProps, dispatchToProps)(Home)
