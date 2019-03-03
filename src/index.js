import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Application from './components/Application';
import UserProvider from './providers/UserProvider';
import ArticleProvider from './providers/ArticleProvider';

ReactDOM.render(
  <UserProvider>
    <ArticleProvider>
      <Application />
    </ArticleProvider>
  </UserProvider>,
  document.getElementById('root')
);
