import * as types from '../contants/index';
export const status = () => {
    return {
        type : types.TOGGLE_STATUS
    }
}
export const sort = (sort) => {
    return {
        type : types.TOGGLE_SORT,
        sort
    }
}