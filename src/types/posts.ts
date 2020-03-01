export type CommentType = {
    commentId: number,
    author: string,
    text: string,
}

// @ts-ignore
export type postType = {
    postId: number,
    author: string,
    title: string,
    content: string,
    comments?: Array<CommentType>
};

export type postsType = Array<postType>;
