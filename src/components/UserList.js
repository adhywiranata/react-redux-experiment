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
      <div className="App-intro">
        { this.props.users.length === 0 && <h4>Loading Awesome Users....</h4> }
        { this.props.users.map((user, index) => <UserItem key={user.id} {...user} />) }
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
