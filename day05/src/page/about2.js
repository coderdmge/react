import React from 'react'
import {addNumber} from "../store/actionCreators"
import {connect} from "react-redux"

function About (props) {
        return (
            <div>
                <h1>about</h1>
                <h2>当前计数{props.counter}</h2>
                <button onClick={() => {props.decrement(-1)}}>-1</button>
                <button onClick={() => {props.decrement(-5)}}>-5</button>
            </div>
        )
    }
    const stateToProps = (state) => ({
        counter: state.counter
    })
    const dispatchToProps = (dispatch) => ({
        decrement: function (num) {
            dispatch(addNumber(num))
        }
    })
  export default  connect(stateToProps, dispatchToProps)(About)
   