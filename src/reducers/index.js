import { combineReducers } from 'redux';
import tasks from './tasks';
import isDisplayForm from './isDisplayForm';
import updateTask from './updateTask';
import searchTask from './searchTask';
import filterTask from './filterTask';
const myReducer = combineReducers({
    tasks,
    isDisplayForm,
    updateTask,
    searchTask,
    filterTask
})
export default myReducer;