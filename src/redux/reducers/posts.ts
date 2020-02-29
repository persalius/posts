import types from "../constants/posts";
import {postsType} from "../../types/posts";

interface IAction {
    type: string,
    payload: {}
}

const initialState = {
    items: [
        {
            id: 1,
            author: "Sergey",
            name: "React",
            text: "React - JavaScript library for building user interfaces. React can be used as a base in the development of single-page or mobile applications. However, React is only concerned with rendering data to the DOM, and so creating React applications usually requires the use of additional libraries for state management and routing.[7][8] Redux[9] and React Router[10] are respective examples of such libraries."
        },
        {
            id: 2,
            author: "Sergey",
            name: "React",
            text: "React - JavaScript library for building user interfaces. React can be used as a base in the development of single-page or mobile applications. However, React is only concerned with rendering data to the DOM, and so creating React applications usually requires the use of additional libraries for state management and routing.[7][8] Redux[9] and React Router[10] are respective examples of such libraries."
        }
    ] as postsType
};

type IState = typeof initialState;

export default function(state = initialState, action: IAction): IState {
    switch (action.type) {
        case types.POST_CREATE:
            return {
                items: []
            };
        case types.POST_DELETE:
            return {
                items: []
            };
        default:
            return state;
    }
};
