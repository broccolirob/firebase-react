import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Application from './components/Application';
import UserProvider from './providers/UserProvider';

ReactDOM.render(
  <UserProvider>
    <Application />
  </UserProvider>,
  document.getElementById('root')
);
