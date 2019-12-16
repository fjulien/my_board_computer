import './App.scss';

import React, { FC, ReactElement } from 'react';
import { Switch, Route } from 'react-router-dom';
import {
  NavigationBar,
  FooterBar
  } from './components';

const App: FC = (): ReactElement => {
  return (
    <div className="App">
      <NavigationBar />
      <Switch>
        <Route path="/tet" exact component={NavigationBar} />
      </Switch>
      <FooterBar />
    </div>
  );
}

export default App;