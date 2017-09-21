import React, { Component } from 'react';
import Photo from './Photo';
import Comment from './Comment';
import css from './style.css';


class Single extends Component {
    render(){
        const {postId} = this.props.params;
        const i = this.props.posts.findIndex((post)=> post.code === postId);
        const post = this.props.posts[i];
        const postComments = this.props.comments[postId] || [];

        return (
            <div className="single-photo">
                <Photo i={i} post={post} {...this.props} />
                <Comment postComments={postComments} {...this.props}/>
            </div>
        );
    }
}

export default Single;
