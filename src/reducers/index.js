import { combineReducers } from 'redux';
import status from './status';
import sort from './sort';
import tasks from './tasks';
const myReducer = combineReducers({
    status,
    sort,
    tasks
})
export default myReducer;