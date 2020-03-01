import types from "../constants/index";
import {postsType, postType} from "../../types/posts";

interface IAction {
    type: string,
    payload: {
        postId?: number,
        newPost?: {
            author: string,
            title: string,
            content: string
        },
        comment?: {
            commentId?: number,
            author: string,
            text: string
        },
        commentId?: number
    }
}

const initialState = {
    items: [
        {
            postId: 1,
            author: "Sergey",
            title: "React",
            content: "React - JavaScript library for building user interfaces. React can be used as a base in the development of single-page or mobile applications. However, React is only concerned with rendering data to the DOM, and so creating React applications usually requires the use of additional libraries for state management and routing.[7][8] Redux[9] and React Router[10] are respective examples of such libraries.",
            comments: [
                {commentId: 1, author: "Denis", text: "Cool post!!!"},
                {commentId: 2, author: "Dima", text: "I love React."}
            ]
        },
        {
            postId: 2,
            author: "Denis",
            title: "React",
            content: "React - JavaScript library for building user interfaces. React can be used as a base in the development of single-page or mobile applications. However, React is only concerned with rendering data to the DOM, and so creating React applications usually requires the use of additional libraries for state management and routing.[7][8] Redux[9] and React Router[10] are respective examples of such libraries.",
            comments: [
                {commentId: 1, author: "Denis", text: "Cool post!!!"},
                {commentId: 2, author: "Dima", text: "I love React."}
            ]
        }
    ] as postsType
};

type IState = typeof initialState;

export default function(state = initialState, action: IAction): IState {
    const items = state.items;

    switch (action.type) {
        case types.POST_CREATE:
            const newItem = action.payload.newPost;
            if (items.length) {
                newItem["postId"] = items[items.length-1].postId + 1;
            } else {
                newItem["postId"] = 1;
            }
            // @ts-ignore
            newItem.comments = [];
            items.push(<postType>newItem);
            return {
                items: [...items]
            };

        case types.POST_DELETE:
            for (let i = 0; i < items.length; i++) {
                if (items[i].postId === action.payload.postId) {
                    items.splice(i, 1);
                    break;
                }
            }
            return {
                items: [...items]
            };

        case types.COMMENT_ADD:
            const newComment = action.payload.comment;
            for (let i = 0; i < items.length; i++) {
                if (items[i].postId === action.payload.postId) {
                    if (items[i].comments && items[i].comments.length) {
                        newComment["postId"] = items[items.length-1][action.payload.postId] + 1
                        items[i].comments.push({
                            commentId: items[i].comments[items[i].comments.length-1].commentId + 1,
                            author: action.payload.comment.author,
                            text: action.payload.comment.text
                        });
                    } else {
                        console.log("adsad");
                        items[i].comments.push({
                            commentId: 1,
                            author: action.payload.comment.author,
                            text: action.payload.comment.text
                        });
                    }

                    break;
                }
            }
            return {
                items: [...items]
            };

        case types.COMMENT_EDIT:
            for (let i = 0; i < items.length; i++) {
                if (items[i].postId === action.payload.postId) {
                    for (let j = 0; j < items[i].comments.length; j++) {
                        if (items[i].comments[j].commentId === action.payload.comment.commentId) {
                            items[i].comments[j].author = action.payload.comment.author;
                            items[i].comments[j].text = action.payload.comment.text;
                            break;
                        }
                    }
                }
            }
            return {
                items: [...items]
            };

        case types.COMMENT_REMOVE:
            let newPostAfterDelete;
            let positionPostAfeDelete: number;

            for (let i = 0; i < items.length; i++) {
                if (items[i].postId === action.payload.postId) {
                    newPostAfterDelete = items[i];
                    positionPostAfeDelete = i;
                    break;
                }
            }

            for (let i = 0; i < newPostAfterDelete.comments.length; i++) {
                if (newPostAfterDelete.comments[i].commentId === action.payload.commentId) {
                    newPostAfterDelete.comments.splice(i, 1);
                    break;
                }
            }

            return {
                items: [
                    ...items.slice(0, positionPostAfeDelete),
                    {...newPostAfterDelete},
                    ...items.slice(positionPostAfeDelete + 1)
                ]
            };
        default:
            return state;
    }
};
