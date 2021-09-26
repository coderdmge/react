import React from 'react'
import {addNumber} from "../store/counter/actionCreators"
import {connect} from "react-redux"

function About (props) {
        return (
            <div>
                <h1>about</h1>
                <h2>当前计数{props.counter}</h2>
                <button onClick={() => {props.decrement(-1)}}>-1</button>
                <button onClick={() => {props.decrement(-5)}}>-5</button>
                <h2>banners</h2>
                 {
                     props.banners.map((item, index) => {
                     return <li key={item.acm}>{item.title}</li>
                     })
                 }
                 <h2>recommend</h2>
                 {
                     props.recommends.map((item, index) => {
                     return <li key={item.acm}>{item.title}</li>
                     })
                 }
            </div>
        )
    }
    const stateToProps = (state) => ({
        counter: state.counterInfo.counter,
        banners: state.homeInfo.banners,
        recommends: state.homeInfo.recommends
    })
    const dispatchToProps = (dispatch) => ({
        decrement: function (num) {
            dispatch(addNumber(num))
        }
    })
  export default  connect(stateToProps, dispatchToProps)(About)
   