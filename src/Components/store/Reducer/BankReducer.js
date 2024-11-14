export const initialState = {
    amount : 0,
}
export const bankReducer = (state=initialState,{type,payload}) => {
    switch (type) {
        case "deposit":
            return {amount : state.amount + payload}
        case "withdraw":
            return {amount : state.amount - payload}
        case "balance":
            return state
        default:
            return state
    }
}