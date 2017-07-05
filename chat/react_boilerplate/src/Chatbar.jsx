import React from 'react';

class Chatbar extends React.Component {
  constructor(props) {
    super(props);
  }

  handleChange(e){
    if (e.key === 'Enter') {
      const message = e.target.value;
      let type= 'postMessage';
      this.props.addMessage(this.props.name, message, type);
      e.target.value = "";
    }
  }

  handleUsernameChange(e) {
    let newUsername = e.target.value;
    let type= 'postNotification'
    this.props.nameChange(newUsername, type);
  }

  render() {
    return (
      <footer className="chatbar">
        <input className="chatbar-username" placeholder="Your Name (Optional)" defaultValue={this.props.name} onBlur={this.handleUsernameChange.bind(this)}/>
        <input className="chatbar-message" placeholder="Type a message and hit ENTER" onKeyUp={this.handleChange.bind(this)}/>
      </footer>
    )}
  }

export default Chatbar;