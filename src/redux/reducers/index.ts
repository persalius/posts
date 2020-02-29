import {combineReducers} from "redux";
import posts from "./posts";

const rootReducer = combineReducers({
    posts
});

type RootReducerType = typeof rootReducer;
export type AppStateType = ReturnType<RootReducerType>;

export default rootReducer;
