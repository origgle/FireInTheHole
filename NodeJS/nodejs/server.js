
var dataCallback = undefined;
var SerialPort = require("serialport").SerialPort
var serialPort = new SerialPort("/dev/ttyUSB0",{baudrate:115200},false);
serialPort.open(function (error) {
  if (error) {
    console.log('failed to open: '+error);
  } else {
    console.log('open /dev/ttyUSB0');
  }
});
serialPort.on('data', function(data) {
  if(dataCallback != undefined) {
    dataCallback(data);
  }
});

var writeSerial = function(data) {
  serialPort.write(data, function(err, results) {
    if(err != undefined) {
      console.log('err => ' + err);
    }
    //console.log('results => ' + results);
  });
}
var readSerial = function(resp) {
  var fullData = '';
  dataCallback = function(data) {
    //console.log('data => ' + data);
    fullData += data;
    if(fullData.indexOf('\n') >= 0) {
      resp(fullData.trim());
      fullData = '';
    }
  };
}

var readtty = function(req, resp) {
  resp.writeHeader(200,{'Content-Type':'text/plain'});
  if(req.url == '/favicon.ico') {
    return resp.end();
  } 
  //console.log("url => " + req.url);

  readSerial(function(data) {
    console.log('data => ' + data);
    resp.end(data);
  });
  writeSerial("Now is " + Date.now() + "\n");
};


var http = require('http');
var server = http.createServer(readtty);
server.listen(8080) ;
console.log("http server running on port 8080 ...");

var address = require('./utils.js').getAddress();
console.log('address => ' + address);

//setInterval(function() {
//  require('./udp_cast.js').send('http://' + address + ':8080');
//}, 1000);
require('./udp_recv.js').recv('http://' + address + ':8080');

