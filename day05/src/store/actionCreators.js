import {ADD_NUMBER, SUB_NUMBER,CHAGE_RECOMMEND, CHANGE_BANNER, FETCH_HOMEMULTIDATA} from "./constants.js"
import axios from "axios"
const addNumber = (num) => ({type: ADD_NUMBER, num})
const subNumber = (num) => ({type: SUB_NUMBER, num})
const changeBannerAction = (banner) => ({type:CHANGE_BANNER, banner})
const changeRecommendAction = (recommend) => ({type: CHAGE_RECOMMEND, recommend})
const getHomedataAction = (dispatch) => {
    axios({
        url: "http://123.207.32.32:8000/home/multidata"
    }).then(res => {
       dispatch(changeBannerAction(res.data.data.banner.list))
       dispatch(changeRecommendAction(res.data.data.recommend.list))
    })
}
const fetchHomeMultidataAction = {type: FETCH_HOMEMULTIDATA }
export {
    addNumber,
    subNumber,
    changeBannerAction,
    changeRecommendAction,
    getHomedataAction,
    fetchHomeMultidataAction
}