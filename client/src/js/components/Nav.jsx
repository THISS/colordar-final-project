import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Nav extends Component {
  render() {

    return (
      <nav className="navbar navbar-default navbar-fixed-top">
        <div className="container">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand" href="#">color.</a>
          </div>
          <div id="navbar" className="navbar-collapse collapse">
            <ul className="nav navbar-nav">
              <li><a href='/#today'>Today</a></li>
              <li><a href='/#groups'>Groups</a></li>
              <li><a href='/#chat'>Chat</a></li>
            </ul>
            <ul className="nav navbar-nav navbar-right">
              {/*TODO: need to render these depending on if the user is logged in or not*/}
              <li><Link to='/logout'>Log Out</Link></li>
              <li><Link to='/register'>Register</Link></li>
              <li><Link to='/login'>Log In</Link></li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Nav;
