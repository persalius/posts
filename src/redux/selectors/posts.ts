import { createSelector } from "reselect";
import {AppStateType} from "../reducers";

// ========== sum ==========
const postsSelector = (state: AppStateType) => {
    return state.posts.items
};

export const getPosts = createSelector(postsSelector, (posts) => {
    return posts;
});
