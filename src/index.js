import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

ReactDOM.render(
  <App users={[
      { id: 1, name: 'Mike'},
      { id: 2, name: 'John'},
      { id: 3, name: 'Sam'},
    ]} />,
  document.getElementById('root')
);
