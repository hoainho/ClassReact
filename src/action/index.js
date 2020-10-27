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