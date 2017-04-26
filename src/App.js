import React, { Component } from 'react';

import UserList from './components/UserList';
import AddUserForm from './components/AddUserForm';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [
         { name: 'Mike' },
         { name: 'John'},
         { name: 'Sam'},
       ]
    }
  }

  addUser(name) {
    const newUser = { name: name };
    const newUsers = [...this.state.users, newUser];
    this.setState({
      users: newUsers,
    });
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Users</h2>
        </div>
        <UserList users={this.state.users} />
        <AddUserForm addUser={this.addUser.bind(this)} />
      </div>
    );
  }
}

export default App;
