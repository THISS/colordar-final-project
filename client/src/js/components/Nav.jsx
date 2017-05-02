import React, { Component } from 'react';

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
              <li className="active"><a href="#">Today</a></li>
              <li><a href="#calendars">Calendars</a></li>
              <li><a href="#groups">Groups</a></li>
            </ul>
            <ul className="nav navbar-nav navbar-right">
              <li><a href="#log-out">Log Out</a></li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Nav;
