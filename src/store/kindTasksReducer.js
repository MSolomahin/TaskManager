const defaultState = {
    kind: "block",
}

export const kindTasksReducer = (state = defaultState, action) => {
    switch (action.type) {
        case "CHANGE_LIST_OR_BLOCK":
            return {...state, kind: action.payload}
        default:
            return state
    }
};
