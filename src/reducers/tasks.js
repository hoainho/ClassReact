import * as types from '../contants/index';
import shortid from 'shortid'
var data = JSON.parse(localStorage.getItem('task'))
var initialState = data ? data : []

var myReducer = ( state = initialState, action ) => {
    switch(action.type){
        case types.TASK_LIST:
            return state
            
        case types.ADD_TASK:
            var newTask = {
                id : shortid.generate(),
                name : action.task.name,
                status : action.task.status
            }
            state.push(newTask)
            localStorage.setItem('task',JSON.stringify(state))
            return [...state]
        default : return state;
    }
}  
export default myReducer;