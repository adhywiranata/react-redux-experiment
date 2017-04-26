import React from 'react';
import { connect } from 'react-redux';

import { addUser } from '../actions';

class AddUserForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ''
    }
  }

  handleChange(e) {
    this.setState({ name: e.target.value });
  }

  render() {
    return (
      <div>
        <h3>Add New User</h3>
        <form onSubmit={(e) => {
            e.preventDefault();
            this.props.addUser(this.state.name);
            this.setState({ name: '' });
          }
        }>
          <input type="text" value={this.state.name} onChange={this.handleChange.bind(this)} />
          <input type="submit" value="Add User" />
        </form>
      </div>
    );
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    addUser: (name) => dispatch(addUser(name)),
  };
};

export default connect(null, mapDispatchToProps)(AddUserForm);
