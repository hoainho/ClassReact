import * as types from '../contants/index';
export const status = () => {
    return {
        type : types.TOGGLE_STATUS
    }
}
export const addTask = (task) => {
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
export const onUpdateStatus = id => {
    return {
        type : types.UPDATE_STATUS,
        id
    }
}