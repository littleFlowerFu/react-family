import {creatStore} from 'redux';
import combineReducers from './reducers.js';

let store = creatStore(combineReducers);

export default store;