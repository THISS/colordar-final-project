import React, {Component} from 'react';

class Bubbles extends Component {
  render() {
    return (
      <div className="bubbles">
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
        <span className="bubble bubble-6">
          <img src="https://s-media-cache-ak0.pinimg.com/originals/d8/69/3a/d8693a767c0752ab495a1dc353f4c3c5.jpg" alt="avatar" />
          <span className="notification">2</span>
        </span>
      </div>
    );
  }
}

export default Bubbles;
