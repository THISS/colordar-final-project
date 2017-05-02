import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
// TODO: need to import the login logout and register components

import Nav from './Nav.jsx';
import Today from './Today.jsx';

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <div>
            <Nav />
            <Route exact path='/' component={ Today } />
            <Route path='/groups' component={ Today } />
            <Route path='/chat' component={ Today } />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
