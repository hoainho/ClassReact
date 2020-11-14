import * as types from '../contants/index';
var initialState = {
    name : '',
    status : 0
}

var myReducer = ( state = initialState, action ) => {
    switch(action.type){
        case types.SORT :
            return action.task
        default : 
            return state;
    }
}  
export default myReducer;