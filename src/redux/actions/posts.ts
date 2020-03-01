import types from "../constants/posts";

// ADD
interface ICreatePost{
    item: {
        author: string,
        name: string,
        text: string
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
    id: number
}

export function post_delete(payload: IDeletePost) {
    return {
        type: types.POST_DELETE,
        payload
    };
}
