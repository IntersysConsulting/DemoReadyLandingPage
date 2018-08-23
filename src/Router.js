import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import DemoPage from './components/demoPage/DemoPage';
import App from './App';

const router = (props) =>(
          <BrowserRouter>
            <Switch>
              <Route exact path='/' component={App} />
              <Route path='/demo-page/:category/:demoId/:component' component={DemoPage} />
            </Switch>
          </BrowserRouter>
        );
export default router;