import { combineReducers } from 'redux';
import eventReducer from './eventReducer';
import filterReducer from './filterReducer';

export default combineReducers({
    events: eventReducer,
    filterReducer: filterReducer
});