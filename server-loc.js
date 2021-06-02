const express = require('express');
var http = require('http');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
  res.send('Hello World');
});

app.get('/locationinfo', (req, resp) => {
  //res.send('Hello World');
	console.log('Calling loctioninfo');
        var options = {
        host: 'c-04.private.us-east.link.satellite.cloud.ibm.com',
	port: 34290,
	path: '/locationdetail',
        }
        var data = '';
        var request = http.request(options, function (res) {

                res.on('data', function (chunk) {
                        data += chunk;
                });
                res.on('end', function () {
                        console.log(data);
                        resp.send(data);
                });
        });
        request.on('error', function (e) {
                console.log(e.message);            

        });
        //request.end();
        request.end();
});


app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
