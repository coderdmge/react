import counterReducer from "./counter/reducer"
import homeReducer from "./home/reducer"
import {combineReducers} from "redux"

// const defaultState = {
//     counterInfo: {
//         counter: 0
//     },
//     homeInfo: {
//         banners: [],
//         recommends: []
//     }
// }
  const reducer = combineReducers({
        counterInfo: counterReducer,
        homeInfo: homeReducer
    })
// function reducer(state = defaultState, action) {
//     return {
//         counterInfo: counterReducer(state.counterInfo, action),
//         homeInfo: homeReducer(state.homeInfo, action)
//     }
     
    
// }
export default reducer