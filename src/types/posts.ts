// @ts-ignore
export type postType = {
    id: number,
    author: string,
    name: string,
    text: string,
    comment?: {
        author: string,
        name: string,
        text: string,
    }
};

export type postsType = Array<postType>;
