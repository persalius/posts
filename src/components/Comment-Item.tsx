import React, {useState} from "react";
import {CommentType} from "../types/posts";
import AddComment from "./AddComment";

interface IProps {
    comment: CommentType,
    postId: number
}

const CommentItem: React.FC<IProps> = ({comment, postId}) => {
    const [commentWindow, setCommentWindow] = useState<boolean>(false);

    return (
        <div className="comment">
            <div>
                <p className="comment__author">{comment.author}</p>
                <p className="comment__text">{comment.text}</p>
            </div>
            <div className="comment__btns">
                <button className="comment__btn" onClick={() => setCommentWindow(true)}>
                    <img src="./images/icons/edit.svg" alt="edit"/>
                </button>
                <button className="comment__btn">
                    <img src="./images/icons/delete.svg" alt="edit"/>
                </button>
            </div>

            {commentWindow &&
                <AddComment
                    postId={postId}
                    closeWindow={() => setCommentWindow(false)}
                    title="Edit comment"
                    type="edit"
                />
            }
        </div>
    );
};

export default CommentItem;
