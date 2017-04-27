import React from 'react';

const styles = {
  userItem: {
    margin: 30,
    padding: 20,
    border: '1px solid rgba(0, 0, 0, .2)',
    borderRadius: 20,
  }
};

const UserItem = ({ name, username, email, description}) => (
  <div style={styles.userItem}>
    <h3>{ name }</h3>
    <p><span>{ username } | { email }</span></p>
    <p>{ description }</p>
  </div>
);

export default UserItem;
