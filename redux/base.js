const redux = require("redux")
const defaultStore = {
    counter: 0
}
function reducer(state = defaultStore, action) {
    switch(action.type) {
        case "INCREMENT" :
            return {counter: state.counter+1}
        case "DECREMENT" :
            return {counter: state.counter-1}
        case "ADD_NUMBER" :
            return {counter: state.counter + action.num}
        case "SUB_NUMBER" :
            return {counter: state.counter - action.num}
        default:
            return state
    }
}
const store = redux.createStore(reducer)

store.subscribe(() => {
    console.log("state",store.getState().counter)
})
store.dispatch({type: "INCREMENT"})
store.dispatch({type: "DECREMENT"})
store.dispatch({type: "ADD_NUMBER", num: 8})
store.dispatch({type: "SUB_NUMBER", num: 9})
