import 'babel-polyfill'

import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import configureStore from './store/configure-store';
import App from './components/App';
import './index.css';

import {newSketch} from './actions/playback'

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

store.dispatch(newSketch())