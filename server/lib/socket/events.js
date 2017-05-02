module.exports = function(io) {
  // register the socket
  io.on('connection', (client) => {
    client.emit('outgoingtype', { hello: 'world'});
    client.on('incomingtype', (data) => {
      console.log('data:', data);
    });
    client.on('disconnect', () => {});
  });
  return {};
}