import React from 'react';

const UserList = (props) => {
  return (
    <div className="App-intro">
      { props.users.map((user, index) => <p key={index}>{user.name}</p>)}
    </div>
  )
};

export default UserList;
