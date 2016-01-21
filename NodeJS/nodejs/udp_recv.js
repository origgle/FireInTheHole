
exports.recv = function(data) {
  var dgram = require('dgram');
  var server = dgram.createSocket('udp4');

  server.on('listening', function () {
    var address = server.address();
    console.log('UDP Server listening on ' + address.address + ":" + address.port);
  });

  var replyMsg = new Buffer(data);
  server.on('message', function (message, remote) {
    console.log('rece => ' + remote.address + ':' + remote.port +' - ' + message);

    server.send(replyMsg, 0, replyMsg.length, remote.port, remote.address, function(err,bytes) {
      if(err != null) {
        console.log('err => ' + err + ', bytes => ' + bytes);
      }
      else {
        console.log('reply => ' + data);
      }
    });
  });
  server.bind(8088);
}
