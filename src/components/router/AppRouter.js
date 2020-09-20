import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from '../Header';
import HomePage from '../HomePage';
import Gallary from '../Gallery';
import NotFoundPage from '../NotFoundPage';

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <div className="main-content">
        <Switch>
          <Route component={HomePage} path="/" exact={true} />
          <Route component={Gallary} path="/gallery" />
          <Route component={NotFoundPage} />
        </Switch>
      </div>
    </div>
  </BrowserRouter>
);

export default AppRouter;