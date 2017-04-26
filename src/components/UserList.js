import React from 'react';
import { connect } from 'react-redux';

const UserList = (props) => {
  return (
    <div className="App-intro">
      { props.users.map((user, index) => <p key={index}>{user.name}</p>)}
    </div>
  )
};

const mapStateToProps = (state) => {
  return {
    users: state.users
  }
}

export default connect(mapStateToProps, null)(UserList);
