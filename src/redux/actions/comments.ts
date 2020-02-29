import types from "../constants/comments";

// ADD
interface ICommentAdd {
    type: typeof types.COMMENT_ADD,
    payload: {}
}

export function comment_add(payload: ICommentAdd) {
    return {
        type: types.COMMENT_ADD,
        payload
    };
}

// REMOVE
interface ICommentRemove {
    type: typeof types.COMMENT_REMOVE,
    payload: {}
}

export function comment_remove(payload: ICommentRemove) {
    return {
        type: types.COMMENT_REMOVE,
        payload
    };
}
