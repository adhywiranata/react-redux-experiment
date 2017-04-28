import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Header from './components/Header';
import UserContainer from './containers/UserContainer';
import PostContainer from './containers/PostContainer';
import UserFormContainer from './containers/UserFormContainer';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
          <Header />
          <div style={{ paddingTop: 70 }}>
            <Route exact path="/" component={UserContainer} />
            <Route path="/users" component={UserContainer} />
            <Route path="/posts" component={PostContainer} />
            <Route path="/add-user" component={UserFormContainer} />
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
