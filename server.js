const { PeerServer } = require('peer');
const peerServer = PeerServer({
    port: process.env.PORT || 8081,
    path: '/'
});

peerServer.on('connection', (client) => {
    console.log('Client', client.id, 'connected');
})

peerServer.on('disconnect', (client) => {
    console.log('Client', client.id, 'disconnected');
})