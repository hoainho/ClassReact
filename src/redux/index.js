import { createStore } from 'redux'

var initialState = {
    status  : false,
    sort : {
        by : 'name',
        value : 1
    }
}
var myReducer = (state = initialState,action) =>{
    if(action.type === 'TOOGLE_STATUS'){
        state.status = !state.status
    }
    if(action.type === 'TOGGLE_SORT'){
        var { by, value } = action.sort
        var { status } = state
        return { 
            status : status,
            sort : { 
                by ,
                value 
            }
        }
    }
    return state
}
const store = createStore(myReducer);
var status = {
    type : 'TOOGLE_STATUS'
}
var sort = {
    type : 'TOGGLE_SORT',
    sort : {
        by : 'name',
        value : -1
    }
}
console.log('Default : ', store.getState());
store.dispatch(status);
console.log('TOOGLE_STATUS : ', store.getState());
store.dispatch(sort);
console.log('TOGGLE_SORT :',store.getState());