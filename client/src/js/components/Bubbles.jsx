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
        {/*{ userBubbles }*/}
        <span className="bubble bubble-1"></span>
        <span className="bubble bubble-2">
          <img src="http://www.keatleyphoto.com/wp-content/uploads/2016/05/IMG_2589.jpg" alt="avatar" />
        </span>
        <span className="bubble bubble-3 bubble-active">
          <img src="https://s-media-cache-ak0.pinimg.com/originals/ff/13/a1/ff13a12a250b6e3cfef2ce26b61a755c.jpg" alt="avatar" />
          <span className="notification notification-active">3</span>
          <div className="bubble-name">Chat with Morgan</div>
        </span>
        <span className="bubble bubble-4"></span>
        <span className="bubble bubble-5"></span>
        <span className="bubble bubble-6 bubble-active">
          <img src="https://s-media-cache-ak0.pinimg.com/originals/d8/69/3a/d8693a767c0752ab495a1dc353f4c3c5.jpg" alt="avatar" />
          <span className="notification">2</span>
        </span>
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
