import React from 'react';
import moment from 'moment';

const styles = {
  userItem: {
    margin: 30,
    padding: 20,
    border: '1px solid rgba(0, 0, 0, .2)',
    borderRadius: 20,
  }
};

const PostItem = ({ title, content, user, createdAt, createDate, comments }) => (
  <div style={styles.userItem}>
    <p>
      posted by { user.name } { moment(createDate).fromNow() }
    </p>
    <h3>{ title }</h3>
    <p>{ content }</p>
    <p style={{ fontSize: '1.2em' }}>{ comments.length } Comments</p>
    <hr />
    <ul>
    { comments.map(comment => <li key={comment.id}>{comment.comment}</li>)}
    </ul>
  </div>
);

export default PostItem;
