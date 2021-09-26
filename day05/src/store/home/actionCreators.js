import {CHAGE_RECOMMEND, CHANGE_BANNER, FETCH_HOMEMULTIDATA} from "./constants.js"
import axios from "axios"

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
    changeBannerAction,
    changeRecommendAction,
    getHomedataAction,
    fetchHomeMultidataAction
}