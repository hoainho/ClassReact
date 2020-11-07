import * as types from '../contants/index';
export const status = () => {
    return {
        type : types.TOGGLE_STATUS
    }
}
export const addTask = task => {
    return {
        type : types.ADD_TASK,
        task
    }
}
export const onToggleForm = () => {
    return {
        type : types.TOGGLE_FORM
    }
}
export const onCloseForm = () => {
    return {
        type : types.CLOSE_FORM
    }
}
export const onClearForm = (task) => {
    return {
        type : types.CLEAR_FORM,
        task
    }
}
export const onOpenForm = () => {
    return {
        type : types.OPEN_FROM
    }
}
export const onUpdateStatus = id => {
    return {
        type : types.UPDATE_STATUS,
        id
    }
}
export const onDelete = id =>{
    return {
        type : types.DELETE,
        id
    }
}
export const onUpdateData  = task =>{
    return {
        type : types.UPDATE_DATA,
        task
    }
}
export const onFilterData  = (name,value) =>{
    return {
        type : types.FILTER_DATA,
        name,
        value
    }
}
export const onSortData  = (name,value) =>{
    return {
        type : types.SORT,
        name,
        value
    }
}