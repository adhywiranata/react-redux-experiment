import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';

import { addPost } from '../actions';
import FormSection from '../components/FormSection';

import styles from './formStyles';

const initialState = {
  title: '',
  userId: 1,
  content: '',
  isSubmitted: false,
};

class UserFormContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = initialState;
  }

  handleChange(e) {
    const updatedState = {};
    updatedState[e.target.name] = e.target.value;
    this.setState(updatedState);
  }

  render() {
    return (
      <div style={styles.addFormContainer}>
        { (this.state.isSubmitted && this.props.isUpdated) && <Redirect to={{
          pathname: '/posts',
        }}/> }
        <h3>ADD NEW POST</h3>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            this.props.addPost(this.state);
            this.setState(initialState);
          }}
          style={styles.addForm}
        >
          <FormSection
            label={'Post Title'}
            type={'text'}
            name={'title'}
            value={this.state.title}
            handleChange={this.handleChange.bind(this)}
          />
          <FormSection
            label={'Post Content'}
            type={'text'}
            name={'content'}
            value={this.state.content}
            handleChange={this.handleChange.bind(this)}
          />
        <input type="submit" value="Add Post" style={styles.submitBtn} />
        </form>
      </div>
    );
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    addPost: (newPost) => dispatch(addPost(newPost)),
  };
};

export default connect(null, mapDispatchToProps)(UserFormContainer);
