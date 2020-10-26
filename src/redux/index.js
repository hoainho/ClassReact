import { createStore } from 'redux'
import myReducer from './reducers/index'
import { status,sort } from './action'
const store = createStore(myReducer);


//Action
console.log('Default :' , store.getState());
store.dispatch(status());           
console.log('TOGGLE_STATUS :' , store.getState());        
store.dispatch(sort({
        by : 'name',
        value : 1
    }));           
console.log('TOGGLE_SORT :' , store.getState());                                     