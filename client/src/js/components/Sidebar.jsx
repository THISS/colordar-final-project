import React, {Component} from 'react';

class Sidebar extends Component {
  render() {
    const sideHeads = this.props.groupMembers.map((elm) => {
      return (
        <span key={ elm.id }className="user-avatar">
          <img src="https://s-media-cache-ak0.pinimg.com/736x/ea/3b/22/ea3b223f94bb8e484ddf57f5f925f0ff.jpg" />
        </span>
      );
    });

    return (
      <div className="sidebar">
        <div className="nav-height-container">
          <span className="round-button chat-button">
            <i className="fa fa-comments" aria-hidden="true"></i>
          </span>
        </div>
        <span className="round-button add-button">
          <i className="fa fa-plus" aria-hidden="true"></i>
        </span>
        <div className="sidebar-chat-container">

          { sideHeads }
{/*TODO: Need to make things clickable eg. below and the side heads and the top buttons */}
          <span className="more-users">. . .</span>
        </div>
      </div>
    );
  }
}

export default Sidebar;
