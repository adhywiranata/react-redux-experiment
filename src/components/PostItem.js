import React from 'react';

const styles = {
  userItem: {
    margin: 30,
    padding: 20,
    border: '1px solid rgba(0, 0, 0, .2)',
    borderRadius: 20,
  }
};

const PostItem = (props) => (
  <div style={styles.userItem}>
    <h3>{ props.id }</h3>
  </div>
);

export default PostItem;
