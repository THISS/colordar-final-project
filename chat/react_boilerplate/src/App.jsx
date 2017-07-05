import React, {Component} from 'react';
import MessageList from './MessageList.jsx';
import Chatbar from './Chatbar.jsx';

class App extends Component {
  constructor() {
    super();
    this.state = {
      currentUser: {name: 'Harry'}, 
      messages: [],
      userCount: 0,
      socket: window.io('http://localhost:3001')
    }
    this.addMessage = this.addMessage.bind(this);
  }

  // addMessage(username, message, type) {
  //   const newMessage = {
  //     type: type,
  //     username: username,
  //     content: message
  //   }
    
  //   this.state.socket.emit(newMessage);
  // }
  addMessage(){
    var message = document.getElementById('message');
    console.log(message);
    this.state.socket.emit(message);
  }

  nameChange(username, type){
    const nameChange = {
      type: type,
      message: `${this.state.currentUser.name} changed their name to: ${username}`
    }
      this.setState({currentUser: {name: username}});

    this.state.socket.emit(nameChange);
  }


componentDidMount() {
  this.state.socket.emit("test");

  this.state.socket.on("addMessage", function (msg){
    const messages = this.state.messages.concat(msg)
    console.log(msg)
    this.setState({ messages });
  });
  //     switch(payload.type)
  //     {
  //       case 'userCount':
  //         this.setState({userCount: payload.userCount})
  //         break;
  //       case 'incomingMessage':
  //       case 'incomingNotification':
  //         {
  //           const message = payload;
  //           const messages = this.state.messages.concat(message)
  //           this.setState({ messages });
  //         }
  //         break;
  //       default:
  //         console.error(`Unknown message type ${payload.type}`);
  //       }
  //     };
  //   }
}
  render() {
    return (
      <div>
        <MessageList messages={this.state.messages} className='messages'/>
        <Chatbar name = {this.state.currentUser.name} addMessage={this.addMessage} nameChange={this.nameChange.bind(this)} className='input'/>
      </div>      
    )
  }
}

export default App;
