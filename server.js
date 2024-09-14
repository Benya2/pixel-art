const express = require('express');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);

app.use(express.static('public')); // Здесь твои файлы

io.on('connection', (socket) => {
  console.log('A user connected');
  
  socket.on('drawPixel', (data) => {
    io.emit('drawPixel', data); // Отправляем всем пользователям
  });

  socket.on('disconnect', () => {
    console.log('A user disconnected');
  });
});

http.listen(3000, () => {
  console.log('Listening on *:3000');
});
