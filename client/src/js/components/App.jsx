import React, { Component } from 'react';
import Today from './Today.jsx';
import Calendar from './Calendar.jsx';
import Nav from './Nav.jsx';
import { Route, Router, browserHistory } from 'react-router';
// TODO: need to import the login logout and register components

class App extends Component {
  render() {
    return (
    <Router history={ browserHistory } >
      <Route path='/register' component={ Register } />
      <Route path='/login' component={ Login } />
      <Route component={ ensureLoggedIn } > // TODO: make sure we are passing down the isLoggedIn
        <Route path='/logout' component={ Logout } />
        <Route path='/' component={ Today } />
        <Route path='/today' component={ Today } />
        <Route path='/groups' component={ Groups } />
        <Route path='/chat' component={ Chat } />
      </Route>
    </ Router>
    );
  }
}

export default App;
