import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { fetchPosts } from '../actions';
import PostItem from '../components/PostItem';

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

class PostContainer extends React.Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  render() {
    return (
      <div style={{ paddingTop: 30, flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
        <h2>Posts</h2>
        <Link to="/add-post"><button style={styles.btn}>+ Add New Post</button></Link>
        <div style={{ width: '50%', textAlign: 'center' }}>
          { this.props.posts.length === 0 && <h4>Loading Awesome Posts....</h4> }
          { this.props.posts.map((post, index) => <PostItem key={post.id} {...post} />) }
        </div>
      </div>
    )
  }
}


const mapStateToProps = (state) => {
  return {
    posts: state.posts
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchPosts: () => dispatch(fetchPosts()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PostContainer);
