import React, {Component} from 'react';

class Nav extends Component {
  render() {
    return (
      <div className="nav">
        <span className="round-button search-button">
          <i className="fa fa-search" aria-hidden="true"></i>
        </span>
        <div className="user">
          <span className="greeting">Good morning, Harry</span>
          <span className="user-avatar">
            <img src="http://rivista-cdn.pittsburghmagazine.com/Best-of-the-Burgh-Blogs/The-412/May-2014/Want-to-Win-a-Free-Flight-to-San-Francisco/c117ecd8acbe616668fea6528829433a.jpg?ver=1400627273" />
          </span>
        </div>
      </div>
    );
  }
}

export default Nav;
