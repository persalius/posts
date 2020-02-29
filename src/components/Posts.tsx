import React from "react";
import {connect} from "react-redux";
import Post from "./Post";
import {getPosts} from "../redux/selectors/posts";
import {postsType} from "../types/posts";

interface IProps {
    postsList: postsType
}

const Posts: React.FC<IProps> = ({postsList}) => {
    return (
        <section className="posts">
            {
                postsList.map(post => (
                    <Post post={post} key={post.id} />
                ))
            }
        </section>
    );
};

const mapStateToProps = state => {
    return {
        postsList: getPosts(state)
    }
};

export default connect(mapStateToProps)(Posts);
