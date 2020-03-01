export type CommentType = {
    author: string,
    text: string,
}

// @ts-ignore
export type postType = {
    id: number,
    author: string,
    name: string,
    text: string,
    comments?: Array<CommentType>
};

export type postsType = Array<postType>;
