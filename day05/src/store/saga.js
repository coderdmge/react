import {takeEvery, put} from "redux-saga/effects"
import { FETCH_HOMEMULTIDATA} from "./constants"
import {changeBannerAction, changeRecommendAction} from "./actionCreators"
import axios from "axios"
function* hanceFetch() {
   const result = yield axios({url: "http://123.207.32.32:8000/home/multidata"})
  
       yield put(changeRecommendAction(result.data.data.recommend.list)) 
        yield put(changeBannerAction(result.data.data.banner.list))
}

function * fetchHomeMultidata () {
   yield takeEvery( FETCH_HOMEMULTIDATA, hanceFetch)
}
export default fetchHomeMultidata