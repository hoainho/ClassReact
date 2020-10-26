import { combineReducers } from 'redux';
import status from './status';
import sort from './sort';

const myReducer = combineReducers({
    status,
    sort
})
export default myReducer;