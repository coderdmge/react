import React, { PureComponent }  from 'react'
import {addNumber, changeBannerAction, changeRecommendAction} from "../store/actionCreators"
import {connect} from "react-redux"
import axios from "axios"

 class Home extends PureComponent {
   constructor(props) {
       super(props)
       this.state = {

       }
   }
     componentDidMount() {
        axios({
            url: "http://123.207.32.32:8000/home/multidata"
        }).then(res => {
            this.props.changeBanner(res.data.data.banner.list)
            this.props.changeRecommend(res.data.data.recommend.list)
        })
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
const stateToProps = (state) => ({counter: state.counter})
const dispatchToProps = (dispatch) => ({
    increment: function(num) {
        dispatch(addNumber(num))
    },
    changeBanner: function(banner) {
        dispatch(changeBannerAction(banner))
    },
    changeRecommend: function(recommend) {
        dispatch(changeRecommendAction(recommend))
    }
})

export default connect(stateToProps, dispatchToProps)(Home)
