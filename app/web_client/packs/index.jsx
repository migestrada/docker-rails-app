import React from 'react';
import ReactDOM from 'react-dom';
import App from '../containers/App';
import store from '../redux';
import { Provider } from 'react-redux';

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.body.appendChild(document.createElement('div')),
  );
});
