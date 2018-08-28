import React from 'react';
import ReactDOM from 'react-dom';
//vendors
import 'materialize-css';
import 'jquery';

import './styles/index.css';

import registerServiceWorker from './registerServiceWorker';

import {Provider} from 'react-redux';
import store from './store'

import Router from './Router';

ReactDOM.render(
  <Provider store={store}>
  <Router/>
</Provider>, document.getElementById('root'));
registerServiceWorker();