import * as types from '../contants/index';
var initialState = {
    name : '',
    status : -1
}

var myReducer = ( state = initialState, action ) => {
    switch(action.type){
        case types.SORT :
            return action.item
        default : 
            return state;
    }
}  
export default myReducer;