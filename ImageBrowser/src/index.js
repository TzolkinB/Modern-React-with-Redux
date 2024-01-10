import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import searchImages from './api';

searchImages();

ReactDOM.render(
  <App />, 
  document.querySelector('#root')
);