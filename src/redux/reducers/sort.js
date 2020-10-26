var initialState = {
    by : '',
    value : -1
}
var myReducer = ( state=initialState,action) => {
    if(action.type === 'TOGGLE_SORT'){
        var { by,value } = action.sort
        return { by,value }
    }
    return state
}
export default myReducer;