import React, {Component} from 'react';

class Comment extends Component {
  constructor(props){
    super(props);
    this.renderComment = this.renderComment.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  renderComment(comment, i){
    return(
      <div className="comment" key={i}>
        <p>
          <strong>{comment.user}</strong>
          {comment.text}
          <button className="remove-comment" onClick=
              {this.props.removeComment.bind(null,this.props.params.postId,i)}>&times;</button>
        </p>
      </div>
    );
  }

  handleFormSubmit(e) {
    e.preventDefault();
    const {postId} = this.props.params;
    const author = this.refs.author.value;
    const comment = this.refs.comment.value;
    this.props.addComment(postId,author,comment);
    this.refs.commentForm.reset() //reset the form after being submitted;
  }


  render(){
    return(
      <div className="comments">
        {this.props.postComments.map(this.renderComment)}
        <form ref="commentForm" className="comment-form" onSubmit={this.handleFormSubmit}>
          <input type="text" ref="author" placeholder="author"/>
          <input type="text" ref="comment" placeholder="comment" />
          <input type="submit" hidden/>
        </form>
      </div>
    )
  }
}

export default Comment;
