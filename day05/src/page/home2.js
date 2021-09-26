import React  from 'react'
import {addNumber} from "../store/actionCreators"
import {connect} from "react-redux"

 function  Home(props) {
        return (
            <div>
                <h1>home</h1>
                <h2>当前计数{props.counter}</h2>
                <button onClick={() => {props.increment(1)}}>+1</button>
                <button onClick={() => {props.increment(5)}}>+5</button>
            </div>
        )
}
const stateToProps = (state) => ({counter: state.counter})
const dispatchToProps = (dispatch) => ({
    increment: function(num) {
        dispatch(addNumber(num))
    }
})

export default connect(stateToProps, dispatchToProps)(Home)
