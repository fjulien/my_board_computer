
import React, { FC, ReactElement } from 'react';
import { Switch, Route } from 'react-router-dom';
import {
  NavigationBar,
  FooterBar,
  Terminatest,
} from './components/';

import './App.scss';

const App: FC = (): ReactElement => {
  return (
    <div className="App">
      <NavigationBar />
      <Switch>
        <Route path="/terminatest" exact component={Terminatest} />
      </Switch>
      <FooterBar />
    </div>
  );
}

export default App;