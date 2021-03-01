const defaultState = {
    'country' : '',
};

export default function RegionReducer(state = defaultState, actions){
    switch(actions.type){
        case 'NEW_COUNTRY':
            return({'country' : actions.payload})
        default:
            return(state)
    }
}