import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/index';

class CommentBox extends Component {
  constructor(props) {
    super(props);

    this.state = { comment: '' };
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.saveComment(this.state.comment);
    this.setState({ comment: '' });
  }

  handleChange(event) {
    this.setState({ comment: event.target.value });
  }

  render() {
    return (
      <form className="comment-box" onSubmit={this.handleSubmit.bind(this)}>
        <h4>Add a comment</h4>
        <textarea value={this.state.comment} onChange={this.handleChange.bind(this)} />
        <div>
          <button action="submit">Submit comment</button>
        </div>
      </form>
    );
  }
}

export default connect(null, actions)(CommentBox);
