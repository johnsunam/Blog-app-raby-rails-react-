import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AppLayout from './layout/Layout';
import Home from './Home';
import CreateForm from './CreateForm';
import Article from './Article';

class App extends Component {
  render () {
    return (
        <Switch>
          <Route exact path="/" render={props => <AppLayout><Home { ...props }/></AppLayout>} />
          <Route exact path="/articles/:id" render={props => <AppLayout><Article { ...props }/></AppLayout>} />
          <Route exact path="/create_blog" render={props => <AppLayout><CreateForm {...props}/></AppLayout>} />
        </Switch>
    )
  }
}

export default App;