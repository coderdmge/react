import { CHAGE_RECOMMEND, CHANGE_BANNER} from "./constants.js"

const defaultState = {
        banners: [],
        recommends: []
}

function homeReducer(state = defaultState, action) {
    switch(action.type) {
        case CHANGE_BANNER :
            return {...state, banners: action.banner}
        case CHAGE_RECOMMEND :
            return {...state, recommends: action.recommend}
        default:
            return state
    }
   
}
export default homeReducer
