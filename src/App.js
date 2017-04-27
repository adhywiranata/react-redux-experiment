import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Header from './components/Header';
import UserList from './components/UserList';
import AddUserForm from './components/AddUserForm';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
          <Header />
          <div style={{ paddingTop: 70 }}>
            <Route exact path="/" component={UserList} />
            <Route path="/add-user" component={AddUserForm} />
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
