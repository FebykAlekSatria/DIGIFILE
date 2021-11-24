import { createStore } from "redux";

const globalState = {
    userId: 5
}
const rootReducer = (state = globalState, action) => {
    return state;
}
export const store = createStore(rootReducer)