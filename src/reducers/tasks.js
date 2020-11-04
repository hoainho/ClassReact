import * as types from '../contants/index';
import shortid from 'shortid'
import _ from 'lodash'
var data = JSON.parse(localStorage.getItem('task'))
var initialState = data ? data : []

var myReducer = ( state = initialState, action ) => {
    switch(action.type){
        case types.TASK_LIST:
            return state
        case types.ADD_TASK:
            var task = {
                id : action.task.id,
                name : action.task.name,
                status : action.task.status
                }
            if(!task.id){
                task.id = shortid.generate();
                state.push(task);
            }else{
                var indexTask = _.findIndex(state, (item) => { return item.id === task.id})
                state[indexTask] = task
            }
            localStorage.setItem('task',JSON.stringify(state))
            return [...state]
        case types.UPDATE_STATUS :
            var id = action.id
            var index = _.findIndex(state, (item) => { return item.id === id})
            state[index] = { 
                id : state[index].id,
                name : state[index].name,
                status : !state[index].status   
            }
            localStorage.setItem('task',JSON.stringify(state))
            return [...state]
        case types.DELETE : 
            var idDelete = action.id
            var indexDelete = _.findIndex(state, (item) => { return item.id === idDelete })
            state.splice(indexDelete,1)
            localStorage.setItem('task',JSON.stringify(state))
            return [...state]
        case types.FILTER_DATA :
            if (action.name === 'name') {
                state.sort((prev,after) => {
                  if( prev.name.toLowerCase() > after.name.toLowerCase() ) { return action.value }
                  else if( prev.name.toLowerCase() < after.name.toLowerCase() ) { return -action.value }
                  else return 0 
                })
            }else{
                state.sort((prev,after) => {
                  if( prev.status === true ) { return -action.value }
                  else{ return action.value }
                })
            } 
            return [...state]
        default : 
            return state;
    }
}  
export default myReducer;