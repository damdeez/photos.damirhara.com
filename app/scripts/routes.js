import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';
import createHistory from 'history/lib/createHashHistory'

import App from './pages/app';
import Home from './pages/home';
import Info from './pages/info';
import NotFound from './pages/notFound';

const historyOptions = {
  queryKey: false
};

const routes = (
  <Router history={createHistory(historyOptions)}>
    <Route path='/' component={ App }>
      <IndexRoute component={ Home }/>
      <Route path='info' component={ Info } />
      <Route path='home' component={ Home } />
      <Route path='*' component={NotFound}/>
    </Route>
  </Router>
);

export default routes;
