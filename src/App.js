import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Users</h2>
        </div>
        <p className="App-intro">
          { this.props.users.map(user => <p key={user.id}>{user.name}</p>)}
        </p>
      </div>
    );
  }
}

export default App;
