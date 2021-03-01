import {FETCH_INFO_BEGIN,
        FETCH_INFO_SUCCESS,
        FETCH_INFO_FAILURE
    } from '../actions/actionTypes.js'

const initialState = {
    info: {},
    loading: false,
    error: null
};

export default function RegionalInfoRedcuer(state = initialState, actions){
    switch(actions.type){
        case FETCH_INFO_BEGIN:
            return({...state, 
                loading: true, 
                error: null}) //error is reset for the next request cycle
        case FETCH_INFO_SUCCESS:
            return({...state, loading: false, info: actions.payload})
        case FETCH_INFO_FAILURE :
            return({...state,
                loading: false,
                error: actions.payload.error,
                info: {}})
        default :
            return (state)
    }
}