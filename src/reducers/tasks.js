import * as types from '../contants/index';
var data = JSON.parse(localStorage.getItem('task'))
var initialState = data ? data : []

var myReducer = ( state = initialState, action ) => {
    if(action.type === types.TASK_LIST ) {
        return state
    }
    return state
}  
export default myReducer;