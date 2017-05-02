// Socket io imports
import io from 'socket.io-client';

// Sockets ---- joy
export const socket = io.connect('http://localhost:8080');
socket.on('outgoingtype', (data) => {
  console.log(data);
});
socket.emit('incomingtype', {client: 'to server'});