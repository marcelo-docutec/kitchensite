import { reducer as foodReducer } from './food';
import { combineReducers } from 'redux';

export default combineReducers(foodReducer);
