import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import App from './components/App';
import reducers from './reducers/root';
import '../public/style.css';

ReactDOM.render(
	<Provider store={createStore(reducers)}>
  	<App />
  </Provider>
  , document.getElementById('root')
);
