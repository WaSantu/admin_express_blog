import * as actionType from './action_type'

export function toggleLoading(status){
    return {
        type:actionType.LOADING_STATUS,
        payload:status
    }
}
