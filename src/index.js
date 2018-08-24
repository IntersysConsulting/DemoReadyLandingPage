import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
//vendors
import 'materialize-css';
import 'jquery';

import registerServiceWorker from './registerServiceWorker';

import {Provider} from 'react-redux';
import store from './store'

import Router from './Router';

ReactDOM.render(
  <Provider store={store}>
  <Router/>
</Provider>, document.getElementById('root'));
registerServiceWorker();