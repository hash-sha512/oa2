import {combineReducers} from 'redux';
import regionReducer from './regionReducer.js';
import regionalInfoReducer from './regionalInfoReducer.js';


export const rootReducer = combineReducers({
    region: regionReducer,
    regionalInfo : regionalInfoReducer
})