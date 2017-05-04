import React, { Component } from 'react';
import { connect } from 'react-redux';

class Bubbles extends Component {
  
  render() {
    const userBubbles = [];
    const { users } = this.props;

    for(let i = 1; i < 7; i++) {
      if ( users && users[i] ) {
        userBubbles[i] = (
          <span key={i}className={`bubble bubble-${i}`}>
            <img src={`${ users[i].image_url }`} alt="avatar" />
            <span className="notification notification-active">{ users[i].notificationCount }</span>
            <div className="bubble-name">Chat with { users[i].chatName }</div>
          </span>
        )
      }else {
        userBubbles[i] = (
          <span key={i}className={`bubble bubble-${i}`}>
          </span>
        )
      }
    } 
    return (
      <div className="bubbles">
        { userBubbles }
      </div>
    );
  }
}

function mapStateToProps({ groups }) {
  return {
    users: groups.users
  };
}

function mapDispatchToProps(dispatch) {
  return {
// import { bindActionCreators } from 'redux';
  };
}


export default connect(mapStateToProps)(Bubbles);