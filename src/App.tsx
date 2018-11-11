import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './App.sass';

import Error from './pages/Error';
import Home from './pages/Home';

class App extends Component {
  public render() {
    return (
      <Router>
        <Switch>
          <Route exact={true} path='/' component={Home}/>
          <Route component={Error} />
        </Switch>
      </Router>
    );
  }
}

export default App;
