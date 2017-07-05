import React, { Component, PropTypes } from 'react';
import Message from './Message.jsx';

class MessageList extends Component {
  render() {
    return (
  <main>
    {
      this.props.messages.map((message) => {
        const { username, content, type, id } = message;
        return <Message key={id} username={username} content={content} type={type} />
      })
    }
  </main>
    )}
}

MessageList.propTypes = {
  messages: PropTypes.array.isRequired
}

export default MessageList;