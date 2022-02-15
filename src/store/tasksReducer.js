const defaultState = {
    tasks: [],
}

export const tasksReducer = (state = defaultState, action) => {
    switch (action.type) {
        case "CHANGE_TASKS":
            return {...state, tasks: action.payload}
        default:
            return state
    }
};
