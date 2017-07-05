import React from 'react';

class Message extends React.Component {
  render() {
    switch(this.props.type) {
      case 'incomingNotification':
      return (
          <div className="message system">
            <span className="message-content">{this.props.content}</span>
          </div>
        )
      default:
        return (
          <div className="message">
            <span className="message-username">{this.props.username}</span>
            <span className="message-content">{this.props.content}</span>
          </div>
        )
    }
  }
}

Message.propTypes = {
  username: React.PropTypes.string,
  content: React.PropTypes.string.isRequired,
  type: React.PropTypes.oneOf(['incomingMessage', 'incomingNotification']).isRequired
}

export default Message;