import React, {Component} from 'react';

class Nav extends Component {
  render() {
    return (
      <ul>
        <li>Hello, Jan</li>
        <li class="nav-button">Today</li>
        <li class="nav-button">Groups</li>
        <li class="nav-button">Calendars</li>
      </ul>
    );
  }
}

export default Nav;
