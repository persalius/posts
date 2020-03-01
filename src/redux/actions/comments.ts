import types from "../constants/comments";

// ADD
interface ICommentAdd {
    comment: {
        author: string,
        text: string,
        id: number
    }
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
export function comment_edit(payload: ICommentAdd) {
    return {
        type: types.COMMENT_EDIT,
        payload
    };
}
