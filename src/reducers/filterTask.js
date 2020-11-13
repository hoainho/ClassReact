import * as types from '../action/index';
var initialsState = {}
const myReducer = (state = initialsState, action) => {
    switch(action.types){
        case types.onSearchData :
            console.log(action);
        default : return state
    }
}