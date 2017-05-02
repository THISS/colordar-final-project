import React, {Component} from 'react';

class Nav extends Component {
  render() {
    return (
      <nav className="navbar">
        <div className="navbar-left">
          <span className="round-buttons">
            <i className="fa fa-comments" aria-hidden="true"></i>
          </span>
          <span className="round-buttons">
            <i className="fa fa-search" aria-hidden="true"></i>
          </span>
        </div>
        <div className="navbar-right">
          <span>Good morning, Harry</span>
          <img className="profile-img" src="http://kingofwallpapers.com/jake-gyllenhaal/jake-gyllenhaal-003.jpg" />
        </div>
      </nav>
    );
  }
}

export default Nav;
