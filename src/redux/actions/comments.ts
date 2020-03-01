import types from "../constants/comments";

// ADD
interface ICommentAdd {
    comment: {
        author: string,
        text: string
    },
    postId: number
}

export function comment_add(payload: ICommentAdd) {
    return {
        type: types.COMMENT_ADD,
        payload
    };
}

// REMOVE
interface ICommentRemove {
    payload: {}
}

export function comment_remove(payload: ICommentRemove) {
    return {
        type: types.COMMENT_REMOVE,
        payload
    };
}

// EDIT
interface ICommentEdit {
    comment: {
        commentId: number,
        author: string,
        text: string
    },
    postId: number
}

export function comment_edit(payload: ICommentEdit) {
    return {
        type: types.COMMENT_EDIT,
        payload
    };
}
