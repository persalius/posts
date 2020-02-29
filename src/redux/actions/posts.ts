import types from "../constants/posts";

// ADD
interface IAddPost {
    type: typeof types.POST_CREATE,
    payload: {}
}

export function post_create(payload: IAddPost) {
    return {
        type: types.POST_CREATE,
        payload
    };
}

// REMOVE
interface IDeletePost {
    type: typeof types.POST_DELETE,
    payload: {}
}

export function post_delete(payload: IDeletePost) {
    return {
        type: types.POST_DELETE,
        payload
    };
}
