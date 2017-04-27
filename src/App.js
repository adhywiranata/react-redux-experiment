import React, { Component } from 'react';

import Header from './components/Header';
import UserList from './components/UserList';
import AddUserForm from './components/AddUserForm';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <UserList />
        <AddUserForm />
      </div>
    );
  }
}

export default App;
