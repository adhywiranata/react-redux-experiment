import React, { Component } from 'react';

import UserList from './components/UserList';
import AddUserForm from './components/AddUserForm';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  addUser(name) {
    // DO NOTHING for now..
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Users</h2>
        </div>
        <UserList />
        <AddUserForm addUser={this.addUser.bind(this)} />
      </div>
    );
  }
}

export default App;
