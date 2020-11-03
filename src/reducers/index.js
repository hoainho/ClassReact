import { combineReducers } from 'redux';
import tasks from './tasks';
import isDisplayForm from './isDisplayForm';
import updateTask from './updateTask';
const myReducer = combineReducers({
    tasks,
    isDisplayForm,
    updateTask
})
export default myReducer;