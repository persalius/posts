import React, {useCallback, useState} from "react";
import {connect} from "react-redux";
import Button from "./Button";
import Comments from "./Comments";
import AddComment from "./AddComment";
import {postType} from "../types/posts";
import styles from "../styles/components/post";
// Action
import {post_delete} from "../redux/actions/posts";

interface IProps {
    post: postType,
    dispatch: Function
}

const Post: React.FC<IProps> = ({post, dispatch}) => {
    const [commentWindow, setCommentWindow] = useState<boolean>(false);

    const deletePost = useCallback(() => {
        const confirmDelete = confirm("Do you want to delete this post");
        if (confirmDelete) {
            dispatch(post_delete({postId: post.postId}))
        }
        }, [post.postId],
    );

    return (
        <div className="post">
            <h2 className="post__author">{post.author}</h2>
            <p className="post__name">{post.title}</p>
            <p className="post__text">{post.content}</p>
            <div className="post__actions">
                <Button
                    text="Delete post"
                    action={deletePost}
                />
                <Button
                    text="Add comment"
                    action={() => setCommentWindow(true)}
                />
            </div>
            {/* View comments */}
            {
                post.comments && post.comments.length ?
                    <Comments comments={post.comments} postId={post.postId} />
                    : null
            }
            {/* View comment modal window */}
            {commentWindow &&
                <AddComment
                    postId={post.postId}
                    closeWindow={() => setCommentWindow(false)}
                    title="Add new comment"
                    type="add"
                />
            }

            <style jsx>{styles}</style>
        </div>
    );
};

export default connect()(Post);
