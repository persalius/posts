import React from "react";
import Button from "./Button";
import {postType} from "../types/posts";
import styles from "../styles/components/post";

interface IProps {
    post: postType
}

const Post: React.FC<IProps> = ({post}) => {
    return (
        <div className="post">
            <h2 className="post__author">{post.author}</h2>
            <p className="post__name">{post.name}</p>
            <p className="post__text">{post.text}</p>
            <div className="post__actions">
                <Button text="Delete post" />
                <Button text="Comment" />
            </div>

            <style jsx>{styles}</style>
        </div>
    );
};

export default Post;
