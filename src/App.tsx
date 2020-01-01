
import React, { FC, ReactElement } from 'react';
import { Switch, Route } from 'react-router-dom';
import {
  NavigationBar,
  FooterBar,
  Terminatest,
  TomorrowMustToDo,
} from './components/';

import './App.scss';

const App: FC = (): ReactElement => {
  return (
    <div className="App">
      <NavigationBar />
      <Switch>
        <Route path="/terminatest" exact component={Terminatest} />
        <Route path="/tomorrow-must-to-do" exact component={TomorrowMustToDo} />
      </Switch>
      <FooterBar />
    </div>
  );
}

export default App;