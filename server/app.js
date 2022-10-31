const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const port = process.env.PORT || 3000;
const path = require('path');

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/login.html'));
});

app.get('/game', (req, res) => {
    // res.sendFile('./client/proj.html')
    res.sendFile(path.join(__dirname, '../client/game/game.html'));
  
  })

io.on('connection', (socket) => {
    console.log("conect")
    socket.on('chat message', msg => {
    io.emit('chat message', msg);
  });
});

http.listen(port, () => {
  console.log(`Socket.IO server running at http://localhost:${port}/`);
});
