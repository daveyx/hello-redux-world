'use strict';

import React from 'react';
import ReactDOM from "react-dom";
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import App from  './components/app'
import allReducers from './reducers'

const store = createStore(allReducers, window.devToolsExtension && window.devToolsExtension());

ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
  document.getElementById('root')
);
