import React, {useState, useCallback} from "react";
import {connect} from "react-redux";
import {CommentType} from "../types/posts";
import AddComment from "./AddComment";
// Actions
import {comment_remove} from "../redux/actions/comments";

interface IProps {
    comment: CommentType,
    postId: number,
    dispatch: Function
}

const CommentItem: React.FC<IProps> = ({comment, postId, dispatch}) => {
    const [commentWindow, setCommentWindow] = useState<boolean>(false);

    const deleteCommit = useCallback(() => {
        const confirmDelete = confirm("Do you want to delete this comment");
        if (confirmDelete) {
            dispatch(comment_remove({postId, commentId: comment.commentId}));
        }
    }, [comment.commentId]);

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
                <button className="comment__btn" onClick={() => deleteCommit()}>
                    <img src="./images/icons/delete.svg" alt="edit"/>
                </button>
            </div>

            {commentWindow &&
                <AddComment
                    postId={postId}
                    comment={comment}
                    closeWindow={() => setCommentWindow(false)}
                    title="Edit comment"
                    type="edit"
                />
            }
        </div>
    );
};

export default connect()(CommentItem);
