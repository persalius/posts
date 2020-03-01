import types from "../constants/index";
import {postsType, postType} from "../../types/posts";

interface IAction {
    type: string,
    payload: {
        id?: number,
        item?: {
            author: string,
            name: string,
            text: string
        },
        comment?: {
            id: number,
            author: string,
            text: string
        }
    }
}

const initialState = {
    items: [
        {
            id: 1,
            author: "Sergey",
            name: "React",
            text: "React - JavaScript library for building user interfaces. React can be used as a base in the development of single-page or mobile applications. However, React is only concerned with rendering data to the DOM, and so creating React applications usually requires the use of additional libraries for state management and routing.[7][8] Redux[9] and React Router[10] are respective examples of such libraries.",
            comments: [
                {author: "Denis", text: "Cool post!!!"},
                {author: "Dima", text: "I love React."}
            ]
        },
        {
            id: 2,
            author: "Sergey",
            name: "React",
            text: "React - JavaScript library for building user interfaces. React can be used as a base in the development of single-page or mobile applications. However, React is only concerned with rendering data to the DOM, and so creating React applications usually requires the use of additional libraries for state management and routing.[7][8] Redux[9] and React Router[10] are respective examples of such libraries.",
            comments: [
                {author: "Denis", text: "Cool post!!!"},
                {author: "Dima", text: "I love React."}
            ]
        }
    ] as postsType
};

type IState = typeof initialState;

export default function(state = initialState, action: IAction): IState {
    const items = state.items;
    switch (action.type) {
        case types.POST_CREATE:
            let newPost = action.payload.item;
            if (items.length) {
                newPost["id"] = items[items.length-1].id + 1
            } else {
                newPost["id"] = 1;
            }
            items.push(<postType>newPost);
            return {
                items: [...items]
            };
        case types.POST_DELETE:
            const {id} = action.payload;
            for (let i = 0; i < items.length; i++) {
                if (items[i].id === id) {
                    items.splice(i, 1);
                    break;
                }
            }
            return {
                items: [...items]
            };

        case types.COMMENT_ADD:
            for (let i = 0; i < items.length; i++) {
                if (items[i].id === action.payload.comment.id) {
                    items[i].comments.push({
                        author: action.payload.comment.author,
                        text: action.payload.comment.text
                    });
                    break;
                }
            }
            return {
                items: [...items]
            }

        case types.COMMENT_EDIT:


        default:
            return state;
    }
};
