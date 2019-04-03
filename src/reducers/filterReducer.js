import { SEARCH_EVENTS } from '../actions/types';


export default (state = null, action) => {
    switch (action.type) {
        case SEARCH_EVENTS:
            return action.payload
        default:
            return null;
    }
};