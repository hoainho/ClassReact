import { createStore } from 'redux'
import myReducer from './reducers/index'
import { status } from './action'
const store = createStore(myReducer);
console.log('Default :' , store.getState());
store.dispatch(status());           
console.log('TOGGGLE_STATUS :' , store.getState());                                         