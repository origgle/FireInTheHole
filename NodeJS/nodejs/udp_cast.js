
exports.send = function(data) {
  var dgram = require("dgram");
  var socket = dgram.createSocket("udp4");
  socket.bind(function () {
    socket.setBroadcast(true);
  });
  var message = new Buffer(data);
  socket.send(message, 0, message.length, 8088, '255.255.255.255', function(err,bytes) {
    console.log('err => ' + err + ', bytes => ' + bytes);
    socket.close();
  });
}
