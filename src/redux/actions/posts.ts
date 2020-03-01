import types from "../constants/posts";

// ADD
interface ICreatePost {
    newPost: {
        author: string,
        title: string,
        content: string
    }
}

export function post_create(payload: ICreatePost) {
    return {
        type: types.POST_CREATE,
        payload
    };
}

// REMOVE
interface IDeletePost {
    postId: number
}

export function post_delete(payload: IDeletePost) {
    return {
        type: types.POST_DELETE,
        payload
    };
}
