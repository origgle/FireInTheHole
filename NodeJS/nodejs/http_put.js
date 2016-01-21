
var http = require('http');

var body = {
 	"id": "102301232",
 	"status" : "off"
};
var bodyString = JSON.stringify(body);

var options = {
  host: 'private-anon-25cfdf15f-fireinthehole.apiary-mock.com',
  port: 80,
  path: '/points',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Content-Length': bodyString.length
  }
};

var req=http.request(options,function(res){
  res.setEncoding('utf-8');

  var responseString = '';
  res.on('data', function(data) {
    responseString += data;
  });

  res.on('end', function() {
    //var resultObject = JSON.parse(responseString);
    //console.log('-----resBody-----', resultObject);
    console.log('-----resBody-----', responseString);
  });

  req.on('error', function(e) {
    console.log('-----error-------', e);
  });
});
req.write(bodyString);
req.end();
