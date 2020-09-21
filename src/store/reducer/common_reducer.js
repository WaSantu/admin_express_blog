import * as actionType from '../action/action_type'
import initState from './state'

export default function common_reducer(state=initState.common,action){
    switch (action.type){
        case actionType.LOADING_STATUS:
            return Object.assign({},state, {loading: action.payload})
            break;
        default:
            return state
    }
}