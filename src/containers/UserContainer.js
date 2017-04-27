import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { fetchUser } from '../actions';
import UserItem from '../components/UserItem';

const styles = {
  btn: {
    color: '#FFFFFF',
    backgroundColor: '#446CB3',
    border: 0,
    padding: 15,
    fontSize: '1em',
    borderRadius: 7,
    outline: 'none',
    cursor: 'pointer',
  },
};

class UserList extends React.Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    return (
      <div style={{ paddingTop: 30, flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
        <h2>Users</h2>
        <Link to="/add-user"><button style={styles.btn}>+ Add New User</button></Link>
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
