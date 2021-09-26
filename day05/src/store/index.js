import {createStore, applyMiddleware,compose} from "redux"
import thunkMiddleware  from "redux-thunk"
import createSaga from "redux-saga"
import reducer from "./reducer.js"
import fetchHomeMultidata from "./saga"
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({trace: true}) || compose;
const sagaMiddleware = createSaga()
const storeHancer = applyMiddleware(thunkMiddleware, sagaMiddleware)
const store = createStore(reducer, composeEnhancers(storeHancer))
sagaMiddleware.run(fetchHomeMultidata)
export default store
