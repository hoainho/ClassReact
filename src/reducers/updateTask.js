import * as types from '../contants/index';

var initialState ={};

const myReducer = (state = initialState,action) => {
    switch(action.type){
        case types.UPDATE_DATA:
            return action.task
        //Default
        default : return state
    } 
}

export default myReducer;