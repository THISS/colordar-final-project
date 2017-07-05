const express = require('express');
const SocketServer = require('ws').Server;
const uuid = require('node-uuid');
const WebSocket = require('ws');

const PORT = 3001;

const server = express()
  .use(express.static('public'))
  .listen(PORT, '0.0.0.0', 'localhost', () => console.log(`Listening on ${ PORT }`));

const wss = new SocketServer({ server });

wss.broadcast = function broadcast(outgoing) {
  wss.clients.forEach(function each(client) {
    if (client.readyState === WebSocket.OPEN) {
      client.send(outgoing);
    }
  });
};

wss.on('connection', (ws) => {
  wss.broadcast(JSON.stringify({
  type: 'userCount',
  userCount: wss.clients.size
}))



  ws.on('close', () => {
    wss.broadcast(JSON.stringify({
      type: 'userCount',
      userCount: wss.clients.size
    }))
    console.log('Client disconnected');
  });

  console.log('new connection');

  ws.on('message', (data) => {
    // Just like on the client, parse the incoming string
    const message = JSON.parse(data);

    let outgoing = {};

    outgoing.id= uuid.v1();
    switch (message.type){
      case 'postMessage':
      {
        outgoing.type = 'incomingMessage';
        outgoing.username=message.username;
        outgoing.content= message.content;
        break;
      } 

      case 'postNotification':
      { 
        outgoing.type = 'incomingNotification';
        outgoing.content = message.message;
        break;
      }
    }
    
    console.log(outgoing)
    wss.broadcast(JSON.stringify(outgoing));
  })
});
