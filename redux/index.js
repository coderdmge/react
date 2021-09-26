import store from "./store/index.js"
import {addNumber, subNumber} from "./store/actionCreators.js"
store.subscribe(() => {
    console.log("state",store.getState().counter)
})
store.dispatch(addNumber(10))
store.dispatch(addNumber(4))
store.dispatch(subNumber(2))
store.dispatch(subNumber(3))