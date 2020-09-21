import {combineReducers,
    applyMiddleware,
    createStore} from "redux"
import common_reducer from "./common_reducer"
import thunk from "redux-thunk";


const rootReducer = combineReducers({
    common_reducer
})

export default function store(){
    return createStore(rootReducer,applyMiddleware(thunk))
}
