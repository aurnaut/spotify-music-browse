import { GET_EVENTS } from '../constants/action-types';

const initialState = {
    events: []
}

function rootReducer(state = initialState, action) {
    if (action.type === GET_EVENTS) {
        return Object.assign({}, state, {
            events: state.events.concat(action.payload)
        })
    }
    return state;
}

export default rootReducer;