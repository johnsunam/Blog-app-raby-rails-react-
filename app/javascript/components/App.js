import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import AppLayout from './layout/Layout';
import Home from './Home';

class App extends Component {
  render () {
    return (
        <Switch>
          <Route path="/" render={() => <AppLayout><Home /></AppLayout>}/>
        </Switch>
    )
  }
}

export default App;