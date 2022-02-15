const defaultState = {
    flag: false,
}

export const modalReducer = (state = defaultState, action) => {
    switch (action.type) {
        case "VISIBLE_MODAL":
            return {...state, flag: action.payload}
        default:
            return state
    }
};
