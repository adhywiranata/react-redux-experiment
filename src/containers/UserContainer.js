import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { fetchUsers } from '../actions';
import UserItem from '../components/user/UserItem';

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
    this.props.fetchUsers();
    // this.props.exampleRunSaga();
  }

  render() {
    const { users, isFetching, fetchError, fetchErrorMessage } = this.props;
    return (
      <div style={{ paddingTop: 30, flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
        <h2>Users</h2>
        <Link to="/add-user"><button style={styles.btn}>+ Add New User</button></Link>
        <div style={{ width: '50%', textAlign: 'center' }}>
          { isFetching && <h4>Loading Awesome Users....</h4> }
          { fetchError && <span style={{ color: 'red'}}>{ fetchErrorMessage }</span> }
          { !fetchError && users.map((user, index) => <UserItem key={user.id} {...user} />) }
        </div>
      </div>
    )
  }
}


const mapStateToProps = ({ userData }) => {
  const { users, isFetching, fetchError, fetchErrorMessage } = userData;
  return {
    users, isFetching, fetchError, fetchErrorMessage,
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUsers: () => dispatch(fetchUsers()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserList);
