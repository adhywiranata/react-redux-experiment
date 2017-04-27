import React from 'react';
import { connect } from 'react-redux';

import { fetchUser } from '../actions';
import UserItem from './UserItem';

class UserList extends React.Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    return (
      <div style={{ paddingTop: 30, flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
        <h2>Users</h2>
        <div style={{ width: '50%', textAlign: 'center' }}>
          { this.props.users.length === 0 && <h4>Loading Awesome Users....</h4> }
          { this.props.users.map((user, index) => <UserItem key={user.id} {...user} />) }
        </div>
      </div>
    )
  }
}


const mapStateToProps = (state) => {
  return {
    users: state.users
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUser: () => dispatch(fetchUser()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserList);
