/**
 * Multiplayer shooter game
 * @author Justin Shields
 * @version 0.0.1
 * @dependences node.js
 *              express
 *              socket.io
 */

var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);


/**
 * app stuff
 */
app.get('/', function(req, res) {
  res.sendFile(__dirname + '/www/index.html'); 
});

// Gives webserver access to static directories
app.use(express.static('public'));

/**
 * Connection event
 */
io.on('connection', function(socket) {
  console.log('player connected - session id: '+ socket.id);
});

/**
 * Listen to port
 */
http.listen(8080, function(){
  console.log('listening on localhost:8080');
});
