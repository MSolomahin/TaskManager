import {createStore, combineReducers} from "redux";
import {kindTasksReducer} from "./kindTasksReducer";
import {modalReducer} from "./modalReducer";
import {tasksReducer} from "./tasksReducer";

const rootReducer = combineReducers({
    kindTasks: kindTasksReducer,
    modal: modalReducer,
    tasks: tasksReducer
})

const store = createStore(rootReducer);

export default store;