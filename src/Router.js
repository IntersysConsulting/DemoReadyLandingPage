import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import DemoPage from './components/demoPage/DemoPage';
import App from './App';
import NotFound from './components/notFound/NotFound';

const router = (props) =>(
          <BrowserRouter basename={process.env.PUBLIC_URL}>
            <Switch>
              <Route exact path='/' component={App} />
              <Route path='/demo-page/:category/:demoId/:component' component={DemoPage} />
              <Route component={NotFound} />
            </Switch>
          </BrowserRouter>
        );
export default router;