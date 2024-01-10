import React from 'react';
import ReactDOM from 'react-dom/client';
// import App from './components/App';
import App from './App'
import searchImages from './api';

searchImages();

ReactDOM.render(
  <App />, 
  document.querySelector('#root')
);