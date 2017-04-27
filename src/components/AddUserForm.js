import React from 'react';
import { connect } from 'react-redux';

import { addUser } from '../actions';
import FormSection from './FormSection';

const styles = {
  addFormContainer: {
    border: '1px solid rgba(0, 0, 0, .1)',
    padding: 30,
    backgroundColor: '#22313F',
    color: '#FFFFFF',
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  addForm: {
    flex: 1,
    width: '50%',
    display: 'flex',
    flexDirection: 'column',
  },
};

class AddUserForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      username: '',
      email: '',
      description: '',
    };
  }

  handleChange(e) {
    const updatedState = {};
    updatedState[e.target.name] = e.target.value;
    this.setState(updatedState);
  }

  render() {
    return (
      <div style={styles.addFormContainer}>
        <h3>Add New User</h3>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            this.props.addUser(this.state.name);
            this.setState({ name: '' });
          }}
          style={styles.addForm}
        >
          <FormSection
            label={'Name'}
            type={'text'}
            name={'name'}
            value={this.state.name}
            handleChange={this.handleChange.bind(this)}
          />
          <FormSection
            label={'Username'}
            type={'text'}
            name={'username'}
            value={this.state.username}
            handleChange={this.handleChange.bind(this)}
          />
          <FormSection
            label={'Email'}
            type={'text'}
            name={'email'}
            value={this.state.email}
            handleChange={this.handleChange.bind(this)}
          />
          <FormSection
            label={'Description'}
            type={'text'}
            name={'description'}
            value={this.state.description}
            handleChange={this.handleChange.bind(this)}
          />
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
