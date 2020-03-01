import React  from "react";
import {CommentType} from "../types/posts";
import CommentItem from "./Comment-Item";
import styles from "../styles/components/comments";

interface IProps {
    comments: Array<CommentType>,
    postId: number
}

const Comments: React.FC<IProps> = ({comments, postId}) => {
    return (
        <div className="comments">
            {
                comments.map(comment => <CommentItem comment={comment} postId={postId} key={comment.author} />)
            }

            <style jsx>{styles}</style>
        </div>
    );
};

export default Comments;
