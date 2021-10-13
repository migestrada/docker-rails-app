import React from 'react';
import ReactDOM from 'react-dom';
import App from '../containers/App';
import { Provider } from 'react-redux';
import store from './store';

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
      <Provider store={store}>
        <App />
      </Provider>,
      document.body.appendChild(document.createElement('div')),
  );
});
